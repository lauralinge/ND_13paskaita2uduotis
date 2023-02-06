"use strict"

// ANTRA UŽDUOTIS
// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai
// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

    // 2 uzduotis

    // Functions, objects and mathematics
var salys = [
    {name: "Islandija", plotas: 103000, skaicius: 321857},
    {name: "Čekija", plotas: 78871, skaicius: 10701777},
    {name: "Austrija", plotas: 83879, skaicius: 8935112},
    {name: "Lietuva", plotas: 65300, skaicius: 2840758},
    {name: "Slovakija", plotas: 49035, skaicius: 5460185}
]

function averageLikes(name, plotas, skaicius){
    //  Mathematics
     var average = (plotas*1000000) / skaicius
 
     // Console
     console.log(name + ", joje gyvena " + skaicius + " gyventojų.")
     console.log("Valstybės plotas: " + plotas + " km², " + "plotas tenkantis vienam gyventojui: " + average.toFixed(2) + " m²." )
     console.log("========")
}

console.log("============ Functions ===========")
for(var user of salys) {
    averageLikes(user.name, user.plotas, user.skaicius)
}
