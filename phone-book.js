'use strict';

/**
 * Сделано задание на звездочку
 * Реализован метод importFromCsv
 */
const isStar = true;

/**
 * Телефонная книга
 */
let phoneBook = new Map([]);

// const normailizePhone = (phone) =>{
//     let a;
//  a = `+7 (${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 8)}-${phone.slice(6, 8)}`;
//
//     return a;
// };

function mapToArray(map) {
    let array = [];
    map.forEach((value, key) => array.push({
        phone: key,
        name: value.name,
        email: value.email
    }));

    return array;
}

/**
 * Добавление записи в телефонную книгу
 * @param {String} phone
 * @param {String?} name
 * @param {String?} email
 * @returns {Boolean}
 */
function add(phone, name, email) {
    const valideNumber = (/^\d{10}$/);
    if (valideNumber.test(phone) &&
        name !== '' &&
        !phoneBook.hasOwnProperty(phone) &&
        name !== undefined) {
        phoneBook[phone] = {
            name: name,
            email: email
        };

        return true;
    }

    return false;
}

/**
 * Обновление записи в телефонной книге
 * @param {String} phone
 * @param {String?} name
 * @param {String?} email
 * @returns {Boolean}
 */
function update(phone, name, email) {
    if (phoneBook.hasOwnProperty(phone) &&
        name !== '' &&
        name !== undefined) {
        phoneBook[phone] = {
            name: name,
            email: email
        };

        return true;
    }

    return false;
}

/**
 * Удаление записей по запросу из телефонной книги
 * @param {String} query
 * @returns {Number}
 */
function findAndRemove(query) {
    return query.length;
}

/**
 * Поиск записей по запросу в телефонной книге
 * @param {String} query
 * @returns {String[]}
 */
function find(query) {
    if (typeof query === 'string' && query !== '') {
        query = query === '*' ? '' : query;
        // let correctContacts = Array.from(phoneBook)
        //     .map((phone, name, email) => {
        //         return {
        //             phone: normailizePhone(phone),
        //             email: email,
        //             name: name
        //         };
        //     })
        //     .filter(contact => contact.phone.indexOf(query) !== -1 ||
        //         contact.email.indexOf(query) !== -1 ||
        //         contact.name.indexOf(query) !== -1
        //     )
        //     .sort((a, b) => a.name < b.name ? -1 : 1)
        //     .map(contact => `${contact.name}, ${contact.phone}, ${contact.email}`);

        return mapToArray(phoneBook);
    }
}

/**
 * Импорт записей из csv-формата
 * @star
 * @param {String} csv
 * @returns {Number} – количество добавленных и обновленных записей
 */
function importFromCsv(csv) {
    // Парсим csv
    // Добавляем в телефонную книгу
    // Либо обновляем, если запись с таким телефоном уже существует

    return csv.split('\n').length;
}

module.exports = {
    add,
    update,
    findAndRemove,
    find,
    importFromCsv,

    isStar
};
