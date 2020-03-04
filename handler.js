const array = {
    numbers: [],
    others: []
}
const inputField = document.getElementById("inputField");
const numberDisplay = document.getElementById("numberDisplay");
const othersDisplay = document.getElementById("othersDisplay");

const proceed = () => {

    console.log("proceed");
    console.log(!(isNaN(inputField.value)))
    if (!isNaN(inputField.value)) {
        array.numbers.push(Number(inputField.value))
    } else {
        array.others.push(inputField.value)
    }
    refreshLists();

}

function refreshLists() {

    numberDisplay.innerHTML = array.numbers.map(y => `<div class="sub-box"><span>${y}</span><span style="float:right; margin-right:3px;" onClick="dropNumber('${y}')"><i class="fa fa-times" aria-hidden="true"></i><span></div>`).join('');
    othersDisplay.innerHTML = array.others.map(y => `<div class="sub-box"><span>${y}</span><span style="float:right; margin-right:3px;" onClick="dropOther('${y}')"><i class="fa fa-times" aria-hidden="true"></i><span></div>`).join('');

}

function dropOther(other) {
    console.log("dropOther")
    array.others.splice(array.others.indexOf(other), 1);
    refreshLists();

}

function dropNumber(number) {
    console.log(typeof number);
    console.log(Number(number));
    console.log(array.numbers.indexOf(Number(number)))
    array.numbers.splice(array.numbers.indexOf(Number(number)), 1);
    refreshLists();
}