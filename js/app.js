
$(function () {

    //Переменна для слайдеров
    const worksSlider = $('[data-slider="slick"]');

    /*Пишем функцию фильтра работ по категориям (Если работ будет мало - отключу).--------------------------------------------------------------
    Заранее укажем параметр для каждой работы */
    //Пропишем события для клика по категории.
    //Сначала сохроняем ссылку в переменную
    let filter = $("[data-filter]");

    //При клике (Стандартное поведение ссылки убираем) используем вложенную функцию
    filter.on("click", function (event) {
        event.preventDefault();

        //При клике мы будем сохранять атрибут дата в пермененной cat
        let cat = $(this).data('filter');

        /*Затем мы будем добавлять новый класс стиля hide,
        который ранее был прописан в helpers как display: none.
        Он будет менять html на стороне клинета и не станет 
        отображать hide*/

        //Сначала сравним. Если у всех элементов All то убираем все классы hide
        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {

            // Если категория не all то используем вложенную функцию 
            $("[data-cat]").each(function () {
                //Элемент, который не совпадает с атрибутом мы бужем исключать

                //В переменной будут все элементы
                let workCat = $(this).data('cat');

                //Если кнопка не равняется категории, то 
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
    //js для модальных окон-----------------------------------------------------------------------------------------------------------------------------

    //Сохраним в переменную наши кнопки. data атрибут*
    //Переменная не изменяемая
    const modalCall = $("[data-modal]");
    //Сохраним все кнопки закрытия
    const modalClose = $("[data-close]");

    //При клике на кнопку сработает функция. Снова вложенная функция
    //Функция сохраняет в переменной значение 
    modalCall.on("click", function (event) {
        //Отменяем дефолтное поведение
        event.preventDefault();

        //Сначала саму кнопку
        let $this = $(this);
        let modalId = $this.data('modal');

        //Делаем селектор и подставляем id нужного окна + подставляем класс
        $(modalId).addClass('show');
        //Так же присвоим no-scroll на тег body
        $("body").addClass('no-scroll');

        //Для анимации нужна задержка
        setTimeout(function () {
            //Анимация при открытии.Находим класс и для него поменять css свойство
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        //Добавляем дебаг для изменения размера
        worksSlider.slick('setPosition');

    });

    //При клике на данную кнопку 
    modalClose.on("click", function (event) {
        //Отменяем дефолтное поведение
        event.preventDefault();

        let $this = $(this);
        //Нужно получить родителя класса кнопки в котором она находися
        let modalParent = $this.parents('.modal');


        //Анимация при открытии.Находим класс и для него поменять css свойство
        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            //А теперь мы меняем родительский класс. Без селектора 
            modalParent.removeClass('show');
            //А при закрытии возвращаем его
            $("body").removeClass('no-scroll');
        }, 200);


    });

    //Скрываем модальное окно при клике по маске
    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            //А при закрытии возвращаем его
            $("body").removeClass('no-scroll');
        }, 200);


    });

    //Чтобы отменить закрытие при клике на окно
    $(".modal__dialog").on("click", function (event) {
        //отменяет событие клика по родителю
        event.stopPropagation();
    });

    //Slider=========================================================================
    //https://kenwheeler.github.io/slick/

    //Копипастим с сайта
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        //Кнопки
        dots: true
    });

    //Припишем кнопки переключения слайдера
    $(".slickPrev").on("click", function (event) {
        event.preventDefault();

        //Сделаем переменную, что бы слайдер ловил кнопки родительского окна
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        //Используем метод из документации slickPrev
        currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function (event) {
        event.preventDefault();

        //Сделаем переменную, что бы слайдер ловил кнопки родительского окна
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        //Используем метод из документации slickNext
        currentSlider.slick("slickNext");
    });

    // Навигация для телефона =================================================================================

    const navToggle =  $("#navToggle");
    const nav =  $("#nav");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    //js для прододжения простомтра ===========================================================================
     
    const document = $('[data-show="showBottom"]');
    
    $(document).on("click", function(event) { 
        event.preventDefault();
        
        $(".showCertificate").toggleClass("show");
        $(".showBottom").toggleClass("show");

      });
});
