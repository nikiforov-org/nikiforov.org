const buttons = document.querySelectorAll(`.contacts-button`);

buttons.forEach(button => {
    button.addEventListener(`click`, e => {
        e.preventDefault();
        const action = button.id;
        switch (action) {
            case `telegram`:
                window.location.href = `https://t.me/evgeniy_nikiforov`;
                break;
            case `whatsapp`:
                window.location.href = `https://wa.me/79859071494`;
                break;
            case `email`:
                window.location.href = `mailto:e@${window.location.hostname}`;
                break;    
            default:
                break;
        }
    })
});

// document.body.addEventListener(`contextmenu`, e => {
//     e.preventDefault();
// });
const makeFetch = () => {
    fetch('data.json')
}

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register(`/sw.js`).then(registration => {
                    console.log(`[Service Worker]: Registration successful`);
                    console.log(`Registration scope: ${ registration.scope }`);
                    // Listen Service Worker Messages
                    navigator.serviceWorker.addEventListener(`message`, e => actions(e.data));

                    /**
                     * Init application after successful registration in proper scope
                     */
                    makeFetch();

                }, error => {
                    console.warn(`[Service Worker]: Registration failed`);
                    console.error(error);
                });
            }
