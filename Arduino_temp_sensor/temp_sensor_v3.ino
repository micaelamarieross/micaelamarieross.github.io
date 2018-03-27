/* References:
SIK Guide Circuit 4B - Temperature Sensor -- I used this guide to plug in my potentiometer, LCD screen, and temperature sensor 
*/


#include <LiquidCrystal.h>                  //the liquid crystal library contains commands for printing to the display
LiquidCrystal lcd(13, 12, 11, 10, 9, 8);    // tell the RedBoard what pins are connected to the display

const int temperaturePin = A0;
const int RED_PIN = 3;
const int GREEN_PIN = 5;
const int BLUE_PIN = 6;

float voltage = 0;                          //the voltage measured from the TMP36
float degreesC = 0;                         //the temperature in Celsius, calcuated from the voltage
float degreesF = 0;                         //the temperature in Farenheit, calcuated from the voltage

void setup() {
  // declare pins to be outputs
  pinMode(RED_PIN, OUTPUT); // set up the LED pin to be an output
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  lcd.begin(16, 2);                         //tell the lcd library that we are using a display that is 16 characters wide and 2 characters high
  lcd.clear();                              //clear the display  
}

void loop() {

  float voltage, degreesC, degreesF; //Declare 3 floating point variable
  voltage = getVoltage(temperaturePin); //Measure the volatge at the analog pin
  degreesC = (voltage - 0.5) * 100.0; //Convert the voltage to degrees Celcius
  degreesF = degreesC * (9.0 / 5.0) + 32.0;

  if (degreesF < 53.0)       
  {
    // Purple
  analogWrite(RED_PIN, 67);
  analogWrite(GREEN_PIN, 0);
  analogWrite(BLUE_PIN, 100);
  }
  else if (degreesF > 53.0 && degreesF < 63.5)  
  {
    // Blue
  analogWrite(RED_PIN, 0);
  analogWrite(GREEN_PIN, 0);
  analogWrite(BLUE_PIN, 255);
  }
  else if (degreesF > 63.5 && degreesF < 65.0)  
  {
    // Green
  analogWrite(RED_PIN, 0);
  analogWrite(GREEN_PIN, 255);
  analogWrite(BLUE_PIN, 0);
    // Make the green light blink if the temp is 64 degrees to emphasize the fact that the air has reached the "target temp"
  analogWrite(GREEN_PIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  analogWrite(GREEN_PIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
  
  }
  else if (degreesF > 65.0 && degreesF < 75.0)  
  {
    // Orange
  analogWrite(RED_PIN, 88);
  analogWrite(GREEN_PIN, 5);
  analogWrite(BLUE_PIN, 0);
  }
  else                    
  {
    // Red
  analogWrite(RED_PIN, 255);
  analogWrite(GREEN_PIN, 0);
  analogWrite(BLUE_PIN, 0);
  }


  lcd.clear();                              //clear the LCD
  lcd.setCursor(0,1);                       //set the cursor to the lower left position
  lcd.print(degreesF);                      //print the degrees Fahreheit
  lcd.print(" degrees F");                  //print string degrees F
  
  Serial.print("Temperature: ");
  Serial.print(degreesF );
  Serial.println(" degrees F");
  delay(1000); 
}

float getVoltage(int pin) //Function to read and return
{
  return (analogRead(pin) * 0.004882814);
}

