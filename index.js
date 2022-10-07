const humburgerBtn = document.getElementById("humburger");
const ulList = document.getElementById("ul-list");

humburgerBtn.addEventListener("click", humburgerToggle);

function humburgerToggle(){
    ulList.classList.toggle("show")
}

const headerLink = document.querySelectorAll(".header-link");
console.log(headerLink)
for (let i = 0; i < headerLink.length; i++){
    headerLink[i].addEventListener("click", () =>{
        headerLink[i].classList.toggle("change")
    })
}
