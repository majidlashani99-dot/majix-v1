import {describe,it,expect} from 'vitest'; import {validateTelegramInitData} from './telegram';
describe('telegram auth',()=>{it('rejects malformed init data',()=>expect(validateTelegramInitData('foo=bar','token')).toBe(false));});
