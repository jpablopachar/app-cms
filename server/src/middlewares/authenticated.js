const jwt = require('jsonwebtoken')
const { DateTime } = require('luxon')

exports.ensureAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: 'La petición no tiene cabecera de autenticación' })
  }

  const token = req.headers.authorization.replace(/['"]+/g, '')

  try {
    const payload = jwt.decode(token, process.env.SECRET_KEY)

    if (payload.exp <= DateTime.local().toSeconds()) { return res.status(401).send({ message: 'El token ha expirado' }) }

    req.user = payload
  } catch {
    return res.status(404).send({ message: 'Token no válido' })
  }

  next()
}
