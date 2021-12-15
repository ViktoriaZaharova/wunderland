// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [55.779155, 37.631936],
        zoom: 16
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [55.779155, 37.631936] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '<div class="location-address">Московская область, г. Москва, пр. Мира 25</div>',

        }, {
            iconImageHref: 'img/marker.svg',  // картинка иконки
            iconImageSize: [28, 42],                                      // размеры картинки
            // iconImageOffset: [-170, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}