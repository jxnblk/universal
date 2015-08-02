
import modular from 'simple-modular-scale'
import spectralize from 'spectralize'


const scale = modular({
  base: 8,
  ratios: [9/8, 4/3, 4/3],
  length: 12
})

const spectrum = spectralize({
  h: 210,
  s: 85,
  hues: 4,
  steps: 10,
  swing: -30,
  padL: 10
})
const hues = spectrum.hues

const grays = spectralize({
  h: spectrum.hueValues[0],
  s: 15,
  hues: 1,
  steps: 10,
  padL: 0
})


export default {
  fontFamily: 'sans-serif',
  serif: '"Hoefler Text", Georgia, serif',
  lineHeight: 1.5,
  scale: scale,
  colors: {
    gray: grays.hues[0],
    blue: hues[0],
    magenta: hues[1],
    red: hues[2],
    green: hues[3],
  },
  radius: 3
}

