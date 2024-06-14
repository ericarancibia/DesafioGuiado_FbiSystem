import "dotenv/config"
import { agents } from "../data/agentes.js"
import { generateToken, verifyToken } from "../models/token.queries.js" 

const secretKey = process.env.SECRET_KEY

export const login = (req, res) => {
    const { email, password } = req.query
    const agent = agents.find((a) => a.email === email && a.password === password)

    if (agent) {
        const token = generateToken(email, secretKey, "2m")

        res.send(`
        <h1>Bienvenido Agente ${email}</h1>
        <h2> Su token está en SessionStorage, tiene una duración de 2 minutos. </h2>
        <a href="/dashboard?token=${token}">Ir al Dashboard de Acceso Restringido</a>
        <script>
            sessionStorage.setItem('token', '${token}')
        </script>
        `)
    } else {
        res.status(401).send(`<h1>- Usuario o contraseña incorrecta -</h1>`)
    }
}

export const restrictedDashboard = async (req, res) => {
    const { token } = req.query
    try {
        const decoded = await verifyToken(token, secretKey)
        res.send(`
            <h1>- Bienvenido al Dashboard de Acceso Restringido Agente -</h1>
            <h2>Su email es: ${decoded.data}</h2>
            <script>
            sessionStorage.setItem('email', "${decoded.data}")
            </script>
            `)
    } catch (error) {
        return res.status(401).send(`<h1>- Token Caducado, Acceso NO Autorizado - </h1>`)
    }
}

