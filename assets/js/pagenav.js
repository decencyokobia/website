const menuBar = document.getElementById('menuBar');
const closeBar = document.getElementById('closeBar');
const sideBar = document.getElementById('mySidebar-links');
const sideBarItems = document.querySelectorAll('.mySidebar-item')

closeBar.addEventListener('click', () => {
    sideBar.style.display = 'none';
    menuBar.style.display = 'flex';
    closeBar.style.display = 'none';
});

menuBar.addEventListener('click', () => {
    sideBar.style.display = 'flex';
    closeBar.style.display = 'flex';
    menuBar.style.display = 'none';
});

sideBarItems.addEventListener('click', () => {
    sideBarItems.forEach(sideBarItem => {
        sideBarItem.addEventListener('click', () => {
            sideBar.style.display = 'none'
        })
    })
})