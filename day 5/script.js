// 1.1 - Crie um algoritmo que peça 2 números ao usuário

// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação 
// matemática será realizada com esses números

// 1.3 - Exiba no console a operação feita e o resultado da conta


// let input1 = Number(prompt("Insert a number"));
// let input2 = Number(prompt("Insert a second number"));
// let result = 0;

// let calc = prompt("choose a operation symbol (- + * / %)");

// switch(calc) {

//     case "-" :     
//         console.log("Operacation = " + input1 + " - " + input2)
//         console.log("Result = " + (input1 - input2))

//     break;
//     case "+" :
//         console.log("Operacation = " + input1 + " + " + input2)
//         console.log("Result = " + (input1 + input2))

//     break;
//     case "*" :
//         console.log("Operacation = " + input1 + " x " + input2)
//         console.log("Result = " + (input1 * input2))

//     break;
//     case "/" :
//         console.log("Operacation = " + input1 + " / " + input2)
//         console.log("Result = " + (input1 / input2))

//     break;
//     case "%" :
//         console.log("Operacation = " + input1 + " % " + input2)
//         console.log("Result = " + (input1 % input2))

//     break;      
//     default:
//         console.log("Insert a valid symbol")
// }

// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: 
// abastecer com gasolina, com álcool ou calibrar os pneus.

// 1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e 
// exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 

// 1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir 
// no console a quantidade em litros que foi abastecida (litro de álcool = R$3)

// 1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados 
// com sucesso".

let options = prompt("Insert which one do you want - (Gasoline, alcohol or calibrate the tires)")

switch(options){
    case "Gasoline":
        let qtdG = Number(prompt("How much do you want? (R$)"));
        let LG = 5;
        let qtdLG = qtd / L;

        console.log(qtdL + " L ")

    break;
    case "alcohol":
        let qtdA = Number(prompt("How much do you want? (R$)"));
        let LA = 3;
        let qtdLA = qtdA / LA;

        console.log(qtdLA + " L ")
    
    break;
    case "calibrate the tires":
    console.log("Pneu calibrado com sucesso")
    break;

}










