
function populateUfs(){
    const ufSelect = document.querySelector('select[name=uf]')
    
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    
    .then( (res) => res.json() )
    .then( states => {
        for(let state of states){
            ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`
        }
    })
}

populateUfs()


getCities = (event) =>{
    const citySelect = document.querySelector('[name=city]')
    const stateInput = document.querySelector('[name=state]')

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = `<option value>Selecione a Cidade</option>`
    citySelect.disabled = true

    fetch(url)
    .then( (res) => res.json() )
    .then( cities => {
        for(let city of cities){
            citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`
        }

        citySelect.disabled = false
    })

}
document
.querySelector("select[name=uf]")
.addEventListener('change', getCities)


//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(let item of itemsToCollect){
    item.addEventListener('click', handleSelectedItem)
}


const collectedItems = document.querySelector('input[name=items]')

let selectedItems = []
 
    function handleSelectedItem(event){
        const itemLi = event.target

        itemLi.classList.toggle("selected")
        const itemId = event.target.dataset.id
    

    

    //verificar se existem items selecionados, sim
    //pegar os teins selecionados 

    const alreadySelected = selectedItems.findIndex( item => item == itemId) //boolean
    

    //se já estiver selecionado, livra da seleção
    if(alreadySelected >= 0){
        //tirar seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else {

        selectedItems.push(itemId)
        //adicionar a seleção 
    }

    //se não estiver selecionaod, adicionar à seleção

    // atualizar o campo escondido com dos itens selecionados

    collectedItems.value = selectedItems
    
    }
