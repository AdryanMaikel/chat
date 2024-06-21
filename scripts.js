import { messagens } from "./load.js"


const user = document.getElementById("user").textContent;
const content = document.getElementById("content");
messagens.forEach(message=>{
    const div = document.createElement("div");
    div.className = user==message.name?"my message":"message"
    const span_name = document.createElement("span");
    span_name.className = "name";
    span_name.textContent = message.name;
    div.appendChild(span_name);
    const span_message = document.createElement("span");
    span_message.className = "text";
    span_message.innerText = message.message;
    div.appendChild(span_message);
    content.appendChild(div);
});
