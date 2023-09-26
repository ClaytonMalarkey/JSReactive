
function makeOrange(details) {
    details[`target`][`style`][`backgroundColor`] = `orange`;
}
let test1 = document.getElementById("test1");
test1.addEventListener(`click`, makeOrange);

function changeToH1(){
    console.log("doubleclicking");
    test2.outerHTML = "<h1>changed</h1>";
    
}
let test2 = document.getElementById("test2");
test2.addEventListener("dblclick", changeToH1)

function addThreePTags () {
    test3.insertAdjacentHTML(`afterend`, `<p>I AM AFTER</p><p>I AM AFTER</p><p>I AM AFTER</p>`);
}

let test3 = document.getElementById("test3");
test3.addEventListener("mouseover", addThreePTags)