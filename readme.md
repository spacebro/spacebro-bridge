# spacebro-bridge
An app to connect a socket.io server to spacebro

## ❓Why ?

We love to use spacebro to connect multiple apps together.  
Sometimes, we want to use some apps outside of the spacebro galaxy.  
It is now pretty easy to do so if the app already implements socket.io
server.  
spacebro-bridge will connect to the foreign socket.io server, connect to
spacebro, and forward all messages back and forth between the two.  
Socket.io acknowledgments are working too!

## 🌍 Installation

`yarn`


## ⚙ Configuration

```
cp settings/settings.default.json settings/settings.json
```

And edit settings.json to match the host and port of the foreign
socket.io server.
You can also change settings with argv parameters.
Learn more about this on [standard-settings](https://github.com/soixantecircuits/standard-settings)


## 👋 Usage

```
npm start
```

## 🕳 Troubleshooting

Ask emmanuel on soixantecircuits.slack.com

## ❤️ Contribute

Please do!
