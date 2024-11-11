window.onscroll = function() {
    var header = document.querySelector('header.bg-dark');
    
    if (window.scrollY > 50) {  // אם הגולל למטה ב-50 פיקסלים
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};