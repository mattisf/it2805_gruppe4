const getElement = id => document.getElementById(id);

//item 1
const plusBtn1 = getElement("plusBtn1");
const minusBtn1 = getElement("minusBtn1");
const amount1 = getElement("amount1");
//item 2
const plusBtn2 = getElement("plusBtn2");
const minusBtn2 = getElement("minusBtn2");
const amount2 = getElement("amount2");

const item1price = getElement("item1price");
const item2price = getElement("item2price");

const totalPrice = getElement("totalPrice");
const checkoutPrice = getElement("checkoutPrice");

const checkoutBtn = getElement("checkoutBtn");

var min = 1, max = 6;
var number=0;

let totalSum = 0;
let checkoutSum = 0; 
var itemPrice1 = 499, itemPrice2 = 299;


const plusBtn1Function = () => {
        number = amount1.firstChild.nodeValue;
        console.log(number)
        if(number < max){
            number ++;
            amount1.innerText = number;
            item1price.innerText = number*itemPrice1;
            updateUI();

    }

}
const minusBtn1Function = () => {
        number = amount1.firstChild.nodeValue;
        console.log(number)
        if(number > min){
            number --;
            amount1.innerText = number;
            item1price.innerText = number*itemPrice1;
            updateUI();

    
    }
}


const plusBtn2Function = () => {
        number = amount2.firstChild.nodeValue;
        console.log(number)
        if(number < max){
            number ++;
            amount2.innerText = number;
            item2price.innerText = number*itemPrice2;    
            updateUI();
    
    }


}
const minusBtn2Function = () => {
        number = amount2.firstChild.nodeValue;
        console.log(number)
        if(number > min){
            number --;
            amount2.innerText = number;
            item2price.innerText = number*itemPrice2;   
            updateUI();
     
        }
    }

const updateUI = () => {
    console.log("updatefunction")
    totalSum = Number(item1price.firstChild.nodeValue) + Number(item2price.firstChild.nodeValue);
    console.log(totalSum)
    checkoutSum = totalSum + 59;
    totalPrice.innerHTML = totalSum;
    checkoutPrice.innerText = checkoutSum;
}

const checkOut = ()=> {
    alert("Thank you for your order");

}