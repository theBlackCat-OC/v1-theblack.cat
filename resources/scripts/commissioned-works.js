const tagContainer = document.getElementById('tagContainer');
const gallery = document.getElementById('gallery');

const tags = [
  { name: 'NSFW', backgroundColor: '#ad1a00' },
  { name: 'Suggestive', backgroundColor: '#f5a92f' },
  { name: 'Erotica', backgroundColor: '#f75a2a' },
  { name: 'Pornographic', backgroundColor: '#f72a2a' },
  { name: 'Degen', backgroundColor: '#b62af7' },
  { name: 'SafeForWork', backgroundColor: '#2ac955' },
  { name: 'Fullbody', backgroundColor: '#f57dad' },
  { name: 'Halfbody', backgroundColor: '#2af791' },
  { name: 'Portrait', backgroundColor: '#2a83f7' },
];

function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  tagElement.addEventListener('click', function () {
    const isExclusiveTag = ['NSFW', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'SafeForWork', 'Fullbody', 'Halfbody', 'Portrait'].includes(tag.name);
    
    // If the clicked tag is an exclusive tag, deselect all other tags in the same category.
    if (isExclusiveTag) {
      const exclusiveTags = ['NSFW', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'SafeForWork', 'Fullbody', 'Halfbody', 'Portrait'];
      for (const exclusiveTag of exclusiveTags) {
        const exclusiveTagElement = document.querySelector('.tag-' + exclusiveTag.toLowerCase());
        if (exclusiveTag !== tag.name) {
          exclusiveTagElement.classList.remove('tag-selected');
        }
      }
    }

    // Toggle the clicked tag's selection status.
    tagElement.classList.toggle('tag-selected');
    
    // Update the gallery based on the selected tags.
    updateGallery();
  });

  tagContainer.appendChild(tagElement);
}


function updateGallery() {
  const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected')).map(tag => tag.innerText.toLowerCase());
  const imageCards = document.querySelectorAll('.image-card');

  if (selectedTags.length === 0) {
    // If no tags are selected, hide the gallery
    gallery.style.display = 'none';
  } else {
    gallery.style.display = 'flex';
    for (const card of imageCards) {
      const tagsInCard = card.dataset.tags.toLowerCase();
      const displayCard = selectedTags.every(tag => tagsInCard.includes(tag));
      card.style.display = displayCard ? 'block' : 'none';
    }
  }
}

function createTagElement(tag, imageCard, selected = false) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', selected ? 'tag-selected' : '');
  tagElement.innerText = tag;

  imageCard.appendChild(tagElement);
}

function generateTagsHTML(tags, isDescriptionTag = false) {
  return tags
    .split(' ')
    .map(tag => `<div class="tag ${isDescriptionTag ? 'description-tag' : 'tag-selected'}">${tag}</div>`)
    .join('');
}

function addTagsToCard(imageCard, tags) {
  const imageInfo = imageCard.querySelector('.image-info');
  const tagsParagraph = document.createElement('p');
  tagsParagraph.classList.add('image-tags');

  tagsParagraph.innerHTML = generateTagsHTML(tags, true);

  imageInfo.appendChild(tagsParagraph);
}

function addImageToGallery(mediaSrc, tags, descriptionHTML) {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');
    imageCard.dataset.tags = tags;
  
    const mediaElement = mediaSrc.includes('.mp4')
      ? createVideoElement(mediaSrc)
      : createImageElement(mediaSrc);
  
    const imageInfo = document.createElement('div');
    imageInfo.classList.add('image-info');
  
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerHTML = descriptionHTML;
  
    imageInfo.appendChild(descriptionParagraph);
    imageCard.appendChild(mediaElement);
    imageCard.appendChild(imageInfo);
    gallery.appendChild(imageCard);
  
    addTagsToCard(imageCard, tags);
}

function createImageElement(imageSrc) {
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = 'Image Description';
  return imgElement;
}

function createVideoElement(videoSrc) {
  const videoElement = document.createElement('video');
  videoElement.src = videoSrc;
  videoElement.controls = true;
  return videoElement;
}

tags.forEach(tag => addTagToContainer(tag));

addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-1.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic">Peeking.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-5.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic">Desiring.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-7.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic-bold">Caught.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-8.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic">Going.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-11.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic-bold">Gone.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/romupand/aug-2023/romupand-aug2023-full.png', 'NSFW Erotica', 'Simple Reference Sheet commission by <a href="https://romucommss.carrd.co/" target="_blank">Romupand</a>.<br>Full Version.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/romupand/aug-2023/romupand-aug2023-clothed.png', 'SafeForWork Fullbody', 'Simple Reference Sheet commission by <a href="https://romucommss.carrd.co/" target="_blank">Romupand</a>.<br>Clothed Version.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/romupand/aug-2023/romupand-aug2023-nude.png', 'NSFW Erotica', 'Simple Reference Sheet commission by <a href="https://romucommss.carrd.co/" target="_blank">Romupand</a>.<br>Nude Version.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/nikuyaking1/aug2023.png', 'NSFW Degen', 'Skeb commission by <a href="https://skeb.jp/@nikuyaking1" target="_blank">ニクヤキ</a>.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/korodraws/aug-2023/korodraws-aug2023-clothed.png', 'SafeForWork Suggestive Fullbody', 'Fullbody Character commission by <a href="https://korodraws.carrd.co/" target="_blank">Koro</a>.<br>Clothed version.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/korodraws/aug-2023/korodraws-aug2023-naked.png', 'NSFW Erotica', 'Fullbody Character commission by <a href="https://korodraws.carrd.co/" target="_blank">Koro</a>.<br>Naked version.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/korodraws/aug-2023/korodraws-aug2023-full.png', 'NSFW Erotica', 'Fullbody Character Study commission by <a href="https://korodraws.carrd.co/" target="_blank">Koro</a>.<br>Full version.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/iaminsamity/ych-jul2023.png', 'NSFW Pornographic', 'YCH version 2A commission from <a href="https://iaminsamity.carrd.co/" target="_blank">SAMANTHA</a>.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/MiFa/fullbody-tentacle-rape/v1.png', 'NSFW Degen', 'Fullbody commission from <a href="https://www.patreon.com/Ozzay041" target="_blank">MiFa</a>.<br><span class="latex-italic">Feeling it.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/MiFa/fullbody-tentacle-rape/v2.png', 'NSFW Degen', 'Fullbody commission from <a href="https://www.patreon.com/Ozzay041" target="_blank">MiFa</a>.<br><span class="latex-italic-bold">Really</span><span class="latex-italic"> Feeling it.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/MiFa/fullbody-tentacle-rape/v3.png', 'NSFW Degen', 'Fullbody commission from <a href="https://www.patreon.com/Ozzay041" target="_blank">MiFa</a>.<br><span class="latex-italic-bold">Cummin.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/hamo19574270/hamo19574270-fullbody.png', 'NSFW Degen', 'Skeb commission from <a href="https://skeb.jp/@hamo19574270" target="_blank">鱧</a>.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/chaosringen/chaosringen-fullbody-bust.png', 'SafeForWork Suggestive Portrait', 'Full render portrait commission by <a href="https://linktr.ee/chaosringen" target="_blank">chaosringen</a>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/juurikun/juurikun-sketchy-fullbody.png', 'SafeForWork Fullbody', 'Sketchy fullbody artwork commission by <a href="https://www.instagram.com/juurikun/" target="_blank">juurikun</a><br>🙏');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/chaosringen/chaosringen-fullbody-sketch.jpg', 'SafeForWork Suggestive Portrait', 'Sketch for a full render portrait commission by <a href="https://linktr.ee/chaosringen" target="_blank">chaosringen</a>');
