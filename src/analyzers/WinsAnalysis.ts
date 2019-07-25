import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis {
  constructor(public team: string) {}
  run(data: MatchData[]): string {
    const countOfWins = data.reduce(
      (count: number, match: MatchData): number => {
        if (
          (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
          (match[2] === this.team && match[5] === MatchResult.AwayWin)
        ) {
          return count + 1;
        }
        return count;
      },
      0
    );
    return `${this.team} wins ${countOfWins} times`;
  }
}
