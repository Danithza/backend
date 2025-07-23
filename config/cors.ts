import { defineConfig } from '@adonisjs/cors'

const corsConfig = defineConfig({
  enabled: true,
  origin: ['http://localhost:5173'], // Cambia el puerto si usas otro
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: ['Content-Type', 'Authorization'],
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})

export default corsConfig
