import { HtmlReport } from "./reporters/HtmlReport";
import { Summary } from "./Summary";
import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalAnalysis";
import { ConsoleReport } from "./reporters/ConsoleReport";

const csvFileReader = new CSVFileReader("football.csv");
const reader = new MatchReader(csvFileReader);
reader.load();
const matches = reader.matches;

const winsAnalysis = new WinsAnalysis("Arsenal");
const goalAnalysis = new AverageGoalsAnalysis();

const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport("arsenalWins.html");

const winsSummary = new Summary<MatchData[]>(winsAnalysis, htmlReport);
const goalsSummary = new Summary<MatchData[]>(goalAnalysis, consoleReport);

goalsSummary.buildAndPrintReport(matches);
winsSummary.buildAndPrintReport(matches);
