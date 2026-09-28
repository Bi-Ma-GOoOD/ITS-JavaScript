"use strict";

function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if(selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const musicTypes = document.n_selectForm.musicTypes_id;
    console.log(musicTypes);
    alert(`You have selected ${countSelected(musicTypes)} option(s).`);
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
})