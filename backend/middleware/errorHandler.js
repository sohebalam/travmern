const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.status === 200 ? 500 : res.statusCode
  res.status(errorStatusCode)
  res.json({ message: err.message })
}

export default { errorHandler }
