const shoppingcartBody = document.getElementById("shoppingcartBody");

for (let i = 1; i < 5; i++) {
    let shopItem = document.createElement('a')
    shopItem.className = "categoryLink";
    shopItem.href="#";
    shopItem.innerHTML=
        `

        `;
        shoppingcartBody.prepend(shopItem);
}
