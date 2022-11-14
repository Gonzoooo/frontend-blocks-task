//заголовок
const headerBlock = document.querySelector(".header");

//блок 2
const blockTwo = document.querySelector(".block-two");

//кнопки
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");

//скрывать-показывать заголовок
const handleToggleTitle = () => {
    headerBlock.classList.toggle("header-visible");
    btnOne.removeEventListener("click", handleToggleTitle);
};

//менять местами первые два блока
const handleToggleBlockOrder = () => {
    blockTwo.classList.toggle("block-two__order");
    btnTwo.removeEventListener("click", () => handleToggleBlockOrder());
};

btnOne.addEventListener("click", () => handleToggleTitle());

btnTwo.addEventListener("click", () => handleToggleBlockOrder());

//модальное окно при открытии страницы
window.alert("Привет, мир!");
