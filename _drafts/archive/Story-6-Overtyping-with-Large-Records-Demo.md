Story 6 Overtyping with Large Records Demo
==========================================

Resource
--------
AD1QA.FMMVS90.LONGFLD.KSDS
AD1QA.FMMVS90.LONGFLD.COPYLIB(LNGFLDA)

Notes
-----
* Turn on Show Off application
* Don't have it full-screen so that Show Off application can be seen

Particulars
-----------
* Scroll when Field-1000 terminates in the middle of the screen
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
        * backspace at the left most visible position, nothing 
        happens
    - delete
        * delete at the right most visible position, nothing happens
        * delete before a protected mode, it should have a space 
        right before the protected mode
        * delete before the end of the line, it should have a space 
        at the last visible position
            - scroll to the right to show the space
* Overtyping Mode 
    * keep typing until the right most visible section, after that 
    nothing happens.
* Insert Mode
    * try to insert but visible section is full, can't insert
    * delete some characters, leave a character at the end, and then 
    insert till the end.
* Copy / Paste
    - overtype "0123"
    - copy the string "0123" (4 characters)
    - paste overtype when you have enough room
    - paste overtype when you don't have room
