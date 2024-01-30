import * as wjGrid from '@grapecity/wijmo.grid';
import '@grapecity/wijmo.styles/wijmo.css';

function init() {

    const customers = ['ABC','DEF','GHI','XYZ'];
    const company = ['acla bejm','trescot','bon app','utydasb sd'];
    const city = ['berlin','london','moscow','mexico'];

    const data = []; 
    for (var i = 0; i < 20; i++) {
        data.push({
            customer: customers[i % customers.length],
            company: company[i % company.length],
            contact: Math.floor(Math.random() * 10000),
            city: city[i % city.length]
        });
    }

    const grid = new wjGrid.FlexGrid("#wijmo-host", {
        itemsSource : data,
        // ... other properties
        
        // add this property to specify visibility of headers
        headersVisibility: wjGrid.HeadersVisibility.Column
    });
}

init();