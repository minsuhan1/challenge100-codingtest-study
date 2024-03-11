function solution(n, k) {
    let answer = 0;
    const str = n.toString(k)
    // 0 기준으로 split
    const arr = str.split('0')
    
    arr.forEach(v => {
        if(isPrime(Number(v))) answer += 1
    })
    return answer;
}

// 소수판별
function isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 === 0) return num === 2 ? true : false;
    for(let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (num % i === 0) return false;
    }
    return true
}
