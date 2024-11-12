const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomnumber(min, max){
    const randomnumber = Math.floor(Math.random() * (max - min + 1))+ min;
    return randomnumber;
}

btnNo.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnwidth = btnNo.getBoundingClientRect().width;
    const btntop = btnNo.getBoundingClientRect().top;
    const btnleft = btnNo.getBoundingClientRect().left;

    let newTop = btntop;
    let newLeft = btnleft;

    while(Math.abs(newTop - btntop) < containerHeight / 3){
        newTop = getRandomnumber(0, containerHeight-btnHeight);
    }
    while(Math.abs(newLeft - btnleft) < containerWidth / 3){
        newLeft = getRandomnumber(0, containerWidth - btnwidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
})

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
})