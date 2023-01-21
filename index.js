let menu = document.getElementById("menu-btn");

let navbar = document.getElementById("navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

// booking


function myFunction() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    document.write("BOOKING VALUE" + "<br>");
    document.writeln("Name:" + name + "<br>");

    document.write("Email: " + email + "<br>");
    document.write("Number: " + number + "<br>");
    document.write("Date: " + date + "<br>");
    document.write("Time: " + time);

}




