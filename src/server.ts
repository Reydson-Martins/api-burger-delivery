import fastify from "fastify";

const app = fastify();

app.get('/', () => {
  return 'API Burger Delivery'
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP SERVER RUNNING!')
})