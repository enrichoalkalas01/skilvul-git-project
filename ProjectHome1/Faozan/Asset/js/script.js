// function jamKeDetik(jam, detik) {
//     let totalDetik = (jam * 3600) + detik;
//     return totalDetik;
// }
// let jam = 3
// let detik = ""

// console.log(jamKeDetik(1));

// function test() {
//     let total = 0
//     for (i = 0; i < 100; i++){
//         console.log(total), total++;
//     }
//     return total
// }

// console.log(test())



// function word() {
//     let a = "hallo"
//     let b = "world"
//     let c = ""

//     c = a +" "+ b
//     return c
// }
// console.log(word())

function getAPI(apiURL) {
    return fetch(apiURL)
      .then((res) => {
        if (res.ok) {
          console.log("API sedia di pakai", res.status);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }
  
  getAPI(
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  )
    .then((data) => {
      console.log("Dapet Bang Datanya", data.Games.contributors[5]); // Hanya ambil data games aja laptop saya gak kuat lag
    })
    .catch((err) => {
      console.log(err);
    });
  
