// modal box 
const dialog = document.getElementById('dialog-box'); //target the dialog box using DOM 

const form = document.querySelector('submitform'); //target the form box using DOM 

const closeModal = document.getElementById('close-modal');

function openDialogbox() {
    dialog.showModal(); // to show modal box on clicking login button from nav bar
}
function closeModalBox() {
    dialog.close(); // to close modal box using close button on clicking
}
function closeMyModal() {
    dialog.close();
}

// signup modal 
const signupForm = document.getElementById('submit-Signup-form')
const openSignupModal = document.getElementById('dialog-box-signup')
const signUpButton = document.getElementById('signup-button-2')
const closeSignupModal = document.getElementById('closeSignup')

signUpButton.addEventListener('click', function () {
    openSignupModal.showModal()
})
closeSignupModal.addEventListener('click', function () {
    openSignupModal.close()
})

const goToLogin = document.querySelector('.redirect-to-login')

goToLogin.addEventListener('click', function () {
    openDialogbox();
    openSignupModal.close();
})

const goToSignup = document.querySelector('.redirect-to-signup')

goToSignup.addEventListener('click', function () {
    openSignupModal.showModal();
    closeModalBox()
})

// validation of form 

document.addEventListener("DOMContentLoaded", function () {
    // Signup Form Validation
    const signupForm = document.getElementById("submit-Signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name  = document.querySelector(".name")
            const username = document.querySelector(".username");
            const email = document.querySelector(".email");
            const password = document.querySelector(".password");
            const confirmPassword = document.querySelector(".con-pass");
            
            if(name.value.trim() === ''){
                alert("Please enter your name.")
                name.style.border = "1px solid red"
                return;
            }else{
                name.style.border = "1px solid green"
            }
            if(username.value.trim() === ''){
                username.style.border = "1px solid red"
                alert("Please enter your username.")
                return;
            }else{
                username.style.border = "1px solid green"
            }

            if (!validateEmail(email.value.trim())) {
                alert("Please enter a valid email address.");
                return;
            }
            if (password.value.trim().length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            if (password.value.trim() !== confirmPassword.value.trim()) {
                alert("Passwords do not match.");
                return;
            }
            
            alert("Signup successful!");
            signupForm.submit();
        });
    }

    // Login Form Validation
    const loginForm = document.getElementById("submitform");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.querySelector(".input1").value.trim();
            const password = document.querySelector(".input2").value.trim();
            
            // if (!validateEmail(email)) {
            //     alert("Please enter a valid email address.");
            //     return;
            // }
            if(!username){
                alert("Please enter your username.")
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            
            // alert("Login successful!");
            loginForm.submit();
        });
    }
});

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}



// rating

document.addEventListener("DOMContentLoaded", function () {
    // Loop through all vendor cards (1 to 8)
    for (let i = 1; i <= 8; i++) {
        const stars = document.querySelectorAll(`input[name="rating-${i}"]`);
        const finalRating = document.getElementById(`rating-display-${i}`);

        stars.forEach((star) => {
            star.addEventListener("change", function () {
                const selectedRating = this.value; // Get selected rating
                updateFinalRating(finalRating, selectedRating);
            });
        });
    }

    function updateFinalRating(element, rating) {
        let starsDisplay = "★".repeat(rating) + "☆".repeat(5 - rating);
        element.innerHTML = `${starsDisplay} <span>(${rating}/5)</span>`;
    }
});


// sideBar 
function openSideBar() {
    const sideBar = document.querySelector('.slider');
    sideBar.style.display = 'flex'
}
function closeSideBar() {
    const sideBar = document.querySelector('.slider');
    sideBar.style.display = 'none'
}

const toggleButton = document.querySelector('.toggle')
        const closeButton = document.querySelector('.closeBar')
        toggleButton.addEventListener('click', function () {
            const sideBar = document.querySelector('.slider')
            sideBar.style.display = 'flex';
        })
        closeButton.addEventListener('click', function () {
            const sideBar = document.querySelector('.slider')
            sideBar.style.display = '';
        })


// map 


