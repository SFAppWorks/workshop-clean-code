// Printer interface
class Printer {
    print(data) {
        throw new Error('This method should be overridden');
    }
}

// Lower-level class
class PDFPrinter extends Printer {
    print(data) {
        console.log(`Printing PDF with data: ${data}`);
    }
}

// Higher-level class
class ReportGenerator {
    constructor(printer) {
        this.printer = printer;
    }

    generateReport(data) {
        console.log(`Generating report with data: ${data}`);
        this.printer.print(data);
    }
}

const pdfPrinter = new PDFPrinter();
const reportGenerator = new ReportGenerator(pdfPrinter);
reportGenerator.generateReport('Some data');