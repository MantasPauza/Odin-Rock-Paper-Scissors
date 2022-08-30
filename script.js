function getComputerChoise() {
    const choises = ['rock', 'paper', 'scissors'];
    const computerChoises = choises.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    return computerChoises[Math.floor(Math.random() * computerChoises.length)];
}

console.log(getComputerChoise());