const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

// Select tab content item
function selectItem(e) {
  // Remove ititial default tab that's showing
  removeShow()
  // Remove default border on first item
  removeBorder()
  // Add border to current tab
  this.classList.add('tab-border')
  // Grab content item fron the DOM
  // Dynamically select name and use template literal to create full id name to select
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  tabContentItem.classList.add('show')
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove('tab-border')
  })
}

function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove('show')
  })
}
// listen for tab click
tabItems.forEach((item) => {
  item.addEventListener('click', selectItem)
})
