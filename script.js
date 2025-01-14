let autoPlay = false;
let a1;
function Alert() {
  setTimeout(() => {
    alert(`If you wanna play with Keyboard Type
      r : Rock
      p : Paper
      s : Scissors
      a : Repeat`);
  }, 1000);
}
Alert();
function Key() {
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
      playGame("Rock");
    } else if (event.key === "p") {
      playGame("Paper");
    } else if (event.key === "s") {
      playGame("Siccors");
    } else if (event.key === "a") {
      repeat();
    } else if (event.key === "Backspace") {
      rcb();
    }
  });
}
function rcb() {
  document.querySelector(".permission").innerHTML = `You want to reset
  <button class="Yes-permission">Yes</button>
  <button class="No-permission">No</button>`;
  document.querySelector(".Yes-permission").addEventListener("click", () => {
    reset();
    Hidden();
  });
  document.querySelector(".No-permission").addEventListener("click", () => {
    Hidden();
  });
}
function Hidden() {
  document.querySelector(".permission").innerHTML = "";
}

Key();
function eventHandler() {
  const Rock = document.querySelector(".Rock");
  Rock.addEventListener("click", () => {
    playGame("Rock");
  });
  const Paper = document.querySelector(".Paper");
  Paper.addEventListener("click", () => {
    playGame("Paper");
  });
  const Siccors = document.querySelector(".Siccors");
  Siccors.addEventListener("click", () => {
    playGame("Siccors");
  });
  const Reset = document.querySelector(".reset");
  Reset.addEventListener("click", () => {
    rcb();
  });
  const Repeat = document.querySelector(".repeat");
  Repeat.addEventListener("click", () => {
    repeat();
  });
}
eventHandler();
function repeat() {
  if (!autoPlay) {
    a1 = setInterval(() => {
      const Move = pickCM();
      playGame(Move);
    }, 600);
    autoPlay = true;
    document.querySelector(".odnary2").innerHTML = "Stop";
  } else {
    clearInterval(a1);
    autoPlay = false;
    document.querySelector(".odnary2").innerHTML = "Auto Play";
  }
}

function playGame(Move) {
  const Computer = pickCM();
  let Score = JSON.parse(localStorage.getItem("Score")) || {
    Win: 0,
    Losses: 0,
    Tie: 0,
  };
  let Result = "";
  if (Move === "Siccors") {
    if (Computer === "Rock") {
      Result = "Lose";
    } else if (Computer === "Paper") {
      Result = "Win";
    } else if (Computer === "Siccors") {
      Result = "Tie";
    }
  } else if (Move === "Paper") {
    pickCM();
    if (Computer === "Rock") {
      Result = "Win";
    } else if (Computer === "Paper") {
      Result = "Tie";
    } else if (Computer === "Siccors") {
      Result = "Lose";
    }
  } else if (Move === "Rock") {
    pickCM();
    if (Computer === "Rock") {
      Result = "Tie";
    } else if (Computer === "Paper") {
      Result = "Lose";
    } else if (Computer === "Siccors") {
      Result = "Win";
    }
  }
  if (Result === "Win") {
    let Showresult = document.querySelector(".Showresult");
    Showresult.style.color = "rgb(0, 255, 0)";
    Score.Win += 1;
  } else if (Result === "Lose") {
    let Showresult = document.querySelector(".Showresult");
    Showresult.style.color = "rgb(255, 0, 0)";
    Score.Losses += 1;
  } else if (Result === "Tie") {
    let Showresult = document.querySelector(".Showresult");
    Showresult.style.color = "rgb(255, 255, 0)";
    Score.Tie += 1;
  }
  localStorage.setItem("Score", JSON.stringify(Score));
  const sM = document.querySelector(".js-move-show-p");
  sM.innerHTML = `You
    <img src="./${Move}.png" class="some-score" width="50" />
          <img src="./${Computer}.png"   class="some-score" width="50" />
          Computer`;
  document.querySelector(".Showresult").innerHTML = `${Result}.`;
  document.querySelector(".Winshow").innerHTML = Score.Win;
  document.querySelector(".losshow").innerHTML = Score.Losses;
  document.querySelector(".Tieshow").innerHTML = Score.Tie;
}
function pickCM() {
  const rN = Math.random();
  let Computer = "";
  if (rN >= 0 && rN < 1 / 3) {
    Computer = "Rock";
  } else if (rN >= 1 / 3 && rN < 2 / 3) {
    Computer = "Paper";
  } else {
    Computer = "Siccors";
  }
  return Computer;
}
function reset() {
  Score = {
    Win: 0,
    Losses: 0,
    Tie: 0,
  };
  localStorage.removeItem("Score");
  document.querySelector(".js-move-show-p").innerHTML = "";
  document.querySelector(".Winshow").innerHTML = 0;
  document.querySelector(".losshow").innerHTML = 0;
  document.querySelector(".Tieshow").innerHTML = 0;
  document.querySelector(".Showresult").innerHTML = "";
}
