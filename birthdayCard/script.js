const bodyRec = document.body.getBoundingClientRect();
const fireworkContainer = document.getElementById("fireworkContainer");
const dp = [];

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function initial() {
  const pieceNum = 300;
  const color = ["#EA4335", "#34A853", "#FBBC04", "#4285F4"];
  for (let i =  0; i < pieceNum; i++) {
    let piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundColor = color[randomInt(color.length)];
    piece.style.width = randomInt(75) + "px";
    piece.style.height = randomInt(75) + "px";
    piece.style.top = -randomInt(700) - 100 + "px"
    piece.style.left = randomInt(bodyRec.width) + "px";
    piece.style.transform = "rotate(" + randomInt(360) + "deg) ";
    fireworkContainer.appendChild(piece);
  }
  const pieces = document.getElementsByClassName("piece");
  for (let i in pieces) {
    if (!pieces[i].style) continue;
    // console.log(pieces[i].style.left);
    dp.push({
      x: parseInt(pieces[i].style.left),
      y: parseInt(pieces[i].style.top),
      dx: randomInt(300),
      dy: Math.random() * 5 + 4,
      dt: randomInt(1000)
    });
  }
}
initial();

let trueDate1 = [11, 3], trueDate2 = [11, 8];
function checkdate() {
  // let date = new Date();
  // console.log(date.getMonth(), date.getDate());
  // if (date.getMonth() <= trueDate1[0] - 1 && date.getDate() <= trueDate1[1]) {
  //   if (date.getMonth() === trueDate1[0] - 1 && date.getDate() === trueDate1[1]) {
  //     document.getElementById("cover").style.display = "none";
  //     setTimeout(firework(), 10);
  //   }
  //   console.log("jyh");
  //   document.title = "姜於含的生日";
  // } else if (date.getMonth() <= trueDate2[0] - 1 && date.getDate() <= trueDate2[1]) {
  //   if (date.getMonth() === trueDate2[0] - 1 && date.getDate() === trueDate2[1]) {
  //     document.getElementById("cover").style.display = "none";
  //     document.getElementById("face").src = "birthdayCard/face2.jpg";
  //     document.getElementById("text").src = "birthdayCard/text2.gif";
  //     setTimeout(firework(), 10);
  //   }
  //   document.title = "高艺洋的生日";
  //   // const inputcover = document.getElementById("inputcover");
  //   // console.log(inputcover);
  //   // if (inputcover.value === "lyx12138") {
  //   //   cover.style.display = "flex";
  //   // }
  // }
      document.getElementById("cover").style.display = "none";
      document.getElementById("face").src = "birthdayCard/face2.jpg";
      document.getElementById("text").src = "birthdayCard/text2.gif";
      setTimeout(firework(), 10);
}
checkdate();

var flag = 0;
function firework() {
  if (flag) return;
  flag = 1;
  const pieces = document.getElementsByClassName("piece");
  let time = 0, passNum = 0;
  let interval = setInterval(() => {
    time++;
    for (let i in pieces) {
      if (!pieces[i].style) continue;
      //console.log(pieces[i].style.left);
      pieces[i].style.left = dp[i].x + dp[i].dx * Math.sin((time + dp[i].dt) / 60) + "px";
      pieces[i].style.top = dp[i].y + dp[i].dy * time + "px";
      // if(parseInt(pieces[i].style.top) >= bodyRec.height + 100) passNum++;
    }
    console.log(time);
    if (time >= 700) clearInterval(interval), console.log(time), flag = 0;
  }, 15);
}

let flag2 = 0;
const face = document.getElementById("face");
const text = document.getElementById("text");
function next() {
  console.log(flag2);
  if (flag2 === 0) {
    flag2 = 1;
    let a = 0;
    let interval = setInterval(() => {
      a += 3;
      face.style.transform = "scale(" + a + "%," + a + "%) ";
      if (a >= 290) clearInterval(interval), flag2 = -1, nextnext();
    }, 34);
  } else if (flag2 === -1) {
    document.body.innerHTML = "后面没有时间做了，明年再说";
  }
}
function nextnext() {
  text.style.zIndex = 2;
}