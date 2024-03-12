function solution(msg) {
    let answer = [];
    const map = new Map();
    for (let i=1; i<=26; i++) {
        map.set(String.fromCharCode(i+64), i);
    }
    
    // Map은 무조건 get, set, has... 를 쓰자
    // Map['a'] (X)
    let maxlen = 1;
    while(msg) {
        for(let i = maxlen; i > 0; i--) {
            const now = msg.slice(0, i);
            if (map.get(now)) {
                answer.push(map.get(now))
                const next = msg.slice(0, i+1)
                map.set(next, map.size + 1)
                msg = msg.slice(i)
                
                if(next.length > maxlen) {
                    maxlen = next.length
                }
                break;
            }
        }
    }
    return answer;
}
