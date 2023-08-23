function solution(my_string) {
    var answer = 0;
    const tempArr = my_string.split('');
    tempArr.map(t => {
        if(!isNaN(t)){
            answer += Number(t);
        }
    })
    return answer;
}