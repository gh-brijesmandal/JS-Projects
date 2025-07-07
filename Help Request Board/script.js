let requests = JSON.parse((localStorage.getItem("requests")) || []); 

let submitData = [];

function saveData(submitData) {
    let jsonString = JSON.stringify(submitData);
    localStorage.setItem("requests",jsonString);
}


document.querySelector(".form").addEventListener("submit", (e)=> {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let category = document.getElementById("category").value.trim();
    let description = document.getElementById("description").value.trim();

    let data = {
        "name": name,
        "category": category,
        "description": description,
    }

    submitData.push(data);
    saveData(submitData);

    this.reset()
})

document.getElementById("see-requests").addEventListener("click",() => {
    let container = document.querySelector(".requests-container");
    container.innerHTML = "";

    if (requests == [])
    {
        alert("No data to display!");
        return NaN;
    }
    requests.forEach(req => {
        
    });
});