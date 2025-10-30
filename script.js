const apiKey = "303ad97c71d040cfb627f80c35a5355a"; // <-- yahan apna VoiceRSS API key daalo
const speakBtn = document.getElementById("speakBtn");
const downloadBtn = document.getElementById("downloadBtn");
const textInput = document.getElementById("textInput");
const language = document.getElementById("language");
const voiceType = document.getElementById("voiceType");
const speed = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");
const audioPlayer = document.getElementById("audioPlayer");

speed.addEventListener("input", () => {
  speedValue.textContent = speed.value;
});

function generateSpeech(download = false) {
  const text = textInput.value.trim();
  if (!text) return alert("Kuch likho pehle!");

  const lang = language.value;
  const voice = voiceType.value;
  const rate = speed.value / 100;

  const url = `https://api.voicerss.org/?key=${apiKey}&hl=${lang}&r=${rate}&c=MP3&v=${voice === 'male' ? 'Manoj' : 'Aditi'}&src=${encodeURIComponent(text)}`;

  if (download) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "ak_ai_voice.mp3";
    link.click();
  } else {
    audioPlayer.src = url;
    audioPlayer.play();
  }
}

speakBtn.addEventListener("click", () => generateSpeech(false));
downloadBtn.addEventListener("click", () => generateSpeech(true));
