const player1 = {
  name: "Subzero",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Ice Scepter", "Ice Sword"],
  attack: function () {
    console.log(player1.name + " " + "Fight...");
  },
};

//player1.attack(); вызываем ключ attack у объекта player1 (Subzero Fight...) в консоль

const player2 = {
  name: "Sonya",
  hp: 65,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Grenades", "Wind Blade"],
  attack: function () {
    console.log(player2.name + " " + "Fight...");
  },
};

// таск 1, 2 и 3

function createPlayer(player, person) {
  const $player1 = document.createElement("div");
  $player1.classList.add(player);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  $player1.appendChild($progressbar);

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = "100%;";
  $life.style.width = person.hp + "%";
  $progressbar.appendChild($life);

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = person.name;
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");
  $player1.appendChild($character);

  const $img = document.createElement("img");
  $img.src = person.img;
  $character.appendChild($img);

  const $arenas = document.querySelector(".arenas");
  $arenas.appendChild($player1);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
