class Report {
    constructor(data) {
        this.data = data;
    }
}

class ReportGenerator {
    constructor() {
        this.reports = [];
    }

    generateReport(report, format) {
        if (format === 'JSON') {
            const jsonReport = JSON.stringify(report.data);
            this.reports.push(jsonReport);
            console.log(`Generated JSON Report: ${jsonReport}`);
        } else if (format === 'XML') {
            let xmlReport = '<report>\n';
            for (const [key, value] of Object.entries(report.data)) {
                xmlReport += `  <${key}>${value}</${key}>\n`;
            }
            xmlReport += '</report>';
            this.reports.push(xmlReport);
            console.log(`Generated XML Report: ${xmlReport}`);
        } else if (format === 'CSV') {
            const keys = Object.keys(report.data).join(',');
            const values = Object.values(report.data).join(',');
            const csvReport = `${keys}\n${values}`;
            this.reports.push(csvReport);
            console.log(`Generated CSV Report: ${csvReport}`);
        }
        // If we need another report type, we'll have to add another "else if" block here.
    }
}

const report1 = new Report({name: 'John', age: 30});
const report2 = new Report({product: 'Apple', price: 1.2});

const generator = new ReportGenerator();
generator.generateReport(report1, 'JSON');
generator.generateReport(report2, 'XML');
generator.generateReport(report2, 'CSV');
