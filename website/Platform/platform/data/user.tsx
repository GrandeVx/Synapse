import create from 'zustand'
import Axios from 'axios';

interface sensore {
  id: string,
}

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

        }
    ,
    setSensor: (sensors: [sensore]) => {

        }
    
}));


export const LoginUser = async (email: string, password: string, store : any) => {

  await Axios.post('http://localhost:3002/login', {
    email: email,
    password: password
  }).then((response) => {
    if (response.data.code === 200) {
      store.login(response.data.data.identifier);
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