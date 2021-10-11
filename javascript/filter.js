function filterCards(category) {
    let cards = document.getElementsByClassName("card");
    if (category == "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  