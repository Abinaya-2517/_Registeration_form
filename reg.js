const form = document.getElementById('registrationForm');
        const submittedDataDiv = document.getElementById('submittedData');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const dataObject = {};
            formData.forEach((value, key) => {
                dataObject[key] = value;
            });
            displayData(dataObject);
        });

        function displayData(data) {
            let output = '<h2>Submitted Data:</h2>';
            output += '<ul>';
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    output += `<li><strong>${key}:</strong> ${data[key]}</li>`;
                }
            }
            output += '</ul>';
            submittedDataDiv.innerHTML = output;
        }
        function clearForm() {
    // Get the form element by its ID
    const form = document.getElementById('registrationForm');

    // Reset the form to its initial state
    form.reset();
}