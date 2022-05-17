import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import Axios from 'axios';
import { getDatabase, ref, onValue} from "firebase/database";
import inizializeDatabase from "./initFirebase";


interface sensore {
  id: string,
  measure: string,
  timestamp: Date
}

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



const getSensor = async (id: string,store : any) => {
  
  await Axios.post('http://localhost:3002/getSensor', {
    username: id
  }).then((response) => {
    if (response.data.code === 200) {
      let result = [];
      response.data.data.sensors.map((sensor) => {
        result.push({
          id: sensor.sensor_id,
          measure: 12,
          timestamp: "0-0-0"
        });
        const db = getDatabase();
        result.map((sensor) => {
          console.log(sensor);
          const starCountRef = ref(db, sensor.id);
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            sensor.measure = data.measure;
            sensor.timestamp = data.timestamp;
            store.setSensor(result);
          });

        });

      })
    } else return []
  }).catch((err) => console.log("Errore", err));;



}



export const LoginUser = async (email: string, password: string, store : any) => {

  await Axios.post('http://localhost:3002/login', {
    email: email,
    password: password
  }).then((response) => {
    if (response.data.code === 200) {
      let identifier = response.data.data.identifier;
      getSensor(identifier,store);
      store.login(identifier);
    }
  }).catch((err) => console.log("Errore", err));;

}


export const RegisterUser = async (username:string,email: string, password: string) => {

  await Axios.post('http://localhost:3002/register', {
    email: email,
    password: password,
    username: username
  }).then((response) => {
    // se tutto va bene ci pensa il .then nel Register.tsx || per il resto controlliamo gli errori per le notifiche
    if (response.data.code === 100) throw new Error("Email già in uso");
  }).catch((err) => console.log("Errore", err));;

}


  

export default UserStore;