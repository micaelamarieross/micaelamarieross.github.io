const int temperaturePin = A0;
const int sensorPin = 1;
const int RED_PIN = 9;
const int GREEN_PIN = 10;
const int BLUE_PIN = 11;
int lightLevel;
int calibratedlightLevel; //used to store the scaled / calibrated lightLevel
int maxThreshold = 0; 
int minThreshold = 1023; //used for setting the "min" light level



void setup() {

  pinMode(RED_PIN, OUTPUT); // set up the LED pin to be an output
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {

  lightLevel= analogRead(sensorPin); //reads the voltage on the sensorPin
  Serial.print(lightLevel);
  //autoRange(); //autoRanges the min / max values you see in your room.

  calibratedlightLevel = map(lightLevel, 0, 1023, 0, 255); //scale the lightLevel from 0 - 1023 range 0 - 255 range.
                                                           //the map() function applies a linear scale / offset
                                                           //map(inputVAlue, formMin, fromMax, toMin, toMax);
  Serial.print("\t"); //tab character
  Serial.println(calibratedlightLevel); //println prints an CRLF at the end (creates a new line after)
  analogWrite(RED_PIN, calibratedlightLevel); //set the led level based on the input lightLevel.
  analogWrite(GREEN_PIN, calibratedlightLevel);
  analogWrite(BLUE_PIN, calibratedlightLevel);

  float voltage, degreesC, degreesF; //Declare 3 floating point variable
  voltage = getVoltage(temperaturePin); //Measure the volatge at the analog pin
  degreesC = (voltage - 0.5) * 100.0; //Convert the voltage to degrees Celcius
  degreesF = degreesC * (9.0 / 5.0) + 32.0;

  if (degreesC > 28.0)       
  {
    // RED
  digitalWrite(RED_PIN, HIGH);
  digitalWrite(GREEN_PIN, LOW);
  digitalWrite(BLUE_PIN, LOW);
  }
  else if (degreesC < 23.0)  
  {
    // Green
  digitalWrite(RED_PIN, LOW);
  digitalWrite(GREEN_PIN, HIGH);
  digitalWrite(BLUE_PIN, LOW);
  }
  else                    
  {
    // Blue
  digitalWrite(RED_PIN, LOW);
  digitalWrite(GREEN_PIN, LOW);
  digitalWrite(BLUE_PIN, HIGH);
  }
  
  Serial.print("voltage: ");
  Serial.print(voltage);
  Serial.print(" deg C: ");
  Serial.print(degreesC);
  Serial.print(" deg F: ");
  Serial.print(degreesF);
  delay(1000); // repeat once per second (change as you wish)
}

float getVoltage(int pin) //Function to read and return
{
  return (analogRead(pin) * 0.004882814);
}

void autoRange()
{
if (lightLevel < minThreshold) // minThreshold was initialized to 1023 -- so, if it's less, reset the threshold level.
minThreshold = lightLevel;

if (lightLevel > maxThreshold) // maxThreshold was initialized to 0 -- so, if it's bigger, reset the threshold level.
maxThreshold = lightLevel;
// Once we have the highest and lowest values, we can stick them
// directly into the map() function.
//
// This function must run a few times to get a good range of bright and dark values in order to work.
lightLevel = map(lightLevel, minThreshold, maxThreshold, 0, 255);
lightLevel = constrain(lightLevel, 0, 255);
}
