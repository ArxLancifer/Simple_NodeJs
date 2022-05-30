document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#personName").textContent = data.name;
  document.querySelector("#personStatus").textContent = data.status;
  document.querySelector("#personOccupation").textContent =
    data.currentOccupation;
}

//Coin Flip
document.querySelector(".coinFlip").addEventListener("click", coinFlip);
const myResult = document.querySelector("._Me");
const opponentResult = document.querySelector("._Opponent");
async function coinFlip() {
  const tossResult = await fetch("/tossacoin");
  const resultData = await tossResult.json();
  console.log(resultData);
  myResult.value = resultData.playerone;
  opponentResult.value = resultData.playertwo;
}
