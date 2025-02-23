//gaida kamer visa lapa ir ieladejusies
document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("home-button");

    homeButton.addEventListener("click", () => {
        // noiet lidz sekcijai lenam
        window.scrollTo({
            top: document.getElementById("facts").offsetTop,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nextFactBtn = document.getElementById("next-fact");
    const factContainer = document.getElementById("fact-text");

    // atrod kaka faktu
    function fetchFact() {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(data => {
                factContainer.innerText = data.fact;
            })
            .catch(() => {
                factContainer.innerText = "Nevarēja iegūt kaķu faktu.";
            });
    }

    // kad poga ir nospiesta atrod jaunu kaka faktu
    nextFactBtn.addEventListener("click", fetchFact);
});