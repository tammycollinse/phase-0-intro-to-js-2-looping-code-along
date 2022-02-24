// Code your solutions in this file
//this is a code along from the prework

const gifts = ["teddy bear", "drone" , "doll"];

function wrapGifts(gifts){ // placeholder for string. Just a parameter
console.log(`Wrapped ${gifts} and added a bow`);
}

wrapGifts(gifts[0]); // passing the first item in the array into the function as an argument

//my own for loop

for (let i = 0 ; i < gifts.length ; i++){
    wrapGifts(gifts[i]);
    } 

const arrNames = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const arrMessages = [];

function writeCards(stringName , event ){
 
    for (let i = 0 ; i < arrNames.length ; i++){
arrMessages.push(`Thank you, ${arrNames[i]}, for the wonderful ${event} gift!`);
}
return arrMessages;
}

writeCards(arrNames[i]);

function countDown(){
    let num = 10;
    while (num >= 0){
    console.log(num);
    num = num -1;;
    }
}

countDown();

