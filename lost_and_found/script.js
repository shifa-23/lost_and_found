function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openPopup1() {
    document.getElementById("popup1").style.display = "block";
}

function closePopup1() {
    document.getElementById("popup1").style.display = "none";
}


// for form seection
// Function to Open the Form
function openForm() {
    document.getElementById("lostItemForm").classList.add("show");
    document.getElementById("overlay").style.display = "block";
}

// Function to Close the Form
function closeForm() {
    document.getElementById("lostItemForm").classList.remove("show");
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
    }, 300);
}

// Form Submission Handling
document.getElementById("lostForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect Form Data
    let itemName = document.getElementById("itemName").value.trim();
    let itemDesc = document.getElementById("itemDesc").value.trim();
    let location = document.getElementById("location").value.trim();
    let lostDate = document.getElementById("lostDate").value;
    let contact = document.getElementById("contact").value.trim();

    // Validate Inputs
    if (!itemName || !itemDesc || !location || !lostDate || !contact) {
        alert("Please fill in all fields.");
        return;
    }

    // Show Success Message
    document.getElementById("successMessage").innerText = "Lost item reported successfully!";
    document.getElementById("successMessage").style.display = "block";

    // Clear Form After 3 Seconds
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("lostForm").reset();
        closeForm();
    }, 2000);
});




// still working on it for scroll icon

// document.querySelectorAll('a[href^="#"]').forEach(anchor{
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     })
// });


