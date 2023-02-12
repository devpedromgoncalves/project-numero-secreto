const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificacaoChuteValorValido(chute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
  <div>Você disse: </div>
  <span class="box neonText">${chute}</span>
  `
}

recognition.addEventListener("end", () => recognition.start())