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

function addsToCompleted() {
  let completeContain = document.getElementById('addComp');
  let element = document.createElement('li');
  element.id = `completeList_${Math.random()}`;
  completeContain.appendChild(element);
  let adds = document.getElementById('addedItems').textContent;
  let para = document.createElement('p');
  para.id = `completedItems_${Math.random()}`;
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `completeCheck_${Math.random()}`;
  checkBox.onclick = completedToAdds;
  let node = document.createTextNode(adds);
  para.appendChild(node);
  element.appendChild(checkBox);
  element.appendChild(para);
  document.getElementById('addedItems').value = '';
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
  document.getElementById('todoList').classList.add('hide');
  document.getElementById('completeCheck').checked = true;
  // document.getElementById('completedItems').innerHTML = adds;
  // document.getElementById('addedItems').innerHTML = ';
  // document.getElementById('todoCheck').style.display = 'none';
  // document.getElementById('completeCheck').style.display = 'inline';

}

function completedToAdds() {
  document.getElementById('completeList').classList.add('hide');
  document.getElementById('todoList').classList.remove('hide');
  document.getElementById('todoCheck').checked = false;
  /*let complete = document.getElementById('completedItems').innerHTML;
    document.getElementById('addedItems').innerHTML = complete;
    document.getElementById('completedItems').innerHTML = ';
    document.getElementById('todoCheck').style.display = 'inline';
    document.getElementById('completeCheck').style.display = 'none';*/
}
