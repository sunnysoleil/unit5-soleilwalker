let inputField = document.querySelector("input");
inputField.addEventListener("keyup", searchFunction);

function searchFunction() {
    let currentInput = inputField.value.toLowerCase;
    let galleryItem = document.querySelectorAll("a");
    for (i = 0; i < galleryItem.length; i++) {
        let caption = galleryItem[i].getAttribute('data-caption');
        if (caption.toLowerCase().includes(currentInput)) {
            caption[i].style.display = "";
        } else {
            caption[i].style.display = "none";
        }
    }
}

