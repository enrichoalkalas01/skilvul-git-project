
function getFormData() {
    let username = document.getElementById("username").value

    // let defaultUsername = username || 'john doe'
    let defaultUsername = username ? username : 'john doe'
    let trueUsername = defaultUsername === 'enricho' ? defaultUsername : 'kosong'
    // console.log(trueUsername)

    let value = 2
    switch(value) {
        case 1: 
            console.log(1)
            break
        case 2:
            console.log(2)
            break
        default:
            console.log(0)
    }
}

getFormData()

let createElementScript = document.createElement("script")
createElementScript.innerHTML = `
    let namaSaya = "annisa"
    console.log(namaSaya)
`

let bodyElement = document.querySelector("body")
bodyElement.appendChild(createElementScript)
// console.log(createElementScript)

// document.getElementById("button").addEventListener("click", function(e) {
//     console.log(e.currentTarget.style)
// })

// document.getElementById("button").innerHTML = 'Submit'
// document.getElementById("button").textContent = 'Submit'

let hasil = 0
for ( let i = 0; i < 5; i++ ) {
    hasil += i
}

// console.log(hasil)

let angka = 0
while(angka <= 10) {
    console.log(angka)
    angka++
}

let bensin = 0
do {
    console.log("Nyalakan Bensin!")
    bensin++
} while( bensin < 10 )

for ( let i = 0; i < 5; i++ ) {
    for ( let x = 0; x < i; x++ ) {
        console.log(i, x)
    }
}