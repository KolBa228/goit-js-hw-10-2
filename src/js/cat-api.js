
export { fetchBreeds, fetchCatByBreed };
const KEY = 'live_VZ1SLbLWDxhfqJdDTkoccHIln3ksGsRzopmCmcFYOh2oF7OuabnBdzspIN63yDCR';

function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': KEY
        }
    })
    .then(response => {
        return response.json();
    });
}

function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
        headers: {
            'x-api-key': KEY
        }
    })
    .then(response => {
        return response.json();
    });
}


