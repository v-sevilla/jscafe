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

    async function renderHotDrinks() {
       let hotDrinks = await getHotDrinks();
       let html = '';
       hotDrinks.forEach(drink => {
           let htmlSegment = `<section class="hotDrinks">
                               <img src="${drink.image}" >
                               <p>${drink.title}</p>
                           </section>`;
   
           html += htmlSegment;
       });
   
       let hotDrinksList = document.querySelector('.hotDrinkList');
       hotDrinksList.innerHTML = html;
   }
   
    renderHotDrinks();

    async function getIcedDrinks() {
        let url = "https://api.sampleapis.com/coffee/iced";
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function renderIcedDrinks() {
        let icedDrinks = await getIcedDrinks();
        let html = '';
        icedDrinks.forEach(drink => {
            let htmlSegment = `<section class="icedDrinks">
                                <img src="${drink.image}" >
                                <p>${drink.title}</p>
                            </section>`;
    
            html += htmlSegment;
        });
    
        let icedDrinksList = document.querySelector('.icedDrinkList');
        icedDrinksList.innerHTML = html;
    }
    
    renderIcedDrinks();

    async function renderHotDrinkDesc() {
        let hotDrinks = await getHotDrinks();
        let html = '';
        hotDrinks.forEach(drink => {
            let htmlSegment = `<section class="hotDrinks">
                                <img src="${drink.image}" >
                                <p>${drink.title}</p>
                                <span class="drinkDescription">${drink.description}</span>
                            </section>`;
    
            html += htmlSegment;
        });
    
        let hotDrinksDesc = document.querySelector('.hotDrinkDesc');
        hotDrinksDesc.innerHTML = html;
    }
    
    renderHotDrinkDesc();

    async function renderIcedDrinkDesc() {
        let icedDrinks = await getIcedDrinks();
        let html = '';
        icedDrinks.forEach(drink => {
            let htmlSegment = `<section class="icedDrinks">
                                <img src="${drink.image}" >
                                <p>${drink.title}</p>
                                <span class="drinkDescription">${drink.description}</span>
                            </section>`;
    
            html += htmlSegment;
        });
    
        let icedDrinksDesc = document.querySelector('.icedDrinkDesc');
        icedDrinksDesc.innerHTML = html;
    }
    
    renderIcedDrinkDesc();
});