const button = document.getElementById('fetchButton');
const buttonText = document.getElementById('buttonText');
const dogImage = document.getElementById('dogImage');
const placeholder = document.getElementById('placeholder');

function fetchDogImage() {
    button.disabled = true;
    buttonText.textContent = 'იტვირთება...';
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            if (!res.ok) {
                throw new Error(`რაღაც შეცდომაა! თქვენი შეცდომის კოდია ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            dogImage.src = data.message;
            dogImage.style.display = 'block';
            placeholder.style.display = 'none';
        })
        .catch(error => {
            console.error(error);
            placeholder.textContent = 'შეცდომა დაფიქსირდა სურათის ჩატვირთვისას';
        })
        .finally(() => {
            button.disabled = false;
            buttonText.textContent = 'ახალი ფოტო';
        });
}

dogImage.addEventListener('load', () => {
    dogImage.style.opacity = '1';
});