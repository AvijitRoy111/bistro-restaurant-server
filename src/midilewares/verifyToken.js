// const jwt = require("jsonwebtoken");

const ACCESS_SECRET_TOKEN="ed3010263b385f044d1473b033012ef2eea71b9c5d47a1517b9bd1f37b9a2059a73c848d8b321e0e0cbb2e1a6434bd7d4475572e1d19d9835fc98741880c685d"

const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "Unauthorized - no token" });

  jwt.verify(token, ACCESS_SECRET_TOKEN, (err, decoded) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;