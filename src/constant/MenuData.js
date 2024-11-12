import CrispyDuck from "../assets/images/menu/cirspy-duck.jpg";
import BeefRicenoodle from "../assets/images/menu/beef-ricenoodle.jpg";
import SpringrollRicenoodle from "../assets/images/menu/SpringrollRicenoodle.jpg";
import TomaticSalmon from "../assets/images/menu/TOMATIC-SALMON.jpg";
import CalamariOnTamarind from "../assets/images/menu/CALAMARI-ON-TAMARIND.jpg";
import eight from "../assets/images/resource/menu-image-8.png";
import nine from "../assets/images/resource/menu-image-9.png";
import ten from "../assets/images/resource/menu-image-10.png";

export const tabLabels = [
  { id: "weekday_lunch", text: "menuCategories.weekday_lunch" },
  { id: "dinner", text: "menuCategories.dinner" },
  { id: "desserts", text: "menuCategories.desserts" },
  { id: "soft_drinks", text: "menuCategories.soft_drinks" },
  { id: "wines", text: "menuCategories.wines" },
];

export const dishData = {
  weekday_lunch: [
    [
      {
        title: "food.DuckCurry.title",
        price: 19.9,
        description: "food.DuckCurry.description",
        image: CrispyDuck,
      },
      {
        title: "food.BeefRicenoodles.title",
        price: 19.9,
        description: "food.BeefRicenoodles.description",
        image: BeefRicenoodle,
      },
      {
        title: "food.SpringrollsRicenoodle.title",
        price: 18.9,
        description: "food.SpringrollsRicenoodle.description",
        image: SpringrollRicenoodle,
      },
    ],
    [
      {
        title: "food.TomaticSalmon.title",
        price: 21.9,
        description: "food.TomaticSalmon.description",
        image: TomaticSalmon,
      },
      {
        title: "food.CalamariOnTamarind.title",
        price: 19.9,
        description: "food.CalamariOnTamarind.description",
        image: CalamariOnTamarind,
      },
      {
        title: "food.SpringrollsRicenoodle.title",
        price: 18.9,
        description: "food.SpringrollsRicenoodle.description",
        image: SpringrollRicenoodle,
      },
    ],
  ],
  dinner: [
    [
      {
        title: "food.DuckCurry.title",
        price: 19.9,
        description: "food.DuckCurry.description",
        image: CrispyDuck,
      },
      {
        title: "food.BeefRicenoodles.title",
        price: 19.9,
        description: "food.BeefRicenoodles.description",
        image: BeefRicenoodle,
      },
      {
        title: "food.SpringrollsRicenoodle.title",
        price: 18.9,
        description: "food.SpringrollsRicenoodle.description",
        image: SpringrollRicenoodle,
      },
    ],
    [
      {
        title: "food.TomaticSalmon.title",
        price: 21.9,
        description: "food.TomaticSalmon.description",
        image: TomaticSalmon,
      },
      {
        title: "food.CalamariOnTamarind.title",
        price: 19.9,
        description: "food.CalamariOnTamarind.description",
        image: CalamariOnTamarind,
      },
      {
        title: "food.SpringrollsRicenoodle.title",
        price: 18.9,
        description: "food.SpringrollsRicenoodle.description",
        image: SpringrollRicenoodle,
      },
    ],
  ],
  desserts: [],
  soft_drinks: [],
  wines: [],
};
