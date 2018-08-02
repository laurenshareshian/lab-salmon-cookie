/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

(function(module){
    // initialize hourly totals dict
    let stores = module.stores;
    let lastStores = stores.slice();

    let renderTableFooter = function(){

        let hourly_totals_dict = {};
        for(let j = 0; j < 14; j++){
            hourly_totals_dict[j] = 0;
        }

        // loop through each store
        for(let j = 0; j < stores.length; j++){
            let store = stores[j];
            let cookies;
            let store_total = 0;
            // create hourly totals
            for(let i = 0; i < store['hours'].length; i++)
            {
                cookies = store['hours'][i];
                store_total += cookies;
                hourly_totals_dict[i] += cookies;
            }
        }

        // fill in last row with hourly totals
        let table = document.getElementById('tfoot');
        // reference the template
        let template = document.getElementById('store-template').content;
        // create an entry for the title of the row (column 0)
        let all_store_total = 0;
        let dom = template.cloneNode(true);
        let td = dom.querySelector('td');
        td.textContent = 'Hourly Totals for All Locations';
        table.appendChild(td);
        // fill in hourly totals for columns 1-13
        for(let i = 0; i < 14; i++)
        {
            dom = template.cloneNode(true);
            td = dom.querySelector('td');
            let cookies = hourly_totals_dict[i];
            td.textContent = cookies;
            all_store_total += cookies;
            table.appendChild(td);
        }
        // sum all of the hourly totals
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        table.appendChild(td);
        td.textContent = all_store_total;
        table.appendChild(dom);
    };

    renderTableFooter();

    function updateFooter() {
        console.log('footer', stores);
        var node = document.getElementById('tfoot');
        // for(let i = 0; i < list.children.length; i++){
        //     console.log(i, list.children[i]);
        // }
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
        //list.removeChild(list.childNodes[1]);
        renderTableFooter(stores);
    }

    // expose (export) a function to let this component
    // know the data has changed
    // function updateFooter() {
    //     console.log('footer', stores);
    //     // loop through and find any new fruit and render them
    //     for(let i = 0; i < stores.length; i++) {
    //         let store = stores[i];
    //         if(lastStores.includes(store)) continue;
    //         renderTableFooter(stores);
    //     }

    //     // update the "last" know fruits we saw
    //     console.log('rendered table body');
    //     lastStores = stores.slice();

    // }

    module.updateFooter = updateFooter;

})(window.module = window.module || {});