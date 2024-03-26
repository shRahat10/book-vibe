const getList = (listName) => {
    const itemList = localStorage.getItem(listName);
    if (itemList) {
        return JSON.parse(itemList);
    } else {
        return [];
    }
}

const setReadList = (id) => {
    const readList = getList('read-list');
    const exists = readList.find(item => item === id);

    if (!exists) {
        readList.push(id);
        localStorage.setItem('read-list', JSON.stringify(readList));
        removeFromWishList(id);
    }
}

const setWishList = (id) => {
    const wishList = getList('wish-list');
    const readList = getList('read-list');
    const existsRead = readList.find(item => item === id);
    const existsWish = wishList.find(item => item === id);

    if (!existsRead && !existsWish) {
        wishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(wishList));
    }
}

const removeFromWishList = (id) => {
    const listItem = JSON.parse(localStorage.getItem('wish-list') || []);

    const newList = listItem.filter(item => item !== id);

    localStorage.setItem('wish-list', JSON.stringify(newList));
}

export { getList, setReadList, setWishList };
