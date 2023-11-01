// Report interface
class Report {
    generate(data) {
        throw new Error('This method should be overridden');
    }
}

// PDF Report
class PDFReport extends Report {
    generate(data) {
        console.log(`Generating PDF report with data: ${data}`);
    }
}

// HTML Report
class HTMLReport extends Report {
    generate(data) {
        console.log(`Generating HTML report with data: ${data}`);
    }
}

// Report Factory
class ReportFactory {
    static createReport(type) {
        if (type === 'PDF') {
            return new PDFReport();
        }
        if (type === 'HTML') {
            return new HTMLReport();
        }
        throw new Error('Invalid report type');
    }
}

// Usage
const pdfReport = ReportFactory.createReport('PDF');
pdfReport.generate('Some PDF data');

const htmlReport = ReportFactory.createReport('HTML');
htmlReport.generate('Some HTML data');