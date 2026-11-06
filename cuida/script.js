// Imagens públicas do Electrolux Cuida (CMS) e da Loja Electrolux (VTEX)
const CMS = 'https://elxa3nsprod0015.blob.core.windows.net/servicehub-cms-files-prod/';
const CMS_SAS = '?sp=r&st=2026-09-21T13:57:32Z&se=2036-09-21T22:12:32Z&spr=https&sv=2026-02-06&sr=c&sig=SglEqltZN%2BUeBiF5stUVJ4kEXjgri6Xd7TW0gu52%2Blw%3D';
const cms = file => CMS + file + CMS_SAS;
const VTEX = 'https://electrolux.vteximg.com.br/arquivos/ids/';

const IMG = {
    drinks: cms('20267119920_image%2016.jpg'),
    coffee: cms('2026929185043_cafe_500x500.jpg'),
    oven: cms('20211219141655_ben_4.png'),
    install: cms('2021121914185_ben_3.png'),
    gas: cms('20267212518_image%2017.jpg'),
    relax: 'https://cuida.electrolux.com.br/assets/images/beneficios/ben_3.webp'
};

const benefits = [
    { title: 'E-book de Drinks Especiais', text: 'Surpreenda amigos e familiares com receitas criativas, combinações refrescantes e dicas especiais para preparar drinks incríveis em casa.', cta: 'Acessar e-book', icon: 'gift', img: IMG.drinks, info: 'Exclusivo para quem registrou um gaseificador Electrolux.' },
    { title: 'Receitas Clássicas de Espresso', text: 'Leve para sua casa a experiência das cafeterias mais tradicionais e descubra novas formas de apreciar cada momento do café.', cta: 'Acessar receitas', icon: 'gift', img: IMG.coffee, info: 'Disponível para donos de cafeteiras espresso Electrolux.' },
    { title: '5% OFF na Loja Electrolux', text: 'Aproveite uma condição exclusiva para renovar sua casa com produtos Electrolux. Utilize o cupom ELECTROLUXCUIDA.', cta: 'Resgatar cupom', icon: 'ticket-percent', img: IMG.oven, coupon: 'ELECTROLUXCUIDA', info: 'Cupom válido para compras na loja on-line. Não cumulativo.' },
    { title: 'Primeira instalação gratuita', text: 'Deixe a instalação com quem entende do assunto e comece a aproveitar seu produto com mais tranquilidade e praticidade.', cta: 'Solicitar instalação', icon: 'wrench', img: IMG.install, action: 'schedule', info: 'Válido para produtos elegíveis dentro do prazo de garantia.' },
    { title: '10% OFF no Cilindro Extra', text: 'Continue aproveitando cada momento com sua gaseificadora Electrolux. Utilize o cupom GAS10 e garanta 10% OFF no Refil de CO₂.', cta: 'Garantir desconto', icon: 'ticket-percent', img: IMG.gas, coupon: 'GAS10', info: 'Válido para o refil de CO₂ na loja on-line.' },
    { title: 'Extensão de garantia', text: 'Tenha seu produto protegido por mais tempo, a depender do modelo.*', cta: 'Ativar garantia', icon: 'shield-check', img: IMG.relax, action: 'register', info: '*Consulte os modelos participantes ao registrar seu produto.' }
];

const CUIDA = 'https://cuida.electrolux.com.br/produtos/';
const ALL_CATEGORIES = CUIDA + 'categoria-produtos-electrolux';

const products = {
    geladeira: [
        { model: 'IM8B', name: 'Geladeira Frost Free Inverter 596L AutoSense 3 Portas Black Inox Look', img: cms('2024716174029_IM8B_Front_Electrolux_Portuguese_200x200-ECOPLIS.jpg'), href: CUIDA + 'geladeira-e-refrigerador/IM8B' },
        { model: 'IQ8S', name: 'Refrigerador Frost Free Inverter 581L FlexiSpace 4 Portas Inox Look', img: cms('2024716174052_IQ8S_Front_Electrolux_Portuguese_200x200-ECOPLUS.jpg'), href: CUIDA + 'geladeira-e-refrigerador/IQ8S' }
    ],
    fogao: [
        { model: 'FE5GB', name: 'Fogão 5 bocas Preto Efficient Mesa de Vidro, PerfectCook e Grades de Ferro', img: VTEX + '292810-500-500/7909569440032_1-1000x1000.jpg.jpg?v=639118843344970000', href: ALL_CATEGORIES },
        { model: 'IE80P', name: 'Cooktop 4 Bocas de Indução Expert com Unicook e Timer', img: VTEX + '213562-500-500/Cooktop_IE80P_Main_Electrolux_Portuguese.jpg?v=637715809754670000', href: CUIDA + 'cooktop' }
    ],
    cozinha: [
        { model: 'MI41S', name: 'Micro-ondas 31L Inox Espelhado com Painel Integrado e Função Tira Odor', img: VTEX + '213863-500-500/Micro-ondas_MI41S_frontal_1000x1000.jpg?v=638796662872700000', href: ALL_CATEGORIES },
        { model: 'LS14E', name: 'Lava-Louça 14 Serviços Inox com Programa Lava & Seca 50 min', img: VTEX + '283730-500-500/DISHWASHER_LS14E_Front_Electrolux_Portuguese-1000x1000.jpg.jpg?v=638943418352030000', href: ALL_CATEGORIES }
    ],
    portateis: [
        { model: 'EAF71', name: 'Air Fryer por Rita Lobo 7L Cinza Efficient 1700W', img: VTEX + '297159-500-500/EAF71.jpg?v=639247488399830000', href: ALL_CATEGORIES },
        { model: 'ECM30', name: 'Cafeteira Elétrica Digital 38 Xícaras Experience Programável', img: VTEX + '214556-500-500/Coffee_Machine_ECM30_FrontView_Electrolux_1000x1000_principal.jpg?v=638848332276830000', href: ALL_CATEGORIES },
        { model: 'EBL1500', name: 'Liquidificador 1500W 3.2L Efficient TriForce 15 Velocidades', img: VTEX + '296668-500-500/Blender_EBL1500_Perspective_Electrolux-1000x1000.jpg?v=639233702846600000', href: ALL_CATEGORIES }
    ]
};

const faqs = [
    { q: 'Como funciona o período de garantia para quem tem mais de uma modalidade de garantia?', a: 'As garantias são somadas: primeiro vale a garantia legal, depois a contratual Electrolux e, por último, a garantia estendida, caso tenha sido contratada.' },
    { q: 'Preciso fazer a conversão do meu fogão Electrolux para gás natural (GN). Como faço?', a: 'A conversão deve ser feita por uma assistência autorizada. Solicite o serviço pelo site ou pelo 0800 728 8778.' },
    { q: 'Guia da lava-louças: o que é, como usar e limpar', a: 'Remova os resíduos maiores, distribua as louças sem sobrepor, use detergente próprio e limpe o filtro semanalmente.' },
    { q: 'O que é e como funciona a tecnologia AutoSense?', a: 'O AutoSense ajusta automaticamente tempo, água e energia conforme a quantidade de roupa e o nível de sujeira.' },
    { q: 'Como fazer a configuração do ar-condicionado com o aplicativo?', a: 'Baixe o app Electrolux, crie sua conta, ative o Wi-Fi do aparelho pelo controle remoto e siga o passo a passo no aplicativo.' },
    { q: 'Confira o passo a passo de como trocar o refil do purificador de água Acqua Pure', a: 'Gire o refil antigo no sentido anti-horário, encaixe o novo, gire até travar e descarte os primeiros 2 litros de água.' },
    { q: 'Como fazer a manutenção da sua Lava e Seca', a: 'Limpe o filtro de fiapos, o dispenser de sabão e a borracha da porta mensalmente, e rode um ciclo de limpeza do cesto.' }
];

const stores = [
    { name: 'Autorizada Centro Técnico', address: 'Rua das Flores, 120 - Centro', distance: '1,2 km' },
    { name: 'Eletro Service Assistência', address: 'Av. Brasil, 2450 - Jardim América', distance: '3,8 km' },
    { name: 'Refrigeração Sul Autorizada', address: 'Rua XV de Novembro, 890 - Batel', distance: '5,1 km' }
];

const searchIndex = [
    { label: 'Solicitar assistência técnica', type: 'Serviço', href: '#assistencia' },
    { label: 'Encontrar autorizada mais próxima', type: 'Serviço', href: '#assistencia' },
    { label: 'Registrar produto', type: 'Serviço', href: '#ajuda' },
    { label: 'Guias e manuais', type: 'Conteúdo', href: '#ajuda' },
    { label: 'Receitas', type: 'Conteúdo', href: '#recursos' },
    { label: 'Garantia estendida', type: 'Serviço', href: '#recursos' },
    { label: 'Benefícios e cupons', type: 'Benefício', href: '#beneficios' },
    { label: 'Canais de atendimento', type: 'Atendimento', href: '#contato' },
    ...Object.values(products).flat().map(p => ({ label: `${p.name} ${p.model}`, type: 'Produto', href: '#produtos' })),
    ...faqs.map(f => ({ label: f.q, type: 'Dúvida', href: '#faq' }))
];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'text') node.textContent = v;
        else if (k === 'class') node.className = v;
        else node.setAttribute(k, v);
    });
    [].concat(children).forEach(c => c && node.append(c));
    return node;
}

const icon = name => el('i', { 'data-lucide': name });
const refreshIcons = () => window.lucide && lucide.createIcons();

function toast(message) {
    const t = $('#toast');
    t.textContent = message;
    t.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.remove('show'), 2800);
}

function openDialog(id) {
    const d = document.getElementById(id);
    if (!d.open) d.showModal();
}

/* Header: dropdowns e menu mobile */
function closeDropdowns(except) {
    $$('.dropdown.open').forEach(d => {
        if (d === except) return;
        d.classList.remove('open');
        $('.dropdown-toggle', d).setAttribute('aria-expanded', 'false');
    });
}

$$('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        const dd = btn.closest('.dropdown');
        const open = !dd.classList.contains('open');
        closeDropdowns(dd);
        dd.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
    });
});

document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) closeDropdowns();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDropdowns();
});

const nav = $('#nav');
$('#menu-toggle').addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    $('#menu-toggle').setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    nav.classList.remove('open');
    closeDropdowns();
    if (link.dataset.category) selectTab(link.dataset.category);
});

/* Dialogs */
$$('[data-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
$$('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));

/* Login (estático, só guarda nome/e-mail no navegador) */
const USER_KEY = 'cuida-user';

function renderUser() {
    const user = JSON.parse(localStorage.getItem(USER_KEY) || 'null');
    $('#login-open').hidden = !!user;
    $('#account').hidden = !user;
    $('#welcome').hidden = !!user || sessionStorage.getItem('welcome-closed') === '1';
    if (user) $('#account-name').textContent = `Olá, ${user.name}`;
}

$('#login-open').addEventListener('click', () => openDialog('login-dialog'));
$$('[data-open-login]').forEach(b => b.addEventListener('click', () => openDialog('login-dialog')));

$('#login-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.target);
    localStorage.setItem(USER_KEY, JSON.stringify({ name: data.get('name').trim(), email: data.get('email') }));
    e.target.reset();
    $('#login-dialog').close();
    renderUser();
    toast('Login realizado com sucesso!');
});

$('#logout').addEventListener('click', () => {
    localStorage.removeItem(USER_KEY);
    closeDropdowns();
    renderUser();
    toast('Você saiu da sua conta.');
});

$('#welcome-close').addEventListener('click', () => {
    sessionStorage.setItem('welcome-closed', '1');
    $('#welcome').hidden = true;
});

/* Busca */
const searchInput = $('#search-input');
const searchResults = $('#search-results');

function renderSearch(term) {
    const q = term.trim().toLowerCase();
    searchResults.replaceChildren();
    if (!q) return;
    const found = searchIndex.filter(i => i.label.toLowerCase().includes(q)).slice(0, 8);
    if (!found.length) {
        searchResults.append(el('li', { class: 'empty', text: 'Nenhum resultado encontrado.' }));
        return;
    }
    found.forEach(item => {
        const a = el('a', { href: item.href }, [el('span', { text: item.label }), el('small', { text: item.type })]);
        a.addEventListener('click', () => $('#search-dialog').close());
        searchResults.append(el('li', {}, a));
    });
}

$('#search-open').addEventListener('click', () => {
    openDialog('search-dialog');
    searchInput.focus();
});
searchInput.addEventListener('input', () => renderSearch(searchInput.value));

/* Benefícios */
const track = $('#benefits-track');

benefits.forEach(b => {
    const tooltip = el('div', { class: 'info-tooltip', text: b.info, hidden: '' });
    const infoBtn = el('button', { class: 'info-button', 'aria-label': 'Mais informações' }, icon('info'));
    infoBtn.addEventListener('click', () => { tooltip.hidden = !tooltip.hidden; });

    const cta = el('button', { class: 'button button-primary button-sm', text: b.cta });
    cta.addEventListener('click', () => {
        if (b.coupon) {
            navigator.clipboard?.writeText(b.coupon);
            toast(`Cupom ${b.coupon} copiado!`);
        } else if (b.action === 'schedule') openDialog('schedule-dialog');
        else if (b.action === 'register') openDialog('register-dialog');
        else toast('Conteúdo liberado em "Meus benefícios".');
    });

    track.append(el('article', { class: 'benefit-card' }, [
        el('img', { src: b.img, alt: '', loading: 'lazy' }),
        el('span', { class: 'benefit-icon' }, icon(b.icon)),
        infoBtn,
        tooltip,
        el('div', { class: 'benefit-body' }, [el('h4', { text: b.title }), el('p', { text: b.text }), cta])
    ]));
});

$$('[data-scroll]').forEach(btn => btn.addEventListener('click', () => {
    const card = $('.benefit-card', track);
    track.scrollBy({ left: Number(btn.dataset.scroll) * (card.offsetWidth + 16), behavior: 'smooth' });
}));

/* Produtos por categoria */
const grid = $('#product-grid');

function selectTab(cat) {
    $$('#product-tabs .tab').forEach(t => {
        const active = t.dataset.tab === cat;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
    });
    grid.replaceChildren(...products[cat].map(p => el('a', {
        class: 'product-card',
        href: p.href,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Ir para a página do produto ${p.model} para saber mais`
    }, [
        el('img', { src: p.img, alt: p.name, loading: 'lazy' }),
        el('div', {}, [
            el('small', { text: p.model }),
            el('h3', { text: p.name }),
            el('span', {}, ['Saiba mais ', icon('arrow-right')])
        ])
    ])));
    refreshIcons();
}

$$('#product-tabs .tab').forEach(t => t.addEventListener('click', () => selectTab(t.dataset.tab)));

/* FAQ */
$('#faq-list').append(...faqs.map(f => el('details', {}, [
    el('summary', {}, [el('span', { text: f.q }), icon('plus')]),
    el('p', { text: f.a })
])));
$('#faq-list').addEventListener('toggle', e => {
    if (!e.target.open) return;
    $$('#faq-list details').forEach(d => { if (d !== e.target) d.open = false; });
}, true);

/* Registro, agendamento e autorizadas */
$('#register-open').addEventListener('click', () => openDialog('register-dialog'));
$('#schedule-open').addEventListener('click', () => openDialog('schedule-dialog'));
$('#find-open').addEventListener('click', () => openDialog('find-dialog'));

$('#register-form').addEventListener('submit', e => {
    e.preventDefault();
    const model = new FormData(e.target).get('model');
    e.target.reset();
    $('#register-dialog').close();
    toast(`Produto ${model} registrado com sucesso!`);
});

$('#schedule-form').addEventListener('submit', e => {
    e.preventDefault();
    const protocol = Math.floor(100000 + Math.random() * 900000);
    e.target.reset();
    $('#schedule-dialog').close();
    toast(`Assistência agendada! Protocolo #${protocol}`);
});

$('#find-form').addEventListener('submit', e => {
    e.preventDefault();
    $('#store-list').replaceChildren(...stores.map(s => el('li', {}, [
        el('strong', { text: s.name }),
        el('span', { text: `${s.address} · ${s.distance}` })
    ])));
});

/* Chat */
const chat = $('#chat');
const chatBody = $('#chat-body');

function addMessage(text, from) {
    chatBody.append(el('div', { class: `msg ${from}`, text }));
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(text) {
    const t = text.toLowerCase();
    if (/garantia/.test(t)) return 'Você pode consultar e estender a garantia registrando seu produto em "Registrar produto".';
    if (/assist|conserto|reparo|defeito/.test(t)) return 'Para solicitar assistência técnica, clique em "Solicitar assistência" na página inicial.';
    if (/pedido|entrega|troca|devolu/.test(t)) return 'Para pedidos, entregas e trocas, informe o número do pedido que vamos verificar.';
    if (/cupom|desconto/.test(t)) return 'Use o cupom ELECTROLUXCUIDA para 5% OFF na Loja Electrolux.';
    return 'Entendi! Um de nossos atendentes vai te ajudar. Atendimento de segunda a sábado, das 8h às 18h.';
}

function openChat() {
    chat.hidden = false;
    if (!chatBody.children.length) addMessage('Olá! Sou o agente virtual Electrolux. Como posso ajudar?', 'bot');
    $('#chat-input').focus();
}

$('#chat-open').addEventListener('click', openChat);
$$('[data-open-chat]').forEach(b => b.addEventListener('click', openChat));
$('#chat-close').addEventListener('click', () => { chat.hidden = true; });

$('#chat-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#chat-input');
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    setTimeout(() => addMessage(botReply(text), 'bot'), 600);
});

/* Init */
renderUser();
selectTab('geladeira');
refreshIcons();
