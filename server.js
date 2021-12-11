import {StreamCamera, Codec} from 'pi-camera-connect'
import fs from 'fs'

const app = async () => {
  const camera = new StreamCamera({
    codec: Codec.H264
  })
  const stream = camera.createStream()
  const writeStrem = fs.WriteStream(`./videos/stream-${Date.now()}.h264`)

  stream.pipe(writeStrem)
  await camera.startCapture()

  stream.on('data', (data) => {
    console.log('New Data', data)
  })

  stream.on('end', (data) => {
    console.log('The stream has ended')
  })

  await setTimeout(() => {
    camera.stopCapture()
  }, 5000);
}

app()