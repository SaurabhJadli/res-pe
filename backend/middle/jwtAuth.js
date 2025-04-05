const jwt = require('jsonwebtoken');

const jwtAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
return res.redirect('/login')  }
};

module.exports = jwtAuth;
