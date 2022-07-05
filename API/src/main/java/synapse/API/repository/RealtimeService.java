package synapse.API.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import org.springframework.stereotype.Service;
import synapse.API.model.Sensor;
import synapse.API.model.Sensor_Data;

import java.util.HashMap;
import java.util.Map;

@Service
public class RealtimeService {

    public void addSensor(Sensor sensore) {
        final FirebaseDatabase database = FirebaseDatabase.getInstance();
        DatabaseReference ref = database.getReference(sensore.getSerialNumber());
        Map<String,Sensor> result = new HashMap<>();
        ref.setValueAsync(sensore);
    }

    public static void updateSensor(Sensor sensore, Sensor_Data Data) {
        final FirebaseDatabase database = FirebaseDatabase.getInstance();
        DatabaseReference ref = database.getReference(sensore.getSerialNumber());
        ref.setValueAsync(Data);
    }

}
