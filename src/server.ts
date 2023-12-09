import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import multipart from '@fastify/multipart'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(cors, {
  origin: true, // todas as Url de front-End poderam acessar nosso back-end
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(uploadRoutes)
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('server runings started on port 3333')
  })
