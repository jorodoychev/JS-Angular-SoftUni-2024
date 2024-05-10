import {data} from './seed'
import {Article} from '../models/article.model'

export class ArticleData {
  getData(): Article[] {
    return data.map(article => {
      return new Article(
        article.title,
        article.description,
        article.author,
        article.imageUrl
      )
    })
  }
}
