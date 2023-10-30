const counter = document.querySelector('.counter-number');

async function updateCounter() {
    try {
        let response = await fetch('https://nfzhqqjqsbk6yrg3lzsuoqhdlm0dzxvy.lambda-url.us-east-1.on.aws/');
        
        if (response.ok) {
            let data = await response.json();
            counter.innerHTML = `Views: ${data.count}`;
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

updateCounter();