function toggleTBCDetails() {
    // ... Your existing function code ...

    // Append a query parameter to the URL when showing tBC Char Links
    if (window.history && window.history.pushState) {
        const url = window.location.href;
        const urlWithQueryParam = url + (url.includes("?") ? "&" : "?") + "link=tbc";
        window.history.pushState({ path: urlWithQueryParam }, "", urlWithQueryParam);
    }
}

// Function to toggle the visibility of the Author Links section
function toggleAuthorDetails() {
    // ... Your existing function code ...

    // Append a query parameter to the URL when showing Author Links
    if (window.history && window.history.pushState) {
        const url = window.location.href;
        const urlWithQueryParam = url + (url.includes("?") ? "&" : "?") + "link=author";
        window.history.pushState({ path: urlWithQueryParam }, "", urlWithQueryParam);
    }
}

// Function to toggle the visibility of the Galleries section
function toggleGalleryDetails() {
    // ... Your existing function code ...

    // Append a query parameter to the URL when showing Galleries
    if (window.history && window.history.pushState) {
        const url = window.location.href;
        const urlWithQueryParam = url + (url.includes("?") ? "&" : "?") + "link=galleries";
        window.history.pushState({ path: urlWithQueryParam }, "", urlWithQueryParam);
    }
}

// Function to handle showing divs based on the "link" query parameter
function showDivsBasedOnQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get('link');

    if (link === 'tbc') {
        toggleTBCDetails();
    } else if (link === 'author') {
        toggleAuthorDetails();
    } else if (link === 'galleries') {
        toggleGalleryDetails();
    }
}

// Execute the function on page load to check if there's a query parameter and show the corresponding divs
window.onload = showDivsBasedOnQueryParam;