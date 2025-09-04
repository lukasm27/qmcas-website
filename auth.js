(function() {
  // This code runs on every page load.

  // Check if the URL contains a login token from Netlify Identity.
  // This is the most reliable way to know a user has just logged in.
  if (window.location.hash.includes("access_token")) {
    location.reload();
  }
})();