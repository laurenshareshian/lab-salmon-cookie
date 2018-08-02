/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

(function(module){
    let form = document.getElementById('add-store');
    let error = document.getElementById('form-error');

    function initStoreForm(onStoreAdded) {

        form.addEventListener('submit', function(event) {
            // #1 Prevent default posting of the form
            event.preventDefault();

            // #2 Gather up data
            let elements = form.elements;

            //add this user's new store
            let store = {
                location: elements.location.value,
                max_cust: elements.max.value,
                min_cust: elements.min.value,
                avg_cookies: elements.avg.value,
                key: elements.location.value
            };
            console.log('store in store-form:', store);

            // give the store hourly cookie values
            let people = 0;
            let cookies = 0;
            store['hours'] = [];
            for(let i = 0; i < 14; i++){
                people = getRandInteger(store.min_cust, store.max_cust);
                cookies = people * store.avg_cookies;
                store['hours'].push(Math.round(cookies));
            }
            console.log('store + hours in store-form:', store);

            // #3 Call action
            try {
                error.textContent = '';
                onStoreAdded(store);
                // #4 Process success or failure
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // #4 Process success or failure
                error.textContent = err.message;
            }
        });
    }

    module.initStoreForm = initStoreForm;

})(window.module = window.module || {});

