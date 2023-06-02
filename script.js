const buttons = document.querySelectorAll(`.contacts-button`);

buttons.forEach(button => {
    button.addEventListener(`click`, e => {
        e.preventDefault();
        const action = button.getAttribute(`title`);
        switch (action) {
            case `Telegram`:
                window.location.href = `https://t.me/evgeniy_nikiforov`;
                break;
            case `WhatsApp`:
                window.location.href = `https://wa.me/79859071494`;
                break;
            case `Email`:
                window.location.href = `mailto:e@${window.location.hostname}`;
                break;    
            default:
                break;
        }
    })
});