function playGame(Move) {
  pickCM();
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
    Score.Win += 1;
  } else if (Result === "Lose") {
    Score.Losses += 1;
  } else if (Result === "Tie") {
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
  if (rN >= 0 && rN < 1 / 3) {
    Computer = "Rock";
  } else if (rN >= 1 / 3 && rN < 2 / 3) {
    Computer = "Paper";
  } else {
    Computer = "Siccors";
  }
  return;
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
