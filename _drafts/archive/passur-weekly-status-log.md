---
title: Passur Weekly Status Log
tags: [passur]
---

# Passur Weekly Status Log

## TODO
- testing cluster, aamir will provide me the test cases
- need to get the vpn working, provide chris the ip address
- zabbix notification to make sure all the three production brokers are up and running
- update best practice documentation to stop services using the star command "systemctl stop 'PAT*'

## 2019/01/21
- work on zabbix monitoring
  * rpm -ivh http://repo.zabbix.com/zabbix/3.2/rhel/7/x86_64/zabbix-release-3.2-1.el7.noarch.rpm
  * orldc-prod-faaacyclu0x - zabbix-sender package installed on cluster
  * orldc-prod-x_sender -c /etc/zabbix/zabbix_agentd.conf -s "orldc-dev-mqclu01" -k trap -o 71G/faaacyclu0x - yum install inotify-tools 
  * need to install zabbix-agent as well as zabbix-sender
  * name of the trap should be different from the key name

## 2019/01/19
- when the mode is logdata
  * /bin/java -Dlog4j.configuration=file:///opt/passur/nems/conf/asdex_acy_log_java_log4j.xml -jar /opt/passur/nems/bin/NEMSTopicClient.jar --propsFileName=/opt/passur/nems/conf/jmsProps.amqprod_asdex_acy --mode=logData./data/jms-acy-sfdps/jms-acy-asdex
  * you can't really change the --mode parameter by using the root directory, it's always going to be in reference to the current working directory
  * put logs from asdex into sfdps for now until the /data/asdex issue can be resolved.
  * asdex data missing 

## 2019/01/18
- moving it back for now
*
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable NEMS_ACY_ITWS_TO_AMQPROD
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable NEMS_ACY_ASDEX_TO_AMQPROD
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable NEMS_ACY_SFDPS_TO_AMQPROD
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable NEMS_ACY_TAIS_TO_AMQPROD
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable NEMS_ACY_TBFM_TO_AMQPROD
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable NEMS_ACY_TFMDATA_TO_AMQPROD
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable ASDEX_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable ASDEX_MUX_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable FLIGHTRADAR24_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable FLIGHTSTATS_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable ITWS_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable LAMINAR_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable SFDPS_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable TAIS_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable TAIS_MUX_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable TBFM_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable TFMDATA_MUX_AMQPROD_TO_AMQDEV
[root@orldc-prod-faaacyclu01 eladio]# pcs resource disable TFMDATA_AMQPROD_TO_AMQDEV
- write the script to send zabbix notification with inotify
  * who is writing the scripts that updates these text files?
  * [root@orldc-dev-mqclu01 scripts]# yum install inotify-tools
  * the inotifywait command only works once.. any new changes, nothing happens
  * we will be replacing the scripts from dell6m and orldc-prod-faaoex01 for now
x moved processes from orlcd-prod-faaoexclu01 and orldc-prod-faaacyclu01 to the other nodes 
  as requested by Chris
x research to get zabbix monitoring working for clusters
  * https://www.zabbix.com/documentation/2.2/manual/config/items/itemtypes/trapper
  * it doesn't matter if I have not listed the "allowed host" field when creating the trigger
  * zabbix_sender -c /etc/zabbix/zabbix_agentd.conf -s "orldc-dev-mqclu01" -k trap -o 1
  * If specified, the trapper will accept incoming data only from this comma-delimited list of hosts.  
    + that's from the documentation, if that is the case leave the iterm empty.
  * I changed the -s parameter and to another host and that didn't work. I have to register it with the correct host.
    + zabbix_sender -c /etc/zabbix/zabbix_agentd.conf -s "orldc-dev-mqclu01" -k trap -o 7
  * able to send out trapper messages from multiple host
  * orldc-dev-mqclu01 has zabbix_sender
  * orldc-dev-mqclu02/03 does not have zabbix_sender
  * orldc-prod-faaoexclu01/02/03 does not have zabbix sender
  * orldc-prod-faaacyclu01/02/03 does not have zabbix sender
  * orldc-prod-qlog01/02/03 does not have zabbix sender
  * orldc-prod-procclu01/02/03 does not have zabbix_sender
  * dell6m doesn't have zabbix_sender
  * www1m/www4m/orldc-dev-ggdb02/orldc-dev-ggdb01/orldc-prod-faaoex01/www57/usr107m doesn't have zabbix_sender
  * just install zabbix-sender using yum
- 4027 - www8 is down, use www1m/www4m as an alternative
  * ticket acknowledged
  * noise is found in ~/src/ServerApps/noise, look into it to determine what it does
  * p = passur server hostname / d = adsb server hostname / x = ASDEX server hostname / n = noise airport code
  * send an email to aamir for confirmation, after getting an alternative ip, i'll begin replacing them.
  * also not sure how to tell if it is working.. it there an output , can't access root so unable to view /var/log/messages
  * need to experiment more with the noise program

## 2019/01/17
x watch aws video
x prepare moving the acy feeds to the cluster
  * for this one, no need to shut down the original process
  * the source data only has one copy so there are no duplicate values
  * added more notes in the ticket 3966
x updated DAL-FDO warning message to include more information
x need to test trapper push from multiple host

## 2019/01/16
x still transferring check-scripts.tar file
  * the previous attempt did not succesully transfer properly, trying again.
  * completed.  
  * assigned ticket to Aamir for confirmation (3839)
x systemd template files documentation
  * assigned to Aamir for testing/confirmation 
x watch aws video
  * IAM section complete
  * next one is S3 which is BIG
- experiment with incrond
  * confirmed that the new incrond is installed on qlog cluster
- use development swim feeds for testing.
  * use the cluster orldc-prod-faaacyclu

## 2019/01/15
- watch aws video
- moved each resource in the cluster into it's own group

## 2019/01/14
- watch aws video 
   * finished section 2
- https://mantis.passur.com/view.php?id=3839 (not sure what to do with /etc.init)
- 0004016 / updated and waiting for review
   * discussed with Aamir
   * assigned ticket to Chris
- https://mantis.passur.com/view.php?id=3541 (update systemd documentation using template files)

## 2019/01/11
- best practice meeting 1-800-719-7514,248023
- company call Call In Number 203-680-9095, Code 478590
- sent an email to Aamir for advice on how to handle ggdb02 issue.
- tried to install new VPN, not yet
- incron, trying to figure out where Chris installed the latest version of incron.
   * when I did an timestamp on /usr/sbin/incrond the latest was from 2014 in the 4 clusters that I have been looking at.
   * sent an email to Chris to figure out where the latest install it.
   * incrontab -e, it's empty, nothing setup yet.
- wrong location of logData
   * cannot write to shared directory
   * had to restart the process in host orldc-prod-faaoex01
  
## 2019/01/10
- reviewing scripts that fail everymonthn on ggdb02
- research incron.d setup and make sure it is working

## 2019/01/09
- continue work on 2979
   * stopped the process (flightradar24_amqprod_to_amqdev, asdex_mux_amqprod_to_amqdev, asdex_amqprod_to_amqdev, flightstats_amqprod_to_amqdev, itws_amqprod_to_amqdev, laminar_amqprod_to_amqdev, sfdps_amqprod_to_amqdev, tais_amqprod_to_amqdev, tbfm_amqprod_to_amqdev, tfmdata_amqprod_to_amqdev, tfmdata_mux_amqprod_to_amqdev)
   * I left alone tais-mux, need to resolve with Aamir why it's been running, just added a config file for that
   * Need more research: Jan  9 13:03:27 orldc-prod-faaacyclu01 systemd: Binding to IPv6 address not available since kernel does not support IPv6.
   * Did some test and tried to move it, it is not migrating // changed the failure-timeout to 10s
   * Also is grouping necessary, if some feeds have to be restarted more frequently, the others are restarted as well.  need to do more research
  
## 2019/01/08
- system engineering meeting
   * 203-680-9095;723659
- working on ticket 0002979
   * is 3966 a duplicate of 2979
   * created a spreadsheet to keep the cluster work in track (https://docs.google.com/spreadsheets/d/1MKwoGVdvodIqf7cwOmcUIHNQTsLwzpwLAhNnSn5fJAw/edit?usp=sharing)
   * working on the dev feeds
   * /opt/passur/nems/init/asdex_amqprod_to_amqdev.service is working, need to work on the rest
- working on ticket 3759
   * latest binary can be found at /Users/eladio/src/ServerApps/SwimMux/amq-best-of-both-20181204
   * set failure-timeout and migration-threshold to 0.
- working on ticket 0004016
   * created google doc for Chris to review
   * added ansible cluster default values

## 2019/01/07
- continue work on 3966
   * Ready to transition, just waiting for Chris to update incron.d which causes some cluster issue. 
   * this also had zombie process caused by incron.d 
   * stopped incron.d for orldc-prod-faaacyclu01
   * have to install java on the cluster
   * 2019-01-07 14:55:13 WARN  JCSMPFactory:385 - unresolvable host: 'tcp://extacywjhtc5178' is not a valid host or IP or scheme - need to modify /etc/host file
   * services files working on node01, need to transfer them to the rest of the nodes
- noticed that the issue on olrdc-prod-faaoexcluva03 has arose again
   * orldc-prod-faao9exclu03 - bash: fork: Cannot allocate memory
   * orldc-prod-faaoexclu02 - i can start the process manually
   * orldc-prod-faaoexclu01 - java.lang.OutOfMemoryError: unable to create new native thread
   * did a bit of research and it's related to incron.d zombie processes.

## 2019/01/04
- it turns out that the processs from faaoex01 is blocking the write.  i shut down the process running on faaoex01 and the both service starts up fine.
- renamed the /etc/init/*acy*.conf file with a different extension so it won't be restarted during boot
- assigned to aamir for testing, https://mantis.passur.com/view.php?id=3694 (move to qlog process)
- starting working on 3966

## 2019/01/03
Set up the migration-threshold and failutre-timeout value to 0 for the faaoexclu and mqclu.
We are waiting to add the other services (nems_oex_*_to_amqdev0) when we are ready to go.  That is why it is not running
Add resource constraint to the wiki
Acknowledge https://mantis.passur.com/view.php?id=3966, another clustering project
Acknowledge https://mantis.passur.com/view.php?id=3694, another clustering project
Acknowledge https://mantis.passur.com/view.php?id=3759, another clustering project
Working on 3694 but having trouble with the FileException, when running manually it works, when running using the service file, it doesn't work. 

## 2019/01/02
3567 - assigned back to Aamir, ready for testing
3691 - review the logrotate ticket from chris
3965 - move faa acy swim feeds - cluster 3 has no memory, needs to be rebooted by chris
Work on JEnkins continuous best practice guide
  * Reading Continuous Delivery with Docker and Jenkins - Delivering software at scale

## 2018/12/21
Still researching on how to handle an external resource issue
Migration-threshold = how many failues may occur for this resource on a node, before thhis node is marked ineligible to host this resoruce.  A value of 0 indicates that this feature is disabled ( the node will never be marked ineligible)
[root@orldc-dev-mqclu01 passur]# pcs resource defaults
failure-timeout: 0
migration-threshold: 0

## 2018/12/20
Sent email to Chris and Jerome looing for possible solutions to the external resource failure.

## 2018/12/19
Looked into resource failed actions, updated the wiki
Research about failed external connections - how to resolve
https://stackoverflow.com/questions/28547265/pacemaker-how-keep-the-virtualip-resource-on-at-least-one-node (host is down vs. feed is down, any difference)
https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/high_availability_add-on_reference/s1-moving_resources_due_to_connectivity_changes-haar

## 2018/12/18
Move the logging nems in the morning.
Assigned 3461 back to aamir for confirmation
3892 - added section about “pcs resource cleanup”.  Resolved ticket.
Move development feeds unto the cluster orldc-prod-faaoex01 (tais_amqprod_to_amqdev_log4j.xml)

## 2018/12/17
Hold off on the production feeds until next year (moratorium)
Work on itws faaoex0x cluster support
Latest nemstopicclient deployed in all three nodes with symlinks set up.
Copying configuration from orldc-prod-faaoex01
Converted conf files to services files.. Created symlink in /etc/systemd/system
2018-12-17 11:58:19 WARN  JCSMPFactory:385 - unresolvable host: 'tcp://extoexarctr5178' is not a valid host or IP or scheme
Need to modify /etc/hosts file 
Log directory needs to be created with the appropriate log files
Had to install java on node 2 and 3
sudo yum install java-1.8.0-openjdk-devel
  2
ERROR NEMSTopicClient:1304 - java.io.FileNotFoundException: /opt/passur/nems/var/zabbix/PASSUR.ITWS.Q02.OUT (No such file or directory)
Had to create the file
Itws feed should be working now under cluster management

## 2018/12/14
3892 Updated cluster documentation 
Continuing to work on itws faaoexclu*

## 2018/12/13
0003892 using cluster-mon to monitor resource and log it to /var/log/messages using a script, but we can just use email or interface this with zabbix.
3892 grouping is pretty easy to do.. Try to move a group of resources looks good
3932 Service monitoring using zabbix , use the utility zabbix-sender

## 2018/12/12
3932 - Looking into zabbix service monitoring instead of host monitoring.  Found some options we could try out.

## 2018/12/11
Prep for dell6m deployment of NEMSTopicClient
3870 - changed the state from acknowledged to resolved. Documented it in the wiki (https://wiki.passur.com/Cluster#Turnaround_Times)

## 2018/12/10
NEMSTopicClient, fix logging bug.. It’s not logging right now.  Created a merge request for Aamir to review.  Aamir merged it.. Deploying it to orldc-prod-faaoex01
3892 cluster control - need to provide alert when a process fails and moves to another node in cluster control.

## 2018/12/07
Created/acknowledged ticket 3892 from architecture best practices meeting.

## 2018/12/06
Will be looking at NEMSTopicClient today
Resolved - 0003870: Document failover time for the process moving to another node. 
Looked over 0003567 0003567: Put Delta MQ FPES SI Processes on orldc-dev-mqclu0[1-3] under Cluster Control, and it seems to be working fine now. Marked it as test and passed it to Aamir.

## 2018/12/05
Finishing up the sfdps issue.  Turns out the -b option wasn’t enabled.  Assigned 0003760 to Aamir for more testing.
0003567 create resources for cluster control for individual template file

## 2018/12/04
Debugging NEMSTopicClient because there is no log output.
Need to figure out why SFDPS for amq-best-of-both is always dying
3760, woke up early to put amq-best-of-both under cluster control.

## 2018/12/03
3760 cluster control.  Found the issues.. For orldc-prod-procclu03, amq library not installed.  For orldc-prod-procclu02, binary not deployed properly
3839 update date scripts for orldc-dev-ggd02 and orldc-dev-ggd01
3461 Updated orldc-prod-faaoex01 with the latest NEMSTopicClient. UPdated /etc/init/*.conf files and pointing it to NEMSTopicClient-20181203140146.jar
Need to look into delta that was discussed on friday (aamir mentioned that it could be because of using template files)

## 2018/11/30
3760 cluster control of amq-bob

## 2018/11/29
For testing, create another topic and see if it’ll work.. The stuff is in production.
While the VPN is down, looked into repository layout documentation (monorepo vs. manyrepo)
Architecture meeting

## 2018/11/28
Working on 0003760, trying to figure why orldc-prod-procclu01 is not part of the cluster. The node is currently up now.
Setup all three nodes so they are in sync and can be executed. 

## 2018/11/27
Worked on zabbix automatic restarts.  This is working now.  Assigned to Aamir for further testing. (0003809)
Updated zabbix best practice handbook (3146)
3809 report log for remote actions - assign to aamir for feedback

## 2018/11/26
Worked on zabbix automatic restarts (3809)
Research more about Publishing ADS-B feed to Topic
