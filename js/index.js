'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    // reference the ul
    var ul = document.getElementById('stores');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(store) {
        return toDOM(html`        
            <li>
                <h2>${store.max_cust}</h2>
                <span class="color-name" 
                    style="background: ${store.min_cust}">
                    ${store.avg_cookies}
                </span>
            </li>
        `);
    };

    // loop each store
    var store;
    var locations = Object.keys(stores);
    for(var j = 0; j < locations.length; j++){
        store = stores[locations[j]];
        // make a store template instance
        var dom = render(store);

        // append it to the ul
        ul.appendChild(dom);
    }

})(window.module = window.module || {});