import { Dialog, RadioGroup } from '@headlessui/react'
import { FormEvent } from 'react';
import { addSensor } from "../data/user";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function NewSensorForm({isOpen, setIsOpen , userData}) {


    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const id = formData.get("id").toString();
        const nome = formData.get("nome").toString();
        const descrizione = formData.get("descrizione").toString();
        const altezza = formData.get("altezza").toString();

        console.log(id,nome,descrizione,altezza);

        addSensor(id,nome,descrizione,altezza,userData.identifier,userData,setIsOpen)

    }

    return (

        <Dialog
        
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 max-w-3xl px-8 mx-auto mt-20 mb-20 bg-white rounded-lg shadow-lg dark:bg-gray-800 flex-row">
                  <div className="flex justify-center -mt-16 md:justify-end">
                      <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=crop&w=76&q=80" />
                  </div>



                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Registrazione Nuovo Sensore</h2>
                
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">ID Sensore</label>
                            <input required name="id" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Nome Sensore</label>
                            <input required name="nome" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Descrizione</label>
                            <input required name="descrizione" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Altezza Allarme</label>
                            <input required name="altezza" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>

            
              </div>
        </Dialog>




    )



}