import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        
        const rawToken = req.headers.token || req.headers.authorization;

        if (!rawToken) {
            return res.json({ success: false, message: "Unauthorized access" });
        }

        
        const token = rawToken.startsWith("Bearer ")
            ? rawToken.split(" ")[1]
            : rawToken;

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Unauthorized access" });
        }

        next(); 
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default adminAuth;
