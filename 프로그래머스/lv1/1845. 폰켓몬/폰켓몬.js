function solution(nums) {
    var answer = 0;
    const pick = nums.length/2;
    const unique = [...new Set(nums)]
    if(unique.length >= pick) {
        return pick;
    }else {
        return unique.length;
    }
} 