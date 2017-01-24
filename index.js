
letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
document.addEventListener('keydown', function(e) {
  if (e.which === 13) {
    i=0
    document.getElementById("score").innerHTML = i
    secs = 3000
    startGame()
    document.getElementById("time").innerHTML = secs
    myTimer()
  }
})

function startGame(){
  let letter = letters[Math.floor((Math.random()*26))]
  document.getElementById("game").innerHTML=letter.toUpperCase()
  didYouGetIt(letter)
}

function didYouGetIt(letter){
  document.addEventListener("keypress", pressLetter)
}

function pressLetter(e){
  let letter = e.target.getElementsByTagName("p").game.innerHTML.toLowerCase()
  if (e.key === letter) {//--console.log(e.key); console.log(e.which); console.log(letter);
    addToScore()
    document.removeEventListener("keypress", pressLetter)
    startGame()
  }
}

function addToScore(){
  i++
  document.getElementById("score").innerHTML=i
}

function myTimer(){
  let id = setInterval(function(){
      secs--
  document.addEventListener('keydown', function(e) {
      if (e.which === 13) {
        clearInterval(id)}})
    if(secs<=0){
      secs = 0
      document.getElementById("time").innerHTML = secs
      document.getElementById("final").innerHTML = `Your Score is ${i}`
      document.getElementById("score").innerHTML = i
      document.removeEventListener("keypress", pressLetter) //--clearInterval(id)
     }
     document.getElementById("time").innerHTML = secs
  }, 10)}
