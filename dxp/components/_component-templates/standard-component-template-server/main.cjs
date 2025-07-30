import { htmlTemplates } from "../../../src/scripts/_global-component-js/html-component-wrappers";

module.exports = async ({uniqueID, headerText, backgroundColour, paddingTop, paddingBottom, introText}) => {
    var template = new htmlTemplates(uniqueID, headerText, backgroundColour, paddingTop, paddingBottom, {introText: introText});

    return  `
            ${template.getComponentTemplateOpen()}

            ${template.getComponentTemplateClose()}
            `;
}
