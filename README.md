# Synapse
A complete example of a "Start-up" Project for a school assignment

![Synapse](img/long.png)

what i have done:

- Simulated Start-up Concept
- Created an IOT Sensor with LoraWan Network for the comunication (Sensor - Lora Signal > Lora Gateway - TCP > Api )
- Developed API System for the realtime DB SQL DB
- Developed the Static Web Page 
- Developed the Web App for the Sensor check and Analytics

More about:

- [LoraWan](https://lora-alliance.org/about-lorawan/)
- [LoraKit](https://www.dragino.com/index.php)
- [Java Spring](http://spring.io)
- [NextJS](https://nextjs.org)

## The Concept
 TODO

### Project layout

```
|- API/             // Folder containing REST API (Realtime DB & SQL DB)
|- Old Version/    // Folder containing the old version of the API
|- database/      // Folder containing the db implementation Concept
|- gateway/      // Arduino code for the Dragino Lora Gateway (Lora Signal -> TCP)
|- sensor/      // Arduino code for the Dragino Arduino with Lora Shield (Sensor Signal -> Lora Gateway)
|- simulation/ // Data Science Analytics with Python Simulation 
|- website/   // Folder containing the Website and The Platform
|   |
|   |- Platform/ // Folder containing the Platform Next Js Web App
|   |- Static/  //  Folder containing the Synapse Next Js Website
|
```

---

### Build and Run
    
    Todo

### Endpoints 

Todo

#### HTML

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:8000/ | Root page |
|`GET`|http://localhost:8000/swagger/ui | Swagger UI page |

#### User Service

|HTTP Method|URL|Description|
|---|---|---|
|`POST`|http://localhost:8000/users | Create new User |
|`PUT`|http://localhost:8000/users/{userId} | Update User by ID |
|`GET`|http://localhost:8000/users/{userId} | Get User by ID |
|`DELETE`|http://localhost:8000/users/{userId} | Delete User by ID |
|`GET`|http://localhost:8000/users/offset/{offset}/limit/{limit} | Get All Users with Paging |
