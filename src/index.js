import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function showError(error) {
    loader.classList.add('is-hidden');
    errorElement.classList.remove('is-hidden');
    errorElement.textContent = error.message;
}

function showBreeds(breeds) {
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
    breedSelect.classList.remove('is-hidden');
    fetchCatByBreed(breeds[0].id)
        .then(showCat)
        .catch(showError);
}

function showCat(cat) {
    catInfo.classList.remove('is-hidden');
    catInfo.innerHTML = `
        <img src="${cat[0].url}" alt="${cat[0].breeds[0].name}">
        <h2>${cat[0].breeds[0].name}</h2>
        <p>${cat[0].breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${cat[0].breeds[0].temperament}</p>
    `;
    loader.classList.add('is-hidden');
}

loader.classList.remove('is-hidden');
fetchBreeds()
    .then(showBreeds)
    .catch(showError);

breedSelect.addEventListener('change', (event) => {
    loader.classList.remove('is-hidden');
    catInfo.classList.add('is-hidden');
    fetchCatByBreed(event.target.value)
        .then(showCat)
        .catch(showError);
});
