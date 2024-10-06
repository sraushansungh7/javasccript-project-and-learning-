const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const print = document.querySelector('#print');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    let category;
    if (bmi < 18.6) {
      category = "You are underweight. You are unfit.";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "You are in the normal range.";
    } else {
      category = "You are overweight.";
    }

    // Display the category in the 'print' div
    print.innerHTML = `<span>${category}</span>`;

}
        
        
});

