export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  kickoff: string;
  status: 'UPCOMING' | 'LIVE' | 'FINISHED';
  odds: { home: number; draw: number; away: number };
}

export interface SportsDataProvider {
  getMatches(): Promise<Match[]>;
  getMatch(id: string): Promise<Match | null>;
  getLiveMatches(): Promise<Match[]>;
}

export class MockSportsProvider implements SportsDataProvider {
  async getMatches(): Promise<Match[]> {
    return [
      {
        id: 'demo-1',
        homeTeam: 'Real Madrid',
        awayTeam: 'Manchester City',
        league: 'UEFA Champions League',
        kickoff: new Date(Date.now() + 86400000).toISOString(),
        status: 'UPCOMING' as const,
        odds: { home: 1.85, draw: 3, away: 4.2 }
      }
    ];
  }
  async getMatch(id: string): Promise<Match | null> {
    return (await this.getMatches()).find(x => x.id === id) || null;
  }
  async getLiveMatches(): Promise<Match[]> {
    return [];
  }
}
