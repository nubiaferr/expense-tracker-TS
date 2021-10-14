//exportar array com dados iniciais
import { Item } from "../types/Item";
import { v4 } from "uuid";

export const items: Item[] = [
  {
    id: v4(),
    date: new Date(2021, 9, 13),
    category: "food",
    title: "McDonalds",
    value: 32.12,
  },
  {
    id: v4(),
    date: new Date(2021, 9, 13),
    category: "food",
    title: "Burger King",
    value: 28,
  },
  {
    id: v4(),
    date: new Date(2021, 9, 16),
    category: "rent",
    title: "Aluguel Apt",
    value: 2300,
  },
  {
    id: v4(),
    date: new Date(2021, 10, 18),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
];
