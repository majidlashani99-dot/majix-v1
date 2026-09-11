export type Match = {id:string;homeTeam:string;awayTeam:string;league:string;kickoff:string;status:'UPCOMING'|'LIVE'|'FINISHED';odds?:Record<string,number>};
export interface SportsDataProvider { getMatches():Promise<Match[]>; getMatch(id:string):Promise<Match|null>; getLiveMatches():Promise<Match[]>; }
export interface OddsProvider { getOdds(matchId:string):Promise<Record<string,number>>; }
export interface MarketDataProvider { getPrice(asset:string):Promise<number>; getCandles(asset:string,timeframe:string):Promise<Array<{time:number,open:number,high:number,low:number,close:number}>>; }
export class MockSportsProvider implements SportsDataProvider { async getMatches(){return [{id:'demo-1',homeTeam:'Real Madrid',awayTeam:'Manchester City',league:'UEFA Champions League',kickoff:new Date(Date.now()+86400000).toISOString(),status:'UPCOMING',odds:{home:1.85,draw:3,away:4.2}}];} async getMatch(id:string){return (await this.getMatches()).find(x=>x.id===id)||null;} async getLiveMatches(){return [];} }
export class MockOddsProvider implements OddsProvider { async getOdds(){return {home:1.85,draw:3,away:4.2};} }
