let inputElem = document.querySelector('.form-control')
console.log(inputElem);

let ulElem = document.querySelector('.todos')








function aaddNewtodo(newTodo) {
     let newLi = document.createElement('li')
     newLi.className = 'list-group-item d-flex justify-content-between align-items-center'
     console.log(newLi);
     let spanElem = document.createElement('span')
     spanElem.innerHTML = newTodo
     //  console.log(spanElem);
    
     //  console.log(newLi);
     let iElem = document.createElement('i')
     iElem.className = 'fa fa-trash-o delete'
     iElem.addEventListener('click',function(event){
                   event.target.parentElement.remove()
     })
     newLi.append(spanElem,iElem)
     ulElem.append(newLi)
}








inputElem.addEventListener('keydown', function (event) {
     let newTodo = event.target.value.trim()

     if (event.key === "Enter") {
          if (newTodo) {
               inputElem.value = ''
               event.preventDefault()

               aaddNewtodo(newTodo)

          }

     }

})



