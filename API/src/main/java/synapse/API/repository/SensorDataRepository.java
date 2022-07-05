package synapse.API.repository;
import synapse.API.model.Sensor_Data;
import org.springframework.data.repository.CrudRepository;

public interface SensorDataRepository extends CrudRepository<Sensor_Data, Integer> {
}
