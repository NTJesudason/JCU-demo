import { htmlTemplates } from "../../Global JS Classes/html-component-wrappers";

export default {
    async main(input, info) {
    var template = new htmlTemplates(info.manifest.name, info.ctx.assetId, input.headerText, input.backgroundColour);

    return  `
            ${template.getHayesTemplateOpen()}
                <section class="hayes-introduction-text-container">
                    ${input.text}
                </section>
            ${template.getHayesTemplateClose()}
            `;
    }
}
