document.getElementById('flip-icon-back').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('card-flipped');
    document.getElementById('flip-icon').style.display = 'block';
});