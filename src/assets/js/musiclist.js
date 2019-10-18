
var mus = [
  { 'name': 'going home', 'play': 78 },
  { 'name': 'go to work', 'play': 75 },
  { 'name': 'go to work', 'play': 22 },
  { 'name': 'go to work', 'play': 20 },
  { 'name': 'go to work', 'play': 23 },
  { 'name': 'go to work', 'play': 13 },
  { 'name': 'go to work', 'play': 3 },
  { 'name': 'ready off work, every day', 'play': 0 }

]
export default {
  name: 'MusicList',
  data () {
    return {
      music: [],
      lt: null
    }
  },
  created () {
    this.music = mus
    this.lt = mus[0].play
    console.log(this.lt)
  }
}
