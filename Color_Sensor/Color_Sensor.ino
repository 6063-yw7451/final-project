#include "DEV_Config.h"
#include "TCS34725.h"
#include <ArduinoJson.h>
RGB rgb,RGB888;
UWORD   RGB565=0;

void setup() {
  Config_Init();
  if(TCS34725_Init() != 0){
      Serial.print("TCS34725 initialization error!!\r\n");
     // return 0; 
  } 
  Serial.print("TCS34725 initialization success!!\r\n");
  Serial.begin(9600);
  pinMode(4,INPUT_PULLUP);
}

void writeData(int r,int g,int b) {
  StaticJsonDocument<128> resJson;
  JsonObject R = resJson.createNestedObject("R");
  JsonObject G = resJson.createNestedObject("G");
  JsonObject B = resJson.createNestedObject("B");
  R["value"] = r;
  G["value"] = g;
  B["value"] = b;
  String resTxt = "";
  serializeJson(resJson, resTxt);

  Serial.println(resTxt);
}
int lastVal=1;
void loop() {
  rgb=TCS34725_Get_RGBData();
  RGB888=TCS34725_GetRGB888(rgb);
  RGB565=TCS34725_GetRGB565(rgb);
  int val=digitalRead(4);
  if(val==0 && lastVal==1){
    writeData(RGB888.R,RGB888.G,RGB888.B);
  }
  lastVal=val;
//
//  Serial.print("RGB565= 0x");
//  Serial.println((RGB565), HEX); 
//  if(TCS34725_GetLux_Interrupt(0xff00, 0x00ff) == 1){
//      Serial.print("Lux_Interrupt = 1\r\n");
//  }else{
//      Serial.print("Lux_Interrupt = 0\r\n");
//  }
//  Serial.print("\r\n");
  DEV_Delay_ms(100);
}
