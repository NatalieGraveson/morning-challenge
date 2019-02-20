

export default class Nasa {
  constructor(data) {
    this.hdurl = data.hdurl
    this.date = data.date
    this.title = data.title
  }

  getTemplate() {
    return `
    <div class="col-12">
    <h1>${this.title}</h1>
    </div>
    <div class="col-12">
    <h2>${this.date}</h2>
    </div>
    <img class="col-12" src="${this.hdurl}"/>
<button type="button" class="btn btn-dark" onclick="app.controllers.nController.">Catch ${this.name}!</button >
      `
  }


}