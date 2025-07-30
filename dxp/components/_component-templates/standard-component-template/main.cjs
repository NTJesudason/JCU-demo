import { htmlTemplates } from "../../../src/scripts/_global-component-js/html-component-wrappers";

export default {
    async main({uniqueID, backgroundColour, headerText, paddingTop, paddingBottom, introText}) {
    var template = new htmlTemplates(uniqueID, headerText, backgroundColour, paddingTop, paddingBottom, {introText: introText});

    return  `
            ${template.getComponentTemplateOpen()}

            ${template.getComponentTemplateClose()}
            `;
    }
}
