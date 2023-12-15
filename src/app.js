import  express  from "express";
import cors from "cros";
import cookieParser from "cookie-parser";


const app = express ()

app.use (cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true
}))

app.use (express.json({limit: "15kb"}))
app.use(express.urlencoded ({extended : true, limit:"15kb"}))
app.use (express.static("public"))
app.use (cookieParser())

//Routes import
import userRouter from './routes/user.routes.js'

//routes declaration
 app.use ("/api/v1/users", userRouter)


export {app}