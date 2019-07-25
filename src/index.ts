import { HtmlReport } from "./reporters/HtmlReport";
import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalAnalysis";
import { ConsoleReport } from "./reporters/ConsoleReport";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const winsSummary = new Summary<MatchData[]>(
  new WinsAnalysis("Arsenal"),
  new HtmlReport("arsenalWins.html")
);
const goalsSummary = new Summary<MatchData[]>(
  new AverageGoalsAnalysis(),
  new ConsoleReport()
);

goalsSummary.buildAndPrintReport(matchReader.matches);
winsSummary.buildAndPrintReport(matchReader.matches);
