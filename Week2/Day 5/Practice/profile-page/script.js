document.addEventListener("DOMContentLoaded", () => {
    console.log("page loaded...");

    // Select all like buttons and add click event listeners
    const likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Get the span element containing the like count
            const likesSpan = button.previousElementSibling;
            // Convert current likes to number and increment by 1
            let currentLikes = parseInt(likesSpan.textContent);
            likesSpan.textContent = `${currentLikes + 1} like(s)`;
        });
    });
});
