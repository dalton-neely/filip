const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const reverseAndNumberize = input => {
    const arr = input.split('').reverse()
    let str = ''
    arr.forEach(e => {
        str += e
    })
    return parseInt(str,10)
}

rl.on('line', input => {
    str = input.split(' ')
    const A = reverseAndNumberize(str[0])
    const B = reverseAndNumberize(str[1])
    let winner = 0
    if(A > B){
        winner = A
    }else{
        winner = B
    }
    console.log(winner)
    rl.close()
})