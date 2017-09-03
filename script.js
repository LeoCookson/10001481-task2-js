let number = 0
let counter = 12
alert("This program will display the division tables of 1 to 12 based on number input")
let answer = prompt("Please enter a number less then 100", "00")



for(let i = 0; i < counter; i++){
    answer = parseInt(answer)
let a = i + 1
console.log(answer + " / "+ a + " = "+ (a/answer))
}
if(answer > 100){
    alert("The number is greater than 100")
}

