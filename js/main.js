const navBtn = document.querySelector('.hamburger')
const navItems = document.querySelector('.nav-items')
const navItemsLinks = document.querySelectorAll('.nav-items a')

navBtn.addEventListener('click', () => {
	navItems.classList.toggle('nav-items-active')
})

navItemsLinks.forEach(link => {
	link.addEventListener('click', () => {
		navItems.classList.remove('nav-items-active')
	})
})
