import { isValidURL } from './urlChecker';

const serverURL = 'http://localhost:8000/api';

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;

    if (isValidURL(formText)) {
        postData(serverURL, { url: formText })
            .then((data) => {
                document.getElementById('results').innerHTML = `
                    <p><strong>Polarity:</strong> ${data.polarity}</p>
                    <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
                    <p><strong>Text:</strong> ${data.text}</p>
                `;
            });
    } else {
        alert('Please enter a valid URL!');
    }
}

export { handleSubmit };
