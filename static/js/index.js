rc=0
while rc==0:
 estado1 =b1.value()
def on_message(client,obj,msg):
print(msg.topic+""+str(msg.qos)+""+msg.payload.decode('uft-8'))
x=len(msg.payload.decode('uft-8'))
y=len("Boton1")
z=len("Boton2")
p=len("Boton3")

if x==y:
f=open('PB1txt','r+')
f.write(estado1)
rt=f.read(10)
print(str(rt));
f.close()
time.sleep(1)

client.publish('andresandino36@gmail.com/T1',str(rt))
else:
if x==z:
estado2=b2.value()
f.open('PB2.txt','r+')
f.write(estado2)
time.sleep(3)
wt=f.read()
print(str(wt));
f.close()
time.sleep(1)

client.publish('andresandino36@gmail.com/T1',str(rt))
else
if x==p:
f.open('Final.txt','a')
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
