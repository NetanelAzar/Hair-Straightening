window.onload = function() {
    setTimeout(function() {
        var myModal = new bootstrap.Modal(document.getElementById('specialOfferModal'));
        myModal.show();
    }, 10000); // הצגת המודל אחרי 10 שניות
};