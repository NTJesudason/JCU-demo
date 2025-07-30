// Client Side JS goes here
clickDragHorizontal(document.getElementsByClassName(`image-slider-overflow`)[0], 1);

function clickDragHorizontal(element, dragSpeed) {
    // isDown determines when event is activated
    // Declare variables, startX gets mouse position on click and scrollLeft determines how much has been scrolled
    var isDown = false;
    let startX, scrollLeft, scrollX;

    // Event listener for when mouse is clicked
    element.addEventListener(`mousedown`, (e) => {
        isDown = true;

        // Change cursor to grab
        element.classList.add(`grabbed`);
        
        // Get the X position of the mouses starting point
        startX = e.pageX - element.offsetLeft;
        
        // Get scroll position of element
        scrollLeft = element.scrollLeft;
    });

    // Event listener for when mouse leaves div
    element.addEventListener(`mouseleave`, function() {
        isDown = false;

        // Change cursor to normal
        element.classList.remove(`grabbed`);
    });

    // Event listener for when mouse click is released
    element.addEventListener(`mouseup`, function() {
        isDown = false;

        // Change cursor to normal
        element.classList.remove(`grabbed`);

    });

    // Event listener for mouse moving, is always active but only triggers when isDown = true
    element.addEventListener(`mousemove`, (e) => {
        // ends event listener if isDown is false
        if(!isDown) return;

        // Remove the default mousemove event
        e.preventDefault();

        // Calculate the position the mouse has moved to
        var x = e.pageX - element.offsetLeft;

        // Calculate how much the element has to scroll
        scrollX = (x - startX) * dragSpeed;

        // Set the new X position of element
        element.scrollLeft = scrollLeft - scrollX;
    });
}