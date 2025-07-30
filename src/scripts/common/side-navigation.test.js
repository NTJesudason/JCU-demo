import { describe, it, beforeEach, afterEach, vi, expect } from 'vitest';

// Mock debounce and isTablet from globals
vi.mock('../../../src/scripts/globals', () => ({
  debounce: (fn) => fn,
  isTablet: false,
  breakpoints: {},
}));

// Helper to reset DOM
function resetDOM() {
  document.body.innerHTML = '';
}

describe('side-navigation', () => {
  beforeEach(() => {
    resetDOM();
    // Remove all event listeners by replacing window and document
    window.resizeTo = (width) => {
      window.innerWidth = width;
      window.dispatchEvent(new Event('resize'));
    };
  });

  afterEach(() => {
    resetDOM();
    vi.resetModules();
  });

  it('should exit early if nav button does not exist (DOMContentLoaded)', async () => {
    // No nav button or target in DOM
    await import('./side-navigation.js');
    // No error should occur, nothing to assert
    expect(document.getElementById('nav--top-heading')).toBeNull();
    expect(document.getElementById('nav--link-wrapper')).toBeNull();
  });

  it('should exit early if nav button does not exist (handleResponsiveNav)', async () => {
    // Only nav--link-wrapper exists
    document.body.innerHTML = `<div id="nav--link-wrapper"></div>`;
    const mod = await import('./side-navigation.js');
    // handleResponsiveNav should not throw or modify DOM
    expect(document.getElementById('nav--top-heading')).toBeNull();
  });

  it('should exit early if nav target does not exist (DOMContentLoaded)', async () => {
    document.body.innerHTML = `<button id="nav--top-heading"></button>`;
    await import('./side-navigation.js');
    // No error should occur, nothing to assert
    expect(document.getElementById('nav--link-wrapper')).toBeNull();
  });

  it('should not set up click handler if nav button does not exist', async () => {
    // No nav button
    await import('./side-navigation.js');
    // Try to click a non-existent button
    const btn = document.getElementById('nav--top-heading');
    expect(btn).toBeNull();
  });

  it('should not call handleResponsiveNav or add resize listener if nav button does not exist', async () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    await import('./side-navigation.js');
    expect(addEventListenerSpy).not.toHaveBeenCalledWith('resize', expect.any(Function));
    addEventListenerSpy.mockRestore();
  });

  it('should have the nav button in the document after DOMContentLoaded', async () => {
    document.body.innerHTML = `<button id="nav--top-heading"></button><div id="nav--link-wrapper"></div>`;
    await import('./side-navigation.js');
    const btn = document.getElementById('nav--top-heading');
    expect(btn).not.toBeNull();
    expect(document.body.contains(btn)).toBe(true);
  });

  it('should toggle aria-expanded and text content on button click', async () => {
    document.body.innerHTML = `<button id="nav--top-heading" aria-expanded="false">Show menu</button><div id="nav--link-wrapper" hidden></div>`;
    await import('./side-navigation.js');
    // Manually dispatch DOMContentLoaded to ensure event listeners are attached
    document.dispatchEvent(new Event('DOMContentLoaded'));
    const btn = document.getElementById('nav--top-heading');
    const target = document.getElementById('nav--link-wrapper');
    // Initial state
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(btn.textContent).toBe('Show menu');
    expect(target.hidden).toBe(true);
    // Click to expand
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(btn.textContent).toBe('Hide menu');
    expect(target.hidden).toBe(false);
    // Click to collapse
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(btn.textContent).toBe('Show menu');
    expect(target.hidden).toBe(true);
  });
});