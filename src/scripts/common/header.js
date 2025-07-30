document.addEventListener('DOMContentLoaded', function() {
    // Count and set position numbers for breadcrumb items
    const breadcrumbItems = document.querySelectorAll('.breadcrumbs--position-metaprop');
    breadcrumbItems.forEach((meta, index) => {
        meta.setAttribute('content', (index + 1).toString());
    });
});

(() => {
    'use strict';
    
    const init = () => {
        const menu = document.getElementById('header--utility-menu');
        if (!menu) return;
        
        const THRESHOLD = 500;
        const CLASS_NAME = 'scroll-hidden';
        
        let isHidden = false;
        let raf = 0;
        
        // Cache classList for direct access
        const classList = menu.classList;
        
        const handleScroll = () => {
            const shouldHide = window.scrollY > THRESHOLD;
            
            if (shouldHide !== isHidden) {
                shouldHide ? classList.add(CLASS_NAME) : classList.remove(CLASS_NAME);
                isHidden = shouldHide;
            }
        };
        
        const onScroll = () => {
            // Cancel previous frame if still pending
            if (raf) return;
            
            raf = requestAnimationFrame(() => {
                handleScroll();
                raf = 0;
            });
        };
        
        // Add listener with passive + capture for maximum performance
        window.addEventListener('scroll', onScroll, { passive: true, capture: true });
        
        // Initial check
        handleScroll();
    };
    
    // Use readyState check for fastest possible execution
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
