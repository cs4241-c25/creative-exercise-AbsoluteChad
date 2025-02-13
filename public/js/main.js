const submit = async function( event ) {
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day
    event.preventDefault()
    
    
}

window.onload = async function() {
    // submit button
    const submitButton = document.querySelector("button#submit");
    if (submitButton !== null) {
        submitButton.onclick = submit;
    }
}