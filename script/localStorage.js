const saveToLocalStorage = (getName) => {
    let favorites = getLocalStorage();

    if(!favorites.includes(getName)) {
        favorites.push(getName);
    }
    localStorage.setItem("Favorites", JSON.stringify(favorites))
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = (getName) => {
    let favorites = getLocalStorage();

    let namedIndex = favorites.indexOf(getName);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage}