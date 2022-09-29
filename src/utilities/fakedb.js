// use local storage to manage cart data
const addToDb = id => {
    let exerciseCart = {};

    //get the exercise cart from local storage
    const storedCart = localStorage.getItem('exercise-cart');
    if (storedCart) {
        exerciseCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = exerciseCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        exerciseCart[id] = newQuantity;
    }
    else {
        exerciseCart[id] = 1;
    }
    localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart));
}
const getStoredCart = () => {
    let exerciseCart = {};

    //get the exercise cart from local storage
    const storedCart = localStorage.getItem('exercise-cart');
    if (storedCart) {
        exerciseCart = JSON.parse(storedCart);
    }
    return exerciseCart;
}
const removeFromDb = id => {
    const storedCart = localStorage.getItem('exercise-cart');
    if (storedCart) {
        const exerciseCart = JSON.parse(storedCart);
        if (id in exerciseCart) {
            delete exerciseCart[id];
            localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart));
        }
    }
}

export {
    addToDb,
    getStoredCart,
    removeFromDb
}