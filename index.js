/* Set the style */ 
var styles = '* { cursor: none !important; }';

/* Function to add style element */
function addStyle(styles) {
    /* Create style document */
    var css = document.createElement('style');
    css.type = 'text/css';
    
    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    } else {
        css.appendChild(document.createTextNode(styles));
    }
        
    /* Append style to the tag name */ 
    document.getElementsByTagName("head")[0].appendChild(css); 
}

/* Function to add an overlay which will block all mouse interaction with the page */
function addOverlay() {
    // create new div element
    var overlay = document.createElement('div');
    
    // element styles - sets an invisible layer on top of the page.
    overlay.setAttribute('style', `
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 999999;
    `);

    // append element to the html body
    document.body.appendChild(overlay);
}
    
/* Function call */
window.onload = function() {
    addStyle(styles);
    addOverlay();
}
