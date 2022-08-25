Installing FileMaster Plus Via Pax
==================================

Chapter 4 - Create a Product Directory from the Pax file
--------------------------------------------------------

* Submitting job to unpack pax file 
	- 3.4 -> qw BPXBATCH
		+ quick help to understand what the command does
	- use ftp client to upload job
		+ ca11 (normal)
		+ filename has to be renamed to 8 characters so that mainframe can understand
	- I get an invalid account code, unable to submit.
	- Need to specify SYSAFF as well
	
//ESDUNPAX JOB (124300000),'UNPAX ESD PACKAGE ',                                
// MSGCLASS=X,CLASS=A,NOTIFY=&SYSUID                                            
/*JOBPARM SYSAFF=CA11                                                           
//*********************************************************************         
//* This sample job can be used to invoke the pax command to create   *         
//* the product-specific installation directory.                      *         
//*                                                                   *         
//* This job must be customized as follows:                           *         
//* 1. Supply a valid JOB statement.                                  *         
//* 2. Replace "yourUSSESDdirectory" with the name of the USS         *         
//*    directory used on your system for ESD downloads.               *         
//* 3. Replace "paxfile.pax.Z" with the name of the pax file.         *         
//* NOTE: If you continue the PARM= statement on a second line, make  *         
//*       sure the 'X' continuation character is in column 72.        *         
//*********************************************************************         
//UNPAXDIR EXEC PGM=BPXBATCH,                                                   
// PARM='sh cd /a/carel06/; pax -rvf 8510053S001.pax.Z'                         
//*UNPAXDIR EXEC PGM=BPXBATCH,                                                  
//* PARM='sh cd /a/carel06/; pax                              X                 
//*             -rvf 8510053S001.pax.Z'                                         
//STDOUT DD SYSOUT=*                                                            
//STDERR DD SYSOUT=*   

* Running UNZIPJCL Job
	- error with destination filename
	- resovled rc=72 by specifying the sysaff variable 
	- after that, it unzipped properly.
	
IGD04900I ATTEMPT TO GET FILE STATUS FOR A HFS FILE FAILED      
RETURN CODE IS (00000072) REASON CODE IS (5B220117)             
FILENAME IS (/a/carel06/FMMVS85/VIEW/R115/BaseInstall)          
IEF272I CAUNZIP STEP1 - STEP WAS NOT EXECUTED.                  

