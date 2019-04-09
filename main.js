function seq(n) {
    return Array.from(new Array(n), (value, index) => index)
}

document.addEventListener('DOMContentLoaded', event => {
    const array = seq(4)
    array.forEach(value => {
        document.getElementById(`button${value + 1}`).addEventListener('click', event => {
            document.getElementById(`modal${value + 1}`).classList.add('is-active')
            console.log(document.getElementById(`modal${value + 1}`).classList)
        })
    })
})

function closeModal(id){
    document.getElementById(id).classList.remove('is-active')
    console.log( document.getElementById(id).classList)
}