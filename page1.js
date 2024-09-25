document.addEventListener('DOMContentLoaded', function() {
    const introText = 'Hicham Zohbi| Junior Fullstack Developer | Mobile App Developer (iOS & Android)';
    let index = 0;
    
    function typeText() {
        const typewriterElement = document.getElementById('typewriter');
        if (index < introText.length) {
            typewriterElement.innerHTML += introText.charAt(index);
            index++;
            setTimeout(typeText, 100); // Delay between each character
        }
    }
    
    typeText(); // Start typing animation
});
