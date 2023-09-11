import { LitElement, html, css } from "lit";

export class BlogPost extends LitElement {
  static properties = {
    title: { type: String },
    author: { type: String },
    dia: { type: String }
  };

  constructor() {
    super();
    this.title = "Gaston";
  }

  render() {
    return html`
    <main>
    ${this.title}
    ${this.author}
    ${this.dia}
    </main>`;
  }

}