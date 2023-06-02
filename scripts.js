function soundChange(){
  var audio = document.getElementById("background-music"); 
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
  audio.volume = 1
  
}

function loginMessage(){
  const div_style = `
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 465px;
    max-width: 400px;
    border: 5px;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: green;
    `
  const div = document.createElement("div");
  const div_msg = document.createTextNode("Você entrou com sucesso!");
  div.classList.add("login-message")
  div.appendChild(div_msg)

  document.body.append(div)
  
  div.style.cssText = div_style

}