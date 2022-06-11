package synapse.API.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Sensor_Data {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id;
    private String SerialNumber;
    private float measure;
    private String date;


    public String getSerialNumber() {
        return SerialNumber;
    }

    public String getDate() {
        return date;
    }

    public float getMeasure() {
        return measure;
    }

    public void setSerialNumber(String serialNumber) {
        SerialNumber = serialNumber;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setMeasure(float measure) {
        this.measure = measure;
    }


}