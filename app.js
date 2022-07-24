const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomTask);
function generateRandomTask() {
    var word = ['Stowing', 'Picking', 'WaterSpider', 'Pushing', 'Diverting', 'Scanning', 'Unloading', 'Problem Solving',];
    var words = word[Math.floor(Math.random()*word.length)];
    alert('The computer chose: ' + words);
}