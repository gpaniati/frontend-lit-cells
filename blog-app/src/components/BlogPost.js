import { LitElement } from "lit";

const datos = {
  title: "Creando nuestros componentes con LitElement",
  author: "Franco Frizzo",
  date: new Date(),
  content: "Contenido del post…",
  categories: ["Desarrollo web", "LitElement"],
  highlighted: true,
};

class BlogPost extends LitElement {
    render() {
        return html `
        <h2>Forro</h2>`
    }
}

export default BlogPost;
