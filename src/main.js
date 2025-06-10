import './style.css'

const menu = [
  {
    category: 'Coffee',
    description: '<span class="bean-label">Current Bean:</span> Single origin Ethiopia, notes of citrus and floral.<br><span class="bean-label">Supplier:</span> Assembly Coffee.',
    drinks: [
      { name: 'Cortado', description: 'Minimum milk, maximum espresso.' },
      { name: 'Flat White', description: 'Velvety espresso with steamed milk (Recommended)' },
      { name: 'Latte', description: 'Higher milk:coffee ratio than Flat White!' },
      { name: 'Espresso', description: 'Rich, intense shot of coffee.' },
      { name: 'Chemex', description: 'Clean, bright filter coffee.' },
    ]
  },
  {
    category: 'Tea',
    drinks: [
      { name: 'Green Tea', description: 'Fresh, grassy, and revitalizing.' },
      { name: 'Mint Tea', description: 'Host does not recommend' },
      { name: 'Chamomile Tea', description: 'Soothing, floral, and calming.' },
      { name: 'Black Tea', description: 'Robust, classic, and energizing.' },
    ]
  },
  {
    category: 'Hot Chocolate',
    drinks: [
      { name: 'Hot Chocolate', description: 'Dark cocoa, creamy and comforting.' },
    ]
  },
  {
    category: 'Soft Drinks',
    drinks: [
      { name: 'Water', description: 'Still, always refreshing.' },
    ]
  }
];

const app = document.querySelector('#app');

const main = document.createElement('main');
main.className = 'brutalist-container';

// Header
const header = document.createElement('header');
const title = document.createElement('h1');
title.className = 'classy-title';
title.textContent = 'Gables Drink Menu';
header.appendChild(title);
main.appendChild(header);

// Menu List
const menuSection = document.createElement('section');
menuSection.className = 'menu-list';
menu.forEach(({ category, description, drinks }) => {
  const details = document.createElement('details');
  details.className = 'menu-section';
  const summary = document.createElement('summary');
  summary.className = 'menu-section-title';
  summary.textContent = category;
  details.appendChild(summary);
  if (description) {
    const desc = document.createElement('div');
    desc.className = 'section-desc';
    desc.innerHTML = description;
    details.appendChild(desc);
  }
  const drinksDiv = document.createElement('div');
  drinksDiv.className = 'section-drinks';
  drinks.forEach(drink => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    const h2 = document.createElement('h2');
    h2.textContent = drink.name;
    const p = document.createElement('p');
    p.textContent = drink.description;
    item.appendChild(h2);
    item.appendChild(p);
    drinksDiv.appendChild(item);
  });
  details.appendChild(drinksDiv);
  menuSection.appendChild(details);
});
main.appendChild(menuSection);

// Disclaimer
const disclaimer = document.createElement('section');
disclaimer.className = 'disclaimer';
const disclaimerP = document.createElement('p');
disclaimerP.textContent = 'All drinks accept variations upon request and depending on host mood';
const sweetenerList = document.createElement('ul');
sweetenerList.className = 'sweetener-list';
['White sugar', 'Brown sugar', 'Honey'].forEach(sweetener => {
  const li = document.createElement('li');
  li.textContent = sweetener;
  sweetenerList.appendChild(li);
});
disclaimer.appendChild(disclaimerP);
disclaimer.appendChild(sweetenerList);
main.appendChild(disclaimer);

app.innerHTML = '';
app.appendChild(main);
