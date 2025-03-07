const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(401).json({ msg: "No authentication token, access denied" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied" });

        // Manually check token expiry (optional)
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (verified.exp < currentTimestamp) {
            return res.status(401).json({ msg: "Token has expired" });
        }

        req.user = verified.id;
        next();
    } catch (err) {
        console.error("Auth Error:", err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
