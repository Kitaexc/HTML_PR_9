class ClothingItem {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }
}


const clothingItems = [];

function addClothingItem(item) {
    clothingItems.push(item);
}

function removeClothingItem(index) {
    clothingItems.splice(index, 1);
}

function updateClothingItem(index, newItem) {
    clothingItems[index] = newItem;
}

function validateInput(name, size, color) {
    return name.trim() !== '' && size.trim() !== '' && color.trim() !== '';
}

function displayClothingItems() {
    const clothingList = document.getElementById('clothing-list');
    clothingList.innerHTML = '';

    clothingItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <strong>${item.name}</strong> - Size: ${item.size}, Color: ${item.color}
            <button onclick="editItem(${index})">Изменить</button>
            <button onclick="deleteItem(${index})">Удалить</button>
        `;
        clothingList.appendChild(itemElement);
    });
}

function displayAddForm() {
    const addForm = document.getElementById('add-form');
    addForm.innerHTML = `
        <h2>Добавление нового элемента одежды</h2>
        <input type="text" id="name" placeholder="Название">
        <input type="text" id="size" placeholder="Размер">
        <input type="text" id="color" placeholder="Цвет">
        <button onclick="addItem()">Добавить</button>
    `;
}

function addItem() {
    const nameInput = document.getElementById('name');
    const sizeInput = document.getElementById('size');
    const colorInput = document.getElementById('color');

    const name = nameInput.value.trim();
    const size = sizeInput.value.trim();
    const color = colorInput.value.trim();

    if (validateInput(name, size, color)) {
        const newItem = new ClothingItem(name, size, color);
        addClothingItem(newItem);
        displayClothingItems();
        nameInput.value = '';
        sizeInput.value = '';
        colorInput.value = '';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function deleteItem(index) {
    removeClothingItem(index);
    displayClothingItems();
}

function editItem(index) {
    const item = clothingItems[index];
    const newName = prompt('Введите новое название:', item.name);
    const newSize = prompt('Введите новый размер:', item.size);
    const newColor = prompt('Введите новый цвет:', item.color);

    if (newName !== null && newSize !== null && newColor !== null) {
        const updatedItem = new ClothingItem(newName.trim(), newSize.trim(), newColor.trim());
        updateClothingItem(index, updatedItem);
        displayClothingItems();
    }
}

displayClothingItems();
displayAddForm();
