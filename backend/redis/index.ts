import redis from 'redis'

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

client.on('error', err => {
    console.log('Error ' + err);
});

export default client