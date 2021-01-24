let list = document.querySelector('.list');
let inputField = document.getElementById('inputField');
const myButton = document.getElementById('button');




myButton.addEventListener('click', function() { 

//      clear the input and keeps its value.

    let newItem = inputField.value;
    inputField.value = "";

//      create list item and it's childs.

    let item = document.createElement('li');
    let itemText = document.createElement('span');
    let deleteButton = document.createElement('button');

//      give the span childs their values.

    itemText.innerText= newItem;
    deleteButton.innerText= 'Delete';

//      set the delete button its functionality.
    
    deleteButton.addEventListener('click', function () {
        this.parentElement.remove();
    })

//      adding the list item with his childs and focusing back to the input.

    list.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(deleteButton);
    inputField.focus();

});