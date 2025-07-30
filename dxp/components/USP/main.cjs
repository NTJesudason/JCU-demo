import { htmlTemplates } from "../../../src/scripts/_global-component-js/html-component-wrappers";

export default {
    async main({uniqueID, backgroundColour, headerText, items}) {
    var template = new htmlTemplates(uniqueID, headerText, backgroundColour);

    return  `
            ${template.getComponentTemplateOpen()}
                <div class="columns">
                    ${items.length < 2 ?  items.map((item) =>   `
                                                                        <section class="col-2-fluid">
                                                                            <a href="${item.link.url}" class="f-primary-dark external-disabled">
                                                                                <article class="border-left ${item.borderColour}
                                                                                                bg-white
                                                                                                p-t-200 p-b-200
                                                                                                p-l-100 p-r-100
                                                                                                border-box
                                                                                                box-shadow
                                                                                                h-100">
                                                                                    <h3 class="m-0">${item.link.text}</h3>
                                                                                    ${item.description != undefined ? `<p>${item.description}</p>` : ``}
                                                                                </article>
                                                                            </a>
                                                                        </section>
                                                                    `.replace(/ {2,}/g, ' ')).join(``) // .replace uses regex to replace all spaces 2 or larger, keeps the html and dev tool clean
                                                : items.map((item) => `
                                                                        <section class="col-3-fluid">
                                                                            <a href="${item.link.url}" class="f-primary-dark external-disabled">
                                                                                <article class="border-left ${item.borderColour}
                                                                                                bg-white
                                                                                                p-t-200 p-b-200
                                                                                                p-l-100 p-r-100
                                                                                                border-box
                                                                                                box-shadow
                                                                                                h-100">
                                                                                    <h3 class="m-0">${item.link.text}</h3>
                                                                                    ${item.description != undefined ? `<p>${item.description}</p>` : ``}
                                                                                </article>
                                                                            </a>
                                                                        </section>
                                                                    `.replace(/ {2,}/g, ' ')).join(``)}
                </div>
            ${template.getComponentTemplateClose()} 
            `;
    }
}