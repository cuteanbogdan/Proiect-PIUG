import espresso from "../assets/espresso.jpg";
import latte from "../assets/latte.jpg";
import cappuccino from "../assets/Cappuccino.jpg";
import americano from "../assets/americano.jpg";
import macchiato from "../assets/macchiato.jpg";
import mocha from "../assets/mocha.jpg";
import frappe from "../assets/frappe.jpg";
import affogato from "../assets/affogato.jpg";
import orangejuice from "../assets/orangejuice.jpg";
import applejuice from "../assets/applejuice.jpg";
import carrotjuice from "../assets/carrotjuice.jpg";
import beetjuice from "../assets/beetjuice.jpg";
import pineapplejuice from "../assets/pineapplejuice.jpg";
import grapefruitjuice from "../assets/grapefruitjuice.jpg";
import peachjuice from "../assets/peachjuice.jpg";
import greentea from "../assets/greentea.jpg";
import blacktea from "../assets/blacktea.jpg";
import minttea from "../assets/minttea.jpg";
import chamomiletea from "../assets/chamomiletea.jpg";
import whisky from "../assets/whisky.jpg";
import vodka from "../assets/vodka.jpg";
import rum from "../assets/rum.jpg";
import tequila from "../assets/tequilla.jpg";
import gin from "../assets/gin.jpg";
import vermouth from "../assets/vermouth.jpg";
import mojito from "../assets/mojito.jpg";
import margarita from "../assets/margarita.jpg";
import cosmopolitan from "../assets/cosmopolitan.jpg";
import pinacolada from "../assets/pinacolada.jpg";
import bloodymary from "../assets/bloodymary.jpg";
import oldfashioned from "../assets/oldfashioned.jpg";

const meniuData = [
  {
    id: 1,
    category: "Cafea",
    items: [
      { id: 1, name: "Espresso", image: espresso },
      { id: 2, name: "Latte", image: latte },
      { id: 3, name: "Cappuccino", image: cappuccino },
      { id: 4, name: "Americano", image: americano },
      { id: 5, name: "Macchiato", image: macchiato },
      { id: 6, name: "Mocha", image: mocha },
      { id: 7, name: "Frappe", image: frappe },
      { id: 8, name: "Affogato", image: affogato },
    ],
  },
  {
    id: 2,
    category: "Sucuri Naturale",
    items: [
      { id: 1, name: "Suc de portocale", image: orangejuice },
      { id: 2, name: "Suc de măr", image: applejuice },
      { id: 3, name: "Suc de morcovi", image: carrotjuice },
      { id: 4, name: "Suc de sfeclă", image: beetjuice },
      { id: 5, name: "Suc de ananas", image: pineapplejuice },
      { id: 6, name: "Suc de grapefruit", image: grapefruitjuice },
      { id: 7, name: "Suc de piersici", image: peachjuice },
    ],
  },
  {
    id: 3,
    category: "Ceai",
    items: [
      { id: 1, name: "Ceai verde", image: greentea },
      { id: 2, name: "Ceai negru", image: blacktea },
      { id: 3, name: "Ceai de mentă", image: minttea },
      { id: 4, name: "Ceai de mușețel", image: chamomiletea },
    ],
  },
  {
    id: 4,
    category: "Băuturi Alcoolice",
    items: [
      { id: 1, name: "Whisky", image: whisky },
      { id: 2, name: "Vodka", image: vodka },
      { id: 3, name: "Rom", image: rum },
      { id: 4, name: "Tequila", image: tequila },
      { id: 5, name: "Gin", image: gin },
      { id: 6, name: "Vermouth", image: vermouth },
    ],
  },
  {
    id: 5,
    category: "Cocktail-uri",
    items: [
      { id: 1, name: "Mojito", image: mojito },
      { id: 2, name: "Margarita", image: margarita },
      { id: 3, name: "Cosmopolitan", image: cosmopolitan },
      { id: 4, name: "Pina Colada", image: pinacolada },
      { id: 5, name: "Bloody Mary", image: bloodymary },
      { id: 6, name: "Old Fashioned", image: oldfashioned },
    ],
  },
];

export default meniuData;
