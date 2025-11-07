(function() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/gh/code-by-m/codebym-footer/footer.css";
  document.head.appendChild(link);

  const footer = document.createElement("div");
  footer.className = "codebym-footer";
  footer.innerHTML = `
    <a href="https://www.instagram.com/codebym_" target="_blank" class="codebym-link">
      Design by <span>Codebym</span>
    </a>
  `;
  document.body.appendChild(footer);
})();
