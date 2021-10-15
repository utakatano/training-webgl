import './style.css'

const init = () => {
  const c = <HTMLCanvasElement | null>document.getElementById('canvas')

  if (c === null) return
  c.width = 500
  c.height = 300

  const gl = c.getContext('webgl')

  if (gl === null) return

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
}

init()

