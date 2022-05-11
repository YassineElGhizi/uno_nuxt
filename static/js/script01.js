var triggerTabList = [].slice.call(document.querySelectorAll('#list-tab'))
var content = document.querySelector('#index_content')
var index_home = document.querySelector('#index-Home')
var Buttons = [].slice.call(document.querySelectorAll('.list-group-item'))
var tabs_pane = [].slice.call(document.querySelectorAll('.tab-pane'))


triggerTabList.forEach(function(triggerEl) {

  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('mouseover', function(event) {
    tabTrigger.show()
  })


})


// content.addEventListener('mouseleave', function(event) {
//   tabs_pane.forEach(function(tab) {
//     tab.className = 'tab-pane '
//
//   })

  Buttons.forEach(function(Button) {
    Button.className = 'list-group-item  t-font-boldest border-0'

  })
//   index_home.className = 'tab-pane active show'
//
// })
