import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import crypto from 'node:crypto';
import { validateTelegramInitData } from './telegram';
import { MockSportsProvider } from './providers';

const app = Fastify({ logger: true });
const db = new PrismaClient();
const sports = new MockSportsProvider();

const ok = (data: any) => ({ success: true, data });
const fail = (code: string, message: string) => ({ success: false, error: { code, message } });

app.get('/health', async () => ok({ status: 'ok', timestamp: new Date().toISOString() }));
app.get('/matches', async () => ok(await sports.getMatches()));
app.get('/matches/live', async () => ok(await sports.getLiveMatches()));
app.get('/matches/:id', async (req: any) => {
  const m = await sports.getMatch(req.params.id);
  return m ? ok(m) : fail('NOT_FOUND', 'Match not found');
});

app.post('/auth/telegram', async (req: any, reply) => {
  let body = req.body as {
    initData?: string;
    telegramId?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    referralCode?: string;
  };

  if (process.env.MOCK_MODE !== 'true') {
    if (!body.initData || !validateTelegramInitData(body.initData, process.env.TELEGRAM_BOT_TOKEN || '')) {
      return reply.code(401).send(fail('UNAUTHORIZED', 'Invalid Telegram initData'));
    }
    const p = new URLSearchParams(body.initData || '');
    const tg = JSON.parse(p.get('user') || '{}');
    body = {
      ...body,
      telegramId: String(tg.id),
      username: tg.username,
      firstName: tg.first_name,
      lastName: tg.last_name
    };
  }

  if (!body.telegramId || !body.firstName) {
    return reply.code(400).send(fail('UNAUTHORIZED', 'Telegram identity is required'));
  }

  let u = await db.user.findUnique({ where: { telegramId: body.telegramId } });
  if (!u) {
    const ref = body.referralCode ? await db.user.findUnique({ where: { referralCode: body.referralCode } }) : null;
    u = await db.user.create({
      data: {
        telegramId: body.telegramId,
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        referralCode: 'MAJIX' + crypto.randomBytes(4).toString('hex').toUpperCase(),
        referredById: ref?.id,
        wallet: { create: {} }
      }
    });
  }

  const token = jwt.sign({ sub: u.id, role: u.role }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
  return ok({ token, user: u });
});

async function bootstrap() {
  await app.register(cors, { origin: true });
  await app.register(helmet);
  await app.register(rateLimit, { max: 120, timeWindow: '1 minute' });

  const port = Number(process.env.PORT) || 3000;
  await app.listen({ port, host: '0.0.0.0' });
  console.log(`MAJIX API server running on port ${port}`);
}

bootstrap().catch(err => {
  console.error(err);
  process.exit(1);
});
