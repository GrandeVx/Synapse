package synapse.API.controller;

import synapse.API.repository.RealtimeService;
import synapse.API.model.Sensor;
import synapse.API.model.User;
import synapse.API.repository.SensorRepository;
import synapse.API.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


//// METTERE IN SICUREZZA TUTTO IL CODICE

@Controller	// This means that this class is a Controller
@RequestMapping(path="/admin") // This means URL's start with /demo (after Application path)
public class AdminController {
    @Autowired
    SensorRepository sensorRepository;

    public RealtimeService realtimeService;

    public AdminController(RealtimeService realtimeService) {
        this.realtimeService = realtimeService;
    }

    @PostMapping(path="/addsensor") // Map ONLY POST Requests
    public @ResponseBody String addNewSensor (@RequestParam String SerialNumber
           ) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Iterable<Sensor> AllSensors = sensorRepository.findAll(); // Otteniamo tutti gli utenti dal DB

        for (Sensor sensor : AllSensors) {
            if (sensor.getSerialNumber().equals(SerialNumber))
                    return "Sensore già Esistente";
        }

        Sensor n = new Sensor();
        n.setSerialNumber(SerialNumber);
        sensorRepository.save(n);
        // realtimeService.addSensor(n);
        return "Sensor aggiunto";
    }

}
