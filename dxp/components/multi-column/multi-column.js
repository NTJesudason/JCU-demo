// Single / Multi column text
// Import breakpoint values
import { breakpoints, debounce } from '../../../src/scripts/globals';

document.addEventListener('DOMContentLoaded', () => {
    setMultiColumnMinHeight(16); // 1rem buffer for margin

    // Dropdown toggle functionality
    document.querySelectorAll('.multi-column__button--finder').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.previousElementSibling?.querySelector('.multi-column__dropdown--content');
            const buttonLabel = button.querySelector('span');

            button.classList.toggle('active');

            // if buttonLabel.textContent = `read more` set buttonlabel.textContent to `read less`
            if (buttonLabel) buttonLabel.textContent = `${buttonLabel.textContent === 'Read More' ? 'Read Less' : 'Read More'}`;

            // jQuery slide toggle
            if (dropdownContent) {
                $(dropdownContent).slideToggle();
            }
        });
    });

    // Set resize once DOM content has loaded
    // Debounce event listener
    const resizeColumns = debounce(() => setMultiColumnMinHeight(), 100);
    window.addEventListener(`resize`, resizeColumns);
});

function setMultiColumnMinHeight(pxBuffer = 0) {
    removeMultiColumnMinHeight();

    if (window.innerWidth <= breakpoints.TABLET) return; // If mobile / tablet view unset min height

    document.querySelectorAll('.multi-column_wrapper--finder').forEach(wrapper => {
        const children = wrapper.querySelectorAll('summary > .multi-column__content > :first-child');
        let tallestContent = 0;
        let tallestHeader = 0;

        children.forEach(child => {
            const contentHeight = child.offsetHeight;
            const header = child.parentElement.previousElementSibling;
            const headerHeight = header?.offsetHeight || 0;

            if (contentHeight > tallestContent) tallestContent = contentHeight;
            if (headerHeight > tallestHeader) tallestHeader = headerHeight;
        });

        children.forEach(child => {
            const summary = child.parentElement;
            const header = summary.previousElementSibling;

            try {
                if (header) {
                    header.style.minHeight = `${tallestHeader - 40}px`; // remove padding
                    summary.style.minHeight = `${tallestContent + pxBuffer}px`;
                } else {
                    summary.style.minHeight = `${tallestContent + tallestHeader + pxBuffer}px`; // Adds them all to the summary, keeps inline w/ w/out header
                }
            } catch (e) {
                console.log('@DEBUG: Failed to set min-height on elements');
            }
        });
    });
}

function removeMultiColumnMinHeight() {
    document.querySelectorAll(`
        .multi-column__content,
        .multi-column_wrapper--finder > summary > h3,
        .multi-column_wrapper--finder > summary > h2
    `).forEach(el => {
        el.style.minHeight = 'unset';
    });
}