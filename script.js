const environments = {
  cozinha: {
    title: 'Cozinha',
    description: 'Um espaço para experimentar, reunir e transformar ingredientes em boas memórias.',
    tips: ['Organize sua bancada para ter os utensílios essenciais sempre por perto.', 'Guarde os alimentos por categoria e acompanhe suas datas de validade.', 'Escolha eletrodomésticos de acordo com o espaço e sua rotina.']
  },
  lavanderia: {
    title: 'Lavanderia',
    description: 'O cuidado com suas roupas também é cuidado com as histórias que elas carregam.',
    tips: ['Separe as peças por cor e tipo de tecido antes de lavar.', 'Consulte a etiqueta e evite usar mais sabão do que o necessário.', 'Prefira cargas completas, respeitando a capacidade da sua máquina.']
  },
  conforto: {
    title: 'Conforto',
    description: 'Luz natural, ar renovado e pequenos detalhes fazem da sua casa um lugar para desacelerar.',
    tips: ['Mantenha os ambientes ventilados sempre que possível.', 'Crie uma rotina de limpeza adequada aos materiais da sua casa.', 'Priorize solução e tamanho adequados ao ambiente ao escolher seus aparelhos.']
  }
};

if (window.lucide) window.lucide.createIcons();

const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}
menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
    document.querySelector('dialog[open]')?.close();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});

function openDialog(dialog) {
  closeMenu();
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]'))));
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
});

const detailDialog = document.querySelector('#detail-dialog');
function showDetail(category) {
  const environment = environments[category];
  if (!environment) return;
  document.querySelector('#detail-title').textContent = environment.title;
  document.querySelector('#detail-description').textContent = environment.description;
  const tipsList = document.querySelector('#detail-tips');
  tipsList.replaceChildren(...environment.tips.map(tip => {
    const item = document.createElement('li');
    item.textContent = tip;
    return item;
  }));
  openDialog(detailDialog);
}
document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => showDetail(button.dataset.detail));
});

const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
function renderSearch() {
  const query = normalizeText(searchInput.value);
  const matches = Object.entries(environments).filter(([, environment]) => normalizeText(`${environment.title} ${environment.description} ${environment.tips.join(' ')}`).includes(query));
  searchResults.replaceChildren();
  matches.forEach(([category, environment]) => {
    const result = document.createElement('button');
    result.className = 'search-result';
    result.textContent = environment.title;
    const arrow = document.createElement('i');
    arrow.setAttribute('data-lucide', 'arrow-up-right');
    result.append(arrow);
    result.addEventListener('click', () => {
      searchDialog.close();
      showDetail(category);
    });
    searchResults.append(result);
  });
  if (!matches.length) {
    const message = document.createElement('p');
    message.className = 'search-empty';
    message.textContent = 'Nenhum ambiente encontrado. Tente cozinha, lavanderia ou conforto.';
    searchResults.append(message);
  }
  if (window.lucide) window.lucide.createIcons();
}
document.querySelector('#search-open').addEventListener('click', () => {
  searchInput.value = '';
  renderSearch();
  openDialog(searchDialog);
  searchInput.focus();
});
searchInput.addEventListener('input', renderSearch);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}