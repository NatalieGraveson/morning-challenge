import NasaController from "./components/nasaController.js";



class App {
  constructor() {
    this.controllers = {
      nController: new NasaController()
    }
  }
}


window['app'] = new App()