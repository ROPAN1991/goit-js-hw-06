const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createUl = document.querySelector('ul')


const createLi = (count) => {
  const listLi = []
  for (let i = 0; i < count; i += 1) {
    const liEl = document.createElement('li')
    liEl.classList.add('item') 
    liEl.textContent = ingredients[i]
    listLi.push(liEl)
  }
  createUl.append(...listLi) 
}

createLi(ingredients.length)



