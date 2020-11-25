/* Set the style */ 
var styles = `
    * { cursor: none !important; }
    @media (pointer: fine) {
        * { pointer-events: none !important; }
    }
    .noMouseDays-active:before {
        background-color: darkred !important;
        box-sizing: border-box !important;
        content: 'No Mouse Days is hiding the mouse cursor. Test with your keyboard. More info: https://www.a11yproject.com/posts/2020-10-15-no-mouse-days';
        color: white !important;
        display: block !important;
        padding: 1rem !important;
        text-align: center !important;
        width: 100% !important;
    }
`;

function createBanner() {
    var body = document.body;
    body.classList.add('noMouseDays-active');
}

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

    createBanner();
}
    
/* Function call */
window.onload = function() {
    addStyle(styles)
}