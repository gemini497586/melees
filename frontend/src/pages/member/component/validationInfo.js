import queryMsg from './queryMsg'

export default function validationInfo(formValues) {
  let errors = {}
  let category = 'auth'

  if (formValues.account !== undefined) {
    if (formValues.account.length === 0) {
      errors.account = queryMsg(category, 'B0101')
    }
    if (formValues.account.length > 100) {
      errors.account = queryMsg(category, 'B0102')
    }
  }

  if (formValues.password !== undefined) {
    if (formValues.password.length === 0) {
      errors.password = queryMsg(category, 'C0101')
    } else if (
      formValues.password.length < 6 ||
      formValues.password.length > 12
    ) {
      errors.password = queryMsg(category, 'C0102')
    }
  }

  if (formValues.rePassword !== undefined) {
    if (formValues.rePassword.length === 0) {
      errors.rePassword = queryMsg(category, 'C0201')
    } else if (formValues.rePassword !== formValues.password) {
      errors.rePassword = queryMsg(category, 'C0203')
    }
  }

  if (formValues.oldPassword !== undefined) {
    if (formValues.oldPassword.length === 0) {
      errors.oldPassword = queryMsg(category, 'C0301')
    } else if (
      formValues.oldPassword.length < 6 ||
      formValues.oldPassword.length > 12
    ) {
      errors.oldPassword = queryMsg(category, 'C0302')
    }
  }

  if (formValues.name !== undefined) {
    if (formValues.name.length === 0) {
      errors.name = queryMsg(category, 'D0101')
    }
    if (formValues.name.length > 100) {
      errors.name = queryMsg(category, 'D0102')
    }
  }

  if (formValues.gender !== undefined) {
    if (formValues.gender.length === 0) {
      errors.gender = queryMsg(category, 'F0101')
    }
  }

  if (formValues.cellphone !== undefined) {
    if (formValues.cellphone.length === 0) {
      errors.cellphone = queryMsg(category, 'H0101')
    } else if (!/^(09)[0-9]{8}$/.test(formValues.cellphone)) {
      errors.cellphone = queryMsg(category, 'H0102')
    }
  }

  if (formValues.email !== undefined) {
    if (formValues.email.length === 0) {
      errors.email = queryMsg(category, 'I0101')
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = queryMsg(category, 'I0102')
    }
  }

  return errors
}
