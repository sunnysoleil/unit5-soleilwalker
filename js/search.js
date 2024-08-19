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

/** DESCRIPTION - search.js - Creates filter function for gallery using the input field and image data-caption.
* 
* Set @name inputField to get "input" tag in document , using @method querySelector().
* - Add @method addEventListener to @name inputField to then use @event keyup to call @function searchFunction whenever the user types something.
* 
* Create @function searchFunction - to take the current input value and loops through each gallery item.
*
* - Set @name currentInput to get the current input from @name inputField.
*   - Add .value property to grab the value.
*   - Add .toLowerCase() method to convert the value to lowercase.
*
* - Set @name galleryItem to get ALL "a" tag in document , using @method querySelectorAll().

* - Create @method foreach() to perform function on results of @name galleryItem.
*   - @param {object} photo - represents each individual result of @name galleryItem.
*
*   - Set @name photoCaption to iterate over all results from @name galleryItem and retrieve their value from data-caption attribute.
*       - Add .getAttribute('data-caption') to get the caption.
*       - Add .toLowerCase() method to convert the caption to lowercase.
*       - if @name photoCaption does NOT include the @name currentInput , using false boolean and .includes() method.
*           - Set @name photo.style.display to "none" to hide the image , using .style property to get styling attribute and .display to get display property.
*       - else
*           - Set @name photo.style.display to "" to leave display attribute of image as is , using .style property to get styling attribute and .display to get display property.
* endFunction
*/