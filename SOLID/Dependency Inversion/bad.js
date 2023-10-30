class PDFPrinter {
    print(data) {
        console.log(`Printing PDF with data: ${data}`);
    }
}

class ReportGenerator {
    constructor() {
        this.pdfPrinter = new PDFPrinter();
    }

    generateReport(data) {
        console.log(`Generating report with data: ${data}`);
        this.pdfPrinter.print(data);
    }
}

const reportGenerator = new ReportGenerator();
reportGenerator.generateReport('Some data');