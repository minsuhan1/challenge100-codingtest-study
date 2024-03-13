function solution(dartResult) {
    let answer = 0;
    const scores = []
    const arr = dartResult.match(/\d{1,}|\D/g)
    
    for(i=0; i<arr.length; i++) {
        if(arr[i] === 'S') {
            scores.push(arr[i-1] ** 1)
        }
        if(arr[i] === 'D') {
            scores.push(arr[i-1] ** 2)
        }
        if(arr[i] === 'T') {
            scores.push(arr[i-1] ** 3)
        }
        if(arr[i] === '*') {
            if(scores) {
                scores[scores.length-2] *= 2
            }
            scores[scores.length-1] *= 2
        }
        if(arr[i] === '#') {
            scores[scores.length-1] *= -1
        }
    }
    
    answer = scores.reduce((acc, cur) => acc + cur, 0)
    return answer;
}
