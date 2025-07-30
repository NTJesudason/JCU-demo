// Client Side JS goes here
document.getElementById(`hayes-top-banner-dropdown-button`).addEventListener(`click`, function() {
    this.getElementsByTagName(`p`)[0].classList.toggle(`open`)
    $(`#hayes-top-banner-dropdown-wrapper`).slideToggle();
});
