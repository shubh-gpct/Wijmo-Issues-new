import * as wjGrid from '@grapecity/wijmo.grid';
import '@grapecity/wijmo.styles/wijmo.css';

function init() {

    const customers = ['ABC','DEF','GHI','XYZ'];
    const company = ['acla bejm','tretger','bon app','utydas sds'];
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
    });

    // grid.formatItem.addHandler((grid, e) => {
    //     if(e.panel == grid.cells) {
    //         e.cell.addEventListener("mouseenter", () => {
    //             console.log(e.row)
    //             grid.rows[e.row].cssClass = "row-hover";
    //         });
    //         e.cell.addEventListener("mouseleave", () => {
    //             grid.rows[e.row].cssClass = "";
    //         })
    //     }
    // });

    let lastRow = null;
    grid.hostElement.addEventListener("mouseover", (e) => {
        const target = grid.hitTest(e);
        if(target.cellType == wjGrid.CellType.Cell) {
            if(lastRow) {
                lastRow.cssClass = "";
            }
            lastRow = grid.rows[target.row];
            lastRow.cssClass = "row-hover";
        }
    });
    grid.hostElement.addEventListener("mouseleave", () => {
        if(lastRow) {
            lastRow.cssClass = "";
            lastRow = null;
        }
    })
}

init();