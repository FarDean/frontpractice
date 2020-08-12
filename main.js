const gItem =Array.from(document.querySelectorAll('.portfolio-img-background'));


gItem.forEach(item=>{

    item.addEventListener('mouseover',()=>{
        item.style.boxShadow = ' inset 5px 13px 50px 32px rgba(0,0,0,.5), inset 5px 13px 50px 32px rgba(0,0,0,.5)'
        console.log('its in')
    })
    item.addEventListener('mouseout',()=>{
        item.style.boxShadow = ''
        console.log('its out')
    })
})
