export const trending = [
  { id: 1, img: "trending-01.jpg", category: "Action", title: "Assasin Creed", price: 20, oldPrice: 28 },
  { id: 2, img: "trending-02.jpg", category: "Action", title: "Assasin Creed", price: 44 },
  { id: 3, img: "trending-03.jpg", category: "Action", title: "Assasin Creed", price: 44, oldPrice: 64 },
  { id: 4, img: "trending-04.jpg", category: "Action", title: "Assasin Creed", price: 32 },
];

export const mostPlayed = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: n,
  img: `top-game-0${n}.jpg`,
  category: "Adventure",
  title: "Assasin Creed",
}));

export const categoryTiles = [
  { name: "Action", img: "categories-01.jpg" },
  { name: "Action", img: "categories-05.jpg" },
  { name: "Action", img: "categories-03.jpg" },
  { name: "Action", img: "categories-04.jpg" },
  { name: "Action", img: "categories-05.jpg" },
];

const g = (id, img, tags, oldPrice, price) => ({
  id, img: `trending-0${img}.jpg`, tags, oldPrice, price, category: "Action", title: "Assasin Creed",
});

export const shopGames = [
  g(1, 1, ["adv"], 36, 24),
  g(2, 2, ["str"], 32, 22),
  g(3, 3, ["adv", "rac"], 45, 30),
  g(4, 4, ["str"], 32, 22),
  g(5, 3, ["rac", "str"], 38, 26),
  g(6, 1, ["rac", "adv"], 30, 20),
  g(7, 4, ["rac", "str"], 32, 22),
  g(8, 2, ["rac", "adv"], 32, 22),
  g(9, 3, ["adv", "rac"], 28, 20),
  g(10, 4, ["str"], 26, 18),
  g(11, 1, ["adv"], 32, 24),
  g(12, 2, ["str"], 45, 30),
];

export const shopFilters = [
  { label: "Show All", value: "*" },
  { label: "Adventure", value: "adv" },
  { label: "Strategy", value: "str" },
  { label: "Racing", value: "rac" },
];