
import { Fragment, useState } from 'react'
import Info from './Sensor_info'
import Info_Mini from './Sensor_info-mini'


export default function Sensors() {
    let [isOpen, setIsOpen] = useState(true)

    return (

        <div>

        <Info_Mini title={"Sensore Pazzo Sgravato"} measure={12.05} setIsOpen={setIsOpen} />
        
        <Info isOpen={isOpen} setIsOpen={setIsOpen}/>

        </div>

      )
  }
