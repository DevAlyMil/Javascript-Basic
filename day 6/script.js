1 - Exercise

let input = parseInt(prompt("Insert a full number"))

for(let i = 0; i <= input; i++){
    console.log(i)
}

2 - Exercise

let input = parseInt(prompt("Insert a full number"))

for (let i = 0; i <= input; i +=5 ){
    console.log(i)
}

3- Exercise

let input = parseInt(prompt("Insert a full number"))

for (let i = input; i >= 0; i -=5 ){
    console.log(i)
}

4- Exercise

// Faça um algoritmo utilizando a estrutura de repetição FOR 
// que receba 1 número e exiba na tela qual 
// o resultado da sua tabuada e dos próximos 2 números.

let input = parseInt(prompt("Insert a full number betwen 1 to 10"))

for (let a = input; a <= input + 2; a++){
    console.log("Tabuada : " + a)
    for(let i = 0; i <= 10; i++){
        console.log(a + " X " + i + "=" + (a * i))
    }
}












