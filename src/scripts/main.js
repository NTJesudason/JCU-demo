// import CSS - Required for compiling
import '@styles/main.scss';

// Web team scripts
import './common/side-navigation';
import './common/header';
import './common/footer';

// Import global component scripts
import './_global-component-js/overflow-drag-scroll';
import './_global-component-js/overflow-scrollwheel-scroll';

// Import component scripts
import '../../dxp/components/multi-column/multi-column';

// Dynamically load in client side component JS
export const components = import.meta.glob(
    '../../dxp/component-service/**/js/frontend.js',
    { eager: true }
);
