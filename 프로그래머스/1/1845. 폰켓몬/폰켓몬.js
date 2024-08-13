function solution(nums) {
    var answer = 0;
    let pick = Math.floor(nums.length/2);
    let setLength = [...new Set(nums)].length
    
    return setLength < pick ? setLength : pick;
}