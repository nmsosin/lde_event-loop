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

const tasks = document.querySelectorAll(".page__checkbox");
const indicator = document.querySelector(".page__indicator");
let isTaskDone = false;
let isFinished = false;

function createQueues () {
  // Task 1
  setTimeout(() => {
    console.log('Task 1')
    Promise.resolve()
    .then(() => {
      // Microtask 1.1
      console.log('Microtask 1.1')
      isTaskDone = true;

      // Render task 1.2
      console.log('Render task 1.2')
      
      for (const task of tasks) {
        if (isTaskDone) {
          task.classList.add('page__checkbox_done')
        }
      }
  })

  }, 1000)

  // Task 2
  setTimeout(() => {
    console.log('Task 2')
    // Microtask 2.1
    Promise.resolve()
    .then(() => console.log('Microtask 2.1'))
    // Microtask 2.2
    Promise.resolve()
    .then(() => console.log('Microtask 2.2'))

  }, 2000)

  // Task 3
  setTimeout(() => {
    console.log('Task 3')
    // Microtask 3.1
    Promise.resolve()
    .then(() => {
      console.log('Microtask 3.1')
      isFinished = true;

      // Render task 3.2
      console.log('Render task 3.2')
      if (isFinished) {
        indicator.classList.add('page__indicator_done')
      }
    })
  }, 3000)
}
document.querySelector(".page__button").addEventListener('click', (evt) => {
  evt.preventDefault();
  createQueues();
})

//   Дополнительное задание:
// • Реализовать клон функции map (отдельная функция или прототип для массивов на ваше усмотрение)

const customMap = (array, cb) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(cb(array[i]))
  }

  return result;
}

const testArray = [1, 2, 3, 4, 5, 6];
const double = (x) => x * 2;
const objectize = (a) => {
  const obj = {}
  obj[a] = a

  return obj
}

console.log(customMap(testArray, double)); // => expect: [2, 4, 6, 8, 10, 12]
console.log(customMap(testArray, objectize)); // => expect: [{1: 1}, {2: 2}, {3: 3}, {4: 4}, {5: 5}, {6: 6}]