
const navbar = document.createElement("nav")
navbar.className ="header"
body = document.getElementsByTagName("body")[0]

navbar.innerHTML = `
<div class="left-header">
    <a class="headerlink" href="homePage.html">home</a>
    <a class="headerlink" href="shop/shop.html">shop </a>
    <a class="headerlink" href="about/ourHistory.html">about</a>
</div>
<div class="center-header">
    <img  src="../images/logo_1.png" onerror="this.src='../../images/logo_1.png'" alt="logo" class="logo">
</div>
<div class="right-header">
    <div class="dropdown" id="dropdown">
        <input type="text" placeholder="Search..." id="searchField" class="dropbtn" onkeyup="filterFunction()">
        <div id="myDropdown" class="dropdown-content">
          <a href="ourHistory.html">History</a>
          <a href="../homePage.html">Homepage</a>
          <a href="contactUs.html">Contact us</a>
          <a href="production.html">Product info</a>
          <a href="../shop/shop.html">Shop</a>
        </div>
      </div>
    <a class="icon-logo" href="shoppingCart.html">            <i class="material-icons" >shopping_cart</i></a>
</div>
`;

body.prepend(navbar)