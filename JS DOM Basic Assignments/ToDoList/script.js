const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', function addsItem(event) {
  let addItemContain = document.getElementById('addPara');
  let element = document.createElement('li');
  element.id = `todoList_${Math.random()}`;
  addItemContain.appendChild(element);
  let addItem = document.getElementById('addItem').value;
  let inpPara = document.createElement('input');
  inpPara.type = 'text';
  inpPara.value = addItem;
  inpPara.style.display = "none";
  let para = document.createElement('p');
  para.id = `addedItems_${Math.random()}`;
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `todoCheck_${Math.random()}`;
  checkBox.onclick = addsToCompleted;
  let node = document.createTextNode(addItem);
  para.appendChild(node);
  element.appendChild(checkBox);
  element.appendChild(inpPara);
  element.appendChild(para);
  document.getElementById('addItem').value = '';
  let btnDelete = document.createElement('button');
  btnDelete.type = 'button';
  btnDelete.classList.add('btn', 'btn-danger', 'deleteBtn');
  btnDelete.innerHTML = 'Delete';
  element.appendChild(btnDelete);
  let btnEdit = document.createElement('button');
  btnEdit.type = 'button';
  btnEdit.classList.add('btn', 'btn-success', 'editBtn');
  btnEdit.innerHTML = 'Edit';
  element.appendChild(btnEdit);
  btnDelete.addEventListener('click', function deleteItem(event) {
    event.target.parentElement.remove();
  });
  btnEdit.addEventListener('click', function EditItem(event) {
    inpPara.style.display = 'inline';
    para.style.display = 'none';
  });
  btnEdit.addEventListener('dblclick', function EditItem(event) {
    inpPara.style.display = 'none';
    para.style.display = 'inline';
    para.innerHTML = inpPara.value;
  });
});

function addsToCompleted(event) {
  let completeContain = document.getElementById('addComp');
  let checkBoxParent = event.target.parentElement;
  completeContain.appendChild(checkBoxParent);
}
