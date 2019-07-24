import { MatchReader, MatchData } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();
const matches = reader.data;

const ArsenalWins = matches.reduce(
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

console.log(ArsenalWins);
