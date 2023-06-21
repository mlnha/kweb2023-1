//step1
const probability = [ 100, 60, 36, 22, 13, 8, 5, 3, 2, 1 ]; //성공확률

//step2
let level = 0; //현재 레벨
let attempts = 0; //시도 횟수

//step3
const getRandomBinaryResult = ratio => {
    const randomNumber = Math.floor(Math.random() * 100);
    return (randomNumber < ratio);
};

//step4
const tryLevelUp = () => {
    const loopId = setInterval(() => {
        attempts++;
        const successed = getRandomBinaryResult(probs[level]);
        if (successed) {
            level++;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
            document.getElementById('current-level').innerText = level;
        }
        document.getElementById('attempts').innerText = attempts;
        if (level >= 10) clearInterval(loopId);
}, 50);
};