function removeDuplicate(tab) {
  return Array.from(new Set(tab));
}

const oldTab = [7, 8, 3, 4, 7, 3, 6];
console.log(removeDuplicate(oldTab));