import { FormEvent } from "react";
import axios from "axios";
import { RegisterUser } from "../data/user";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import UserStore from "../data/user";


export default function Register({setRegister}) {

    const UserData = UserStore((state) => state);

    const handleRegister = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const username = formData.get("username").toString();
        const email = formData.get("email").toString();
        const password = formData.get("password").toString();
        RegisterUser(username,email,password).then(() => {
            Notify.success('Registrazione avvenuta con successo');
            setRegister(false);
        }).catch((err) => Notify.failure(err));


    }




    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrazione</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Comincia
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">  i tuoi 14 giorni di prova </a>
            </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={(e) => handleRegister(e)}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label className="sr-only">Username</label>
                <input id="username" name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  mb-5" placeholder="Username" />
                </div>
                <div>
                <label className="sr-only">Email address</label>
                <input id="email-address" name="email" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  mb-5" placeholder="Email address" />
                </div>
                <div>
                <label  className="sr-only">Password</label>
                <input id="password" name="password" type="password"  autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label  className="ml-2 block text-sm text-gray-900"> Remember me </label>
                </div>

                <div className="text-sm">
                <button onClick={() => setRegister(false)}><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Login </a></button>
                </div>
            </div>

            <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                </span>
                Registrazione
                </button>
            </div>
            </form>
        </div>
        </div>

    )



}