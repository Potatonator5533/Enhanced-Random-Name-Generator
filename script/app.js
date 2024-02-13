import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";

let saveBtn = document.getElementById("saveBtn");


saveBtn.addEventListener('click', () => {
    let favorites = getLocalStorage();

    insertedName.textContent = "";

    favorites.map(name => {
        let p = document.createElement('p');

        p.textContent = name;
        p.className = "flex justify-between col-start-1 w-4/5 text-lg font-medium dark:text-white";

        let button = document.createElement('button');
        button.type = "button";
        button.textContent = "X";
        button.classList.add(
            "bg-cyan-700",
            "rounded-lg",
            "px-6",
            )
        button.addEventListener('click', () => {
            removeFromLocalStorage(name);
            p.remove();
        })
        p.append(button);
        insertedName.append(p);
    })
})

// let getName;

saveBtn.addEventListener('click', (event) => {
    let saveName = document.getElementById("saveName").value;
    saveToLocalStorage(saveName);
})