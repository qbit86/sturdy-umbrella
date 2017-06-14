function foobar(id) {
    const question = "Press a button!\nBut choose wisely.";
    const answer = window.confirm(question);
    const element = document.getElementById(id);
    if (answer == true) {
        element.setAttribute("style", "color: green");
    } else {
        element.setAttribute("style", "color: red");
    }
}
