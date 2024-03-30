let alphabet = 'abcdefghijklmnopqrstuvwxyz';
function pickRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
let secretLetter = pickRandomLetter();
document.body.addEventListener('keydown', function(event) {
    if (event.key === secretLetter) {
        let listItem = document.createElement('li');
        listItem.textContent = 'SECRET KEY PRESSED: ' + secretLetter;
        document.getElementById('list').appendChild(listItem);
        secretLetter = pickRandomLetter();
    }
});