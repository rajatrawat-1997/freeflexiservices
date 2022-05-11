const registrationValidators = values => {
    const errors = {}

    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
    }


    if (!values.mobileNumber) {
        errors.mobileNumber = 'Required'
    } else if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.mobileNumber)) {
        errors.mobileNumber = 'Invalid mobile number'
    }


    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 2) {
        errors.password = 'Minimum be 5 characters or more'
    }

    if (!values.password) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword.length < 2) {
        errors.confirmPassword = 'Minimum be 5 characters or more'
    }
    return errors
  }