const button = document.querySelector("button")
const result = document.getElementById("result")

button.addEventListener("click",()=>{
    const date1 = document.getElementById("date1").value
    const date2 = document.getElementById("date2").value

    const startDate = new Date(date1)
    const endtDate = new Date(date2)

    const times = Math.abs(endtDate - startDate)
    const days = Math.round(times/(1000*60*60*24))
    result.innerText=+days+" Days"+ " Apart"
})