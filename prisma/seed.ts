import { PrismaClient, TaskType } from '@prisma/client';
const db = new PrismaClient();
async function main(){
 await db.task.createMany({data:[{title:'Watch & Earn',description:'Watch a sponsored video to earn MJX',type:TaskType.WATCH_VIDEO,reward:250,videoUrl:'https://example.com/video'},{title:'Daily check-in',description:'Open MAJIX every day',type:TaskType.DAILY_TASK,reward:150},{title:'Follow MAJIX Telegram',description:'Follow our official channel',type:TaskType.FOLLOW_TELEGRAM,reward:300}]});
 console.log('Seeded MAJIX demo data');
} main().finally(()=>db.$disconnect());
