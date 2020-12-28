// 1. écouter une <div> parent
const clock = document.querySelector('.clock');

// 1.1. récupérer la date actuel, puis intégrer les heures, minutes et secondes dans une template html
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;

    clock.innerHTML = html;
};

// 1.2. puis appeller la fonction toute les secondes avec un setInterval
setInterval(tick, 1000);