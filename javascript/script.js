let plantSite = document.getElementsByClassName('plant-site');
let modal = document.getElementById("vegetable-modal");
let span = document.getElementById("close-button");

function addPumpkin(element){
    let pumpkinTxt = document.createElement('p');
    pumpkinTxt.textContent = 'Abóbora';
    pumpkinTxt.classList.add('vegetable-txt')
    let pumpkinImg = document.createElement('img')
    pumpkinImg.setAttribute('src', '/images/pumpkin-fruit-svgrepo-com.svg')
    pumpkinImg.classList.add('vegetable')
    element.appendChild(pumpkinTxt);
    element.appendChild(pumpkinImg);
}

function addCabbage(element){
    let cabbageTxt = document.createElement('p');
    cabbageTxt.textContent = 'Repolho';
    cabbageTxt.classList.add('vegetable-txt')
    let cabbageImg = document.createElement('img')
    cabbageImg.setAttribute('src', '/images/cabbage-svgrepo-com.svg')
    cabbageImg.classList.add('vegetable')
    element.appendChild(cabbageTxt);
    element.appendChild(cabbageImg);
}

function addPotato(element){
    let potatoTxt = document.createElement('p');
    potatoTxt.textContent = 'Batata';
    potatoTxt.classList.add('vegetable-txt')
    let potatoImg = document.createElement('img')
    potatoImg.setAttribute('src', '/images/potato-svgrepo-com.svg')
    potatoImg.classList.add('vegetable')
    element.appendChild(potatoTxt);
    element.appendChild(potatoImg);
}

function addCarrot(element){
    let carrotTxt = document.createElement('p');
    carrotTxt.textContent = 'Cenoura';
    carrotTxt.classList.add('vegetable-txt')
    let carrotImg = document.createElement('img')
    carrotImg.setAttribute('src', '/images/carrot-svgrepo-com.svg')
    carrotImg.classList.add('vegetable')
    element.appendChild(carrotTxt);
    element.appendChild(carrotImg);
}

function removeVeggies(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
}

function addVeggies(element,veggie){
    let addVeggieFunction = `add${veggie}`
    if (element.classList.contains('pumpkin')){
        element.classList.remove('pumpkin')
        removeVeggies(element);
    }
    else if (element.classList.contains('cabbage')){
        element.classList.remove('cabbage')
        removeVeggies(element);
    }
    else if (element.classList.contains('potato')){
        element.classList.remove('potato')
        removeVeggies(element);
    }
    else if (element.classList.contains('carrot')){
        element.classList.remove('carrot')
        removeVeggies(element);
    }
    element.classList.add(veggie.toLowerCase());
    if (typeof window[addVeggieFunction] === 'function') {
        window[addVeggieFunction](element);
    } else {
        console.error(`Function ${addVeggieFunction} not found.`);
    }
}

for (let i = 0; i < plantSite.length; i++) {
    const element = plantSite[i];
    if (element.classList.contains('pumpkin')){
        addPumpkin(element);
    }
    else if (element.classList.contains('cabbage')){
        addCabbage(element);
    }
    else if (element.classList.contains('potato')){
        addPotato(element);
    }
    else if (element.classList.contains('carrot')){
        addCarrot(element);
    }
    else {
        element.addEventListener('click',()=>{
            clickedElement = element;
            openModal();
        })
    }
}

document.querySelectorAll('.vegetable-option').forEach(option => {
    option.addEventListener('click', () => {
      const veggie = option.dataset.veggie;
      addVeggies(clickedElement, veggie);
      closeModal();
    });
});

function openModal() {
    document.getElementById('vegetable-modal').style.display = 'block';
}
  
function closeModal() {
    document.getElementById('vegetable-modal').style.display = 'none';
}

span.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
}

let resetButton = document.getElementById('reset-button');
let available = document.getElementsByClassName('available');
resetButton.addEventListener('click', ()=>{
    for (let i = 0; i < available.length; i++) {
        const element = available[i];
        element.classList.remove('pumpkin');
        element.classList.remove('cabbage');
        element.classList.remove('potato');
        element.classList.remove('carrot');
        removeVeggies(element);
    }
})

// WIN CONDITION
let win = ["Abóbora","Batata","Repolho","Cenoura","Cenoura","Repolho","Batata","Abóbora","Batata","Abóbora","Cenoura","Repolho","Repolho","Cenoura","Abóbora","Batata"]
let submit = document.getElementById('submit-button');
submit.addEventListener('click', checkWin, { once: false });

function checkWin() {
    let current = [];
    for (let i = 0; i < plantSite.length; i++) {
        const element = plantSite[i];
        if (element.children.length > 0){
            const children = element.children[0];
            const value = children.textContent;
            current.push(value);
        }
    }
    if (JSON.stringify(current) == JSON.stringify(win)){
        alert('Parabéns! Você venceu!');
    } else {
        alert('Ainda não. Tente novamente!');
    }
}

// SEM SUBMIT BUTTON

// document.addEventListener('click', checkWin, { once: false });

// function checkWin() {
//     let current = [];
//     for (let i = 0; i < plantSite.length; i++) {
//         const element = plantSite[i];
//         if (element.children.length > 0){
//             const children = element.children[0];
//             const value = children.textContent;
//             current.push(value);
//         }
//     }
//     if (JSON.stringify(current) == JSON.stringify(win)){
//         alert('Parabéns! Você venceu!');
//     }
// }