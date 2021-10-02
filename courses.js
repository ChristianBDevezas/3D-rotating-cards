const courseItems = document.querySelectorAll(".course-item");
const frontItems = document.querySelectorAll(".course-item__front");
const checkButtons = document.querySelectorAll(".course-item__check");
const backItems = document.querySelectorAll(".course-item__back");
const backImages = document.querySelectorAll(".course-item__back__img");
const closeButtons = document.querySelectorAll(".course-item__close");

// event listeners
checkButtons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        courseItems[idx].classList.add("change");
        frontItems[idx].classList.add("change");
        backItems[idx].classList.add("change");
        backImages[idx].classList.add("change");
    });
});

closeButtons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        courseItems[idx].classList.remove("change");
        frontItems[idx].classList.remove("change");
        backItems[idx].classList.remove("change");
        backImages[idx].classList.remove("change");
    });
});