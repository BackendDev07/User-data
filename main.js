const name = document.querySelector('#name')
const surename = document.querySelector('#surename')
const phone = document.querySelector('#phone')
const photo = document.querySelector('#photo')
const box = document.querySelector('#list')
const update = document.querySelector('#update')
const change = document.querySelector('#change')
// const userStatus = document.querySelector('#online')

let data = {
    name: 'Sherzod',
    surename: 'Abdullayev',
    phone: +998975186267,
    status: 'Active',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzt3IYxgnU1D9hJ8OZMZy8KqJLcPZpOT9-6HEfM1ZiEbahAn0h3oCN9Pl8_TowMZZpiY&usqp=CAU'
}

let content = 'none'

update.onclick = () => {
    box.innerHTML = `<div class="img-box">
<img src="${data.photo}">
</div>
<div class="min-box">
    <h4>Name:
        <span>${data.name}</span>
    </h4>
    <h4>Surename:
        <span>${data.surename}</span>
    </h4>
    <h4>Phone number:
        <span>${data.phone}</span>
    </h4>
    <h4>Status:
        <span>${ document.querySelector('#status').value }</span>
    </h4>
</div>`
}

change.onclick = () => {
    let a = name.value
    let b = surename.value
    let c = Number(phone.value)
    let r = photo.value
    let d = document.querySelector('#status').value

    data = {
        name: a,
        surename: b,
        phone: c,
        status: d,
        photo: r
    }

    if( a === '' ) {
        name.classList.add('error')
    } else{
        name.classList.remove('error')
    } 

    if( b === '' ) {
        surename.classList.add('error')
    } else{
        surename.classList.remove('error')
    } 
    if( c === 0 ) {
        phone.classList.add('error')
    } else{
        phone.classList.remove('error')
    } 

    if( r === '' ) {
        photo.classList.add('error')
    } else{
        photo.classList.remove('error')
    } 
}