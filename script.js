const products = [
  ['01', 'Кредит на успех', 'Для большой цели'], ['02', 'Карта «Вперед»', 'Кэшбэк до 10%'], ['03', 'Вклад «Крепкий»', 'До 16% годовых'], ['04', 'Рефинансирование', 'Соберем все в одно'], ['05', 'Ипотека мечты', 'Дом ближе, чем кажется'],
  ['06', 'Автокредит', 'Новый маршрут ждет'], ['07', 'Дебетовая карта', 'Ваши деньги в фокусе'], ['08', 'Кредит для бизнеса', 'Растите масштабно'], ['09', 'Инвестиции', 'Пусть деньги работают'], ['10', 'Страхование', 'Спокойствие каждый день'],
  ['11', 'Переводы', 'Быстро и безопасно'], ['12', 'Премиум-сервис', 'Больше внимания'], ['13', 'Образовательный', 'Вложение в будущее'], ['14', 'Зеленый кредит', 'Устойчивые решения'], ['15', 'МПБ для семьи', 'Общие большие планы']
];

const questions = [
  { category: 'Тематика', question: 'Какой финансовый сценарий сегодня для вас главный?', answers: [['Личные финансы', 'Управлять деньгами уверенно'], ['Большая покупка', 'Взять кредит на важную цель'], ['Развитие бизнеса', 'Ускорить рост проекта'], ['Семейный капитал', 'Создать надежную опору']] },
  { category: 'Тематика', question: 'Что должен сделать посетитель в первую очередь?', answers: [['Рассчитать кредит', 'Сразу увидеть условия'], ['Открыть карту', 'Получить больше свободы'], ['Создать вклад', 'Начать копить с умом'], ['Получить консультацию', 'Обсудить решение с экспертом']] },
  { category: 'Тематика', question: 'Для кого мы создаем этот опыт?', answers: [['Для меня', 'Персональные решения'], ['Для семьи', 'Общие планы и цели'], ['Для бизнеса', 'Финансы для роста'], ['Для тех, кто начинает', 'Простые первые шаги']] },
  { category: 'Визуальный стиль', question: 'Какой режим оформления вам ближе?', answers: [['Светлый', 'Ясность и легкость'], ['Темный', 'Контраст и характер'], ['Автоматический', 'Подстроиться под устройство']] },
  { category: 'Визуальный стиль', question: 'Какой характер должен быть у МПБ?', answers: [['Современный минимализм', 'Чисто, четко, по делу'], ['Премиальный', 'Статусно и с вниманием к деталям'], ['Технологичный', 'Быстро, умно, цифрово'], ['Дружелюбный', 'Понятно и без формальностей']] },
  { category: 'Визуальный стиль', question: 'Какой цветовой акцент выбрать?', answers: [['Синий и белый', 'Доверие и ясность'], ['Синий и лайм', 'Финтех с энергией'], ['Графит и золото', 'Сдержанная премиальность'], ['Синий и желтый', 'Оптимизм и движение']] },
  { category: 'Типографика и макет', question: 'Какая типографика должна вести диалог?', answers: [['Чистая без засечек', 'Спокойно и удобно читать'], ['Мягкая с засечками', 'Тепло и человечно'], ['Контрастная', 'Сильные заголовки и ясный текст']] },
  { category: 'Типографика и макет', question: 'Как организовать навигацию?', answers: [['Верхняя навигация', 'Все важное перед глазами'], ['Верхняя и боковая', 'Быстрый доступ к разделам'], ['Компактное меню', 'Больше пространства контенту']] },
  { category: 'Типографика и макет', question: 'Как показывать предложения?', answers: [['Сетка карточек', 'Сравнить одним взглядом'], ['Список', 'Читать подробно'], ['Смешанный формат', 'Главное крупно, остальное компактно']] },
  { category: 'Функции', question: 'Нужен ли подробный кредитный калькулятор?', answers: [['Да, с платежом', 'Сумма и срок влияют на результат'], ['Да, быстрый', 'Приблизительная оценка'], ['Нет', 'Сразу к заявке']] },
  { category: 'Функции', question: 'Какую поддержку включить?', answers: [['Онлайн-консультант', 'Ответ рядом в любой момент'], ['Обратный звонок', 'Свяжемся сами'], ['FAQ', 'Найду ответ самостоятельно']] },
  { category: 'Функции', question: 'Какой дополнительный элемент полезнее?', answers: [['Попап подписки', 'Выгодные условия первыми'], ['Карта отделений', 'Найти нас рядом'], ['Персональный кабинет', 'Все финансы в одном месте'], ['Ничего лишнего', 'Только главное']] },
  { category: 'Контент', question: 'Каким должен быть тон текста?', answers: [['Официальный', 'Точно и сдержанно'], ['Дружелюбный', 'Просто и по-человечески'], ['Уверенный и продающий', 'Сильные выгоды и действие']] },
  { category: 'Контент', question: 'Сколько продуктовых решений показать?', answers: [['5', 'Только самые востребованные'], ['10', 'Сбалансированный выбор'], ['15', 'Полная картина возможностей']] },
  { category: 'Контент', question: 'Каким сделать фон?', answers: [['Геометрические формы', 'Собственный графичный характер'], ['Фото деловой жизни', 'Больше человеческих историй'], ['Мягкий градиент и сетка', 'Легкая цифровая глубина'], ['Без декора', 'Максимум чистоты']] }
];

const state = { answers: [], current: 0 };
const wizard = document.querySelector('#wizard');
const wizardQuestion = document.querySelector('#wizardQuestion');
const wizardOptions = document.querySelector('#wizardOptions');
const wizardProgressBar = document.querySelector('#wizardProgressBar');
const wizardStep = document.querySelector('#wizardStep');
const wizardCategory = document.querySelector('#wizardCategory');

function renderProducts(count = 15) {
  document.querySelector('#productsGrid').innerHTML = products.slice(0, count).map(([number, title, text]) => `<article class="product-card"><span class="product-number">${number}</span><div><h3>${title}</h3><p>${text}</p></div><span class="product-link">↗</span></article>`).join('');
}

function openWizard() { wizard.classList.add('is-visible'); document.body.style.overflow = 'hidden'; renderQuestion(); }
function closeWizard() { wizard.classList.remove('is-visible'); document.body.style.overflow = ''; localStorage.setItem('mpb-wizard-seen', 'true'); }
function renderQuestion() {
  const item = questions[state.current];
  wizardCategory.textContent = item.category;
  wizardQuestion.textContent = item.question;
  wizardStep.textContent = `${String(state.current + 1).padStart(2, '0')} / 15`;
  wizardProgressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  wizardOptions.innerHTML = item.answers.map(([title, description], index) => `<button class="wizard-option" type="button" data-answer="${index}"><strong>${title}</strong><small>${description}</small></button>`).join('');
  document.querySelector('#wizardBack').style.visibility = state.current ? 'visible' : 'hidden';
}

function applyAnswer(answerIndex) {
  state.answers[state.current] = answerIndex;
  const [answer] = questions[state.current].answers[answerIndex];
  if (state.current === 4 && answer === 'Технологичный') document.documentElement.style.setProperty('--accent', '#68e1c2');
  if (state.current === 5 && answer === 'Синий и лайм') document.documentElement.style.setProperty('--accent', '#a9ed3c');
  if (state.current === 7 && answer === 'Верхняя и боковая') document.querySelector('#sidePanel').classList.add('is-open');
  if (state.current === 13) renderProducts(answer === '5' ? 5 : answer === '10' ? 10 : 15);
  if (state.current === 10 && answer === 'Онлайн-консультант') document.querySelector('#chatWidget').classList.add('is-open');
  state.current += 1;
  if (state.current >= questions.length) { closeWizard(); document.querySelector('#products').scrollIntoView({ behavior: 'smooth' }); return; }
  renderQuestion();
}

const amount = document.querySelector('#amount');
const term = document.querySelector('#term');
function updateCalculator() {
  const principal = Number(amount.value);
  const months = Number(term.value);
  const monthlyRate = .099 / 12;
  const payment = principal * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1);
  document.querySelector('#amountValue').textContent = `${principal.toLocaleString('ru-RU')} ₽`;
  document.querySelector('#termValue').textContent = `${months} месяцев`;
  document.querySelector('#paymentValue').innerHTML = `${Math.round(payment).toLocaleString('ru-RU')} ₽ <small>/ месяц</small>`;
}

renderProducts();
amount.addEventListener('input', updateCalculator);
term.addEventListener('input', updateCalculator);
document.querySelector('#openWizard').addEventListener('click', openWizard);
document.querySelector('#wizardClose').addEventListener('click', closeWizard);
document.querySelector('#wizard').addEventListener('click', (event) => { if (event.target === wizard) closeWizard(); });
window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && wizard.classList.contains('is-visible')) closeWizard(); });
wizardOptions.addEventListener('click', (event) => { const option = event.target.closest('[data-answer]'); if (option) applyAnswer(Number(option.dataset.answer)); });
document.querySelector('#wizardBack').addEventListener('click', () => { if (state.current > 0) { state.current -= 1; renderQuestion(); } });
document.querySelector('#menuToggle').addEventListener('click', () => { const panel = document.querySelector('#sidePanel'); panel.classList.toggle('is-open'); document.querySelector('#menuToggle').setAttribute('aria-expanded', panel.classList.contains('is-open')); });
document.querySelector('#sideClose').addEventListener('click', () => document.querySelector('#sidePanel').classList.remove('is-open'));
document.querySelectorAll('.side-nav a').forEach((link) => link.addEventListener('click', () => document.querySelector('#sidePanel').classList.remove('is-open')));
document.querySelector('#chatToggle').addEventListener('click', () => document.querySelector('#chatWidget').classList.toggle('is-open'));
document.querySelectorAll('[data-chat]').forEach((button) => button.addEventListener('click', () => { document.querySelector('.chat-panel p').textContent = button.dataset.chat === 'credit' ? 'Отлично. Калькулятор уже ждет вас ниже.' : 'Расскажите о задаче, и мы подберем решение.'; }));
document.querySelector('#applyCredit').addEventListener('click', () => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }));
document.querySelector('#contactForm').addEventListener('submit', (event) => { event.preventDefault(); document.querySelector('#formMessage').textContent = 'Заявка принята. Мы свяжемся с вами в ближайшее время.'; event.target.reset(); });

if (!localStorage.getItem('mpb-wizard-seen')) openWizard();
