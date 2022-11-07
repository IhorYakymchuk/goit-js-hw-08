import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
console.log(formData);

dataFromLocalStorage();

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}


// ========example Repeta js-22 10-1-2-шаблонизация-и-localstorage 02-feedback.js============

// import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';

// const STORAGE_KEY = 'feedback-msg';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form  textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextarea();

// /*
//  * - Останавливаем поведение по умолчанию
//  * - Убираем сообщение из хранилища
//  * - Очищаем форму
//  */
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// /*
//  * - Получаем значение поля
//  * - Сохраняем его в хранилище
//  * - Можно добавить throttle
//  */
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// /*
//  * - Получаем значение из хранилища
//  * - Если там что-то было, обновляем DOM
//  */
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

// // Домой
// // сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// // const formData = {};

// // refs.form.addEventListener('input', e => {
// //   // console.log(e.target.name);
// //   // console.log(e.target.value);

// //   formData[e.target.name] = e.target.value;

// //   console.log(formData);
// // });

/**
  |============================
  | alternative
  |============================
*/
// import throttle from 'lodash.throttle';

// const formEL = document.querySelector(".feedback-form");
// const emailEl = document.querySelector('[type="email"]');
// const textareaEl = document.querySelector('[name="message"]');

// const LOCALSTORAGE_KEY = "feedback-form-state";
// const object = localStorage.getItem(LOCALSTORAGE_KEY) || {};

// formEL.addEventListener('input', throttle(onFormInput, 500));
// formEL.addEventListener('submit', onFormSubmit);

// // function onUpdatePage()

// function onFormInput(e) {
//     object.textareaEl = textareaEl.value;
//     object.emailEl = emailEl.value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object) );
         
// }
// function onFormSubmit(e) {
//     e.preventDefault();
//     e.target.reset();
//     console.log(e.target)
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//     console.log(object)
// }

// function onUpdatePage() {
//     const saveValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
//     if ( saveValue ) {
//         textareaEl.value = saveValue.textarea
//         emailEl.value = saveValue.email
//     }
// }