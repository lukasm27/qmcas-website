const netlifyIdentity = window.netlifyIdentity;

if (netlifyIdentity) {
  netlifyIdentity.on('open', () => {
    // When the login modal opens, we store the page the user is on.
    // This is the page they'll be sent back to after logging in.
    const intendedDestination = window.location.pathname;
    sessionStorage.setItem('redirectUrl', intendedDestination);
  });

  netlifyIdentity.on('login', () => {
    // When the user successfully logs in...
    const redirectUrl = sessionStorage.getItem('redirectUrl');
    if (redirectUrl) {
      // Send them to the page they were trying to access.
      window.location.href = redirectUrl;
      sessionStorage.removeItem('redirectUrl'); // Clear the stored URL
    } else {
      // As a fallback, send them to the homepage.
      window.location.href = '/';
    }
  });
}