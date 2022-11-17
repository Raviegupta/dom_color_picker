const btn = document.getElementById('color_changer')

btn.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb( ${x}, ${y}, ${z})`
})