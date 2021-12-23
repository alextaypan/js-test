const books = [
  {
    id: '1',
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей,
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники.
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: '2',
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы,
    оставаясь в безопасности.
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве,
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина -
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: '3',
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой.
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера,
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером,
    какими инструментами ему нужно пользоваться.`,
  },
];

// const divEl = document.querySelector('#root');
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// divEl.append(div1, div2);
// divEl.firstElementChild.classList.add('leftSide');
// divEl.lastElementChild.classList.add('rightSide');
// const title = document.createElement('h1');
// title.classList.add('title');
// title.textContent = 'Books';
// const list = document.createElement('ul');
// const btn = document.createElement('button');
// btn.classList.add('button');
// btn.textContent = 'Add';
// div1.append(title, list, btn);
// const bookList = document.querySelector('ul');
// function renderList() {
//   const bookMarkup = books
//     .map(book => {
//       return `<li class='item' id="${book.id}">
//         <p class='itemTitle'>${book.title}</p>
//         <button class='buttonLeft'>Delete</button>
//         <button class='buttonRight'>Edit</button>
//         </li>`;
//     })
//     .join('');
//   bookList.insertAdjacentHTML('afterbegin', bookMarkup);
//   document.querySelectorAll('.title').forEach(element => {
//     element.addEventListener('click’', renderPreview);
//   });
//   document.querySelectorAll('.buttonLeft').forEach(btn => {
//     btn.addEventListener('click', renderButtonDel);
//   });
//   document.querySelectorAll('.buttonRight').forEach(btn => {
//     btn.addEventListener('click', renderButtonEdit);
//   });
// }
// renderList();
// function renderPreview(e) {
//   const book = books.find(book => book.title === e.currentTarget.textContent);
//   renderBookMarkup(book);
//   div2.innerHTML = '';
//   div2.insertAdjacentHTML('afterbegin', renderBookMarkup(book));
// }
// function renderBookMarkup(book) {
//   return `<h2>${book.title}</h2><p>${book.author}</p><img src="${book.img}" alt=“${book.title}“><p>${book.plot}“</p>`;
// }
// function renderButtonDel(e) {
//   console.log(e.target.parentNode.id);
//   const index = books.findIndex(book => book.id === e.target.parentNode.id);
//   const paintRightSight = div2.querySelector('h2');
//   const paintRightSightTitle = div2.querySelector('h2').textContent;
//   if (paintRightSight && books[index].title === paintRightSightTitle) {
//     div2.innerHTML = '';
//   }
//   books.splice(index, 1);
//   bookList.innerHTML = '';
//   renderList();
// }
// function renderButtonEdit(e) {
//   console.log('edit');
// }

const divEl = document.querySelector('#root');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
divEl.append(div1, div2);
divEl.firstElementChild.classList.add('leftSide');
divEl.lastElementChild.classList.add('rightSide');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Books';
const listBooks = document.createElement('ul');
const btn = document.createElement('button');
btnAdd.textContent = 'Add';
btnAdd.classList.add('button');
div1.append(title, listBooks, btnAdd);
const btnAdd = document.querySelector('.button');
btnAdd.addEventListener('click', addBook);
const listBooksLink = document.querySelector('ul');
function renderList() {
  const bookMarkApp = books
    .map(book => {
      return `<li class="item" id="${book.id}">
      <p class="book-title">${book.title}</p>
      <button class="del">Delete</button>
      <button class="edit">Edit</button>
      </li>`;
    })
    .join('');
  listBooksLink.insertAdjacentHTML('afterbegin', bookMarkApp);
  document.querySelectorAll('.book-title').forEach(p => p.addEventListener('click', renderPreview));
  document.querySelectorAll('.del').forEach(btn => btn.addEventListener('click', renderBtnDel));

  // document.querySelectorAll('.edit').forEach(btn => btn.addEventListener('click', renderBtnEdit));
}
renderList();
function renderPreview(event) {
  const selectedBook = books.find(book => book.title === event.currentTarget.textContent);
  div2.innerHTML = '';
  div2.insertAdjacentHTML('afterbegin', renderBookMarkup(selectedBook));
}
function renderBookMarkup(book) {
  return `<h2>${book.title}</h2>
  <p>${book.author}</p>
  <img src="${book.img}" alt="${book.title}">
  <p>${book.plot}</p>
  `;
}
function renderBtnDel(e) {
  console.log(e.target.parentNode.id);
  const index = books.findIndex(book => e.target.parentNode.id === book.id);
  const paintRightSight = div2.querySelector('h2');
  const paintRightSightTitle = div2.querySelector('h2').textContent;
  if (paintRightSight && books[index].title === paintRightSightTitle) {
    div2.innerHTML = '';
  }
  books.splice(index, 1);
  listBooksLink.innerHTML = '';
  renderList();
}

function addBook(e) {
  const newBook = { id: `${Date.now()}`, title: '', author: '', img: '', plot: '' };
  div2.insertAdjacentHTML('afterbegin', renderFormMarkup());
  formFunction(newBook);
  const btnSubmit = document.querySelector('.submit');
  btnSubmit.addEventListener('click', saveChanges);
  function saveChanges(e) {
    if (newBook.title && newBook.author && newBook.img && newBook.plot) {
      books.push(newBook);
    }
  }
}

function renderFormMarkup() {
  return `<form action="">
      <label for="">Name
        <input type="text" name="title">
      </label>
      <label for="">Author
        <input type="text" name="author">
      </label>
      <label for="">Image
        <input type="text" name="img">
      </label>
      <label for="">Plot
        <input type="text" name="plot">
        <button type="button" class="submit">Submit</button>
      </label>
    </form>`;
}

function formFunction(book) {
  document.querySelectorAll('input').forEach(el => el.addEventListener('change', fillObject));
  function fillObject(e) {
    book[e.target.name] = e.target.value;
  }
}
