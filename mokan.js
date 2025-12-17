function genChar() {
    let charsToUse = "МОКАН"

    return charsToUse[Math.floor(Math.random() * charsToUse.length)]
}

function genMokan() {
    let genLength = 5
    let chars = ""

    for (let i = 0; i < Number(genLength); i++){
        chars += genChar()
    }
    
    return chars + "\n"
    
    // alert(chars)

}

function countMakkan() {
    return document.getElementById("mokanList").value.split("МОКАН").length - 1;
}

function genMokans(){
    document.getElementById("mokanList").value = ""
    for (let i = 0; i < 1000; i++) {
        document.getElementById("mokanList").value += genMokan()
    }
    document.getElementById("luck").innerText = "Удача по макану " + countMakkan() + "/1000"
    // console.log(countMakkan())
}

// for (let i = 0; i < 500; i++){
//     genMokans()
//     let countedMokkans = countMakkan()
//     if (countedMokkans >= 3) {
//         console.log(countedMokkans);
//     }
// }

