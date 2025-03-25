document.getElementById('flip-icon').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('card-flipped');
    document.getElementById('flip-icon').style.display = 'none';
});