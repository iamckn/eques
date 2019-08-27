import time

import frida

def my_message_handler(message, data):
    if message['type'] == 'send':
        print(message['payload'])
    elif message['type'] == 'error':
        print(message['stack'])


session = frida.get_usb_device().attach("com.eques.plug")

with open("konkeEncrypt_encrypt.js") as f:
    script = session.create_script(f.read())
script.on("message", my_message_handler)
script.load()

command = ""
while 1 == 1:
    command = raw_input("Enter command:\n1: Exit\n2: Call function\nchoice:")
    if command == "1":
        break
    elif command == "2":
        script.exports.callSecretFunction()