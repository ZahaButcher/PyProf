let count = 0;

document.addEventListener("DOMContentLoaded", () => {
  let oneClick = document.querySelector("#butClick1");
  let twoClick = document.querySelector("#butClick2");
  let txt = document.querySelector("#txt");

  oneClick.addEventListener("click", butClick);
  twoClick.addEventListener("click", butClick);

  butClick3.addEventListener("click", () => {
    txt.textContent = count;
    butClick1.style.display = "block";
    butClick2.style.display = "block";
    butClick3.style.display = "none";

    if (count != 0) {
      count = 0;
      txt.textContent = count;
      butClick1.style.display = "block";
      butClick2.style.display = "block";
      butClick3.style.display = "none";
    }
  });
  function butClick() {
    count++;
    txt.textContent = count;

    if (this === oneClick) {
      console.log("One");
    } else if (this === twoClick) {
      console.log("Two");
    }
    if (count == 3) {
      butClick1.style.display = "none";
      butClick2.style.display = "none";
      butClick3.style.display = "block";

      // let a = document.querySelector(".buttons").children;

      // for(let i of a){
      //     console.log(i);
      //     i.style.display = "none";
      // }
      butClick3.value = "Ещё раз!";
      txt.textContent = "Вы отличный парень!";
    }
  }
});
