const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
      name: "Moosalot",
      species: "Cow",
      favFoods: ["grass"],
      birthYear: 1845,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1200px-Cow_female_black_white.jpg"
    },
    {
      name: "Perry",
      species: "Platypus",
      favFoods: ["fish","water"],
      birthYear: 2005,
      photo: "http://images6.fanpop.com/image/photos/34900000/Baby-perry-perry-the-platypus-34923224-900-563.jpg"
    },
    {
      name: "Batman",
      species: "Bat/Man",
      favFoods: ["Joker","Two-face","Bane"],
      birthYear: 1000,
      photo: "https://www.pngkey.com/png/detail/17-179316_pix-funny-pictures-batman-funny-face-png.png"
    }
  ];
  
  function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if (calculatedAge == 1) {
      return "1 year old";
    } else if (calculatedAge == 0) {
      return "Baby";
    } else {
      return `${calculatedAge} years old`;
    }
  }
  
  function foods(foods) {
    return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
  
  function petTemplate(pet) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
      <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
      ${pet.favFoods ? foods(pet.favFoods) : ""}
      </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} results)</h1>
    ${petsData.map(petTemplate).join("")}
    <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
  `;
  