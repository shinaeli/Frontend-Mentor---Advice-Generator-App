console.log('Hello');

const headerEl = document.querySelector('h2');
const quoteEl = document.querySelector('p');
const buttonEl = document.querySelector('.fetcher svg');

buttonEl.addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(data => {
    console.log(data);
    const {id, advice} = data.slip;
    console.log(id);
    headerEl.textContent = `Advice #${id}`;
    console.log(advice);
    quoteEl.textContent = `"${advice}"`;
})
.catch(error => {
    console.log(error);
    quoteEl.textContent = "Sorry. Couldn't get an advice at the moment."
});
});


