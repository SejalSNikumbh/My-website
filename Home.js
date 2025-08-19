document.querySelectorAll(".faq details").forEach((detail) => {
  detail.addEventListener("toggle", function () {
    const summary = this.querySelector("summary");
    const icon = summary.querySelector(".icon");

    if (this.open) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }
  });
});