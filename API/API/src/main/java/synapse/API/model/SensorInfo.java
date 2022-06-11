package synapse.API.model;

import java.util.List;


public class SensorInfo {


    public Sensor data;
    public List<Sensor_Data> data_sensor;


    public SensorInfo(Sensor data,List<Sensor_Data> data_sensor) {
        this.data = data;
        this.data_sensor = data_sensor;
    }


}
