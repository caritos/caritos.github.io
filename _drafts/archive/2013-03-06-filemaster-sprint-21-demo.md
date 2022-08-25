FilemMaster Sprint 21 Demo
==========================

Resource 
--------
AD1DEV.CAREL06.DEMO.BASE.CUSTFILE
AD1DEV.STERI02.COPYLIB
CAWACUST

* Make full screen so that they can see the "CUST-ZIP" column
* turn on showoff application
* similar to single-record demo as it uses the same code base

Steps for Demo
--------------
* protected values
	+ edit cust-id
	 	- since all the entries for the cust-id is protected, we make the cell non-editable
	+ edit cust-name "JACK F"
		- typing "abcdefg", g does not get typed in because the rest of the field is protected
* overtyping mode
	- overtyping mode is the default behavior when editng files
	- type "abc" for cust-name
* insert mode
	- press insert button
	- type "abc" for cust-name
* copy / paste
	- copy cust-street value from one to another
* validation
	- change cust zip and make it alphanumeric "
	- change the first cust zip
	- then go to the next cust zip and make that alpha numeric as well.
* navigation keys when editing a record
	- turn on hex-on so we have multilines
	- left arrow
	- right arrow
	- up arrow - doesn't support going to the next record yet
	- down arrow - doesn't support going to the next record yet
	- backspace 
	- delete
	- home 
	- end
	- enter
	
Done Criteria
-------------
- User needs to be able to alter existing modifiable data by overtyping it in an edit session in Multi Record display mode. 
- Overtyping is prohibited for fields that need to be protected. 
- Support all the functions for overtyping currently supported by the Edit widget. 
- Validation of input data is required. 
- QA TP created, reviewed, test cases executed with no Severity 1 or 2's 

Defect List
-----------
Sev 2: None
Sev 3: 1856, 1846, 
Sev 4: 1854

To Do
-----
* submit about insert bug for hex mode (multirecode listiner length captures all including hex)

