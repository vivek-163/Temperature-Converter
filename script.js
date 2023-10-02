const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

// Function to convert Celsius to Fahrenheit and Kelvin
function convertTemperature() {
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}

// Add event listeners to trigger the conversion on input change for Celsius
celsiusInput.addEventListener("input", convertTemperature);

// Add event listeners to trigger the conversion on input change for Fahrenheit
fahrenheitInput.addEventListener("input", function() {
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = (fahrenheit + 459.67) * 5/9;

        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else {
        celsiusInput.value = "";
        kelvinInput.value = "";
    }
});

// Add event listeners to trigger the conversion on input change for Kelvin
kelvinInput.addEventListener("input", function() {
    const kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(kelvin)) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (kelvin * 9/5) - 459.67;

        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    }
});
