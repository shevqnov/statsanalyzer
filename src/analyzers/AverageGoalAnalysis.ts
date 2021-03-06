import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";

export class AverageGoalsAnalysis implements Analyzer<MatchData[]> {
  run(data: MatchData[]): string {
    const countOfGoals = data.reduce(
      (count: number, match: MatchData): number => {
        return count + match[4] + match[3];
      },
      0
    );

    return `Average of goals is ${(countOfGoals / data.length).toFixed(2)}`;
  }
}
