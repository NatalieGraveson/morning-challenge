import NasaService from "./nasaService.js";



let _nasaService = new NasaService()


function drawApiNasa() {
  let nasas = _nasaService.ApiNasa

  document.getElementById("nasa").innerHTML = nasas.getTemplate()
}








export default class NasaController {
  constructor() {
    _nasaService.addSubscriber('apiNasa', drawApiNasa)
    _nasaService.getNasaData()
  }


  getApiNasa(url) {
    _nasaService.getNasaData(url)
  }
}