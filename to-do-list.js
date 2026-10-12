const todoList =[
    {
        name: "watch youtube video",
        date: "12/15/2023"
    },
    {
        name: "go to the gym",
        date: "12/16/2023"
    }
];

renderTodoList(todoList);

function renderTodoList(list) {
    const container = document.querySelector('.list');
    container.innerHTML = '';
   let html = '';

   list.forEach((item, index) => {
     let itemHtml = `   
        <div class="list-item">
            <ul>
                <li>${item.name}</li>
            </ul>
            <p>${item.date}</p>
           
            <h1 class="edit" onclick= "editItem(${index})">
                <span class="material-symbols-outlined">
                edit
                </span>
            </h1>
            <h1 class="delete" onclick= "deleteItem(${index})">
                <span class="material-symbols-outlined">
                delete
                </span>
            </h1>

            </div>

    `;

    html += itemHtml;
   });
    container.innerHTML += html;
   
}
function deleteItem(index) {
    todoList.splice(index,1);
    renderTodoList(todoList);
}

function editItem(index) {
  todoList[index].name = prompt('Enter your corrected plan:', todoList[index].name) || todoList[index].name;
  todoList[index].date = prompt('Enter corrected date:', todoList[index].date) || todoList[index].date;
  todoList[index].name = 'edited: ' + todoList[index].name;
  renderTodoList(todoList);
}

const addButton = document.querySelector('.add');
const inputName = document.querySelector('.input');
const inputDate = document.querySelector('.date');

addButton.addEventListener('click',()=>{
const name = inputName.value;
const date = inputDate.value;
if(name && date){
    todoList.push({name,date});
    renderTodoList(todoList);
    inputName.value = '';
    inputDate.value = '';
}
})