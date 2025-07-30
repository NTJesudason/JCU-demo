import { breakpoints, debounce, isTablet } from '../../../src/scripts/globals';

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('nav--top-heading');
    const target = document.getElementById('nav--link-wrapper');
    
    // Exit early if the navigation button doesn't exist
    if (!btn || !target) {
        console.log('Hayes wide template');
        return;
    }

    // Set up click handler for navigation toggle
    btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true' || false;

        btn.setAttribute('aria-expanded', !expanded);
        btn.textContent = !expanded ? 'Hide menu' : 'Show menu';
        target.hidden = expanded;    
    };
  });

function handleResponsiveNav() {
    const button = document.getElementById('nav--top-heading');
    const content = document.getElementById('nav--link-wrapper');

    // Exit early if required elements don't exist
    if (!button || !content) {
        return;
    }

    if (isTablet) {
        // Set nav items for desktop view (disable top button)
        button.setAttribute('aria-disabled', '');
        content.removeAttribute('hidden');
    } else {
        // Set nav for mobile (enable top button)
        button.removeAttribute('aria-disabled');
        button.innerText = 'Show menu';
        content.setAttribute('hidden', '');
    }
}

const debouncedResize = debounce(handleResponsiveNav, 200);

document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('nav--top-heading');
    
    //check if page with inside navigation
    if (navButton) {
        handleResponsiveNav();

        window.addEventListener('resize', debouncedResize);
    }
});
