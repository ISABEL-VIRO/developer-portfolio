const menuList = document.querySelectorAll(".list");

console.log(menuList)

function activarLink(){
  menuList.forEach(menuItem =>{
  menuItem.classList.remove('active');
    
  });

  this.classList.add('active');
} 

menuList.forEach(itemLink => {
  itemLink.addEventListener('mouseover', activarLink)
})