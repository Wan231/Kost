(function () {
  const elements = {
    currentYear: document.getElementById('current-year')
  };

  function init() {
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }
  }

  init();
})();
