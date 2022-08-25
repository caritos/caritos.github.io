FileMaster Sprint 20 Demo
=========================

Resource
--------
AD1DEV.CAREL06.DEMO.BASE.CUSTFILE
AD1DEV.STERI02.COPYLIB
CAWACUST

* Make full screen so that they can the full error message
* turn on showoff application so people can see what you are typing.

Steps for Demo
--------------
* try to edit cust-id
	- ? unable to edit the cust-id since one or more of the values from cust-id is part of the protected list
* navigation keys when editing a record
	- left arrow
	- right arrow
	- up arrow
	- down arrow
	- home
	- end
	- backspace
	- delete
	- enter
* overtyping mode
	- ? overtyping mode is the default behavior when editing files 
	- type "cow" in cust-street 
* insert mode 
	- ? length of field is not validated, this is the responsibility of mainframe
	- press insert button
	- type "dog" in cust-city (been singing too much old-macdonald with my kids)
* copy / paste
	- copy the word "HAVEN" from CUST-CITY
	- paste it into CUST-STATE
* validation
	- ? when pasting the word "HAVEN" into CUST-CITY which has a length limit of 2,
	    mainframe responds with "Input value has been truncated"
* colordata
	- ? red signifies error on the value of a field
	- ? when opening the record, some fields already have incorrect values
	- ? let's fix one
	 	* custs-tot-customers - change to 'abc'
	 	* different error message - change to '1023' (my daughters bday)
	 	* type '10'

Done Criteria
-------------
* User needs to be able to alter existing modifiable data by overtyping it in an edit session 
  in single record formatting mode. 
* Overtyping is prohibited for fields that need to be protected. 
* Support all the functions for overtyping currently supported by the Edit widget. 
* Validation of input data is required. 
* QA TP created, reviewed, test cases executed with no Severity 1 or 2's 
* Unit Tested/Code Reviewed 


Current Defects for Single Record Mode Story
--------------------------------------------
* 1723 - Sev 3 - GUI/MF - Overtyping in Single - CAWA301OI - No edit session exists
* 1724 - Sev 3 - GUI - Overtyping in Single mode - Buttons are disabled if warning is displayed