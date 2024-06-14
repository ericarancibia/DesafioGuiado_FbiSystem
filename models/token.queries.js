import jwt from "jsonwebtoken"

export const generateToken = (agent, secretKey, expiresIn) => {
    try {
        return jwt.sign(
            { data: agent },
            secretKey,
            { expiresIn }
        );
    } catch (error) {
        throw new Error('Error al generar token');
    }
}

export const verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, secretKey, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded)
                }
            });
        } catch (error) {
            reject(error);
        }
    })
}
