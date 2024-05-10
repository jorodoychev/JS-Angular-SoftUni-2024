import {Component, Input} from '@angular/core';
import {Article} from "../models/article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250

  constructor() {
    this.articleDescLen = 0
    this.descToShow = ""
  }

  @Input() article: Article | undefined
  @Input() articleDesc: string | undefined

  descToShow: string
  articleDescLen: number
  showReadMoreBtn: boolean = true
  showHideBtn: boolean = false
  imageIsShown: boolean = false
  imageButtonTitle: string = "Show Image"

  readMore() {
    if (!this.articleDesc) return
    this.articleDescLen += this.symbols
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen)

    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true
      this.showReadMoreBtn = false
    }
  }


  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image"
  }

  hideDesc() {
    this.descToShow = ""
    this.articleDescLen = 0
    this.showHideBtn = false
    this.showReadMoreBtn = true
  }

}
