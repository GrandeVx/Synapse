
import { Fragment, useState } from 'react'
import Info from './Sensor_info'
import Info_Mini from './Sensor_info-mini'


export default function Sensors({Sensori}) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className="grid grid-cols-3 gap-6 p-4">
        {
            Sensori.map((sensor, index) => {
                if (sensor != null)
                return (
                    <div>
                    <Info_Mini title={sensor.id} measure={sensor.measure} setIsOpen={setIsOpen} key={sensor.id} />
                    <Info isOpen={isOpen} setIsOpen={setIsOpen} Sensor_name={"Sensore Pazzo"} key={sensor.id+"w"}/>
                    </div>
                    )
            }
            )
        }

        </div>
    )


  }
