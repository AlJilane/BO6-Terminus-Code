let xValue = null;
let yValue = null;
let zValue = null;

function selectVariable(variable, value) {
    if (variable === 'x') xValue = value;
    if (variable === 'y') yValue = value;
    if (variable === 'z') zValue = value;

    updateImageSelection(variable, value);

    if (xValue !== null && yValue !== null && zValue !== null) {
        calculateResults();
    }
}

function updateImageSelection(variable, value) {
    const allImages = document.querySelectorAll(`#${variable}-variables img`);
    allImages.forEach(img => img.classList.remove('selected'));

    const selectedImage = document.querySelector(`#${variable}-variables img[alt="Value ${value}"]`);
    if (selectedImage) {
        selectedImage.classList.add('selected');
    }
}

function calculateResults() {
    const result1 = (xValue * 2) + 11;
    const result2 = ((zValue * 2) + yValue) - 5;
    const result3 = Math.abs((zValue + yValue) - xValue);

    document.getElementById('result1').innerHTML = `1° Number: <strong>${result1}</strong>`;
    document.getElementById('result2').innerHTML = `2° Number: <strong>${result2}</strong>`;
    document.getElementById('result3').innerHTML = `3° Number: <strong>${result3}</strong>`;
}
