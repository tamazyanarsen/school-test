const fastify = require('fastify')({ logger: true })
const path = require('node:path')

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, './school-client/dist/school-client'),
    // prefix: '/public/', // optional: default '/'
    // constraints: { host: 'example.com' } // optional: default {}
})

fastify.get('/', function (request, reply) {
    reply.sendFile('index.html')
    // reply.send({ hello: 'world' })
})

fastify.get('/api/test', (req, res) => {
    res.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})