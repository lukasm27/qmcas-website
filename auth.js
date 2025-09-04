(function() {
  // After a user logs in, Netlify Identity adds a hash to the URL
  // that looks like #access_token=...
  // We check for this to know that a login just happened.
  if (window.location.hash.includes("access_token")) {
    
    // The widget kindly stores the page the user was trying to access.
    const redirectUrl = sessionStorage.getItem("netlify-identity-redirect");
    
    if (redirectUrl) {
      // If we know where they were going, send them there.
      // We use .replace() so this action doesn't get added to the browser history,
      // which prevents issues with the back button.
      window.location.replace(redirectUrl);
    }
  }
})();
