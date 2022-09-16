const bcrypt = require('bcrypt')
const User = require('../models/user')

const signUp = async (req, res) => {
  console.log(req.body)
  const { email, password, repeatPassword } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.status(500).send({ message: 'El usuario ya existe.' })
  }

  if (!password || !repeatPassword) {
    return res.status(404).send({ message: 'La contraseña es obligatoria.' })
  }

  if (password !== repeatPassword) {
    return res.status(404).send({ message: 'Las contraseñas no son iguales.' })
  }

  try {
    const user = new User(req.body)

    user.email = email.toLowerCase()
    user.role = 'admin'
    user.active = false

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    console.log(hash)

    user.password = hash

    console.log(user)

    const newUser = await user.save()

    console.log(newUser)

    res.status(200).send({ user: newUser })
  } catch {
    res.status(404).send({ message: 'Error al registrar el usuario.' })
  }
}

module.exports = {
  signUp
}
