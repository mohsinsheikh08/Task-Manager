let input = document.querySelector("input");
let addButton = document.querySelector(".add-tasks");
let hideButton = document.querySelector(".hide-tasks");
let showButton = document.querySelector(".show-tasks");
let ul = document.querySelector("ul");
let tasks = () => {
    let text = input.value.trim();
    if (text === "") {
        alert("Pelase write anything in the input"); return;
    }
    // li for show the tasks
    let li = document.createElement("li");
    li.classList.add("li")
    ul.appendChild(li)
    input.value = "";
    // span for the text 
    let span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    span.classList.add("li")
    // div for group of buttons
    let YesNo = document.createElement("div");
    YesNo.classList.add("yes-no");
    li.appendChild(YesNo);
    // button OF ✔
    let Yes = document.createElement("button");
    Yes.innerText = "✔";
    Yes.classList.add("correct");
    YesNo.appendChild(Yes);
    // button On ✖
    let No = document.createElement("button");
    No.innerText = "✖";
    No.classList.add("error");
    YesNo.appendChild(No);
    // Add event listener for intract the buttons
    // No is use to remove the li
    No.addEventListener("click", () => {
        ul.removeChild(li)
    })
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            ul.removeChild(li);
        }
    })
    Yes.addEventListener("click", () => {
        span.classList.toggle("done");
        li.classList.toggle("done-li");
    })

}
addButton.addEventListener("click", tasks);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        tasks();
    }
});
let complete = () => {
    ul.style.display = "none"
}
hideButton.addEventListener("click", complete)

let pending = () => {
    ul.style.display = "flex"
}
showButton.addEventListener("click", pending)
