

function showMore() {
    var content = document.getElementById("content");
    var button = document.getElementById("readMoreButton");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "Read Less";
    } else {
        content.style.display = "none";
        button.innerHTML = "Read More";
    }
}