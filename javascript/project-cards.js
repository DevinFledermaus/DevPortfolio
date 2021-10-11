let projects = [
    {
      class: "card1",
      title: "Contact Form",
      description: "My First Attempt at creating a contact from.",
      techStack: "HTML/CSS",
      githubURL: "https://github.com/Koumori97/Contact-Form",
      liveProjectURL: "https://nifty-poitras-1e242c.netlify.app/",
      target: "_blank",
    },
    {
      class: "card2",
      title: "Timeline",
      description: "My Frist Attempt at creating a Timeline with animations.",
      techStack: "HTML/CSS",
      githubURL: "https://github.com/Koumori97/My_Timeline",
      liveProjectURL: "https://gracious-clarke-14304e.netlify.app/",
      target: "_blank",
    },
    {
      class: "card3",
      title: "Testimonial Sliders",
      description: "My First Attempt aat creating a slider.",
      techStack: "HTML/CSS",
      githubURL: "https://github.com/Koumori97/Testimonial_slider",
      liveProjectURL: "https://sharp-neumann-59d40c.netlify.app/",
      target: "_blank",
    },
    {
      class: "card5",
      title: "Recursion Task",
      description:
        "Writing A Program to generate a fibonacci series until the 20th value.",
      techStack: "Python",
      githubURL: "https://github.com/Koumori97/Fibonacci",
      liveProjectURL: "https://replit.com/join/xmjwupar-devinfledermaus",
      target: "_blank",
    },
    {
      class: "card6",
      title: "Speedster Task",
      description:
        "Writing A Program that cheacks one's speed limit and assigns points accordingly.",
      techStack: "Python",
      githubURL:
        "https://github.com/Koumori97/midrand_speedster_project/blob/main/main.py",
      liveProjectURL:
        "https://replit.com/@DevinFledermaus/Midrand-speedster-task#main.py",
      target: "_blank",
    },
    {
      class: "card4",
      title: "Temperature Convertor",
      description:
        "Using Tkinter, wrote a program that converts celsius to fahrenheit and vice versa.",
      techStack: "Python",
      githubURL: "https://github.com/Koumori97/Tempaerature_converter",
      liveProjectURL:
        "https://replit.com/@DevinFledermaus/Temperature-Convertor#main.py",
      target: "_blank",
    },
  ];
  
  function createCard(card) {
    let createdCard = `<div class="card ${card.class}" techStack="${card.techStack}">
          <div class="card-content"</div>
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <div class="button"><a href="${card.githubURL}" target="${card.target}"><button>Github</button></a>
          <a href="${card.liveProjectURL}" target="${card.target}"><button>Live</button></a></div>
        </div>
      `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-cards");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  