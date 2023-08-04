window.onloadTurnstileCallback = function() {
    turnstile.render('#turnstile-widget', {
      sitekey: '0x4AAAAAAAHvIx2O_lyI4AvC',
      theme: 'dark',
      callback: function(token) {
        console.log(`Challenge Success ${token}`);
        hideCaptchaAndShowContent();
      },
    });
  };
  function hideCaptchaAndShowContent() {
    document.querySelector(".captcha-box").style.display = "block";
    document.querySelector(".captcha-widget").style.display = "none";
  }