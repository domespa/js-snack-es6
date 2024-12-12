// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
    {
        bikesName: "Bianchi",
        bikesWeight: 7.5
    },

    {
        bikesName: "Atala",
        bikesWeight: 8
    },

    {
        bikesName: "Olmo",
        bikesWeight: 7
    },

    {
        bikesName: "Casati",
        bikesWeight: 8.5
    },

    {
        bikesName: "Pistidda",
        bikesWeight: 12
    }
]
let lightBikes = bikes[0];

for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].bikesWeight < lightBikes.bikesWeight) {
        lightBikes = bikes[i]
    }
}

console.log(bikes)
console.log(lightBikes)