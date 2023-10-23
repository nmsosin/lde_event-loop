// Написать функцию которая создаст очереди в следующем порядке:
// 1. Задача
//   1. микрозадача
//   2. Рендер задача (например изменение стилей)
// 2. Задача
//   1. микрозадача
//   2. микрозадача
// 3. Задача
//   1. микрозадача
//   2. Рендер задача (например изменение содержание элемента)

function createQueues () {
  // Task 1
  console.log('Task 1')
  setTimeout(() => {
    // Microtask 1.1
    Promise.resolve()
    .then(() => console.log('Microtask 1.1'))
    // Render task 1.2
    console.log('Render task 1.2')
    const tasks = document.querySelectorAll(".page__checkbox");
    for (const task of tasks) {
      task.classList.add('page__checkbox_done')
    }

  }, 1000)

  // Task 2
  console.log('Task 2')
  setTimeout(() => {
    // Microtask 2.1
    Promise.resolve()
    .then(() => console.log('Microtask 2.1'))
    // Microtask 2.2
    Promise.resolve()
    .then(() => console.log('Microtask 2.2'))

  }, 2000)

  // Task 3
  console.log('Task 3')
  setTimeout(() => {
    // Microtask 3.1
    Promise.resolve()
    .then(() => console.log('Microtask 3.1'))
    // Render task 3.2
    console.log('Render task 3.2')
    document.querySelector(".page__indicator").classList.add('page__indicator_done')
  }, 3000)
}
document.querySelector(".page__button").addEventListener('click', (evt) => {
  evt.preventDefault();
  createQueues();
})

//   Дополнительное задание:
// • Реализовать клон функции map(отдельная функция или прототип для массивов на ваше усмотрение)

const customMap = (array, cb) => {
  const tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(cb(array[i]))
  }

  return tempArr;
}

const testArray = [1, 2, 3, 4, 5, 6];
const double = (x) => x * 2;
const objectize = (a) => {
  const obj = {}
  obj[a] = a
  return obj
}

console.log(customMap(testArray, double));
console.log(testArray, objectize);