// code your solution here
function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(symbol){
    return function (string){
      return `You are ${symbol}${string}${symbol}!`
    }
}

