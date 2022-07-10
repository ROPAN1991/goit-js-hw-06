const form = document.querySelector('.login-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const [email, password] = event.target.elements
    if(email.value.length === 0 || password.value.length === 0) {
        alert('Всі поля повинні бути заповнені')
    } else {
        const fields = {email: email.value, password: password.value}
        console.log(fields)
        form.reset()
    }
})
