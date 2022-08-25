Notes for Single Record Overtyping Story
========================================
* Current Status of the Story
	- insert mode implemented
		* Insert Key toggles the insert mode just like mainframe
		* add visual aid for insert mode - todo
	- overtype mode implemented 
		* if we are editing the record, the gray fields to signify the protected string dissapears. - todo 
		* copy - if part of a protected field is being copied, copy functionality is disabled. - todo 
		* notify user that he is unable to type on a protected range, when the user is actually doing it - todo
	- protected string values implemented
		* when overtyping, it skips the protected ranges
		* in order to insert a character, a space must be empty at the tail end of the record or the protected range, which ever one is closest
* What GUI event do we use to send an update message to the mainframe in Single Format Mode?
	- next or previous button, send the message to MF
	- in MF, before handling the next request, send the record
	- you only need to send the modified fields to the mainframe.
	- need to do some research on sending one field or multiple fields.	
* If an error message is receive from the MF from an update message, do we revert the record to the original state?
	- user modified fields one has correct value, the other value is incorrect
		+ popup dialog box - not wanted 
		
