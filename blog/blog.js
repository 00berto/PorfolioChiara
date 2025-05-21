// blog.js — carga el archivo Markdown y lo convierte a HTML

fetch("blog/post.md")
  .then((res) => res.text())
  .then((text) => {
    document.getElementById("post-content").innerHTML = marked.parse(text);
  });
