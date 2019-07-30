
// Write a function that returns the largest element in a list.

function FindLargest(arr) {
    if (!arr.length) {
        return '-1';
    }
    let max = Number.parseInt(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let currentValue = Number.parseInt(arr[i]);
        if (currentValue > max) {
            max = currentValue;
        }
    }
    return max;
}

let exercise1Form = document.getElementById('exercise1');
let exercise1InputAnswer = document.getElementById("exercise1InputAnswer");
exercise1Form.addEventListener('submit', event => {
    let exercise1Input = exercise1Form.elements['exercise1Input'];
    let arr = exercise1Input.value.split(',');
    let result = FindLargest(arr);

    exercise1InputAnswer.innerHTML = `For array: ${arr.join(',')} the largest value is ${result} (and check against Math.max ${Math.max(...arr)})`;
    event.preventDefault();
})
