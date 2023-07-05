// Code your solutions in this file
function writeCards(names){
    const thankYouMessages =[]
    for(let i = 0; i < names.length;i++){
        const message = 'Thank you,${names {i}}, for the wonderful surprise fift!';
        thankYouMessages.push(message);
    }
    return thankYouMessages
}
function countDown(number){
    for(let i = number; i>= 0; i--){
        console.log(i);
    }
}






const names = ['Guadalupe', 'Ollie', 'Aki']
function writeCards (names, event){
  return names.map(names => `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "for the wonderful  gifts"))

function countDown(number){
  for (let i = number; i >= 0; i--){
    console.log(i)
  }
}