var imena = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (var i = 0; i < imena.length; i++) {
//   console.log(i, imena[i]);
// }

// var podniz1 = imena[0];
// for (var j = 0; j < podniz1.length; j++) {
//   console.log("J = " + j + " : " + podniz1[j]);
// }

// var podniz2 = imena[1];
// for (var x = 0; x < podniz2.length; x++) {
//   console.log("X = " + x + " : " + podniz2[x]);
// }

// var podniz3 = imena[2];
// for (var y = 0; y < podniz3.length; y++) {
//   console.log("Y = " + y + " : " + podniz3[y]);
// }

for (var i = 0; i < imena.length; i++) {
  var podniz = imena[i];
  console.log(podniz);
  for (var j = 0; j < podniz.length; j++) {
    var clan = podniz[j];
    if (clan % 2 === 0) {
      console.log("paran clan ", clan);
    } else {
      console.warn("neparan clan ", clan);
    }
  }
}

var matrica = [
  [
    [1.1, 1.2, 1.3],
    [1.4, 1.5, 1.6],
    [1.7, 1.8, 1.9],
  ],
  [
    [2.1, 2.2, 2.3],
    [2.4, 2.5, 2.6],
    [2.7, 2.8, 2.9],
  ],
  [
    [3.1, 3.2, 3.3],
    [3.4, 3.5, 3.6],
    [3.7, 3.8, 3.9],
  ],
];
console.clear();
for (var i = 0; i < matrica.length; i++)
  for (var j = 0; j < matrica[i].length; j++)
    for (var k = 0; k < matrica[i][j].length; k++)
      console.log("K: ", matrica[i][j][k]);

console.clear();
var zaposleni = [
  [
    "pera",
    "mika",
    "djoka",
    "pera2",
    "mika2",
    "djoka2",
    "pera3",
    "mika3",
    "djoka3",
  ],
  [23, 22, 33, 232, 222, 332, 233, 223, 333],
  [
    "dragica",
    "jelena",
    "jovana",
    "dragica2",
    "jelena2",
    "jovana2",
    "dragica2",
    "jelena2",
    "jovana3",
  ],
  [
    "dzeki",
    "cuki",
    "paki",
    "dzeki2",
    "cuki2",
    "paki2",
    "dzeki3",
    "cuki3",
    "paki3",
  ],
];
// > pera 23 dragica dzeki
// > mika 22 jelena cuki
// > djoka 33 jovana paki

console.log(zaposleni);
for (var i = 0; i < zaposleni.length; i++) {
  console.log(zaposleni[i]);
}
// ! Niz zena = zaposleni[2]

// * Bitno nam je da znamo duzine podnizova
// ! zaposleni[3].length == zaposleni[2].length == zaposleni[1].length == zaposleni[0].length
for (var j = 0; j < zaposleni[0].length; j++) {
  console.log(
    zaposleni[0][j],
    zaposleni[1][j],
    zaposleni[2][j],
    zaposleni[3][j]
  );
}

var array = [
  true,
  false,
  "a",
  "b",
  1,
  2,
  { name: "First", arr: [1.1, 1.2, 1.3] },
  [3, 4, 5],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
  function () {
    console.log("Cao , ja sma funkcija");
  },
];

console.log(array);
console.log("***", array[6].arr[1]);

// Zadatak

var matrica = [
  [1, 6, 9, 8, 0],
  [7, 4, 8, 2, 4],
  [5, 6, 6, 1, 1],
  [5, 7, 7, 9, 3],
  [3, 2, 2, 2, 2],
];
// Koliko ima parnih brojeva u svakom redu?
// Koliko ima parnih a koliko neparnih brojeva u svakom redu?
// 1 treba da se prodje kroz matricu
// videti da li je broj paran ili neparan
// povecati odgovarajuci brojac
// kada zavrsimo sa redom u konzoli ispisati : red 1 ima 2 parna broja || red 1 ima 1 neparna broja
// Posle red avratiti brojace na 0

console.clear();
// ** var parni = 0;
// ** var neparni = 0;
for (var i = 0; i < matrica.length; i++) {
  console.log(matrica[i]);
  var parni = 0;
  var neparni = 0;
  for (var j = 0; j < matrica[i].length; j++) {
    var clan = matrica[i][j];
    if (clan % 2 === 0) {
      console.log("Paran", clan);
      parni++;
    } else {
      console.log("Neparan", clan);
      neparni++;
    }
  }
  console.log(
    `red ${i + 1} ima ${parni} parna broja || red ${
      i + 1
    } ima ${neparni} neparna proja`
  );
  //   ** parni = 0;
  //   ** neparni = 0;
}
