// import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

// const breedSelect = document.querySelector('.breed-select');
// const catInfo = document.querySelector('.cat-info');
// const loadindText = document.querySelector('.loading')

// function loadindTextOk() {
//     loadindText.style.display = 'none';
// }

// function loadindTextNotOk() {
//     loadindText.style.display = 'block';
// }

// function showBreeds(breeds) {

//     breeds.forEach(breed => {
//         const option = document.createElement('option');
//         option.value = breed.id;
//         option.textContent = breed.name;
//         breedSelect.appendChild(option);
//     });
//     // loadindTextOk()
//     breedSelect.classList.remove('is-hidden');
//     fetchCatByBreed(breeds[0].id)
//         .then(showCat)
//         .then(loadindTextNotOk())
//         .then(loadindTextOk())
//         .catch(error => {
//             console.error(error);
//         });
// }

// function showCat(cat) {
//     catInfo.innerHTML = `
//         <img src="${cat[0].url}" alt="${cat[0].breeds[0].name}">
//         <h2>${cat[0].breeds[0].name}</h2>
//         <p>${cat[0].breeds[0].description}</p>
//         <p><strong>Temperament:</strong> ${cat[0].breeds[0].temperament}</p>
//     `;
// }

// fetchBreeds()
//     .then(showBreeds)
//     .catch(error => {
//         console.error(error);
//         errorText(catInfo);
//     });

// breedSelect.addEventListener('change', (event) => {
//     fetchCatByBreed(event.target.value)
//         .then(showCat)
//         .catch(error => {
//             console.error(error);
//             errorText(catInfo);
//         });
// });

import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loadindText = document.querySelector('.loading')
const daZarabotayUge = document.querySelector('.error')
daZarabotayUge.style.display = 'none'

function loadindTextOk() {
    loadindText.style.display = 'none';
}

function loadindTextNotOk() {
    loadindText.style.display = 'block';
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
       .catch(error => {
    console.error(error);
    daZarabotayUge.style.display = 'block';
    breedSelect.style.display = 'none';
})
        .finally(() => {
            loadindTextOk();
        });
}

function showCat(cat) {
    catInfo.innerHTML = `
        <img src="${cat[0].url}" alt="${cat[0].breeds[0].name}">
        <h2>${cat[0].breeds[0].name}</h2>
        <p>${cat[0].breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${cat[0].breeds[0].temperament}</p>
    `;
}

fetchBreeds()
    .then(showBreeds)
    .catch(error => {
            console.error(daZarabotayUge.style.display = 'block');
        })

breedSelect.addEventListener('change', (event) => {
    loadindTextNotOk();
    catInfo.innerHTML = '';
    fetchCatByBreed(event.target.value)
        .then(showCat)
        .catch(error => {
    console.error(error);
    daZarabotayUge.style.display = 'block';
    breedSelect.style.display = 'none';
})
        .finally(() => {
            loadindTextOk();
        });
});

