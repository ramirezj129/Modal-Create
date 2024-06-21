let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];


function setLocalStorage(data){

    localStorage.setItem('items', JSON.stringify(data))
}

function addToStorage(first_name, task_name, desc_name){

    itemsArray.push({first_name:first_name, task_name:task_name, desc_name:desc_name})
    setLocalStorage(itemsArray)
    displayItems()


}

function displayItems(){

    let table = document.getElementById('table-d')
    table.setAttribute('style', 'display:table;')

    let arrayItems = ``


    for(let i = 0; i < itemsArray.length; i++){
        arrayItems +=`
            
        <tr>
            <th>${itemsArray[i].first_name}</th>
            <th>${itemsArray[i].task_name}</th>
            <th>${itemsArray[i].desc_name}</th>

        </tr>

        
     
        `
    }


    document.getElementById('body-output').innerHTML = arrayItems

}


document.getElementById('modal-input').addEventListener('click', ()=>{

    first_name = document.getElementById('name').value
    task_name = document.getElementById('task').value
    desc_name = document.getElementById('desc').value


    if(first_name && task_name && desc_name){

        addToStorage(first_name,task_name,desc_name)

        document.getElementById('name').value = ''
        document.getElementById('task').value = ''
        document.getElementById('desc').value = ''

        let modalSuccessAlert = document.querySelector('.alertS')
        console.log(modalSuccessAlert)

        modalSuccessAlert.setAttribute('style', 'display:block')
        setTimeout(()=>{

            $(modalSuccessAlert).fadeOut("slow", ()=>{
                $(this).attr("style", "display: none")
            })

        },3000)


    }
    else{

        let modalDangerAlert = document.querySelector('.alertD')

        modalDangerAlert.setAttribute('style', 'display:block')

        setTimeout(()=>{

            $(modalDangerAlert).fadeOut("slow", ()=>{
                $(this).attr("style", "display: none")
            })


        },3000)

    }


})

displayItems()