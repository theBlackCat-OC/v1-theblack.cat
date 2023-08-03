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

  // Attach click event to the back button
  tbcShowBackDiv.addEventListener('click', function() {
    // Revert the display changes when the back button is clicked
    tbcShowTitleDiv.style.display = 'none';
    tbcShowContainerDiv.style.display = 'none';
    tbcShowBackDiv.style.display = 'none';
    linktreeContainerDiv.style.display = '';
    tbcDiv.style.display = '';
    authorDivContainer.style.display = '';
  });
}