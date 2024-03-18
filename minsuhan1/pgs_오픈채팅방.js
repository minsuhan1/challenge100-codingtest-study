function solution(record) {
    let answer = [];
    const map = new Map();
    const res = [];
    record.forEach(rec => {
        const slices = rec.split(" ")
        if(slices[0] === 'Enter') {
            map.set(slices[1], slices[2])
            res.push([slices[1], "님이 들어왔습니다."])
        } 
        if(slices[0] === 'Leave') {
            res.push([slices[1], "님이 나갔습니다."])
        }
        if(slices[0] === 'Change') {
            map.set(slices[1], slices[2])
        }
    })
    
    answer = res.map(v => map.get(v[0]) + v[1])
    return answer;
}
