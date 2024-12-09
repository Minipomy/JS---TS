document.getElementById('btn-onClick').addEventListener('click', function() {
    fetch('/click', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            document.getElementById('clickCount').textContent = data.count;
        })
        .catch(error => console.error('Error:', error));
});
