const generateRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    const length = Math.floor(Math.random() * 5) + 2; 
    let color = "#";
    for (let i = 0; i < length; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// da math:
// For a length of 2 characters: 16^2 = 256 possibilities.
// For a length of 3 characters: 16^3 = 4,096 possibilities.
// For a length of 4 characters: 16^4 = 65,536 possibilities.
// For a length of 5 characters: 16^5 = 1,048,576 possibilities.
// For a length of 6 characters: 16^6 = 16,777,216 possibilities.