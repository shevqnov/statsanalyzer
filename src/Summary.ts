export interface Analyzer<T> {
  run(data: T): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary<T> {
  constructor(
    private analyzer: Analyzer<T>,
    private outputTarger: OutputTarget
  ) {}
  buildAndPrintReport(data: T) {
    this.outputTarger.print(this.analyzer.run(data));
  }
}
