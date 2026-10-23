function multTable() {
    let something = document.getElementById("input")
    let input = Number(something.value)

    for(let i=0; i<10; i++){
        printTable(i, input)
        console.log(`${input} x ${i} = ${input*i}`)
    }
}

let count = 0;
function printTable(i, input) {
    let child = document.createElement("p");
    child.innerHTML = `${input} x ${i} = ${input*i}`;

    let div = document.getElementById("div");
    div.appendChild(child);
}