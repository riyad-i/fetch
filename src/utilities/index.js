const breedsUrl = 'https://api.thecatapi.com/v1/breeds'


const apiKey = 'live_y6WC3GdxDHoPEgsNQCw1vDFD34XhdJCz8r9sSDOATDEyzUmU5BQyaku9zbCt388x'



export async function getBreeds(){
    try {
        const response = await fetch(breedsUrl);

        const data = await response.json()

        // console.log(data);
        return data

    } catch (error) {
        console.log(error);
    }
}

export function createOptionElement(breedsArr, catSelect){
    breedsArr.forEach(item => {
        const optionEle = document.createElement('option');
        optionEle.textContent = item.name;
        optionEle.value = item.id
        catSelect.append(optionEle)

    })
}

// const breedUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='
export async function getBreedInfo(breedId){
    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&breed_ids=${breedId}&api_key=${apiKey}`);
        const data = await res.json();
        console.log(data);
        return data
    } catch (error) {
        
    }
}

export function createImage(catsInfoArr, container){
    catsInfoArr.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url 
        img.width = 400
        img.height = 400
        container.appendChild(img)
    })
}