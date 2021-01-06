class App {
  init() {
    this.render();
  }
  render() {
    let el = document.getElementById("app");
    let div = document.createElement("div");
    div.textContent = "Oh my!";
    el.appendChild(div);
    setTimeout(() => div.remove(), 2000);
  }
}

let app = new App();
app.init();
