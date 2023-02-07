let submiT = document.querySelector('#submitT1')
let caddd = document.querySelector('#caddd')
let imgModal = document.querySelector('#imgModal')
let box = document.querySelector('#box')
let title1 = document.querySelector('#title1')
let title2 = document.querySelector('#title2')
let title3 = document.querySelector('#title3')
let title4 = document.querySelector('#title4')
let title5 = document.querySelector('#title5')
let title6 = document.querySelector('#title6')
console.log(submiT);
    let cardIncrement = 1;
window.myFunction = () => {
    caddd.innerHTML = ` ${cardIncrement}`;
    // caddd.innerHTML = `${}`;
    cardIncrement++;
}

imgModal.addEventListener('click', () => {
    box.classList.toggle('nnre')
    
}
)









