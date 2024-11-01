// Toggle login/logout button text
function toggleLogin() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton.innerText === 'Login') {
        loginButton.innerText = 'Logout';
    } else {
        loginButton.innerText = 'Login';
    }
}

// Alert message when like button is clicked
function likeDefinition() {
    alert('Ninja was liked');
}

// Hide the Add Definition button when clicked
function addDefinition() {
    const addButton = document.getElementById('addDefinitionButton');
    addButton.style.display = 'none';
}
