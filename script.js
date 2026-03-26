const redColor = document.querySelector("#red");
const greenColor = document.querySelector("#green");
const blueColor = document.querySelector("#blue");
const viewColor = document.querySelector("#color-preview");
const hexColor = document.querySelector("#hex-code");

function getHexColor(num) {

        const hex = Number(num).toString(16);

        if(hex.length === 1){
            return "0" + hex;
        } else {
            return hex;
        }

}


function updateColor(color) {
    viewColor.style.backgroundColor = `rgb(${redColor.value}, ${greenColor.value}, ${blueColor.value})`;

    hexColor.textContent = `#${getHexColor(redColor.value)}${getHexColor(greenColor.value)}${getHexColor(blueColor.value)}`;
}


redColor.addEventListener("input", updateColor);

greenColor.addEventListener("input",updateColor);

blueColor.addEventListener("input", updateColor);

