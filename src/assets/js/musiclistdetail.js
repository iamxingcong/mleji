
var mus = [
  { 'name': 'going home', 'play': 78 }
]
export default {
  name: 'MusicListDetail',
  data () {
    return {
      music: [],
      lt: null
    }
  },
  created () {
    this.music = mus
    this.lt = mus[0].play
  }
}
