
const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('stored-read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const getStoredWishList = () => {
    const storedWishListBooks = localStorage.getItem('stored-Wish-List-books');
    if(storedWishListBooks){
        return JSON.parse(storedWishListBooks);
    }
    return [];
}

const saveReadBooks = (id) => {
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.find(bookId => bookId === id);
    const storedWishListBooks = getStoredWishList();
    const existsInWishLst = storedWishListBooks.find((bookId) => bookId === id);

    if(existsInWishLst){
        const newWishListData = storedWishListBooks.filter((bookId) => bookId !== id);
        localStorage.setItem('stored-Wish-List-books', JSON.stringify(newWishListData))
    }

    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('stored-read-books', JSON.stringify(storedReadBooks));
        return 1;
    }
    return 0;
}


const saveInWishList = (id) => {
    const storedReadBooks = getStoredReadBooks();
    const isAlreadyRead = storedReadBooks.find(bookId => bookId === id);
    const storedWishListBooks = getStoredWishList();
    const exists = storedWishListBooks.find((bookId) => bookId === id);
    if(isAlreadyRead) return 1;
    if(!exists){
        storedWishListBooks.push(id);
        localStorage.setItem('stored-Wish-List-books', JSON.stringify(storedWishListBooks));
        return 3;
    }
    return 2;
}

export {getStoredReadBooks,getStoredWishList,saveReadBooks, saveInWishList};