function solution(str1, str2) {
    let answer = 0;
    let union = 0;
    let intersect = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    let str1_arr = [];
    [...str1].forEach((v, i) => {
        if(i < str1.length-1) {
            const current = v + str1[i+1];
            if(validate(current)) {
                str1_arr.push(current);
                union += 1;
            }
        }
    });
    
    [...str2].forEach((v, i) => {
        if(i < str2.length-1) {
            const current = v + str2[i+1];
            if(validate(current)) {
                // str1 집합에 있는지 찾기
                const idx = str1_arr.indexOf(current);
                if(idx >= 0) {
                    intersect += 1;
                    // 다중집합을 고려하기 위해 공통element 제거
                    // idx에서 1개 요소 제거(splice)
                    str1_arr.splice(idx, 1);
                } else {
                    union += 1;
                }
            }
        }
    })
    
    // 다중집합을 고려하는 방법
    if (union === 0) {
        return 65536;
    }
    answer = Math.floor((intersect / union) * 65536);
    return answer;
}

function validate(str) {
    return /[a-z][a-z]/g.test(str);
}
