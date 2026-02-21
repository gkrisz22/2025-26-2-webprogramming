const heading = document.querySelector("h1");

console.log(heading.innerText);
heading.innerText = "<i>Another Text</i>"
heading.innerHTML = "<i>Another another Text in italic</i>"

// Task: change the p's text to "Hello world"

const p = document.querySelector("p");
p.innerText = "Hello world";

document.querySelector("p").innerText = "Hello world 2"

// querySelectorAll: select every element that matches the "p"
const ps = document.querySelectorAll("p");

let index = 0;
for(const item of ps) {
    index++;
    item.innerText = index;
}

const second = document.querySelector("#second");
/*
Tagname - "tagname"
id="myId" - "#myId"
class="myClass" - ".myClass" (usually used with querySelectorAll)
*/

second.style.color = "red";
second.style.backgroundColor = "yellow"
/* In CSS:
    #second {
        color: "red";
        background-color: "yellow";
    }
*/