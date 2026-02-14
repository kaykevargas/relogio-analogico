const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

function getTime() {
  const tempo = new Date();

  const getHourRot = (360 / 12) * tempo.getHours();
  const getMinRot = (360 / 60) * tempo.getMinutes();
  const getSecRot = (360 / 60) * tempo.getSeconds();

  horas.style.transform = `rotate(${getHourRot}deg)`;
  minutos.style.transform = `rotate(${getMinRot}deg)`;
  segundos.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();