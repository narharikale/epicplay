import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
  },
  {
    _id: uuid(),
    categoryName: "Sci-Fi",
  },
  {
    _id: uuid(),
    categoryName: "Animated",
  },
  {
    _id: uuid(),
    categoryName: "Documentry",
  },
];
