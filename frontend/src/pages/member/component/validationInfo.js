export default function validationInfo(values) {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = '請填寫使用者帳號'
  }

  if (!values.email) {
    errors.email = '請填寫 Email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email 格式有誤'
  }

  if (!values.password) {
    errors.password = '請填寫密碼'
  } else if (values.password.length < 6 || values.password.length > 12) {
    errors.password = '請填寫6-12位密碼'
  }

  if (!values.rePassword) {
    errors.rePassword = '請填寫密碼'
  } else if (values.rePassword !== values.password) {
    errors.rePassword = '密碼輸入不一致'
  }
}
