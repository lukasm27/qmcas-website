(function() {
  // This function runs when the Netlify Identity widget is ready.
  function handleLoginRedirect() {
    // After a user logs in, Netlify adds a token to the URL hash.
    // We check for this token to know that a login just happened.
    if (window.location.hash.includes("access_token")) {
      // The widget kindly stores the page the user was trying to access.
      const redirectUrl = sessionStorage.getItem("netlify-identity-redirect");
      
      if (redirectUrl) {
        // If we know where they were going, send them there.
        // Using replace() prevents back-button redirect loops.
        window.location.replace(redirectUrl);
      }
    }
  }

  // Run our function as soon as the page loads.
  handleLoginRedirect();
})();