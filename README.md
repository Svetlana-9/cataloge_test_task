# README

Данный проект представляет собой каталог для покупки мороженного.

## Реализация
В данном проекте реализованы:
1. Шапка страницы, в которой представлена информация по общему количеству товаров в корзине и их суммарной стоимости;
2. Секция для отображения католога товаров мороженного, полученных по API (первые 10 товаров);
3. Карточка с необходимой информацией по каждому товару;
4. Hover-эффект для карточек товара;
5. Кнопки добавления и удаления товаров в/из корзины, счётчик количества добавленных в корзину экземпляров по каждому товару;
6. Loading при загрузке карточек товаров;
7. Footer с информацией об авторе;

![Каталог мороженого](https://github.com/user-attachments/assets/64535251-332e-4fec-80ac-24c8f730bf32)

8. Использование localStorage, в котором по ключу "cart" хранится актуальная информация о товарах в корзине в виде { id: количество экземпляров в корзине, ... };

![local storage](https://github.com/user-attachments/assets/78cce837-5669-4720-bfc3-789d8a8f96e5)

9. Поиск товаров в каталоге по названию (без учёта регистра).

![Поиск](https://github.com/user-attachments/assets/51306809-d4c6-4efe-931d-a9391835f188)

## Запуск проекта

npm i && npm run start

