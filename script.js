let con = document.querySelectorAll(".con");
let pc = document.querySelectorAll(".pc");
console.log(pc);
let random = Math.floor(Math.random()*3);
let triangle = document.querySelector(".triangle");
let machine = document.querySelector(".machine");
let user = document.querySelector(".user");
let winner = document.querySelector(".winner");
let winModal = document.querySelector(".win-modal");
let play = document.querySelector(".play");
let score = JSON.parse(localStorage.getItem("score"));
let scoreElement = document.getElementById(".score");
if (score)
{
    scoreElement.innerText = score;
}
let count = 0;

con.forEach((element, index) => 
{
    element.addEventListener("click", () => 
    {
        user.style.opacity = "1";
        triangle.style.display = "none";
        con.forEach(item => 
            {
                item.style.display = "none";
            });
        element.style.display = "block";
        element.classList.add("show")
        setTimeout(() =>
        {
            machine.style.opacity = "1";
            setTimeout(() =>
            {
                con[random].style.display = "block";
                con[random].classList.add("right");
            }, 1000);
        }, 500);
        setTimeout(() => 
        {
            if(random == index)
            {
                winModal.style.display = "grid";
                winner.innerText = "Draw";
            }
            else if(index == 0 && random == 2 || index == 1 && random == 0 ||index == 2 && random == 1)
            {
                winModal.style.display = "grid";
                winner.innerText = "You WIN";
                count = score;
                count++;
                scoreElement.innerText = count;
                localStorage.setItem("score", JSON.stringify(count));
            }
            else
            {
                winModal.style.display = "grid";
                winner.innerText = "You LOOSE";
            }
        }, 1500);
    });
});
play.addEventListener("click", () =>
{
    window.location.reload();
})