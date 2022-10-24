const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Please, fill in all fields of the form!');
        console.log();
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
    }
    event.currentTarget.reset();
  }
