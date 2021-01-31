const validationForm = (values) => {

    let errors = {};

    if (!values.name) {
        errors.name = "Name required"
    }

    if (!values.company) {
        errors.company = "company required"
    }

    if (!values.address) {
        errors.address = "company required"
    }
    if (!values.phone) {
        errors.phone = "company required"
    } else if (/((\(\d{3}\) ?)|(\d{3}))?\d{3}\d{4}/.test(values.phone)) {
        errors.phone = "Phone number is invalid"
    }
    // console.log(Object.keys(errors).length);
    return errors
}

export default validationForm