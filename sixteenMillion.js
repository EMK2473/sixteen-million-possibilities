export const generateRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    const length = Math.floor(Math.random() * 5) + 2; // Random number between 2 and 6
    let color = "#";
    for (let i = 0; i < length; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};