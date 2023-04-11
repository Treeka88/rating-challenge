
let rating = document.getElementById("rating")

const ratingItm = document.querySelectorAll(".rating-itm")


ratingItm.forEach((rate) => {
    rate.addEventListener("click", () =>{
        // rating.innerHTML = ratingItm.innerHTML (could not find what im looking for since im using 2 pages :( )
        console.log(rate.innerHTML)
    })
})

function submit(){
    window.location.href = "index2.html";
}

function back(){
    window.location.href = "index.html";
}