

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    let count = 0;
    let left="";
    for(let i=0; i<participant.length; i++){
    if(participant[i] !== completion[i]){
            return participant[i];
        }
        count++;
    }
}

