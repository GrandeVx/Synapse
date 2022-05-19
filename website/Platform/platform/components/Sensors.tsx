
import { Fragment, useState } from 'react'
import Info from './Sensor_info'
import Info_Mini from './Sensor_info-mini'

import New_Sensor from './New_Sensor'
import NewSensorForm from './New_Sensor-form'

export default function Sensors({Data}) {
    let [isOpen, setIsOpen] = useState(false)
    let [NewSensorOpen, setNewSensorOpen] = useState(false)


    return (
        <div className="grid grid-cols-3 gap-6 p-4">
        {
            Data.sensors.map((sensor, index) => {
                console.log(sensor)
                if (sensor != null)
                return (
                    <div>
                    <Info_Mini title={sensor.name} measure={sensor.measure} setIsOpen={setIsOpen} key={sensor.id} />
                    <Info isOpen={isOpen} setIsOpen={setIsOpen} Sensor_name={sensor.name} measure={sensor.measure} description={sensor.description} key={sensor.id+"w"} userData={Data} storic={sensor.data.sensor_data}/>
                    </div>
                    )
            }
            )
        }

        <New_Sensor setIsOpen={setNewSensorOpen}/>
        <NewSensorForm isOpen={NewSensorOpen} setIsOpen={setNewSensorOpen} userData={Data}/>

        </div>
    )


  }
