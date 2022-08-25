Solution 1 - TreeViewer Implementation
======================================
* change from TableViewer implementation to TreeViewer  implementation 
* determine character length of value column (it should account for the key/length/position column)
	- when you resize the window, we should recalculate the character length for the value cell 
		- initial display size
		- after being resized 
			- calculate where the column starts
			- calculate the visible portion
	- we should only be displaying 10 rows / cell to make it easier to scroll/display 
* we should have to split up the mainframe response into multiple rows. (in case of hex on, prefix the line with "X'" 
* testing limitations on the treeViewer class 
* primary commands 
	- find/change
	- locate - just for testing
	- reset
* overtyping  
	- insert mode (trying to add extra character when you have limited character width) 
		- just need to make the column viewer larger than what we are targeting 
	- overtype mode
	- cut/copy/paste/delete

16 man days (provided estimate for development)
 8 man days (bug fixing)
 
Solution 2 - Two Tables With Column Range
=========================================
* implement two tables (already implemented somewhat) 
	- one table for the fields names/position/format 
	- one table for the value column
	- no expand/columns
* sync up the two tables vertically. 
	- imitate table  behavior with three static column
	- listener on the scroll bar to move the static key table.
* need to display the position of visible region - 16 hours
	- can scroll horizontal, user has to know what column he is looking at.
* primary commands 
	- already been done
* overtyping 
	- already been done
	
10 man days (provided est. for development)
5 man days (bug fixing)

Solution 3 - Dialog Pop Up
==========================
* need to add a windows control to open a dialog box when viewing/editing a large record field. 
* handling the dialog box, ok/cancel, 
* handle overtyping 
	- dialog box needs to handle protected fields  
	- handle insert / overtype  
 	- can we reuse the code for overtyping in this dialog box??? 
* the dialog should have information about the field 
	- should include "field name, pos, format
* do you have to know which cursor position you are editing 
	- keep a track of the cursor position in the tableView as well as the dialog box
	- test the limitations of the dialog box with text editor
* we have to configure the find/change to work on the dialog box. 
* does this find dialog box get modified/closed during a find/change invocation command? 
* implement right click for all commands in the dialog box 
	- reset
	- locate
	
30 man days (provided est. for dev)
15 man days (bug fixing)





