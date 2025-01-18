const getRandomElementFromArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Expected an array");
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

export default getRandomElementFromArray;