const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  document.body.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === codes[index]) {
      index++
      if (index === codes.length) {
        alert('The secret to a happy life is 42.')

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
