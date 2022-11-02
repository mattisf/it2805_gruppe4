
const items = JSON.parse(data)

const shopBody = document.getElementById("shopBody");

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

console.log(necklaces)

for (let i = 0; i < necklaces.length; i++) {
    necklaces[i].style.visibility = 'hidden';
}

for (let i = 0; i < necklaces.length; i++) {
    necklaces[i].style.visibility = 'visible';
}