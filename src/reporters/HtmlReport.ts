import { writeFileSync } from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  constructor(private filename: string) {}
  print(report: string): void {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
        </head>
        <body>
          <p> ${report} </p>
        </body>
      </html>
    `;
    writeFileSync(`./htmlReports/${this.filename}`, htmlTemplate);
  }
}
