const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getFullList().then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOneFetch = document.getElementById("character-info-to-hide");
      allCharacters.forEach((character) => {
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";

        //mostrar id
        let newDivId = document.createElement("div");
        newDivId.classList.add("id");
        newDivId.innerHTML = `id: ${character.id}`;
        oneCharacter.appendChild(newDivId);

        //mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `Name: ${character.name}`;
        oneCharacter.appendChild(newDivName);

        //mostrar occupation
        let newDivOccupation = document.createElement("div");
        newDivOccupation.classList.add("occupation");
        newDivOccupation.innerHTML = `Occupation: ${character.occupation}`;
        oneCharacter.appendChild(newDivOccupation);

        //mostrar cartoon
        let newDivCartoon = document.createElement("div");
        newDivCartoon.classList.add("cartoon");
        newDivCartoon.innerHTML = `Is a Cartoon?: ${character.cartoon}`;
        oneCharacter.appendChild(newDivCartoon);
        parentDiv.appendChild(oneCharacter)

        //mostrar weapon
        let newDivWeapon = document.createElement("div");
        newDivWeapon.classList.add("weapon");
        newDivWeapon.innerHTML = `Weapon: ${character.weapon}`;
        oneCharacter.appendChild(newDivWeapon);
        parentDiv.appendChild(oneCharacter)
      });
      /* hiddenDivOneFetch.style.display = "none"; */
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function () {
    let idnumberD = document.getElementsByName("character-id")
    charactersAPI.getOneRegister(idnumberD[0].value).then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOneFetch = document.getElementById("character-info-to-hide");
      
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";

        //mostrar id
        let newDivId = document.createElement("div");
        newDivId.classList.add("id");
        newDivId.innerHTML = `id: ${allCharacters.id}`;
        oneCharacter.appendChild(newDivId);

        //mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `Name: ${allCharacters.name}`;
        oneCharacter.appendChild(newDivName);

        //mostrar occupation
        let newDivOccupation = document.createElement("div");
        newDivOccupation.classList.add("occupation");
        newDivOccupation.innerHTML = `Occupation: ${allCharacters.occupation}`;
        oneCharacter.appendChild(newDivOccupation);

        //mostrar cartoon
        let newDivCartoon = document.createElement("div");
        newDivCartoon.classList.add("cartoon");
        newDivCartoon.innerHTML = `Is a Cartoon?: ${allCharacters.cartoon}`;
        oneCharacter.appendChild(newDivCartoon);
        parentDiv.appendChild(oneCharacter)

        //mostrar weapon
        let newDivWeapon = document.createElement("div");
        newDivWeapon.classList.add("weapon");
        newDivWeapon.innerHTML = `Weapon: ${allCharacters.weapon}`;
        oneCharacter.appendChild(newDivWeapon);
        parentDiv.appendChild(oneCharacter)
      
      /* hiddenDivOneFetch.style.display = "none"; */
    })
  });

  document.getElementById('delete-one').addEventListener('click', function () {
    let idnumber = document.getElementsByName("character-id-delete")
    charactersAPI.deleteOneRegister(idnumber[0].value).then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOneFetch = document.getElementById("character-info-to-hide");
      
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";

        //mostrar id
        let newDivId = document.createElement("div");
        newDivId.classList.add("id");
        newDivId.innerHTML = `id: ${allCharacters.id}`;
        oneCharacter.appendChild(newDivId);

        //mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `Name: ${allCharacters.name}`;
        oneCharacter.appendChild(newDivName);

        //mostrar occupation
        let newDivOccupation = document.createElement("div");
        newDivOccupation.classList.add("occupation");
        newDivOccupation.innerHTML = `Occupation: ${allCharacters.occupation}`;
        oneCharacter.appendChild(newDivOccupation);

        //mostrar cartoon
        let newDivCartoon = document.createElement("div");
        newDivCartoon.classList.add("cartoon");
        newDivCartoon.innerHTML = `Is a Cartoon?: ${allCharacters.cartoon}`;
        oneCharacter.appendChild(newDivCartoon);
        parentDiv.appendChild(oneCharacter)

        //mostrar weapon
        let newDivWeapon = document.createElement("div");
        newDivWeapon.classList.add("weapon");
        newDivWeapon.innerHTML = `Weapon: ${allCharacters.weapon}`;
        oneCharacter.appendChild(newDivWeapon);
        parentDiv.appendChild(oneCharacter)
      
      /* hiddenDivOneFetch.style.display = "none"; */
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName("chr-id")[0].value
    const name = document.getElementsByName('name')[1].value;
    const occupation = document.getElementsByName('occupation')[1].value;
    const weapon = document.getElementsByName('weapon')[1].value;
    const cartoon = document.getElementsByName('cartoon')[1].checked;
    charactersAPI.updateOneRegister({id, name, occupation, weapon, cartoon})
    .then(() => {
      console.log('Edited');
    })
    .catch((err) => console.log(err));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then(() => {
      console.log('Created');
    })
    .catch((err) => console.log(err));
  });
});
