/*
  LoRa Simple Client for Arduino :
  Support Devices: LoRa Shield + Arduino 
  
  Example sketch showing how to create a simple messageing client, 
  with the RH_RF95 class. RH_RF95 class does not provide for addressing or
  reliability, so you should only use RH_RF95 if you do not need the higher
  level messaging abilities.

  It is designed to work with the other example LoRa Simple Server
  User need to use the modified RadioHead library from:
  https://github.com/dragino/RadioHead

  modified 16 11 2016
  by Edwin Chen <support@dragino.com>
  Dragino Technology Co., Limited
*/

#include <SPI.h>
#include <RH_RF95.h>
// Singleton instance of the radio driver
RH_RF95 rf95;
float frequency = 868.0;
String seriale = "AFDAMB3";
void setup() 
{
  Serial.begin(9600);
  Serial.println("Avvio il Client");
  if (!rf95.init())
    Serial.println("Avvio Fallito");
  rf95.setFrequency(frequency);
  rf95.setTxPower(13);
  rf95.setSpreadingFactor(7);
  rf95.setSignalBandwidth(125000);
  rf95.setCodingRate4(5);
}

void loop()
{
  int randNumber = random(3,20);
  String randNumber_to_string = String(randNumber);
  String sender = randNumber_to_string + "-" + seriale;
  const uint8_t* p = reinterpret_cast<const uint8_t*>(sender.c_str());
  rf95.send(p, 16);
  rf95.waitPacketSent();
  // sendinfo(data); 
  delay(10000);
  // delay(240000);
  
}