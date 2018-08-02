'use strict';

(function(module){
    let stores = module.stores;
    // make a shallow copy of stores
    let lastStores = stores.slice();

    // populate the table body with the store's hourly info
    let renderStore = function(store){
        // reference the table
        let table = document.getElementById('tbody');

        // reference the template
        let template = document.getElementById('store-template').content;

        // loop through each store and create a row for it;
        let dom = template.cloneNode(true);

        //add store location (column 0)
        let td = dom.querySelector('td');
        td.textContent = store.location;
        table.appendChild(td);

        // create a counter variable for the total cookies for that store
        let store_total = 0;

        // populate hourly cookie data in table (columns 1 through 13)
        for(let i = 0; i < store['hours'].length; i++)
        {
            dom = template.cloneNode(true);
            td = dom.querySelector('td');
            let cookies = store['hours'][i];
            td.textContent = cookies;
            table.appendChild(td);
            // keep a running tally of all the store's cookies
            store_total += cookies;
        }
        // put the store total in column 14
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        table.appendChild(td);
        td.textContent = store_total;
        table.appendChild(dom);
    };

    // populate the table with all the stores' info when the page opens
    for(let j = 0; j < stores.length; j++){
        renderStore(stores[j]);
    }

    // expose (export) a function to let this component know the data has changed
    function updateStoreList() {
        // loop through and find any new stores and render them
        for(let i = 0; i < stores.length; i++) {
            let store = stores[i];
            if(lastStores.includes(store)) continue;
            renderStore(store);
        }

        // update the "last" known stores we saw
        console.log('rendered table body');
        lastStores = stores.slice();
    }

    module.updateStoreList = updateStoreList;

})(window.module = window.module || {});
