export const validateRegisterInput = (
  email: String,
  password: String,
  confirmPassword: String,
): Object => {
  let errorMsg, email1, email2, password1, password2
  errorMsg = email1 = email2 = password1 = password2 = ''

  if (email.trim() === '') {
    email1 = 'Email must not be empty \n'
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (!email.match(regEx)) {
      email2 = 'Email must be a valid email address \n'
    }
  }
  if (password === '') {
    password1 = 'Password must not empty \n'
  } else if (password !== confirmPassword) {
    password2 = 'Passwords must match \n'
  }

  errorMsg.concat(email1, email2, password1, password2)

  return {
    errorMsg,
    valid: errorMsg === '',
  }
}

export const validateAddUserInput = (
  email: String,
  password: String,
  confirmPassword: String,
): Object => {
  let errorMsg, email1, email2, password1, password2
  errorMsg = email1 = email2 = password1 = password2 = ''

  if (email.trim() === '') {
    email1 = 'Email must not be empty \n'
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (!email.match(regEx)) {
      email2 = 'Email must be a valid email address \n'
    }
  }
  if (password === '') {
    password1 = 'Password must not empty \n'
  } else if (password !== confirmPassword) {
    password2 = 'Passwords must match \n'
  }
  errorMsg.concat(email1, email2, password1, password2)

  return {
    errorMsg,
    valid: errorMsg === '',
  }
}

export const validateLoginInput = (
  username: String,
  password: String,
): Object => {
  let errorMsg, username1, password1
  errorMsg = username1 = password1 = ''

  if (username.trim() === '') {
    username1 = 'Username must not be empty'
  }
  if (password.trim() === '') {
    password1 = 'Password must not be empty'
  }
  errorMsg.concat(username1, password1)

  return {
    errorMsg,
    valid: errorMsg === '',
  }
}
