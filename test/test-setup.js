const clicks = []

document.addEventListener("click", (event) => clicks.push(event))

document.addEventListener("click", () => console.log('CLICK', clicks))

