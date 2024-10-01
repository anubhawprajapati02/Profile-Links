let whPopup = document.querySelector(".fa-whatsapp");
let leetpop = document.querySelector('.leetpop');

// Show or hide the WhatsApp popup on click
whPopup.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling to the document
    let popup = whPopup.closest('.link').querySelector('.popup');
    popup.classList.toggle('show');
});

// Show or hide the LeetCode popup on click
leetpop.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling to the document
    let popup = leetpop.closest('.link').querySelector('.popup');
    popup.classList.toggle('show');
});

// Hide the popups when clicking outside
document.addEventListener('click', function (event) {
    let whatsappPopup = whPopup.closest('.link').querySelector('.popup');
    let leetpopPopup = leetpop.closest('.link').querySelector('.popup');

    // Hide WhatsApp popup if clicked outside
    if (!whPopup.contains(event.target) && !whatsappPopup.contains(event.target)) {
        whatsappPopup.classList.remove('show');
    }

    // Hide LeetCode popup if clicked outside
    if (!leetpop.contains(event.target) && !leetpopPopup.contains(event.target)) {
        leetpopPopup.classList.remove('show');
    }
});
