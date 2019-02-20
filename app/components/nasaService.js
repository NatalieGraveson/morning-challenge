import Nasa from "../models/nasa.js";



let _nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=9mN3crx68WRD0nROdvwXVd4NIhAcNMJbj1nC8SiL'
})



let _state = {
  apiNasa: []
}

let _subscribers = {
  apiNasa: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())

}



export default class NasaService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }





  get ApiNasa() {
    return _state.apiNasa
  }

  getNasaData(nasa) {
    _nasaAPI.get(nasa)
      .then(res => {
        let data = new Nasa(res.data)
        setState('apiNasa', data)
      })
  }
}








