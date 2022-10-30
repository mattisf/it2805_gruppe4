document.onload = function () {
    show();
};

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

const totalPrice = getElement("totalPrice");
const checkoutPrice = getElement("checkoutPrice");

let totalSum = 0;
let checkoutSum = 0; 
const number1 = 1, number2 = 1;
var min = 1, max = 6;
var itemPrice1 = 499, itemPrice2 = 299;

amount1.innerText = number1;
amount2.innerText = number2;

const adjustItem = (id, func, numberX) => {
    let number = 0;
    let numberPlace = amount1;
    if(numberX === 1){
        number = number1
    }
    if(numberX === 2){
        number = number2
        numberPlace= amount2;
    }
    id.onclick = function(){
        if(func === 1 ){
            if(number<max){
                number ++;
                console.log(number)
            }
        }
        if(func === 2 ){
            if(number>min){
                number --;
                console.log(number)
            }
        }
        numberPlace.innerText = number;
        if(numberX===1){
            number1 = number
        }
        else if( numberX === 2){
            number2 = number
        }
    }

    updateItemPrice(numberX)
    updateUI(); 
}

const updateItemPrice= (itemNumber) => {
    if(itemNumber===1){
        item1price.innerText = number1*itemPrice1;
    }
    if(itemNumber===2){
        item1price.innerText = number2*itemPrice2;
    }
}



const plusBtn1Function = () => {
    adjustItem(plusBtn1, func = 1, 1);
}
const minusBtn1Function = () => {
    adjustItem(minusBtn1, func = 2, 1);
}
const plusBtn2Function = () => {
    adjustItem(plusBtn2, func = 1, 2);
}
const minusBtn2Function = () => {
    adjustItem(minusBtn2, func = 2, 2);
}



const updateUI = () => {
    
    totalPrice.innerText = totalSum;
    checkoutPrice.innerText = checkoutSum;
}

