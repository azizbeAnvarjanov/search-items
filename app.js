let input = document.querySelector('input');
let items = document.querySelectorAll('ul li');


function search() {
    let searchValue = input.value.toLowerCase();

    items.forEach(el => {
        let item = el.textContent.toLowerCase();

        item.includes(searchValue) ? el.classList.add('active') :  el.classList.remove('active');
    });
    
}


input.addEventListener('input', search);