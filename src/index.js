import express from 'express';
import loginRoutes from './routes/login.routes.js';
import protectedRoutes from './routes/protected.routes.js';

const PORT = 3000

const app = express();
app.use(express.json());

app.use(loginRoutes);
app.use(protectedRoutes);

app.listen(PORT, () => {
  console.log(`App iniciada en el puerto ${PORT}`);
});