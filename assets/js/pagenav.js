const menuBars = document.querySelectorAll('.menuBar');
const closeBars = document.querySelectorAll('.closeBar');
const sideBars = document.querySelectorAll('.mySidebar-links');
const sideBarItems = document.querySelectorAll('.mySidebar-item')

menuBars.forEach(menuBar => {
    menuBar.addEventListener('click', () => {
        sideBars.forEach(sideBar => {
            sideBar.style.display = 'flex';
        })
        closeBars.forEach(closeBar => {
            closeBar.style.display = 'flex';
        })
        menuBar.style.display = 'none';
    });
});

closeBars.forEach(closeBar => {
    closeBar.addEventListener('click', () => {
        sideBars.forEach(sideBar => {
            sideBar.style.display = 'none';
        })
      menuBars.forEach(menuBar => {
        menuBar.style.display = 'flex'
      })
        closeBar.style.display = 'none';
    });
});


sideBarItems.forEach(sideBarItem => {
    sideBarItem.addEventListener('click', () => {
        sideBar.style.display = 'none';
        menuBar.style.display = 'flex';
        closeBar.style.display = 'none';
    })
})
