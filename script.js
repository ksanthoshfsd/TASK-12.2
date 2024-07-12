
document.addEventListener('DOMContentLoaded', function() {

    function fetchDogFact() {
        return fetch('https://dog-api.kinduff.com/api/facts')
            .then(response => response.json())
            .then(data => {
                const dogFactElement = document.getElementById('dogFact');
                dogFactElement.textContent = data.facts[0];
            })
            .catch(error => {
                console.error('Error fetching dog fact:', error);
            });
    }

    fetchDogFact();

    document.getElementById('fetchDogFactBtn').addEventListener('click', fetchDogFact);
});
