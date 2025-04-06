const jwt = require('jsonwebtoken');

const jwtAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // res.json({ message: `Welcome ${decoded.email}` });
    console.log(`Authenticated user: ${decoded.email || decoded.id}`);
    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = jwtAuth;


