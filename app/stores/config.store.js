import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAtODRH_MVz_1WrW2TwfsCX0E5EZPPcTi4",
    authDomain: "dinder-5ca2c.firebaseapp.com",
    databaseURL: "https://dinder-5ca2c.firebaseio.com",
    projectId: "dinder-5ca2c",
    storageBucket: "dinder-5ca2c.appspot.com",
    messagingSenderId: "849844647295"
  };



export default class ConfigStore {
    constructor() {
        firebase.initializeApp(config)
        this.splashTime = 1000
        this.splashImg = require('../../images/lynn.jpg')
        this.loginBG = require('../../images/login.jpg')
    }
    get SplashImg() {
        return this.splashImg
    }
    get SplashTime() {
        return this.splashTime
    }
    get LoginBG() {
        return this.loginBG
    }
}