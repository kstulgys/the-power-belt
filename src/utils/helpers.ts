import { products } from "./products";

function slugify(string) {
  const a = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b = "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

function titleIfy(slug) {
  const words = slug.split("-");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

function getTrimmedString(string, length = 8) {
  if (string.length <= length) {
    return string;
  } else {
    return string.substring(0, length) + "...";
  }
}

async function fetchCategories() {
  const categories = products.reduce((acc, next) => {
    next.categories.map((category) => {
      if (acc.includes(category)) return;
      acc.push(category);
    });
    return acc;
  }, []);
  return Promise.resolve(categories);
}

function inventoryByCategory(products) {
  return products.reduce((acc, next) => {
    const categories = next.categories;
    categories.forEach((c) => {
      if (acc[c]) {
        acc[c].items.push(next);
      } else {
        acc[c] = {};
        acc[c].items = [];
        acc[c].items.push(next);
      }
    });
    return acc;
  }, {});
}

async function inventoryForCategory(category) {
  // const inventory = await fetchInventory();
  const inventory = products;
  const byCategory = inventoryByCategory(inventory);
  return byCategory[category].items;
}

export { slugify, titleIfy, getTrimmedString };
