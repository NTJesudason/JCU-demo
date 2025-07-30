// Global variables for export
// For best practice all global variables should be module based

// ----- Variables ------ 

// Breakpoints
export const breakpoints = {
    MOBILE: 480,
    TABLET: 769,
    DESKTOP: 1280
}

// ----- Functions -----

/** 
 * Debounce function
 * Debounce prevents event listeners firing repeatedly 
 * All instances of "resize" & some other cases like "scroll" should use debounce
 * Debounce is a performance enhancer
 * -- USAGE EXAMPLE -- 
 * 100 on the end optional, default 200
 * Have to set function to a variable and then call it in event listener
 * const resizeColumns = debounce(() => setMultiColumnMinHeight(), 100);
 * window.addEventListener(`resize`, resizeColumns);
 */ 
export function debounce(func, timeout = 200){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(this, args) }, timeout);
    };
}

/**
 * Function to check if on a mobile device
 * 
 * Takes no arguments
 * Returns a bool 
 */

export function isMobile(){
    return  window.innerWidth <= breakpoints.MOBILE;
}

export function isTablet(){
    return  window.innerWidth <= breakpoints.TABLET;
}