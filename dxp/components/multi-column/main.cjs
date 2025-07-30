import { htmlTemplates } from "../../../src/scripts/_global-component-js/html-component-wrappers";

export default {
    async main({uniqueID, backgroundColour, headerText, paddingTop, paddingBottom, items}) {
    var template = new htmlTemplates(uniqueID, headerText, backgroundColour, paddingTop, paddingBottom);

    return  `
            ${template.getComponentTemplateOpen()}
                <div class="grid-12 multi-column_wrapper--finder">
                    ${createColumns(items, headerText, backgroundColour)}
                </div>
            ${template.getComponentTemplateClose()}
            `;
    }
}

function createColumns(items, headerText, backgroundColour) {
    const itemsLength = items.length;
    const ctaBorder = backgroundColour === `bg-ocean-3` ? `` : `border-primary-colour`;

    let columns = items.map((item) => { 
        const borderClass = itemsLength > 1 ? ` border-left-med p-l-100-med` : ``;
        const columnClasses = `col-12 m-b-0-med ${itemsLength === 1 ? `col-7-med` : `col-${10 - (2 * items.length)}-med`}`;

        const columnHeaderTag = headerText ? `h3` : `h2`;
        const columnHeaderHTML = item.columnHeader 
            ? `<${columnHeaderTag} class="m-b-0-med p-b-250-med${borderClass}">${item.columnHeader}</${columnHeaderTag}>` 
            : ``;

        return `
            <summary class="${columnClasses}">
                ${columnHeaderHTML}
                <div class="multi-column__content${borderClass}">
                    <div>${item.columnText}</div>
                    ${createCTA(item, items, ctaBorder)}
            </summary>
        `
    });

    return columns.join(` `)
}

function createCTA(item, items, ctaBorder) {
    if(item.cta) {
        return `</div>
                <a class="arrow-r-bg-before arrow-r-bg-s flex-inline justify-center align-center border-left-med ${ctaBorder} f-primary-dark p-l-100-med multi-column__cta" href="${item.cta.url}">
                    <span class="m-l-100">${item.cta.text}</span>
                </a>`
    } 
    
    else if(item.dropDownContent) {
        return `
                <div class="d-none multi-column__dropdown--content">${item.dropDownContent}</div>
            </div>
            <button class="btn-no-style plus-bg-before flex justify-center align-center border-left-med p-l-100-med multi-column__button--finder">
                <span class="m-l-100">Read More</span>
            </button>
            `
    }

    // Adds dummy space if more than 1 item. Assumes there is a cta or dropdown
    return `</div>${items.length > 1 ? `<div class="p-t-150 border-left-med"></div>` : ``}` 
}