(function() {
  // This code runs on every page load.

  // Check if the URL contains a login token from Netlify Identity.
  // This is the most reliable way to know a user has just logged in.
  if (window.location.hash.includes("access_token")) {

    // First, try to get the page the user was originally trying to visit.
    // The Netlify widget is supposed to store this for us.
    const intendedDestination = sessionStorage.getItem("netlify-identity-redirect");

    if (intendedDestination) {
      // If we found the intended page, go there.
      // Using .replace() prevents back-button redirect loops.
      window.location.replace(intendedDestination);
    } else {
      // If the widget didn't store the page, this is our fallback.
      // We will send them to the main members-only page.
      window.location.replace("/accelerator.html");
    }
  }
})();