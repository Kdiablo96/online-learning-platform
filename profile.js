const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const profileInfo = document.getElementById('profile-info');
const authSection = document.getElementById('auth-section');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const logoutBtn = document.getElementById('logout-btn');
const profileForm = document.getElementById('profile-form');

// Store user info
let userInfo = null;

showSignupLink.addEventListener('click', function() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
    document.getElementById('auth-title').innerText = 'Sign Up';
});

showLoginLink.addEventListener('click', function() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    document.getElementById('auth-title').innerText = 'Login';
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const education = document.getElementById('signup-education').value;
    const password = document.getElementById('signup-password').value;

    userInfo = { name, email, education, password };
    alert('Sign up successful! You can now log in.');

    // Clear form and switch to login
    signupForm.reset();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    document.getElementById('auth-title').innerText = 'Login';
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (userInfo && userInfo.email === email && userInfo.password === password) {
        // Show profile info and hide auth section
        authSection.style.display = 'none';
        profileInfo.style.display = 'block';

        // Populate profile form with user info
        document.getElementById('profile-name').value = userInfo.name;
        document.getElementById('profile-email').value = userInfo.email;
        document.getElementById('profile-education').value = userInfo.education;
    } else {
        alert('Invalid email or password.');
    }
});

profileForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    userInfo.name = document.getElementById('profile-name').value;
    userInfo.email = document.getElementById('profile-email').value;
    userInfo.education = document.getElementById('profile-education').value;

    alert('Profile updated successfully!');
});

logoutBtn.addEventListener('click', function() {
    authSection.style.display = 'block';
    profileInfo.style.display = 'none';
    userInfo = null;  // Clear user info
    loginForm.reset();
    signupForm.reset();
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Check if there's already a user logged in
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        document.getElementById('login-email').value = storedUser.email;
        document.getElementById('login-password').value = storedUser.password; // Not secure, for demo purposes only
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful!");
            document.getElementById('profile-info').style.display = 'block';
            document.getElementById('auth-section').style.display = 'none';
        } else {
            alert("Invalid email or password.");
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const education = document.getElementById('signup-education').value;
        const password = document.getElementById('signup-password').value;

        // Store user info in local storage
        const user = {
            name,
            email,
            education,
            password
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Sign up successful! You can now log in.");
        signupForm.reset();
        document.getElementById('show-login').click(); // Show login form
    });
});
