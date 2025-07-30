export default {
    async main(input, info) {
        // No Template because banner needs to go full width
        return  `
                <section class="hayes-top-banner-wrapper" style="background-image: url(https://www.jcu.edu.au/__data/assets/image/0009/2228148/varieties/fullhd.jpg)">
                    <section class="header--menu--outer-wrapper">
                        <!- Page Name ->
                        ${input.showPageName == true
                            ? `<section class="hayes-top-banner-pagename"><p>Future Students</p></section>` : ``
                        }
                        <section class="hayes-top-banner-container" style="float: ${input.contentSide};">
                            <section class="hayes-top-banner-title-container">
                                <!- Title ->
                                ${input.title != undefined || input.title != `` || input.title != null
                                    ?   `${input.showPageName == true 
                                            ? `<section><h2 class="hayes-top-banner-title">${input.title}</h2></section>` 
                                            : `<section><h1 class="hayes-top-banner-title">${input.title}</h1></section>`
                                        }` 
                                    :   ``
                                }
                                <!- Description ->
                                ${input.description != undefined || input.description != `` || input.description != null
                                    ? `<section><p class="hayes-top-banner-title-description">${input.description}</p></section>` 
                                    : ``
                                }
                            </section>
                            <!- CTA Buttons ->
                            ${createCTA(input.ctaButtons)}
                        </section>
                    </section>
                </section>

                <!- Dropdown Links ->
                ${createDropdownLinks(input.dropdownLinks)}
                `;
    }
}

function createCTA(data) {
    if(data.length == 0) {
        return ``
    }

    var html = `<section class="hayes-top-banner-cta-container">`;
    for(let i = 0; i < data.length; i++) {
        html += `<a class="hayes-top-banner-cta" href="${data[i].link.url}">${data[i].link.text}</a>`;
    }
    html += `</section>`;
    return html
}

function createDropdownLinks(data) {
    if (data.length == 0) {
        return ``
    }

    var html = `<section class="header--menu--outer-wrapper">
                    <button id="hayes-top-banner-dropdown-button" 
                            class="hayes-top-banner-dropdown-button">
                        <p class="arrow-icon">In this section</p>
                    </button>
                </section>
                <div id="hayes-top-banner-dropdown-wrapper" style="display: none;">
                    <section class="header--menu--outer-wrapper">
                        <section class="hayes-top-banner-dropdown">`;
    for(let i = 0; i < data.length; i++) {
        html += `<a class="hayes-top-banner-dropdown-link" href="${data[i].link.url}">${data[i].link.text}</a>`;
    }
        html += `       </section> 
                    </section>
                    <hr class="hayes-top-banner-dropdown-hr">
                </div>`;
    return html
}
