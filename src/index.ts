import { ConsoleReport } from "./ConsoleReport";
import { WinsAnalysis, AverageGoalsAnalysis } from "./MatchAnalyzers";
import { Summary } from "./Summary";
import { CSVFileReader } from "./CSVFileReader";
import { MatchReader, MatchData } from "./MatchReader";

const csvFileReader = new CSVFileReader("football.csv");
const reader = new MatchReader(csvFileReader);
reader.load();
const matches = reader.matches;

const winsAnalysis = new WinsAnalysis();
const goalAnalysis = new AverageGoalsAnalysis();
const consoleReport = new ConsoleReport();
const winsSummary = new Summary<MatchData[]>(winsAnalysis, consoleReport);
const goalsSummary = new Summary<MatchData[]>(goalAnalysis, consoleReport);

goalsSummary.buildAndPrintReport(matches);
winsSummary.buildAndPrintReport(matches);
