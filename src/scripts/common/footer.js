//SCRIPTS FOR PAGE FOOTER
import { breakpoints, debounce, isMobile } from '../../../src/scripts/globals';

let checkMobile = isMobile();

// Cache DOM elements immediately when DOM is ready
let cachedHeaders;
let cachedContent;

function toggleFooterSection(footer_link_header) {
    // Early return if not mobile - avoid unnecessary work
    if (!checkMobile) return;
    
    const content = footer_link_header.nextElementSibling;
    const isExpanded = footer_link_header.classList.contains('active');
    
    // Batch DOM updates to minimize reflow
    footer_link_header.classList.toggle('active');
    content.classList.toggle('active');
    footer_link_header.setAttribute('aria-expanded', !isExpanded);
}

function handleFooterResize() {
    const wasMobile = checkMobile;
    checkMobile = isMobile();
    
    // Only update if breakpoint actually changed
    if (wasMobile === checkMobile) return;
    
    if (checkMobile) {
        // Mobile: Add accordion ARIA attributes
        cachedHeaders.forEach(header => {
            header.setAttribute('aria-expanded', 'false');
            header.setAttribute('role', 'button');
            header.setAttribute('tabindex', '0');
        });
    } else {
        // Desktop: Remove accordion ARIA attributes
        cachedHeaders.forEach(header => {
            header.removeAttribute('aria-expanded');
            header.removeAttribute('aria-controls');
            header.removeAttribute('role');
            header.removeAttribute('tabindex');
        });
        
        // Remove region role from content
        cachedContent.forEach(contentEl => {
            contentEl.removeAttribute('role');
            contentEl.removeAttribute('aria-labelledby');
        });
    }
}

// Debounced resize handler to prevent excessive calls
const debouncedResize = debounce(handleFooterResize, 150);

// Combined event handler for click and keydown
function handleInteraction(e, footer_link_header) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        if (e.type === 'keydown') e.preventDefault();
        toggleFooterSection(footer_link_header);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements immediately
    cachedHeaders = document.querySelectorAll('.footer--header');
    cachedContent = document.querySelectorAll('.footer--content');
    
    // Initialize mobile state and setup
    handleFooterResize();
    
    // Attach resize listener with debouncing
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    // Use event delegation for better performance with many elements
    const footerContainer = document.querySelector('.footer') || document.body;
    
    footerContainer.addEventListener('click', (e) => {
        const headerElement = e.target.closest('.footer--header');
        if (headerElement) {
            handleInteraction(e, headerElement);
        }
    });
    
    footerContainer.addEventListener('keydown', (e) => {
        const headerElement = e.target.closest('.footer--header');
        if (headerElement) {
            handleInteraction(e, headerElement);
        }
    });
});
