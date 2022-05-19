import { Dialog, RadioGroup } from '@headlessui/react'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartData,
 } from "chart.js"
    "chart.is";
    // 2. Register them
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
    );
import { Line } from 'react-chartjs-2';



export default function Info({isOpen, setIsOpen,Sensor_name,description,measure,storic,userData}) {

    let graph_label = [];
    let graph_data = [];
    if (!storic) storic = [];
    console.log(userData)
      storic.map((data) => {
        graph_label.push(new Date(data.timestamp * 1000).toISOString().slice(0, 19).replace('T', ' '));
        graph_data.push(data.data);
    })

    const data : ChartData<"line", number[], string> = {
      labels: graph_label,
      datasets: [
        {
          label: 'Andamento Sensore',
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: graph_data,
        }
      ]
    };


    return(

        <Dialog
        
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 max-w-3xl px-8 mx-auto mt-20 mb-20 bg-white rounded-lg shadow-lg dark:bg-gray-800 flex-row">
                  <div className="flex justify-center -mt-16 md:justify-end">
                      <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                  </div>

                  <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{Sensor_name}</h2>
                  <p className="mt-4 text-gray-600 bg-slate-200 p-3 rounded-xl text-center w-64 ">Ultimo Aggiornamento {measure}cm</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-200">{description}</p>

                  <div className="flex justify-end mt-4">
                      <a href="#" className="text-xl font-medium text-blue-500 dark:text-blue-300">{userData.identifier}</a>
                  </div>

                  {storic.length > 0 ?
                      <Line
                                    className=" "
                                    data={data}
                                    width={1200}
                                    height={1200}
                                    />
                                  
                  :
                  <div className="flex justify-center mt-20">
                      <p className="text-2xl font-medium text-blue-500 dark:text-blue-300">Nessun dato Reperibile</p>
                  </div>
                                  
                                  
                                  }
                                    

            
              </div>
        </Dialog>

    )

}