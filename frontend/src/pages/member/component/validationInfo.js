export default function validationInfo(formValues) {
  let errors = {}

  if (formValues.account !== undefined) {
    if (formValues.account.length === 0) {
      errors.account = '請填寫使用者帳號'
    }
  }

  if (formValues.password !== undefined) {
    if (formValues.password.length === 0) {
      errors.password = '請填寫密碼'
    } else if (
      formValues.password.length < 6 ||
      formValues.password.length > 12
    ) {
      errors.password = '請填寫6-12位密碼'
    }
  }

  if (formValues.rePassword !== undefined) {
    if (formValues.rePassword.length === 0) {
      errors.rePassword = '請填寫密碼'
    } else if (formValues.rePassword !== formValues.password) {
      errors.rePassword = '密碼輸入不一致'
    }
  }

  if (formValues.oldPassword !== undefined) {
    if (formValues.oldPassword.length === 0) {
      errors.oldPassword = '請填寫密碼'
    } else if (
      formValues.oldPassword.length < 6 ||
      formValues.oldPassword.length > 12
    ) {
      errors.oldPassword = '請填寫6-12位密碼'
    }
  }

  if (formValues.name !== undefined) {
    if (formValues.name.length === 0) {
      errors.name = '請填寫使用者姓名'
    }
  }

  if (formValues.gender !== undefined) {
    if (formValues.gender.length === 0) {
      errors.gender = '請填寫使用者性別'
    }
  }

  if (formValues.cellphone !== undefined) {
    if (formValues.cellphone.length === 0) {
      errors.cellphone = '請填寫手機號碼'
    } else if (!/^(09)[0-9]{8}$/.test(formValues.cellphone)) {
      errors.cellphone = '手機號碼格式有誤'
    }
  }

  if (formValues.email !== undefined) {
    if (formValues.email.length === 0) {
      errors.email = '請填寫 Email'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = 'Email 格式有誤'
    }
  }

  return errors
}
