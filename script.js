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

document.body.addEventListener(`contextmenu`, e => {
    e.preventDefault();
})