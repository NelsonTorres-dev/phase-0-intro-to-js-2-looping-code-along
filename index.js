// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"]



// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

let names = ["Guadalupe", "Ollie", "Aki"]
 let message = [];
let eventName = 'surprise';

function writeCards(names, eventName){
   
    for (let i = 0; i < names.length; i++){
        let messages = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        message.push(messages)
    }
    return message;
}

// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

let integer = 10;

function countDown(integer){
   
while (integer >= 0){
    console.log(integer)
    integer--
}

}



















