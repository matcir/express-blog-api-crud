function routeNotFound(req, res, next) {
  res.status(404).json({
    error: "Not Found",
    message: "Pagina non trovata",
  });
}

module.exports = routeNotFound;
