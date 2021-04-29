/**
 * Insert a favicon on the DOM
 * @param {HTMLImageElement} icon 
 * @returns HTMLHeadElement
 */
const favicon = (icon) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = icon;
  
    return link;
}

/**
 * Display year on the DOM
 * @param {HTMLElement} year 
 */
 const displayYear = (year)=> {
    let date = new Date(); 
    year.innerHTML = `${date.getFullYear()}`; 
}

/**
 * Disable an input
 * @param {HTMLInputElement} element 
 */
const disableInput = (element) => {
    element.disabled = true;
}

/**
 * Undisable an input
 * @param {HTMLInputElement} element 
 */
const undisableInput = (element) => {
    element.disabled = false;
}
  


export {favicon, displayYear, disableInput, undisableInput}