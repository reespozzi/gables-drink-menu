import './style.css'

const menu = [
  {
    category: 'Coffee',
    description: '<span class="bean-label">Current Bean:</span>Indonesia (Process: Anaerobic Honey). Tasting notes: Clove, Oolong Tea, Roasted Walnut.<br><span class="bean-label">Supplier:</span> Dark Arts',
    drinks: [
      { name: 'Cortado', description: 'Minimum milk, maximum espresso.' },
      { name: 'Flat White', description: 'Velvety espresso with steamed milk (Recommended)' },
      { name: 'Latte', description: 'Higher milk:coffee ratio than Flat White!' },
      { name: 'Americano', description: 'Straight up hot black coffee.' },
      { name: 'Espresso', description: 'Rich, intense shot of coffee (36g)' },
      { name: 'Chemex', description: 'Clean, bright filter coffee.' },
    ]
  },
  {
    category: 'Tea',
    drinks: [
      { name: 'Green Tea', description: 'Fresh, grassy, and revitalizing.' },
      { name: 'Mint Tea', description: 'Host does not recommend' },
      { name: 'Chamomile Tea', description: 'Soothing, floral, and calming.' },
      { name: '(Normal) Tea', description: 'Robust, classic, and energizing.' },
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
app.innerHTML = `
  <main class="brutalist-container">
    <header>
      <h1 class="classy-title">Gables Drink Menu</h1>
    </header>
    <section class="menu-list">
      ${menu.map(({category, description, drinks}) => `
        <details class="menu-section">
          <summary class="menu-section-title">${category}</summary>
          ${description ? `<div class="section-desc">${description}</div>` : ''}
          <div class="section-drinks">
            ${drinks.map(drink => `
              <div class="menu-item">
                <h2>${drink.name}</h2>
                <p>${drink.description}</p>
              </div>
            `).join('')}
          </div>
        </details>
      `).join('')}
    </section>
    <section class="disclaimer">
      <p>All drinks accept variations upon request and depending on host mood</p>
      <ul class="sweetener-list">
        <li>White sugar</li>
        <li>Brown sugar</li>
        <li>Honey</li>
      </ul>
    </section>
  </main>
`;
