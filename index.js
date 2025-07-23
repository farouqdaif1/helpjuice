document.addEventListener('DOMContentLoaded', () => {
    let firstInput = document.getElementById('first-input');
    addEventListenerToInput(firstInput);
});


const addEventListenerToInput = (inputElement) => {
    inputElement.addEventListener("input", function () {
        updateInputStyling(inputElement);
        generateDropdownOptions(inputElement, inputElement.value);
    });
    inputElement.addEventListener("keydown", (event) => handleEnterPress(inputElement, event));
}
const updateInputStyling = (inputElement) => {
    let isHeading = inputElement.placeholder === "Heading 1";
    if (isHeading) {
        inputElement.style.color = "#212936";
        if (inputElement.previousElementSibling) {
            inputElement.previousElementSibling.style.display = "inline";
        }
    } else {
        inputElement.style.color = "#4d5562";
    }
}
const handleEnterPress = (inputElement, event) => {
    if (!(event.key === "Enter" || event.keyCode === 13)) {
        return;
    }

    if (inputElement.placeholder === "Type / for blocks , @ to link docs or people") {
        handleBlocksInput(inputElement);
    } else if (inputElement.placeholder === "Heading 1") {
        handleHeadingInput(inputElement);
    }
}

const handleBlocksInput = (inputElement) => {
    let regex1 = /^\/1.*/;
    let regex2 = /^\/1$/;
    let inputValue = inputElement.value;

    if (regex2.test(inputValue) && inputValue) {
        convertToHeadingInput(inputElement);
    } else if (regex1.test(inputValue) && inputValue) {
        createHeadingFromSlicedText(inputElement);
    } else if (inputValue) {
        createRegularInput(inputElement);
    }
}

const convertToHeadingInput = (inputElement) => {
    // Convert to Heading 1 input
    inputElement.value = "";
    inputElement.placeholder = "Heading 1";
    inputElement.classList.add("heading-1");
    inputElement.classList.add("heading-1-before");
    inputElement.style.fontSize = "3em";
    inputElement.focus();
    let nextSibling = inputElement.nextElementSibling;
    if (nextSibling) {
        nextSibling.remove();
    }
}

const createHeadingFromSlicedText = (inputElement) => {
    // Create heading with sliced text (remove "/1" prefix)
    let string = inputElement.value.slice(2);
    inputElement.style.display = "none";
    let header = document.createElement("h1");
    header.innerHTML = string;
    inputElement.parentNode.insertBefore(header, inputElement.nextSibling);
    createNewInput(header);
}

const createRegularInput = (inputElement) => {
    // Create regular input
    inputElement.style.fontColor = "#4d5562";
    createNewInput(inputElement);
}

const handleHeadingInput = (inputElement) => {
    inputElement.style.display = "none";
    inputElement.classList.remove("heading-1-before");
    if (inputElement.previousElementSibling) {
        inputElement.previousElementSibling.style.display = "none";
    }
    let header = document.createElement("h1");
    header.innerHTML = inputElement.value;
    inputElement.parentNode.insertBefore(header, inputElement.nextSibling);
    createNewInput(header);
}

const generateDropdownOptions = (inputElement, inputValue) => {
    let regex2 = /^\/1$/;

    if (inputElement.placeholder !== "Heading 1") {
        if (regex2.test(inputValue)) {
            createDropdownElement(inputElement);
            addDropdownClickHandler(inputElement);
        } else {
            removeExistingDropdown(inputElement);
        }
    }
}

const createDropdownElement = (inputElement) => {
    let dropdownElement = document.createElement("div");
    dropdownElement.className = "dropdown";
    inputElement.parentNode.insertBefore(dropdownElement, inputElement.nextSibling);
    dropdownElement.innerHTML = "";

    let option1 = document.createElement("div");
    option1.className = "option";
    option1.innerHTML = getDropdownContent();

    dropdownElement.appendChild(option1);
    dropdownElement.style.display = "block";
}

const getDropdownContent = () => {
    return `
        <h4>Add blocks</h4>
        <p class="after-h4">Keep typing to filter or escape to exit</p>
        <p class="filter">Filtering Keyword <span>1</span></p>
        <div class="heading-option">
        <i class="fa-solid fa-t t-letter" ></i>
            <div class="heading-option-text">
            <p>
            <strong>Heading 1</strong>
            </p>
            <p>ShortCut: type >># + space </p>
            </div>
        </div>
    `;
}

const removeExistingDropdown = (inputElement) => {
    let nextSibling = inputElement.nextElementSibling;
    if (nextSibling) {
        nextSibling.remove();
    }
}

const addDropdownClickHandler = (inputElement) => {
    let optionElement = document.querySelector(".option");
    if (optionElement) {
        optionElement.addEventListener("click", function () {
            convertToHeadingInput(inputElement);
        });
    }
}

const createNewInput = (header) => {
    if (!header.nextElementSibling) {
        let divSpan = document.createElement("div");
        divSpan.className = "div-span";
        header.parentNode.insertBefore(divSpan, header.nextSibling);
        let span = document.createElement("span");
        span.className = "span";
        span.innerHTML = `<i class="fa-solid fa-bars bars"></i>`
        divSpan.appendChild(span);
        let textInput = document.createElement("input");
        textInput.type = "text";
        textInput.name = "text-input";
        textInput.placeholder = "Type / for blocks , @ to link docs or people";

        textInput.setAttribute('autocomplete', 'off');
        divSpan.appendChild(textInput);
        textInput.focus();

        addEventListenerToInput(textInput);
    }
}