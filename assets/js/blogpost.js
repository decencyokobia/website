const menuDisplay = document.getElementById('mobileMenuBar');
const closeMenu =  document.getElementById('mobileCloseBar');
const sideBar = document.getElementById('blogSideBar');

menuDisplay.addEventListener('click', () => {
    sideBar.style.display = 'flex';
    menuDisplay.style.display = 'none';
    closeMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    sideBar.style.display = 'none';
    closeMenu.style.display = 'none';
    menuDisplay.style.display = 'flex';
});