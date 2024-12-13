document.getElementById('btn-onClick').addEventListener('click', function() {
    axios.post('/counter')
        .then(response => {
            document.getElementById('count').textContent = response.data.count;
        })
        .catch(error => console.error('Error:', error));
});
