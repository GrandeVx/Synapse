import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import Axios from 'axios';
import { getDatabase, ref, onValue} from "firebase/database";
import inizializeDatabase from "./initFirebase";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


interface sensore {
  id: string,
  measure: string,
  timestamp: Date
}

const server = "http://162.19.3.245:3002/";


inizializeDatabase(); // Initialize Firebase

const UserStore = create<{
  identifier: string
  sensors : [sensore]
  login: (identifier: string) => void
  setSensor: (sensors: [sensore]) => void
}>((set) => ({
    identifier: "",
    sensors: [null],
    login: (identifiers: string) => {
      // set the identifier = "ciao"

      set((state) => ({
        identifier: identifiers
      }));

        },

    setSensor: (new_sensors: [sensore]) => {
            //@ts-ignore
            set((state) => ({
              sensors: new_sensors
            }));

        }
    
}));


export const getSensorData = async (data : any ,store : any) => {

  data.map((sensor) => {

    if (sensor != null) {
      Axios.post(server+'getSensorData', {
        sensor_id: sensor.id
      }).then(function (response) {
        if (response.data.code === 200) {
          sensor.data = response.data.data;
          store.setSensor(data);
        }  
      }).catch(function (error) {
        console.log(error);
      }
      );
    }});
    
  
}


export const addSensor = async (id:string,nome:string,descrizione:string,altezza:string,username:string , Data : any, SetOpen: any) => {

  await Axios.post(server+'addSensor', {
    username:username,
    id: id,
    nome: nome,
    descrizione: descrizione,
    altezza: altezza
  }).then((response) => {

    if (response.data.code === 101) {
      throw "Sensore Già Registrato";
    }

    else if (response.data.code === 200) {
      let data = {
        id: id,
        data: [],
        measure: 0,
        name : nome,
        description: descrizione,
        timestamp: "0-0-0"
      }
      let result = Data.sensors;
      result.push(data);
      getSensor(username,Data);
      Notify.success("Sensore Aggiunto Con Successo");
      SetOpen(false);
    } else throw "Sensore Non Esistente";
  }).catch((err) =>  Notify.failure(err));;


}


const getSensor = async (id: string,store : any) => {
  
  await Axios.post(server+'getSensor', {
    username: id
  }).then((response) => {
    if (response.data.code === 200) {

      console.log(response.data);

      let result = [];
      response.data.data.sensors.map((sensor) => {
        result.push({
          id: sensor.sensor_id,
          data: [],
          measure: 12,
          name : sensor.name,
          description: sensor.description,
          timestamp: "0-0-0"
        });

        const db = getDatabase();
        result.map((sensor) => {
          const starCountRef = ref(db, sensor.id);
          onValue(starCountRef, (snapshot) => {
            const datarec = snapshot.val();
            let new_data;
            
            //@ts-ignore
            if (sensor.data.sensor_data) new_data = {sensor_data:sensor.data.sensor_data};
            else new_data = {sensor_data:[]};

            if (datarec) {
              new_data.sensor_data.push({sensor_id : sensor.id, data : Number(datarec.measure), timestamp: String(datarec.timestamp)});
              console.log(new_data);
              sensor.measure = datarec.measure;
              sensor.timestamp = datarec.timestamp;
              sensor.data = new_data ;
              console.log(sensor.data);
              store.setSensor(result);
            }
          });

        });

      })

      getSensorData(result,store);


    } else return []
  }).catch((err) =>  Notify.failure(err))



}



export const LoginUser = async (email: string, password: string, store : any) => {

  await Axios.post(server+'login', {
    email: email,
    password: password
  }).then((response) => {
    if (response.data.code === 200) {
      let identifier = response.data.data.identifier;
      getSensor(identifier,store);
      store.login(identifier);
      Notify.success("Login Effettuato Con Successo");
    }
    else throw "Email o Password Errati";
  }).catch((err) => Notify.failure(err));;

}


export const RegisterUser = async (username:string,email: string, password: string,setRegister:any) => {

  await Axios.post(server+'register', {
    email: email,
    password: password,
    username: username
  }).then((response) => {
    // se tutto va bene ci pensa il .then nel Register.tsx || per il resto controlliamo gli errori per le notifiche
    if (response.data.code === 100) throw "Username o Email già in uso";
    else if (response.data.code === 200) {
      setRegister(false)
      Notify.success("Registrazione avvenuta con successo");
    }
  }).catch((err) => Notify.failure(err));;

}


export default UserStore;