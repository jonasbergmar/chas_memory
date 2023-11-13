// const backsideFile = "backside.png";
import { cards } from "./cards.js";
const gameEl = document.getElementById("game");
let lastCard;
let lastCardEl;

// 1. Med forEach Lägg till en property showing: false till varje kort
// för att hålla reda på om kortet är visas eller inte.
// 2. Skapa en funktion createCard. Som tar ett card-objekt och ett index som input och skapar
// ett img element och lägger till det på sidan i gameEl. Gör så här:
// - skapa ett ett img-element med document.createElement("img")
// - sätt attribut med setAttribute på img-elementet ange tex:
//    imgElement.setAttrubut("src", "images/backside.png") för baksidan på kortet.
//    om card.showing är true använd card.file annars använd images/backside.png
// - lägg till width och height till imgElementet
//    width ska vara 100 och height ska vara 145
// - lägg till id = index på card elementet så att du kommer åt det senare
// - använd appendChild för att lägga till kortet till gameEl

// 3. Använd for-loop eller forEach för att loopa igenom alla cards och anrop funktionen
//    createCard med varje kort och varje index (i). Nu ska alla kort synas på sidan
cards.forEach((card) => {
  card.showing = false;
});

function createCard(card, index) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "images/backside.png");
  imgElement.id = index;
  imgElement.style.width = "100px";
  imgElement.style.height = "145px";

  imgElement.addEventListener("click", function (e) {
    if (card.showing === true) {
      imgElement.setAttribute("src", card.file);
      card.showing = false;
    } else {
      imgElement.setAttribute("src", "images/backside.png");
      card.showing = true;
    }
  });
  gameEl.appendChild(imgElement);
}
cards.forEach((card, index) => {
  createCard(card, index);
});

// 4. Lägg till addEventListner på korten i funktionen createCard. När man klickar ska
// kortet ändras från showing: false till showing:true

// 5 Använd en global variabel lastCard och lastCardEl för att hålla reda på vilket kort man klickade på senast
// kolla när man klickar på ett kort om det har samma värde som lastCard (card.num)

// 6 (Ganska svårt) FÅ ihop hela spelet med det du skrivit ovan.

//Gör en funktion för att visa kortens baksida när resultat är false.
