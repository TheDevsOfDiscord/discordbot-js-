client.on('message', message => {
  if (message.content === '+ping') {  
message.channel.send('pinging').then(m => {
    m.edit(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  });
}
});
