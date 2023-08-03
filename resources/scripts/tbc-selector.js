function toggleTBCDetails() {
  // Get the elements by their IDs
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  // Remove the "display: none;" style from the tbc details
  tbcShowTitleDiv.style.display = '';
  tbcShowContainerDiv.style.display = '';
  tbcShowBackDiv.style.display = '';

  // Add the "display: none;" style to linktree, tbc, and author
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  authorDivContainer.style.display = 'none';

  // Remove the existing click event listener from tbcShowBackDiv
  tbcShowBackDiv.removeEventListener('click', toggleTBCBack);

  // Attach click event to the back button
  tbcShowBackDiv.addEventListener('click', toggleTBCBack);
}

function toggleAuthorDetails() {
  // Get the elements by their IDs
  const authorShowTitleDiv = document.getElementById('author-show-title');
  const authorShowContainerDiv = document.getElementById('author-show-container');
  const authorShowBackDiv = document.getElementById('author-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');

  // Remove the "display: none;" style from the author details
  authorShowTitleDiv.style.display = '';
  authorShowContainerDiv.style.display = '';
  authorShowBackDiv.style.display = '';

  // Add the "display: none;" style to linktree, tbc details, and revert tbc-show
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';

  // Remove the existing click event listener from tbcShowBackDiv
  tbcShowBackDiv.removeEventListener('click', toggleTBCBack);

  // Attach click event to the back button
  authorShowBackDiv.addEventListener('click', toggleAuthorBack);
}

function toggleGalleryDetails() {
  // Get the elements by their IDs
  const galleriesShowTitleDiv = document.getElementById('galleries-show-title');
  const galleriesShowContainerDiv = document.getElementById('galleries-show-container');
  const galleriesShowBackDiv = document.getElementById('galleries-show-back');
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  // Remove the "display: none;" style from the gallery details
  galleriesShowTitleDiv.style.display = '';
  galleriesShowContainerDiv.style.display = '';
  galleriesShowBackDiv.style.display = '';

  // Add the "display: none;" style to tbc details, linktree, tbc, and author
  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  authorDivContainer.style.display = 'none';

  // Remove the existing click event listener from tbcShowBackDiv
  tbcShowBackDiv.removeEventListener('click', toggleTBCBack);

  // Attach click event to the back button
  galleriesShowBackDiv.addEventListener('click', toggleGalleryBack);
}

function toggleTBCBack() {
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';
  linktreeContainerDiv.style.display = '';
  tbcDiv.style.display = '';
  authorDivContainer.style.display = '';
}

function toggleAuthorBack() {
  const authorShowTitleDiv = document.getElementById('author-show-title');
  const authorShowContainerDiv = document.getElementById('author-show-container');
  const authorShowBackDiv = document.getElementById('author-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');

  // Hide author details
  authorShowTitleDiv.style.display = 'none';
  authorShowContainerDiv.style.display = 'none';
  authorShowBackDiv.style.display = 'none';

  // Show linktree, tbc, and tbc-show elements
  linktreeContainerDiv.style.display = '';
  tbcDiv.style.display = '';
  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';

}

function toggleGalleryBack() {
  const galleriesShowTitleDiv = document.getElementById('galleries-show-title');
  const galleriesShowContainerDiv = document.getElementById('galleries-show-container');
  const galleriesShowBackDiv = document.getElementById('galleries-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  galleriesShowTitleDiv.style.display = 'none';
  galleriesShowContainerDiv.style.display = 'none';
  galleriesShowBackDiv.style.display = 'none';
  linktreeContainerDiv.style.display = '';
  tbcDiv.style.display = '';
  authorDivContainer.style.display = '';
}
