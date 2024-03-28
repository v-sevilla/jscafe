document.addEventListener("DOMContentLoaded", () => {
    async function getHotDrinks() {
        let url = "https://api.sampleapis.com/coffee/hot";
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function renderDrinks() {
        let drinks = await getHotDrinks();
        let html = '';
        drinks.forEach(drink => {
            let htmlSegment = `<section class="hotDrinks">
                                <img src="${drink.image}" >
                                <h2>${drink.title}</h2>
                            </section>`;
    
            html += htmlSegment;
        });
    
        let hotDrinks = document.querySelector('.hotDrinks');
        hotDrinks.innerHTML = html;
    }
    
    renderDrinks();
});