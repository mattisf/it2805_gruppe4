
const items = JSON.parse(data)

const shopBody = document.getElementById("shopBody");

const necklaceCheckbox = document.getElementById("necklaceCheckbox")
necklaceCheckbox.addEventListener('click', () =>{
    checkElements("necklace")
})

const charmCheckbox = document.getElementById("charmCheckbox")
charmCheckbox.addEventListener('click', () => {
    checkElements("charm")
})

const ringCheckbox = document.getElementById("ringCheckbox")
ringCheckbox.addEventListener('click', ()=> {
    checkElements("ring")
})

itemArray = []

for (const id in items) {
    console.log(items[id])
    let item = items[id]
    let shopItem = document.createElement('a')
    shopItem.id = item["name"]
    shopItem.className = `categoryLink ${item["category"]}`
    shopItem.href = "#";
    shopItem.innerHTML = `
        <img src="../../images/${item["image_src"]}">
        <div class="shopCategoryDisplay">
            ${item["name"].replaceAll('_', ' ')}
        </div>`;
    itemArray.push(shopItem)
}

console.log(itemArray)

for (let i = 0; i < itemArray.length; i++) {
    shopBody.prepend(itemArray[i])
}

const necklaces = document.getElementsByClassName("necklace")
const charms = document.getElementsByClassName("charm")
const rings = document.getElementsByClassName("ring")

function checkElements(category) {
    if (category=="necklace") {
        for (let i = 0; i < necklaces.length; i++) {
            if (necklaceCheckbox.checked) {
                necklaces[i].style.visibility = 'visible';
            } else {
                necklaces[i].style.visibility = `hidden`
            }
        }
    } else if (category=="charm") {
        for (let i = 0; i < charms.length; i++) {
            if (charmCheckbox.checked) {
                charms[i].style.visibility = `visible`
            } else {
                charms[i].style.visibility = `hidden`
            }
        }
    } else if (category=="ring") {
        for (let i = 0; i < rings.length; i++) {
            if (ringCheckbox.checked) {
                rings[i].style.visibility = `visible`
            } else {
                rings[i].style.visibility = `hidden`
            }
        }
    }
}