import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchReader";

export class WinsAnalysis {
  run(data: MatchData[]): string {
    const countOfWins = data.reduce(
      (count: number, match: MatchData): number => {
        if (
          (match[1] === "Arsenal" && match[5] === MatchResult.HomeWin) ||
          (match[2] === "Arsenal" && match[5] === MatchResult.AwayWin)
        ) {
          return count + 1;
        }
        return count;
      },
      0
    );
    return `Arsenal wins ${countOfWins}`;
  }
}

export class AverageGoalsAnalysis {
  run(data: MatchData[]): string {
    const countOfGoals = data.reduce(
      (count: number, match: MatchData): number => {
        return count + match[4] + match[3];
      },
      0
    );

    return `Average of goals is ${countOfGoals / data.length}`;
  }
}
