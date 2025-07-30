import { htmlTemplates } from "../../../src/scripts/_global-component-js/html-component-wrappers";

export default {
    async main({uniqueID, backgroundColour, headerText, paddingTop, paddingBottom, centerHeader, scrollOverflow, stats, references}) {
        // If centerHeader is true return template with f-center else no additional classes
        if(centerHeader == true || centerHeader == `true`) {
            var template = new htmlTemplates(uniqueID, headerText, backgroundColour, paddingTop, paddingBottom, {additionalHeaderClass: `f-center`});
        } else {
            var template = new htmlTemplates(uniqueID, headerText, backgroundColour, paddingTop, paddingBottom);
        }

        return  `
                ${template.getComponentTemplateOpen()}
                    <hr class="m-b-0">
                    <div class="columns nogap f-center m-0${scrollOverflow == true || scrollOverflow == `true` ? ` flex-nowrap overflow_x-auto scrollbar-hide  overflow-scroll scrollwheel-scroll grab` : ``}">
                        ${scrollOverflow == true || scrollOverflow == `true` 
                            ? stats.map(item => `
                                <summary class="col-3-overflow m-b-100 m-t-100 no-select">
                                    <h3 class="f-special-1 m-b-0 f-secondary f-regular">${item.title}</h3>
                                    <p>${item.subTitle}</p>
                                </summary>
                            `).join(``) 
                            : stats.map(item => `
                                <summary class="col-${stats.length}-fluid m-b-100 m-t-100">
                                    <h3 class="f-special-1 m-b-0 f-secondary f-regular">${item.title}</h3>
                                    <p>${item.subTitle}</p>
                                </summary>
                            `).join(``)}
                    </div>
                    <hr class="m-t-0">
                    ${references != undefined && references != `` ? `<summary class="f-center">${references}</summary>` : ``}
                ${template.getComponentTemplateClose()}
                `;
        }
}
