var io = require('socket.io-client')
const SpacebroClient = require('spacebro-client').SpacebroClient
var standardSettings = require('standard-settings')
var settings = standardSettings.getSettings()

let address = settings.service.socketioServer.host
let port = settings.service.socketioServer.port
let parsedURI = require('url').parse(address)
let protocol = parsedURI.protocol ? '' : 'ws://'
let url = `${protocol}${address}:${port}`

let socket = io(url)
// piggyback using the event-emitter bundled with socket.io client
var patch = require('socketio-wildcard')(io.Manager)
patch(socket)

var spacebroClient = new SpacebroClient()

socket.on('*', function (packet) {
  spacebroClient.emit.apply(spacebroClient, packet.data)
})

spacebroClient.on('connect', function () {
  spacebroClient.socket.on('*', ({ data }) => {
    let [eventName, args] = data
    delete args._to
    delete args._from
    console.log('Received ' + eventName + ': ' + JSON.stringify(data))
    socket.emit.apply(socket, data)
  })
})

socket.on('connect', function (data) {
  console.log('socket.io server connected')
})
