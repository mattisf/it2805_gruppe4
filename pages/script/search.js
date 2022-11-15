function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

const dropDown = document.getElementById("myDropdown");
dropDown.style.display = 'none'

const searchBar = document.getElementById("searchField");
searchBar.addEventListener('click', (e) => {
  if (searchBar.contains(e.target)) {
    if (dropDown.style.display == 'none') {
      dropDown.style.display = 'block';
    }
  }
});

window.addEventListener('click', (e) => {
  if (!(searchBar.contains(e.target))) {
    dropDown.style.display = 'none';
  }
})

  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = searchBar;
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


