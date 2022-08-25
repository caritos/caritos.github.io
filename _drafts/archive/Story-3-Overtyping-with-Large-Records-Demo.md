Story 3 Overtyping with Large Records Demo
==========================================

Resource
--------
* AD1QA.FMMVS90.VB.LRECL04K.LNGFLD.GUI

Notes
-----
* Turn on Show Off application
* Don't have it full-screen, so that Show Off application can be seen.

Particulars
-----------
* Scroll to 968-1050 position, or find one that has protected values
* Navigation keys when editing a record
    - left arrow
        * only up to the left most visible section
    - right arrow
        * only up to the right most visible section
    - home
        * only up to the left most visible section
    - end 
        * only up to the right most visible section
    - backspace
        * backspace at the left most visible position, nothing happens
    - delete
        * delete at the right most visible position, nothing happens
        * delete before a protected mode, it should have a space right before the protected mode
        * delete before the end of the line, it should have a space at the last visible position
            - scroll to the right to show the space
* Overtyping Mode 
    * keep typing until the right most visible section, after that nothing happens.
* Insert Mode
    * try to insert but visible section is full, can't insert
    * delete some characters, leave a character at the end, and then insert till the end.
* Copy / Paste
    - overtype "0123"
    - copy the string "0123" (4 characters)
    - paste overtype when you have enough room
    - paste overtype when you don't have room
    - paste insert when you have enough room
    - paste insert when you don't have room
* Hex On
    - do the same thing as before.
    
     

