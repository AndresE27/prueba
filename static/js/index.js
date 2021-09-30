import Wifi
from machine import Pin
import time
from umqtt.simple import MQTTClient
import webrepl

boton1=Pin(5,Pin.IN)
boton2=Pin(14,Pin,IN)

f=open('PruebaB1.txt','a')
f.closed()
f=open('PruebaB2.txt','b')
f.closed()

rc=0
while rc==0:
 estado1 =boton1.value()
def on_message(client,obj,msg):
print(msg.topic+""+str(msg.qos)+""+msg.payload.decode('uft-8'))
x=len(msg.payload.decode('uft-8'))
y=len("Boton1")
z=len("Boton2")
p=len("Boton3")

if x==y:
f=open('PruebaB1txt','r+')
f.write(estado1)
rt=f.read(10)
print(str(rt));
f.close()
time.sleep(1)

client.publish('andresandino36@gmail.com/T1',str(rt))
else:
if x==z:
estado2=boton2.value()
f.open('PruebaB2.txt','r+')
f.write(estado2)
time.sleep(3)
wt=f.read()
print(str(wt));
f.close()
time.sleep(1)

client.publish('andresandino36@gmail.com/T1',str(rt))
else
if x==p:
f.open('FinalAB.txt','a')
f.write(a+b)
time.sleep(3)
jt=f.read()
print(str(jt));
f.close()
time.sleep(1)

client.publish('andresandino36@gmail.com/T1',str(rt))


cliente = MQTTClient('andres','maqiatto.com',1883,'andresandino36@gmail.com')cliente.connect()

#j= "El estado del boton 1 es:" + " "+a+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "El valor del Boton2 es:" + " "+b

#print(j)
#client.publish('andresandino36@gmail.com/T1',j)

time.sleep_ms(250)
