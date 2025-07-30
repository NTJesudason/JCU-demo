export class htmlTemplates {
    constructor(uniqueID, headerText, backgroundColour, paddingTop, paddingBottom,
        {
            additionalHeaderClass = undefined, additionalWrapperClass = undefined, introText = undefined
        } = {}
    ) {
        this.uniqueID = uniqueID?.trim().replaceAll(` `, `-`).toLowerCase();
        this.headerText = headerText;
        this.paddingTop = paddingTop;
        this.paddingBottom = paddingBottom;
        this.additionalHeaderClass = additionalHeaderClass;
        this.additionalWrapperClass = additionalWrapperClass;
        this.introText = introText;
        this.backgroundColour = backgroundColour || `bg-white`;
    }

    getComponentTemplateOpen() {
        const wrapperClasses = [
            `wrapper`,
            this.backgroundColour,
            this.additionalWrapperClass,
            this.paddingBottom === `default` ? null : this.paddingBottom,
            this.paddingTop === `default` ? null : this.paddingTop,
        ].filter(Boolean).join(` `);

        const wrapperTemplate = `
            <section ${this.uniqueID ? `id="${this.uniqueID}"` : ``} class="${wrapperClasses}">
        `;

        const headerTemplate = this.headerText
            ? `
                <!-- Generic component header -->
                <h2 class="m-b-250 ${this.additionalHeaderClass ? this.additionalHeaderClass : ``}">${this.headerText}</h2>
            ` : ``;

        const introTemplate = this.introText
            ? `
                <!-- Generic component intro -->
                <summary>${this.introText}</summary>
            ` : ``;

        return `
            <!-- Start of generic component template -->
            ${wrapperTemplate}
                <!-- Generic component column width -->
                <div class="container">
                    ${headerTemplate}
                    ${introTemplate}
                    <!-- End of generic component template -->
        `
    }

    getComponentTemplateClose() {
        return `
                        </div>
                    </section>
                `
    }
};