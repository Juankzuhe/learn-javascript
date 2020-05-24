const task3Element = document.getElementById('task-3');

function sayHello() {
    alert('Hi everywhere!');
}

function sayYourName(name) {
    alert('Your name is: ' + name)
}


function userInfo(first_name, last_name, age) {
    const info = `Your fullname is: ${first_name} ${last_name} and your age is ${age}`
    return info
}

sayYourName('Juan Zuluaga');

task3Element.addEventListener('click', sayHello)

const combinedText = userInfo('Juan', 'Zuluaga', 29);
alert(combinedText);