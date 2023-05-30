let price1=document.querySelector('.price1');
let price2=document.querySelector('.price2');
let price3=document.querySelector('.price3');
let price4=document.querySelector('.price4');
let discount=document.querySelector('.discount20');
let total=document.querySelector('.total');


total = +price1.innerText + +price2.innerText + +price3.innerText + +price4.innerText;
total.textContent = total;
console.log(total);
message = total - total/100*20;

discount.addEventListener('click', () => {
  let total = document.querySelector('.total'); 
  total.textContent = message;
});