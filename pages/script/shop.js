
const shopBody = document.getElementById("shopBody");

for (let i = 1; i < 5; i++) {
    let shopItem = document.createElement('a')
    shopItem.className = "categoryLink";
    shopItem.href="#";
    shopItem.innerHTML=
        `<img src="../../images/necklace_1_flowers.png">
        <div class="shopCategoryDisplay">
            Charms
        </div>`;
    shopBody.prepend(shopItem);
}
