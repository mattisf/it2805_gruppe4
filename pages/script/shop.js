
const items = JSON.parse(data)

const shopBody = document.getElementById("shopBody");

console.log(items)
for (const id in items) {
    console.log(items[id])
    let item = items[id]
    let shopItem = document.createElement('a')
    shopItem.id = item["name"]
    shopItem.className = "categoryLink"
    shopItem.href = "#";
    shopItem.innerHTML = `
        <img src="../../images/${item["image_src"]}">
        <div class="shopCategoryDisplay">
            ${item["name"].replaceAll('_', ' ')}
        </div>`;
    shopBody.prepend(shopItem)
}
