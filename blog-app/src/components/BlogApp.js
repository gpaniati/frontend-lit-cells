import { LitElement, html, css } from "lit";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

export class BlogApp extends LitElement {
  static properties = {
    cabecera: { type: String }
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--blog-app-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    /*Valor Default*/
    this.cabecera = "Mi aplicacion";
    this.posts = [
      { title: "Test 1", author: "Franco Frizzo", date: new Date()},
      { title: "Test 2", author: "Franco Frizzo", date: new Date()},
      { title: "Test 3", author: "Franco Frizzo", date: new Date()},
    ]
  }

  cambiarTitulo() {
    this.cabecera = "Titulo cambiado";
  }

  render() {
    const postList = this.posts.map(post => html `<blog-post title=${post.title}></blog-post>`);
    return html`
      <main>
        <h1>${this.cabecera}</h1>
        ${postList}
      </main>
      `;
    }
}

export default BlogApp;

//Cambio Render.
  /*
  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.cabecera}</h1>

        <p>Edit <code>src/BlogApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
        <br />
        <button @click="${this.cambiarTitulo}">Cambiar titulo</button>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }*/