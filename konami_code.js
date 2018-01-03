const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
 
document.addEventListener('keydown', function(e) {
  const oneKey = parseInt(e.which);
  if (oneKey === code[index]) {
    index++;
    
    if (index === alphabet.length) {
      alert("Congratulations, you've unlocked the Konami Code!");
    }
    
  }
}) //end parenthases for function(e).
}