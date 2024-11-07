// JavaScript code to handle likes
const likes = [9, 12, 9]; // Initial likes for each post

function addLike(postId) {
    likes[postId - 1]++; // Increment the corresponding post's like count
    document.getElementById(`likes${postId}`).innerText = likes[postId - 1]; // Update the like count in the HTML
}
