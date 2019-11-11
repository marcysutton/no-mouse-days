/* Set the style */ 
var styles = '* { cursor: none !important; } @media (pointer: fine) {* { pointer-events: none !important; } }';

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
    
/* Function call */
window.onload = function() {
    addStyle(styles)
}
