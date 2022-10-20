//Получаем значение инпута
document.querySelector('#live_search').oninput = function () {
    //trim - игнорирует пробелы и сохроняет в переменную значение
    let val = this.value.trim();
    //Получаем значение елементов списка и сохраняем в переменную
    let live_searchItems = document.querySelectorAll('.live_search li');
    //Проверяем не равно ли вводимое значение пустой строке
    if (val != '') {
        //Применим цикл для поиска сопостовимого значения
        //elem - указывает на каждый элемент списка поочередно
        live_searchItems.forEach(function (elem) {
            //Теперь проверяем если
            //Serch - будет искать подстроку в строке
            //(RegExp(val,"gi")) Убираем регистр
            if (elem.innerText.search(RegExp(val, "gi")) == -1) {
                //Если не был найден, то скрываем элемент добавлением класса display none
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            } else {
                //Убираем класс hide 
                elem.classList.remove('hide');
            }
        });
    } else {
        live_searchItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}
