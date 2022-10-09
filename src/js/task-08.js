const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (ElementInternals.value === '' || password.value || '') {
        allert('Please, fill in all fields of the form!');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
    }
    event.currentTarget.reset();
  }
