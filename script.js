const popup = document.getElementById("popup");

function handleClick() {
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", () => {
        popup.style.visibility = "visible";
    });
}

function closePopup() {
    const confirmBtn = document.getElementById("confirm-btn");
    confirmBtn.addEventListener("click", () => {
        popup.style.visibility = "hidden";
    });
}

handleClick();
closePopup();
