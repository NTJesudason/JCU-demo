// option 1: create dummy image eitherside of scroll with last and first image, when scrolled to instant switch to
// respective opposite with no animation to get back into correct place
// Option 2: have only 3 images on the page at a time, visible image is in the middle, use js to update the left and right
// images and destroy the 4th one create a permenant loop

export default {
    async main(input, info) {
    
    return  `
            <section class="image-slider-overflow">
                ${createBanners(input.bannerContent)}
            </section>
            `;
    }
}
// Dots
    // < section id = "image-slider-dots" class="image_slider_banner-dot_slider-wrapper" >
    //     ${ createDots(input.bannerContent.length) }
    //             </section >
// backup ^^^
    // `
    //         <section class="image-slider-overflow">
    //             <section class="image-slider-wrapper" style="width: calc(100vw * ${input.bannerContent.length})">
    //                 ${createBanners(input.bannerContent)}
    //             </section>
    //             <section id="image-slider-dots" class="image_slider_banner-dot_slider-wrapper">
    //                 ${createDots(input.bannerContent.length)}
    //             </section>
    //         </section>
    //         `;

function createBanners(data) {
    var html = ``;
    
    for(let i = 0; i < data.length; i++) {
        html += `
                <section id="image-slider-banner-${i}" class="image-slider-container" style="background-image: url(${data[i].banners.image.imageVariations.original.url})">
                    
                </section>
                `;
    }

    return html
}

function createDots(length) {
    var html = ``;

    for(let i = 0; i < length; i++) {
        html += `<div class="image_slider_banner-dot_slider" value="image-slider-banner-${i}"></div>`;
    }

    return html
}
