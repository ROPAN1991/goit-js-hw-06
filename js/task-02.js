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
  for (let i = 0; i < count; i += 1) {
    const liEl = document.createElement('li')
    liEl.classList.add('item') 
    liEl.textContent = ingredients[i]
    createUl.append(liEl)
  }
}

createLi(6)

console.log(createUl)
