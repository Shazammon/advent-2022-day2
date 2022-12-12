const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

// console.log(stringData)

let score = 0
let sum = 0

function calculatePoints() {
    for (let i = 0; i < stringData.length; i++) {
        switch (stringData[i]) {
            case 'A X':
                score =  4;
                break;
            case 'A Y':
                score = 8;
                break;
            case 'A Z':
                score = 3;
                break;
            case 'B X':
                score = 1;
                break;
            case 'B Y':
                score = 5;
                break;
            case 'B Z':
                score = 9;
                break;
            case 'C X':
                score = 7;
                break;
            case 'C Y':
                score = 2;
                break;
            case 'C Z':
                score = 6;
                break;
            default:
                console.log(`Something is wrong on the ${i} array item`)
        }
        sum = score + sum
    }
    return sum

    
}

console.log(calculatePoints())

