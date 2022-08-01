function clock() {

  const clock = document.querySelector('.clock');
  const start = document.querySelector('.start');
  const pause = document.querySelector('.pause');
  const stop = document.querySelector('.stop');
  const timerTitle = document.querySelector('.title');
  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const elemento = e.target; // indica o elemento clicado na pag

    if (elemento.classList.contains('start')) {
      changeColor();
      clearInterval(timer);
      startClock();
      timerTitle.innerHTML = `Ready!`;
    }

    if (elemento.classList.contains('pause')) {
      changeColor();
      clearInterval(timer);
      timerTitle.innerHTML = `Pause!`;
    }

    if (elemento.classList.contains('stop')) {
      changeColor();
      clearInterval(timer);
      clock.innerHTML = `00:00:00`;
      seconds = 0;
      timerTitle.innerHTML = `Timer`;
    }

    function changeColor() {
      if(elemento.classList.contains('start')){
        clock.classList.remove('pause-color');
        clock.classList.remove('stop-color');
        clock.classList.add('start-color');
      }

      if(elemento.classList.contains('pause')){
        clock.classList.remove('start-color');
        clock.classList.remove('stop-color');
        clock.classList.add('pause-color');
      }

      if(elemento.classList.contains('stop')){
        clock.classList.remove('start-color');
        clock.classList.remove('pause-color');
        clock.classList.add('stop-color');
      }
    }
  });

  function getTimeFromSeconds(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
      timeZone: 'GMT'
    });
  }

}

clock();