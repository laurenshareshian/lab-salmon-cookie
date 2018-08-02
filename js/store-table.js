'use strict';

(function(module){
    let stores = module.stores;

    // make a shallow copy of stores
    let lastStores = stores.slice();

    // helper stuff for template
    let toDOM = module.toDOM;
    let html = module.html;

    // reference the ul
    let ul = document.getElementById('tbody');

    // create a function we can call with data, that returns DOM we can append into the document
    let render = function(store) {
        let rowString = '<tr> <td>' + store.location + '</td>';

        // create a counter variable for the total cookies for that store
        let store_total = 0;
        let cookies = 0;
        for(let i = 0; i < 14; i++){
            cookies = store.hours[i];
            rowString += '<td>' + cookies + '</td>';
            store_total += cookies;
        }
        rowString += '<td>' + store_total + '</td> </tr>';

        return toDOM(html`${rowString}`);
    };

    // shared functionality between initial load and
    // subsequent update calls
    function renderStore(store) {
        // make a fruit template instance
        let dom = render(store);
        // append it to the ul
        ul.appendChild(dom);
    }

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
