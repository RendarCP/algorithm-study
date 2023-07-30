function solution(my_string, n) {
    var tmp = [];
    console.log('my_string', my_string.split(''))
    my_string.split('').forEach(s=> {
        for(let i = 0; i< n; i++){
            tmp.push(s);
        }
    })
    return tmp.join('');
}