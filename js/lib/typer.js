let i = 0;
let text = "Welcome in my world !";
let speed = 200;

const typing = () => {
    if (i < text.length) {
        document.getElementById("typer").innerHTML += text[i]
        i++
        setTimeout(typing,speed)
    }
}


typing()