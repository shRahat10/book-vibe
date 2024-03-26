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
    const exists = readList.includes(id);

    if (!exists) {
        readList.push(id);
        localStorage.setItem('read-list', JSON.stringify(readList));
        removeFromWishList(id);
        return true;
    }
    
    else {
        return false;
    }
}

const setWishList = (id) => {
    const wishList = getList('wish-list');
    const existsWish = wishList.includes(id);
    const readList = getList('read-list');
    const existsRead = readList.includes(id);

    if (!existsRead && !existsWish) {
        wishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(wishList));
        return true;
    }
    
    else if (existsRead) {
        return 'read';
    }
    
    else {
        return false;
    }
}

const removeFromWishList = (id) => {
    const listItem = JSON.parse(localStorage.getItem('wish-list') || []);

    const newList = listItem.filter(item => item !== id);

    localStorage.setItem('wish-list', JSON.stringify(newList));
}

export { getList, setReadList, setWishList };
