function solution(my_string) {
    var answer = [];
    const splits = my_string.split('');
    splits.map(s => {
        if(Number(s) >= 0){
            answer.push(Number(s));
        }
    })
    answer.sort();
    return answer;
}