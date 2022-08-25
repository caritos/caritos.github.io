---
layout: default
title: Setting Up VirtualBox
deleted: true
---

{{ page.title }}
================

<p class="meta">26 August 2011 - Stony Brook</p>

# Notes on Setting Up VirtualBox with Mac OSX as the host and Ubuntu as the guest

- Make sure that your VM is shut off.  
- Open up Oracle VM VirtualBox Manager to get a gist of the Network setup.  The Networking Mode that we will be using is Network Address Translation (NAT).  Also, take note of the adapter type that you are using.  For the VirtualBox image that I download, I'm using an Intel PRO/1000.

![Network Settings](http://caritos.github.com/images/virtualbox_manager_network_settings.png)

- In your host's console, let's do some digging around

<pre><code>
astro:~ eladio$ VBoxManage showvminfo SplingDevServer | grep NIC
NIC 1:           MAC: 080027DAD63F, Attachment: NAT, Cable connected: on, Trace: off (file: none), Type: 82540EM, Reported speed: 0 Mbps, Boot priority: 0, Promisc Policy: allow-all
NIC 1 Settings:  MTU: 0, Socket (send: 64, receive: 64), TCP Window (send:64, receive: 64)
NIC 1 Rule(0):   name = httpd, protocol = tcp, host ip = , host port = 8000, guest ip = , guest port = 8000
NIC 1 Rule(1):   name = rabbitmqadmin, protocol = tcp, host ip = , host port = 25672, guest ip = , guest port = 55672
NIC 1 Rule(2):   name = ssh, protocol = tcp, host ip = , host port = 20022, guest ip = , guest port = 22
</code></pre>

We've got 3 network rules for port forwarding already configured (ssh/rabbitmqadmin/httpd)

<pre><code>
astro:~ eladio$ VBoxManage getextradata SplingDevServer enumerate
Key: GUI/LastCloseAction, Value: powerOff
Key: GUI/LastGuestSizeHint, Value: 640,480
Key: GUI/LastNormalWindowPosition, Value: 235,131,640,342,max
</code></pre>

These are the customized items for the GuestMachine.  We will be adding items to connect to ssh and httpd in the next step.

- We are using the VBoxManage command to add some extra customizations.  "SplingDevServer" is the name of your VM instance.  If your are using PCNET for the virtual network card, use "PCNET".  I'm using Intel PRO/1000 so in the commands below, I'm using the configuration "e1000".

<pre><code>
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/GuestPort 
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/HostPort
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/Protocol
	astro:~ eladio$ VBoxManage getextradata SplingDevServer enumerate
	Key: GUI/LastCloseAction, Value: powerOff
	Key: GUI/LastGuestSizeHint, Value: 640,480
	Key: GUI/LastNormalWindowPosition, Value: 235,131,640,342,max
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/GuestPort 22
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/HostPort 20022
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/Protocol TCP
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/Protocol TCP
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/GuestPort 8000
	astro:~ eladio$ VBoxManage setextradata SplingDevServer VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/HostPort 88000
	astro:~ eladio$ VBoxManage getextradata SplingDevServer enumerate
	Key: GUI/LastCloseAction, Value: powerOff
	Key: GUI/LastGuestSizeHint, Value: 640,480
	Key: GUI/LastNormalWindowPosition, Value: 235,131,640,342,max
	Key: VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/GuestPort, Value: 8000
	Key: VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/HostPort, Value: 88000
	Key: VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/Protocol, Value: TCP
	Key: VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/GuestPort, Value: 22
	Key: VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/HostPort, Value: 20022
	Key: VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/Protocol, Value: TCP
	
</code></pre>

* Restart the VM. To SSH to the VM instance, run the command "ssh -p 20022 localhost -l sshadmin". To view the django application, there is one extra step that needs to be done.  You have to start the django web server on ip 0.0.0.0 and all is well.  Use this when invoking runserver "python manage.py runserver 0:8000".  Now when you go to your browser and enter the url "http://localhost:88000", you will see your django application.

# Important links:

* [VirtualBox Nat Port Forwarding on Ubuntu 64](http://superuser.com/questions/43822/virtualbox-nat-port-forwarding-on-ubuntu-64)
* [Howto Access via ssh a Virtualbox Guest machine](http://mydebian.blogdns.org/?p=148)
* [Virtualbox NAT ssh to guest](http://kdl.nobugware.com/post/2009/02/17/virtualbox-nat-ssh-guest/)
* [HTTP port forwarding](http://forums.virtualbox.org/viewtopic.php?f=1&t=19221)

# Recent Commands:

VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/GuestPort 
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/HostPort
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/Protocol
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/GuestPort 
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/HostPort
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/Protocol
VBoxManage getextradata Spling20111031 enumerate
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/GuestPort 22
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/HostPort 20022
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/ssh/Protocol TCP
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/Protocol TCP
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/GuestPort 8000
VBoxManage setextradata Spling20111031 VBoxInternal/Devices/e1000/0/LUN#0/Config/httpd/HostPort 8000
VBoxManage getextradata Spling20111031 enumerate

sudo mount -t vboxsf -o uid=1000,gid=1000 spling ~/Devel/dev.spling/spling
