

let main = document.querySelector('#main');

let h1 = document.createElement('h3');
h1.textContent = 'Charge the Battery'

let pbar = document.createElement('div');
pbar.id = 'pbar';
// pbar.style.border = '2px solid #fff';
pbar.style.height = '150px';
pbar.style.width = '150px';
pbar.style.borderRadius = '50%';


let charge = 0;
let intervalId = null;

let pbarText = document.createElement('h3');
pbarText.id = 'pbarText';
pbarText.innerHTML = `${charge}%`;

pbar.appendChild(pbarText);



let chargeStation = document.createElement('div');
chargeStation.id = 'chargeStation';
// chargeStation.style.border = '2px solid #fff';
chargeStation.style.height = 'auto';
chargeStation.style.width = '100%';
chargeStation.style.borderRadius = '6px';

let chargeBtn = document.createElement('button');
chargeBtn.className = 'chargeBtn';
chargeBtn.textContent = 'Charge';

let dischargeBtn = document.createElement('button');
dischargeBtn.className = 'dischargeBtn';
dischargeBtn.textContent = 'Discharge';

let superchargeBtn = document.createElement('button');
superchargeBtn.className = 'superchargeBtn';
superchargeBtn.innerText = 'Super Charge';


let reset = document.createElement('button');
reset.className = 'reset';
reset.textContent = 'Reset';

chargeStation.appendChild(chargeBtn);
chargeStation.appendChild(dischargeBtn);
chargeStation.appendChild(superchargeBtn);
chargeStation.appendChild(reset);

let updateDisplay = function() {
    pbarText.innerHTML = `${charge}%`;
    pbar.style.background = `radial-gradient(circle, #111 60%, transparent 61%),conic-gradient(#0f0 ${charge}%, #333 ${charge}% 100%)`;
}

function cells() {
    chargeBtn.addEventListener('click', () => {
        if(charge < 100 ) {
        charge++;
        updateDisplay();
        };
})
}

cells();

function discharge() {
    dischargeBtn.addEventListener('click', () => {
        if(charge > 0) {
        charge--;
        updateDisplay();
        };
    })
};
discharge();


function superCharge() {
    superchargeBtn.addEventListener('click', () => {

        if(intervalId) clearInterval(intervalId);
        superchargeBtn.disabled = true;
            superchargeBtn.textContent = 'Charging...';

         intervalId = setInterval(() => {
            if(charge < 100) {
                charge++;
                updateDisplay();
            } else {
                clearInterval(intervalId);
                superchargeBtn.disabled = false;
                superchargeBtn.textContent = 'Super Charge';
            }
        },30);
    });
}
superCharge();

function resetFn() {
    reset.addEventListener('click', () => {
        if(intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        charge = 0;
       updateDisplay();

       superchargeBtn.disabled = false;
       superchargeBtn.textContent = 'Super Charge';
    })
};

resetFn();


main.appendChild(h1);
main.appendChild(pbar);
main.appendChild(chargeStation);
