const express = require('express');
// const Queue = require('bull');
// const { createClient } = require('redis');
// const redisConfig = { redis: { host: 'redis' } }

// const client = createClient({
//     url: `redis://redis:6379`
// });

// client.on('error', err => console.log('Redis Client Error', err));

// const main = async () => {
//     await client.connect();

//     await client.set('key', 'value');
//     const value = await client.get('key');
//     await client.disconnect();
// };

// main();

// await client.connect();

// If you want to pass some "custom" Redis config
// const queue = new Queue('my-first-queue', {
//     redis: { host: "redis", port: 6379 }
// });

// const main = async () => {
//     console.log('start');
//     await queue.add({ name: "John", age: 30 })
//     console.log('end')
// };

// main()
//     .catch(console.error)

const server = express();

server.get('/', (req, res) => {
  res.status(200).send("Hello world");
});

server.get('/user', (req, res) => {
  req.status(200).send('Hello user');
})

server.listen(3030, () => {
  console.log('Server is listening on port 3030');
})

