


/*
  LoRa Simple Yun Server :
  Support Devices: LG01. 
  
  Example sketch showing how to create a simple messageing server, 
  with the RH_RF95 class. RH_RF95 class does not provide for addressing or
  reliability, so you should only use RH_RF95 if you do not need the higher
  level messaging abilities.

  It is designed to work with the other example LoRa Simple Client

  User need to use the modified RadioHead library from:
  https://github.com/dragino/RadioHead

  modified 16 11 2016
  by Edwin Chen <support@dragino.com>
  Dragino Technology Co., Limited
*/
//If you use Dragino IoT Mesh Firmware, uncomment below lines.
//For product: LG01. 
#define BAUDRATE 115200

//If you use Dragino Yun Mesh Firmware , uncomment below lines. 
//#define BAUDRATE 250000

#include <Console.h>
#include <SPI.h>
#include <RH_RF95.h>
#include <Ethernet.h>

// Singleton instance of the radio driver
RH_RF95 rf95;

int led = A2;
float frequency = 868.0;

// thingspeak
String myWriteAPIString = "VJG6PDGW2EH2F247";
String dataString = "";

void uploadData(); // Definiamo la funzione

void setup() 
{
  pinMode(led, OUTPUT);    
  Bridge.begin(BAUDRATE);
  Console.begin();
  
  while (!Console) ; // Wait for console port to be available
  Console.println("Start Sketch");
  
  if (!rf95.init())
    Console.println("init failed");
    
  // Setup ISM frequency
  rf95.setFrequency(frequency);
  
  // Setup Power,dBm
  rf95.setTxPower(13);
  
  // Setup Spreading Factor (6 ~ 12)
  rf95.setSpreadingFactor(7);
  
  // Setup BandWidth, option: 7800,10400,15600,20800,31200,41700,62500,125000,250000,500000
  rf95.setSignalBandwidth(125000);
  
  // Setup Coding Rate:5(4/5),6(4/6),7(4/7),8(4/8) 
  rf95.setCodingRate4(5);
  
  Console.print("Listening on frequency: ");
  Console.println(frequency);
}

void loop()
{
  if (rf95.waitAvailableTimeout(3000))
  {
    // Should be a message for us now   
    uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
    uint8_t len = sizeof(buf);
    if (rf95.recv(buf, &len))
    {
      
      digitalWrite(led, HIGH);
      // RH_RF95::printBuffer("request: ", buf, len);
      Console.print("Ricevuta Info: ");

      String data_recived = String((char*)buf);

      
      //Console.println(data_recived);
      // Elaborazione del Messaggio 
      
      int counter = 0;
      String number_recived = "";
      String serial_recived = "";
      
      while (data_recived[counter] != '-') {
        number_recived += data_recived[counter];
        counter++;
      }

      while (data_recived[counter+1] != NULL) {
        serial_recived += data_recived[counter+1];
        counter++;
      }
  
      APICall(serial_recived,number_recived);
           
    }
    else
    {
      Console.println("recv failed");
    }
  }
}


void uploadData() {

  String upload_url = "https://api.thingspeak.com/update?api_key=";
  upload_url += myWriteAPIString;
  upload_url += "&";
  upload_url += dataString;
  
  Console.println(upload_url);
  Console.println("Call Linux Command to Send Data");
  Process p;    // Create a process and call it "p", this process will execute a Linux curl command
  p.begin("curl");
  p.addParameter("-k");
  p.addParameter(upload_url);
  p.run();    // Run the process and wait for its termination

  Console.print("Feedback from Linux: ");
  // If there's output from Linux,
  // send it out the Console:
  while (p.available()>0) 
  {
    char c = p.read();
    Console.write(c);
  }
  Console.println("");
  Console.println("Call Finished");
  Console.println("####################################");
  Console.println("");
}

void APICall(String serial,String data) {
  String upload_url = "https://nonsoancora.com/update/?serial=";
  upload_url += serial;
  upload_url += ("&measure=" + data);

  Console.println("Risultato : " + upload_url);


  /*
  Process p;    // Create a process and call it "p", this process will execute a Linux curl command
  p.begin("curl");
  p.addParameter("-k");
  p.addParameter(upload_url);
  p.run();    // Run the process and wait for its termination

  */
   
}
