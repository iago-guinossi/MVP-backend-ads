const jwt = require("jsonwebtoken");

const SECRET = "segredo-super-seguro"; // use env em produção

function verificarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token ausente" });

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });
    req.adminId = decoded.id;
    next();
  });
}

module.exports = { verificarToken, SECRET };
