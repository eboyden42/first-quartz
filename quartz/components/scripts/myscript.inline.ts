const btn = document.getElementById("btn");
const numEl = document.getElementById("num")
const numText = numEl?.textContent;
let num = numText ? parseInt(numText, 10) : 0;


if (btn) {
    btn.onclick = () => {
        num ++
        if (numEl) {
            numEl.textContent = num.toString();    
        }    
    }
}