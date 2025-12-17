function genChar() {
    let charsToUse = document.getElementById("charsToUse").value

    return charsToUse[Math.floor(Math.random() * charsToUse.length)]
}

function genChars() {
    let genLength = document.getElementById("generatedLength").value
    let chars = ""

    console.log(charsToUse.textContent);
    for (let i = 0; i < Number(genLength); i++){
        console.log(genResult);
        chars += genChar()
    }
    
    document.getElementById("genResult").value = chars
    
    // alert(chars)

}

genChars()