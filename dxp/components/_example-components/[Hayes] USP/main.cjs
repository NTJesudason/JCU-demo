import { htmlTemplates } from "../../_global-js-classes/html-component-wrappers";

export default {
    async main(input, info) {
    var template = new htmlTemplates(info.manifest.name, info.ctx.assetId, input.headerText, input.backgroundColour);

    return  `
            ${template.getHayesTemplateOpen()}
                <section class="hayes-usp-wrapper">
                    ${createCards(input.usp)}
                </section>
            ${template.getHayesTemplateClose()}
            `;
    }
}

function createCards(data) {
    var html = ``;
    for(let i = 0; i < data.length; i++) {
        html += `   <a href="${data[i].items.link.url}" class="hayes-usp-card ${data[i].items.borderColour}">
                        <article class="hayes-usp-card-container">
                            <h3 class="hayes-usp-text">${data[i].items.link.text}</h3>
                        </article>
                    </a>`
    }
    return html
}
