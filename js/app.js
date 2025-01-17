function getButton(index) {
    const buttons = document.getElementsByClassName('dashboard__item__button'); 
  
        if (index >= 0 && index < buttons.length) {
        return buttons[index];
    }
}

function getImg(index) {
    const imgs = document.getElementsByClassName('dashboard__item__img');

    if (index >= 0 && index < imgs.length) {
        return imgs[index];
    }
}

function toggleButtonClassList(index) {
    let button = getButton(index);

    if (button) {
        button.classList.toggle('dashboard__item__button--return');
    }
}

function toggleTextButton(index) {
    let button = getButton(index);

    if (button)
        button.innerText = button.classList.contains('dashboard__item__button--return') ? 'Devolver' : 'Alugar';
}

function toggleImgClassList(index) {
    let img = getImg(index);

    if (img) {
        img.classList.toggle('dashboard__item__img--rented');
    }
}

function confirmationAlert() {
    return confirm('Deseja realmente alugar/devolver este item?');
}

function printRentedInformation() {
    const rentedItems = document.getElementsByClassName('dashboard__item__img--rented');
    const rentedItemsLength = rentedItems.length;
    const correctTextMessage = rentedItemsLength === 1 ? 'Está alugado 1 jogo' : `Estão alugados ${rentedItemsLength} jogos`;
    const rentedItemsText = rentedItemsLength > 0 ? `${correctTextMessage}` : 'Nenhum jogo está alugado';

    console.log(rentedItemsText);
}

function alterarStatus(index) {
    if (confirmationAlert()) {
        toggleButtonClassList(index);
        toggleTextButton(index);
        toggleImgClassList(index);
        printRentedInformation();
    } else {
        return;
    }
};

printRentedInformation();
