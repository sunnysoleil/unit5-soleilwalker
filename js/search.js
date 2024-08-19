let inputField = document.querySelector("input");
inputField.addEventListener("keyup", searchFunction);

function searchFunction() {
    let currentInput = inputField.value.toLowerCase();
    let galleryItem = document.querySelectorAll("a");
    galleryItem.forEach(photo => {
        let photoCaption = photo.getAttribute('data-caption').toLowerCase();
        if (!photoCaption.includes(currentInput)) {
            photo.style.display = "none";
        } else {
            photo.style.display = "";
        }
    });
}
