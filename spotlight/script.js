addEventListener('mousemove', (e) => {
    // console.log(e.clientX,e.clientY);
    document.body.style.setProperty("--x", e.clientX + 'px');
    document.body.style.setProperty("--y", e.clientY + 'px');
    
})

const h1 = document.querySelector('.welcome');
const choose = document.querySelector('.choose');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdedfghijklmnopqrstuvwxyz";
const text = h1.innerText;
const chooseText = choose.innerText;
let interval = null;

function effect(e) {
e.addEventListener('mouseenter', () => {
    interval = setInterval(() => {
        const arr = text.split('').map((c, i) => {
            return characters.split('')[Math.floor(Math.random() * 53)]
        }).join('');
        e.innerText = arr;
        

    },50);
})
};

function clearEffect(e) {
e.addEventListener('mouseleave', () => {
    clearInterval(interval);
    h1.innerText = text;
    choose.innerText = chooseText;
});
}

effect(h1);
effect(choose);
clearEffect(h1);
clearEffect(choose);

const money = document.querySelector('.money');
const moneyVideo = document.querySelector('.moneyVideo');
const fameVideo = document.querySelector('.fameVideo');
const fame = document.querySelector('.fame');

moneyVideo.classList.toggle('hide');
fameVideo.classList.toggle('hide');

money.addEventListener('click', () => {
    moneyVideo.classList.remove('hide');
    moneyVideo.play();

    fameVideo.classList.add('hide');
    fameVideo.pause();
    fameVideo.currentTime = 0;
})

fame.addEventListener('click', () => {
    fameVideo.classList.remove('hide');
    fameVideo.play();

    moneyVideo.classList.add('hide');
    moneyVideo.pause();
    moneyVideo.currentTime = 0;
})




