import { getBreeds, createOptionElement, getBreedInfo, createImage } from "./utilities/index.js";


const catSelect = document.getElementById('cat-select')


const catBtn = document.getElementById('cat-btn')

const picturesContainer = document.getElementById('pictures-container')




window.addEventListener('DOMContentLoaded', async function(){
    const breeds = await getBreeds();
    createOptionElement(breeds, catSelect);

})





catBtn.addEventListener('click', async function(){
    let catVal = catSelect.value
    // console.log(catSelect.value)
    const catsInfo = await getBreedInfo(catVal)
    createImage(catsInfo, picturesContainer)

    

})

