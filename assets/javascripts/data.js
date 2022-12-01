const menu = [
    {
        id: 1,
        name: "Buttermilk Pancakes",
        image: "buttermilk.png",
        info: "Pancakes are the hero of the breakfast table, and their very taste can even be described",
        category: "breakfast",
        price: "15.99",
    },
    {
        id: 2,
        name: "Godzilla Milkshake",
        image: "godzilla_milkshake.png",
        info: "A little indulgent and yet still somehow appropriate first thing in the morning, those ",
        category: "lunch",
        price: "6.99",
    },
    {
        id: 3,
        name: "Tasty Burger",
        image: "tasty_burger.png",
        info: "Exactly when you want them. Here is how to get to them right every time, whether it's a ",
        category: "shakes",
        price: "22.99",
    },
    {
        id: 4,
        name: "Bacon Overflow",
        image: "bacon_overflow.png",
        info: "Take a serving glass, pour chocolate sauce into it to make design in the glass, ",
        category: "breakfast",
        price: "8.99",
    },
    {
        id: 5,
        name: "Dinner Double",
        image: "dinner_double.png",
        info: "Diner Double Cheeseburger features two hand-pressed beef patties, American cheese.",
        category: "lunch",
        price: "13.99",
    },
    {
        id: 6,
        name: "Country Delight",
        image: "country_delight.png",
        info: "The double cheese burger also comes with your choice of wavy-cut fries",
        category: "shakes",
        price: "20.99",
    },
    {
        id: 7,
        name: "Oreo Dream",
        image: "oreo_dream.png",
        info: "Diner Double costs $10.59 at my local Denny’s, but prices may vary from store to store.",
        category: "breakfast",
        price: "18.99",
    },
    {
        id: 8,
        name: "American Classic",
        image: "american_classic.png",
        info: "Concord Grape Punch features concord grape juice with rosemary.",
        category: "breakfast",
        price: "12.99",
    },
    {
        id: 9,
        name: "steak dinner",
        image: "american_classic.png",
        info: "Dinner served with a smile because it is from divine origin.",
        category: "dinner",
        price: "39.99",
    },
]
const menuItems = document.querySelector(".menu-items")
const menuLinks = document.querySelector(".menu-links")


let displayMenuItems = (menu)=>{
    let displayMenu = menu.map((menuItem)=>{
        return `<div class="item">
        <div class="item-img">
        <img src="./assets/images/${menuItem.image}" alt="${menuItem.image}">
        </div>
        <div class="item-content">
        <h3 class="item-title">
        ${menuItem.name}
        <span>$ ${menuItem.price}</span>
        </h3>
        <hr>
        <p>${menuItem.info}</p>
        </div>
        </div>
        `
    })
    displayMenu = displayMenu.join("")
    menuItems.innerHTML = displayMenu
}
let displayMenuLinks = (menu)=>{
    const menuLink = menuLinks.querySelectorAll(".menu-links a")
    menuLink.forEach((links)=>{
        links.addEventListener("click",(e)=>{
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter((menuItem)=>{
                if(menuItem.category === category){
                    return menuItem
                }
            })
            if(category === "all"){
                displayMenuItems(menu)
            }else{
                displayMenuItems(menuCategory)
            }
        })
    })
}

window.addEventListener("DOMContentLoaded",()=>{
    displayMenuItems(menu)
    
    let categories = menu.reduce((totalItem, item)=>{
        if(!totalItem.includes(item.category)){
            totalItem.push(item.category)
        }
        return totalItem
    },["all"])
    let categoryLinks = categories.map((category)=>{
        return `<a href="#" data-id="${category}">${category}</a>`
    }).join("")
    menuLinks.innerHTML = categoryLinks

    displayMenuLinks(menu)
})