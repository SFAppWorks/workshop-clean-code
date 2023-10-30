let reports = [];

function generateReport(data, format) {
    switch (format) {
        case 'JSON':
            const jsonReport = JSON.stringify(data);
            reports.push(jsonReport);
            console.log(`Generated JSON Report: ${jsonReport}`);
            break;

        case 'XML':
            let xmlReport = '<report>\n';
            for (const [key, value] of Object.entries(data)) {
                xmlReport += `  <${key}>${value}</${key}>\n`;
            }
            xmlReport += '</report>';
            reports.push(xmlReport);
            console.log(`Generated XML Report: ${xmlReport}`);
            break;

        case 'CSV':
            const keys = Object.keys(data).join(',');
            const values = Object.values(data).join(',');
            const csvReport = `${keys}\n${values}`;
            reports.push(csvReport);
            console.log(`Generated CSV Report: ${csvReport}`);
            break;

        case 'HTML':
            let htmlReport = '<html><body><table>\n';
            for (const [key, value] of Object.entries(data)) {
                htmlReport += `  <tr><td>${key}</td><td>${value}</td></tr>\n`;
            }
            htmlReport += '</table></body></html>';
            reports.push(htmlReport);
            console.log(`Generated HTML Report: ${htmlReport}`);
            break;

        // If we need another report type, we have to add another case here.
        default:
            console.log('Unsupported report format');
    }
}

// Usage
generateReport({name: 'John', age: 30}, 'JSON');
generateReport({product: 'Apple', price: 1.2}, 'XML');
generateReport({name: 'John', age: 30}, 'CSV');
generateReport({product: 'Apple', price: 1.2}, 'HTML');