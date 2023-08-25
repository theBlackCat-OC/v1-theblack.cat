document.addEventListener("DOMContentLoaded", function () {
    const defaultContent = document.getElementById('contact-content-default');
  
    const emailButton = document.getElementById('contact-email-button');
    const emailContent = document.getElementById('contact-content-email');
  
    const twitterButton = document.getElementById('contact-twitter-button');
    const twitterContent = document.getElementById('contact-content-twitter');
  
    const discordButton = document.getElementById('contact-discord-button');
    const discordContent = document.getElementById('contact-content-discord');
  
    const misskeyButton = document.getElementById('contact-misskey-button');
    const misskeyContent = document.getElementById('contact-content-misskey');
  
    emailButton.addEventListener('click', function () {
      emailContent.style.display = '';
      defaultContent.style.display = 'none';
      twitterContent.style.display = 'none';
      discordContent.style.display = 'none';
      misskeyContent.style.display = 'none';
    });
  
    twitterButton.addEventListener('click', function () {
      emailContent.style.display = 'none';
      defaultContent.style.display = 'none';
      twitterContent.style.display = '';
      discordContent.style.display = 'none';
      misskeyContent.style.display = 'none';
    });
  
    discordButton.addEventListener('click', function () {
      emailContent.style.display = 'none';
      defaultContent.style.display = 'none';
      twitterContent.style.display = 'none';
      discordContent.style.display = '';
      misskeyContent.style.display = 'none';
    });
  
    misskeyButton.addEventListener('click', function () {
      emailContent.style.display = 'none';
      defaultContent.style.display = 'none';
      twitterContent.style.display = 'none';
      discordContent.style.display = 'none';
      misskeyContent.style.display = '';
    });
  });
  