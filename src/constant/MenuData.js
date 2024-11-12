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
        title: "Greek Salad",
        price: 25.5,
        description:
          "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
        image: CrispyDuck,
      },
      {
        title: "Lasagne",
        price: 40.0,
        description:
          "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
        image: BeefRicenoodle,
      },
      {
        title: "Butternut Pumpkin",
        price: 10.0,
        description:
          "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
        image: SpringrollRicenoodle,
      },
    ],
    [
      {
        title: "Tokusen Wagyu",
        price: 39.0,
        description:
          "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
        image: eight,
      },
      {
        title: "Olivas Rellenas",
        price: 25.0,
        description:
          "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
        image: nine,
      },
      {
        title: "Opu Fish",
        price: 49.0,
        description:
          "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
        image: ten,
      },
    ],
  ],
  soft_drinks: [],
  wines: [],
};
