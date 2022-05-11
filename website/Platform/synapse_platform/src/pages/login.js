import { useSelector, useDispatch } from 'react-redux';
import {
  userData,
  setUserId
} from '../features/counter/counterSlice';
import Axios from 'axios';

function LoginPage() {


    const count = useSelector(userData); // Accediamo al nick dell'utente
  
    const dispatch = useDispatch();   

    function handleLogin(event) {

        event.preventDefault();
        const emailsave = event.target.elements.email.value;
        const passwordsave = event.target.elements.password.value;
        console.log(count);

        Axios.post("http://localhost:3100/login",{
          email:emailsave,
          password:passwordsave
        }).then((response) => {
          if (response.data != '0') {
            let data = response.data[0];
            dispatch(setUserId(data.username));
           }
        }).catch((err) => console.log("Errore", err));

    }


    return (
        
        <form className="w-full max-w-sm" onSubmit={(e) => handleLogin(e)}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    Email
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" name="email" type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Password
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" name="password" type="password" placeholder="******************" />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                    Sign Up
                </button>
                </div>
            </div>
        </form>

    )

    }

export default LoginPage;