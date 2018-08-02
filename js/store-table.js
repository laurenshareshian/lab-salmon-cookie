/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

(function(module){
    let stores = module.stores;
    console.log(stores);


    let render = function(stores){
        // reference the table
        let table = document.getElementById('tbody');

        // reference the template
        let template = document.getElementById('store-template').content;

        // loop through each store and create a row for it
        for(let j = 0; j < stores.length; j++){
            let store = stores[j];
            let dom = template.cloneNode(true);
            //add store location (column 0)
            let td = dom.querySelector('td');
            td.textContent = store.location;
            table.appendChild(td);
            let cookies;
            let store_total = 0;
            // add store hours (columns 1 through 13)
            for(let i = 0; i < store['hours'].length; i++)
            {
                dom = template.cloneNode(true);
                td = dom.querySelector('td');
                cookies = store['hours'][i];
                td.textContent = cookies;
                table.appendChild(td);
                store_total += cookies;
            }
            // calculate store total and make it column 14
            dom = template.cloneNode(true);
            td = dom.querySelector('td');
            table.appendChild(td);
            td.textContent = store_total;
            table.appendChild(dom);
        }
    };
    render(stores);

    // know the data has changed
    function updateStoreList() {
        // loop through and find any new fruit and render them
        document.getElementById('table').innerHTML = '';
        render(stores);
        console.log('hi');
    }

    module.updateStoreList = updateStoreList;

})(window.module = window.module || {});
