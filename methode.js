let myPara = document.getElementById('para');
let myRest = document.getElementById('cal1');
let myToc = document.getElementById('cal2');
let myVale = document.getElementById('resultat');

myRest.value = 5;
myToc.value = 12;
let myPom = myRest.value + myToc.value;

myVale.innerText = myPom.toString();

if (myPom - 10 < 0) {
    myPara.innerText = 'Attention la somme est trop petit';
}

myPara.style.backgroundColor = 'gold';
myRest.style.color = 'blue';
myToc.style.color = 'blue';
myVale.style.color = 'green';