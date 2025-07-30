document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.getElementsByClassName(`scrollwheel-scroll`)).forEach(element => {
        element.addEventListener(`wheel`, function(e) {
            // prevent page scrolling
            e.preventDefault();

            // Set element leftscroll based on vertical scroll
            element.scrollLeft += e.deltaY;
        }, {passive: false});
    });
});