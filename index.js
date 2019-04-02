const bcrypt = require('bcrypt')
const password = 'password'

bcrypt.genSalt(10,(error,salt) => {
  console.log('salt:',salt)
  bcrypt.hash(password,salt,(error,hash) => {
    console.log('hash:',hash)
  })
})

// 验证
const hashPassword = '$2b$10$KKEARCgCLzv8bP6gzzblmOtaNo1jgmyHkSGLFymw/Cc2xaVF.BR8a'
const userInputPassword = 'password'

bcrypt.compare(userInputPassword,hashPassword)
  .then(result => console.log(result))