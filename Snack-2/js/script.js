// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        team: "Juve",
        points: 0,
        foulsSuffered: 0
    },

    {
        team: "Milan",
        points: 0,
        foulsSuffered: 0
    },

    {
        team: "Inter",
        points: 0,
        foulsSuffered: 0
    },

    {
        team: "Napoli",
        points: 0,
        foulsSuffered: 0
    },

    {
        team: "Atalanta",
        points: 0,
        foulsSuffered: 0
    },

    {
        team: "Como",
        points: 0,
        foulsSuffered: 0
    },

];

for (let i = 0; i < teams.length; i++){
    teams[i].points = getRndInteger(0, 102); // record punti serie A "JUVENTUS" ⚪⚫❤️
    teams[i].foulsSuffered = getRndInteger(0, 33);
}

for (let i = 0; i < teams.length; i++) { 
        const teamFouls = [];
        teamFouls.push(teams[i].team), 
        teamFouls.push(teams[i].foulsSuffered) ,
        // teamFouls.push(teams[i].points) ,
        console.log(teamFouls)
    };


// console.log(teams)