'use strict';

(function(module){
    let stores = module.stores;

    let renderTableFooter = function(){

        // Create an empty object called columnTotals that will store each column's total
        let columnTotals = {};
        for(let j = 0; j < 14; j++){
            columnTotals[j] = 0;
        }

        // loop through each row (store) and update your column tally
        for(let j = 0; j < stores.length; j++){
            let store = stores[j];
            // create hourly totals
            for(let i = 0; i < store['hours'].length; i++)
            {
                let cookies = store['hours'][i];
                columnTotals[i] += cookies;
            }
        }

        // populate the last row with hourly totals
        let table = document.getElementById('tfoot');

        // reference the template
        let template = document.getElementById('store-template').content;

        // create an entry for the title of the row (column 0)
        let dom = template.cloneNode(true);
        let td = dom.querySelector('td');
        td.textContent = 'Hourly Totals for All Locations';
        table.appendChild(td);

        // keep a variable for the total sum of all the rows and columns
        let all_store_all_hours_total = 0;

        // fill in hourly totals for columns 1-13
        for(let i = 0; i < 14; i++)
        {
            dom = template.cloneNode(true);
            td = dom.querySelector('td');
            let cookies = columnTotals[i];
            td.textContent = cookies;
            table.appendChild(td);
            // sum all of the hourly totals
            all_store_all_hours_total += cookies;
        }
        // populate the bottom right table entry with the total
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        table.appendChild(td);
        td.textContent = all_store_all_hours_total;
        table.appendChild(dom);
    };

    // create the footer row when the page is loaded
    renderTableFooter();

    // remove the old footer and replace it with a new footer when a new store is added
    function updateFooter() {
        // reference the footer
        var node = document.getElementById('tfoot');
        // delete the old footer
        while(node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
        // add a new footer
        renderTableFooter(stores);
    }

    module.updateFooter = updateFooter;

})(window.module = window.module || {});