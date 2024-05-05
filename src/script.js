const pass_size = document.getElementById('pass-size');

const first_button = document.getElementById('first-button');
const second_button = document.getElementById('second-button');
const third_button = document.getElementById('third-button');
const fourth_button = document.getElementById('fourth-button');

const char_lower = `abcdefghijklmnopqrstuvwxyz`;
const char_upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const char_number = `0123456789`;
const char_spec = `%*)?@#$~`;

let lowercase = false;
let uppercase = false;
let numbers = false;
let special_char = false;

function LowerCase() {
    if (lowercase === false) {
        first_button.classList.remove("toggle-button");
        first_button.classList.add("toggle-button-active");
        lowercase = true;
    }
    else {
        first_button.classList.remove("toggle-button-active");
        first_button.classList.add("toggle-button");
        lowercase = false;
    }
}

function UpperCase() {
    if (uppercase === false) {
        second_button.classList.remove("toggle-button");
        second_button.classList.add("toggle-button-active");
        uppercase = true;
    }
    else {
        second_button.classList.remove("toggle-button-active");
        second_button.classList.add("toggle-button");
        uppercase = false;
    }
}

function Numbers() {
    if (numbers === false) {
        third_button.classList.remove("toggle-button");
        third_button.classList.add("toggle-button-active");
        numbers = true;
    }
    else {
        third_button.classList.remove("toggle-button-active");
        third_button.classList.add("toggle-button");
        numbers = false;
    }
}

function SpecialChar() {
    if (special_char === false) {
        fourth_button.classList.remove("toggle-button");
        fourth_button.classList.add("toggle-button-active");
        special_char = true;
    }
    else {
        fourth_button.classList.remove("toggle-button-active")
        fourth_button.classList.add("toggle-button");
        special_char = false;
    }
}

function RandomInt(value) {
    return Math.floor(value * Math.random());
}

function Generation() {
    let result_pass = '';
    if (pass_size.value < 1 || pass_size.value > 32) {
        alert('ERROR. Invalid size specified')
    }
    else if (lowercase || uppercase || numbers || special_char) {
        while (result_pass.length != pass_size.value) {
            const random_condition = RandomInt(4);
            let element_id = 0;
                switch (true) {
                    case (random_condition === 0 && lowercase === true):
                        element_id = RandomInt(26);
                        result_pass += char_lower.at(element_id);
                        break;
                    case (random_condition === 1 && uppercase === true):
                        element_id = RandomInt(26);
                        result_pass += char_upper.at(element_id);
                        break;
                    case (random_condition === 2 && numbers === true):
                        element_id = RandomInt(10);
                        result_pass += char_number.at(element_id);
                        break;
                    case (random_condition === 3 && special_char === true):
                        element_id = RandomInt(8);
                        result_pass += char_spec.at(element_id);
                        break;
                }
            }
        document.getElementById("output").innerText = result_pass;
    }
    else {
        document.getElementById("output").innerText = '';
        alert('ERROR. Specify the password parameters')
    }
}
