if (window.netlifyIdentity) {
  window.netlifyIdentity.on("login", () => {
    document.location.reload();
  });
}