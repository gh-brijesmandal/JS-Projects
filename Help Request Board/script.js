let requests = JSON.parse(localStorage.getItem("requests")) || [];
let submitData = requests;

function saveData(submitData) {
    let jsonString = JSON.stringify(submitData);
    localStorage.setItem("requests", jsonString);
}

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let category = document.getElementById("category").value.trim();
    let description = document.getElementById("description").value.trim();

    let data = {
        name,
        category,
        description
    };

    submitData.push(data);
    saveData(submitData);

    e.target.reset(); 
});

document.getElementById("see-requests").addEventListener("click", (e) => {
    e.preventDefault();
    let container = document.querySelector(".requests-container");
    container.innerHTML = "";

    if (requests.length === 0) {
        alert("No data to display!");
        return;
    }

    requests.forEach(req => {
        const div = document.createElement("div");
        div.className = "request-card";
        div.innerHTML = `
            <h3>${req.name} needs help with ${req.category}.</h3>
            <p>${req.description}</p>
        `;
        container.appendChild(div);
    });
});

