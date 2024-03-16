document.getElementById("menu-toggle").addEventListener("click", function() {
    var menuItems = document.querySelector(".menu-items");
    menuItems.style.display = menuItems.style.display === "block" ? "none" : "block";
  });
  function toggle(){
    let menuItems = document.getElementById("tst");
    if(menuItems.style.display === "block") menuItems.style.display = "none";
    else menuItems.style.display = "block";
}
