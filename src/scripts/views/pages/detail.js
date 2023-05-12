import UrlParser from '../../routes/url-parser'
import RestoranSource from '../../data/restoran-source'

const Detail = {
  async render () {
    return '<h2>Halaman Detail</h2>'
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const movie = await RestoranSource.detailRestoran(url.id)
    console.log(movie)
  }
}

export default Detail
