function toggleElementDisplay(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = element.style.display === "none" ? "" : "none";
  }
  
  document.getElementById("header-name").addEventListener("click", function(event) {
    toggleElementDisplay("bubble-chat");
    event.stopPropagation(); // Prevent bubbling up to the document click event
  });
  
  document.getElementById("site-map").addEventListener("click", function(event) {
    toggleElementDisplay("bubble-chat");
    event.stopPropagation(); // Prevent bubbling up to the document click event
  });
  
  document.addEventListener("click", function(event) {
    // Check if the click occurred outside the header-name, bubble-chat, and site-map elements
    var headerNameButton = document.getElementById("header-name");
    var bubbleChatDiv = document.getElementById("bubble-chat");
    var siteMapDiv = document.getElementById("site-map");
    
    if (event.target !== headerNameButton && !bubbleChatDiv.contains(event.target) && !siteMapDiv.contains(event.target)) {
      hideElement("bubble-chat");
    }
  });
  
  function hideElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "none";
  }
  