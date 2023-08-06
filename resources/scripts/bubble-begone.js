const bubbleTrigger = document.querySelector('.bubble-trigger');
const bubble = document.querySelector('.bubble');
let bubbleVisible = false;

bubbleTrigger.addEventListener('click', () => {
  if (bubbleVisible) {
    hideBubble();
  } else {
    showBubble();
  }
});


document.addEventListener('click', (event) => {
  if (bubbleVisible && !bubble.contains(event.target) && !bubbleTrigger.contains(event.target)) {
    hideBubble();
  }
});

function showBubble() {
  bubble.style.display = 'block';
  bubbleVisible = true;
}

function hideBubble() {
  bubble.style.display = 'none';
  bubbleVisible = false;
}

const bubbleGalleryTrigger = document.querySelector('.bubble-trigger-gallery');
const bubbleGallery = document.querySelector('.bubble-gallery');
let bubbleGalleryVisible = false;

bubbleGalleryTrigger.addEventListener('click', () => {
  if (bubbleGalleryVisible) {
    hideBubbleGallery();
  } else {
    showBubbleGallery();
  }
});


document.addEventListener('click', (event) => {
  if (bubbleGalleryVisible && !bubbleGallery.contains(event.target) && !bubbleGalleryTrigger.contains(event.target)) {
    hideBubble();
  }
});

function showBubbleGallery() {
  bubbleGallery.style.display = 'block';
  bubbleGalleryVisible = true;
}

function hideBubbleGallery() {
  bubbleGallery.style.display = 'none';
  bubbleGalleryVisible = false;
}