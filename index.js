document.addEventListener('keydown', function(e) {
  if (e.which === 13) {
    i=0
    secs = 3000
    startGame()
    document.getElementById("score").innerHTML = i
    document.getElementById("time").innerHTML = secs
    myTimer()
  }
})

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
      }, 10)
}

function startGame(){
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let letter = letters[Math.floor((Math.random()*26))]
  document.getElementById("game").innerHTML = letter
  document.addEventListener("keypress", pressLetter)
}

function pressLetter(e){
  let letter = e.target.getElementsByTagName("p").game.innerHTML.toLowerCase()
  if (e.key === letter) {
    document.getElementById("score").innerHTML=++i
    document.removeEventListener("keypress", pressLetter)
    startGame()
  }
  else {
    if(i>0){
      document.getElementById("score").innerHTML=--i
    }
  }
}
