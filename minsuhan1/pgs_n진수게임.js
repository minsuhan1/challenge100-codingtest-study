function solution(n, t, m, p) {
    let answer = '';
    let str = '';
    for(i=0; i<=t*m; i++) {
        str += Number(i).toString(n);
    }
    for(i=0; i<t; i++) {
        answer += str[p-1+m*i]
    }
    return answer.toUpperCase();
}
