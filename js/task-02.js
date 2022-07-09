const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createUl = document.createElement('ul')
createUl.setAttribute('id', 'ingredients')

const createLi = (count) => {
  for (let i = 0; i < count; i += 1) {
    const liEl = document.createElement('li')
    liEl.classList = ('item') 
    liEl.textContent = ingredients[i]
    createUl.append(liEl)
  }
}
createLi(6)

console.log(createUl)

