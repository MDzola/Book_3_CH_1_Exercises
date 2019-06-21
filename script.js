
document.querySelector("#lego-btn").addEventListener("click", () => {
    const creator = document.querySelector("#lego-creator").value
    const color = document.querySelector("#lego-color").value
    const shape = document.querySelector("#lego-shape").value
    const creation = document.querySelector("#lego-creation").value

    const legoToSave = {
        creator: creator,
        color: color,
        shape: shape,
        creation: creation
    }
   
     saveLegoData(legoToSave)

})

function saveLegoData(legoToSave){
    fetch("http://localhost:8088/lego", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
}