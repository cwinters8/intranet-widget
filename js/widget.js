/**
 * Helper function to append lists to the DOM
 * @param {string} listClass - Class of the list that will be created
 * @param {string} divId - ID of the existing div that the new list will be appended to
 * @param {array} content - Data returned from the AJAX request
 * @param {string} name - Name of the key that returns the first identifier in the object
 * @param {string} status - Name of the key that returns the status identifier in the object
 * @param {string} liClassTrue - Class to be applied if status is true
 * @param {string} liClassFalse - Class to be applied if status is false
 */
function createList(listClass, divId, content, name, status, liClassTrue, liClassFalse) {
    const list = $(`<ul class="${listClass}"></ul>`);
    $(`#${divId}`).append(list);
    content.forEach(item => {
        const li = $(`<li>${item[name]}</li>`);
        list.append(li);
        if (item[status]) {
            li.addClass(liClassTrue);
        } else {
            li.addClass(liClassFalse);
        }
    })
}

/**
 * Callback function
 * Adds a list of employees and their status to the DOM
 * @param {array} employees
 */
function employeeList(employees) {
    createList('bulleted', 'employeeList', employees, 'name', 'inoffice', 'in', 'out');
}

/**
 * Callback function
 * Adds a list of rooms and their status to the DOM
 * @param {array} rooms 
 */
function roomList(rooms) {
    createList('rooms', 'roomList', rooms, 'room', 'available', 'empty', 'full');
}

$.getJSON("data/employees.json", employeeList);
$.getJSON("data/rooms.json", roomList);