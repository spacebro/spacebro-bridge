# spacebro-bridge
An app to connect a socket.io server to spacebro

## ❓Why ?

We love to use spacebro to connect multiple apps together.  
Sometimes, we want to use an app written outside of the spacebro galaxy.  
When faced whit this, there is two path you can use: 
* the long path: fork the foreign app and implement `spacebro-client` inside.
* the galaxy shortcut: `spacebro-bridge`

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
