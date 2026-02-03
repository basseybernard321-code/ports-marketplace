const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      let text = card.innerText.toLowerCase();
      card.style.display = text.includes(filter) ? "block" : "none";
    });
  });
}
