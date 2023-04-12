//get start and end numbers
// entry point aka controller function
function getValues(){
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    let startNumber = parseInt(startValue);
    let endNumber = parseInt(endValue);

    let numberArray = generateNumbers(startNumber, endNumber)
    displayNumbers(numberArray)

}

//genterate range of numbers to display
//Business/ function
function generateNumbers(start, end) {

let basketOfNumbers = [];

    for(let number = start; number<= end; number = number + 1) {
        basketOfNumbers.push(number); 
    }

    return basketOfNumbers; // => [0, 1, 2, 3. ..., 100]


}

//placing the generated on the page and bolding
// viewpoint
function displayNumbers(numbers){ // [0, 1, 2, 3. ..., 100]

    let results = '';

    for (let index = 0; index < numbers.length; index = index + 1){
        let currentNumber = numbers[index];

    if(currentNumber % 2==0) {
        results += `<tr><td class="evenNumber"> ${currentNumber}</td></tr>`;
    } else {
        results += `<tr><td>${currentNumber}</td></tr>`;
        }
    }
    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results; 

}

