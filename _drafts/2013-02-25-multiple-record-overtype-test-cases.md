Multiple Record Overtype Test Cases
===================================

VSAM KSDS
---------
Use any fo the below VSAM datasets - they have Keylen 7 bytes, starting from the 1. byte  offset (counting 0,1,2):
Work on a copy, do not  change these originals!!

'AD1QA.FMMVS90.IVPKSDS.BASELINE.DATA'

'AD1QA.FMMVS90.CHHKSDS'

Open in Multi Record format.

Use these Layouts:
1. Correct one - AD1QA.FMMVS90.QADSET.LAYOUT( CUST)  - they Key  - CUST-ID field must be protected (7 bytes from possition 2)
2. Incorrect one - AD1QA.FMMVS90.QADSET.LAYOUT(MODEL) - more then 7 bytes are protected, because the key is in 2 fields and the FM cannot protect only part of the field

In protected mode you must not be allowed to change the Key (Field  CUST-ID), in unprotecterd you must be alowed to do it.
Note: all other fileds must be unprotected all the time. Even for the incorrect layout, when the wrong values are displayd in Hex. 

Try also:
- Changing data in HEX while HEX OFF and vice versa
- Enter invalid data - should not be alowed - message is Invalid input
- Enter too long data -- should not be alowed - the data is truncated  - message is Input truncated


Note: Commad on MF  to switch the fields Protected/Unprotected is:  KEY
Note: Maybe this feature - Unprotect the VSAM key - will not be implemented in this sprint and will be carryovered into next sprint.
Check with MF if you ar in doubts.

In protected mode you must not be allowed to change the Key(7 bytes in the record,starting at position 2), in unprotecterd you must be alowed to do it.
Note: Maybe this feature - Unprotect the VSAM key - will not be implemented in this sprint and will be carryovered into next sprint.

Switch between Single and Multi Rec Mode
----------------------------------------
Open SEQ dataset:
AD1QA.FMMVS90.IVPSFL.BASELINE.DATA  - do not use it directly, use work copy!
In Multi Record format.
Use with layout:
AD1QA.FMMVS90.QADSET.LAYOUT(CUST)
Try to overwrite different field.  No field is protected.

Try to switch between Multi record, Single record, Character mode. Use also Hex or Non-hex display.

Test, if the records are always displayed correctly, the record in focus is kept, the cursor is in the right place etc.
Try also insert 5 records in one mode, switch into the other one and check, if the inserted records are also there.

In doubts consult with MF.

Special Keys Test
-----------------
Open SEQ dataset:
AD1QA.FMMVS90.IVPSFL.BASELINE.DATA  - do not use it directly, use work copy!
In Multi Record format.
Use with layout:
AD1QA.FMMVS90.QADSET.LAYOUT(CUST)
Try to overwrite different field.  No field is protected.

Test that special keys behave as expected:
backspace, delete, paste, Tab, up , down, left, right arrow 

Expected behaving can be found in DDS - CAFilemasterPlusEditor, part 3.1.17.1 GUI Overtyping Behavior when editing a record in Character Mode
In doubts consult with MF.

Simple SEQ Dataset
------------------
Open SEQ dataset:
AD1QA.FMMVS90.IVPSFL.BASELINE.DATA  - do not use it directly, use work copy!
In Multi Record format.
Use with layout:
AD1QA.FMMVS90.QADSET.LAYOUT(CUST)
Try to overwrite different field.  No field is protected.

Test that special keys behave as expected:
backspace, delete, paste, Tab, up , down, left, right arrow 

Expected behaving can be found in DDS - CAFilemasterPlusEditor, part 3.1.17.1 GUI Overtyping Behavior when editing a record in Character Mode
In doubts consult with MF.

Simple PDS Member
-----------------
Open the PDS member:
AD1QA.FMMVS90.GUI.PDS(AB) - use a work copy, not the original
In  Edit, Multi record format.
Use the Layout:
AD1QA.FMMVS90.COPYLIB(PDS)
Note:
The AD1QA.FMMVS90.GUI.PDS is PDS, with Record format FB,
Record Length 80. 
So, the Editor should behave according this fact - type over the text end, untill 80 chars. Compare with MF if in doubts.

Try also:
- Changing data in HEX while HEX OFF and vice versa
- Enter invalid data - should not be alowed - message is Invalid input
- Enter too long data -- should not be alowed - the data is truncated  - message is Input truncated

Save Functionality
------------------
Open SEQ dataset:
AD1QA.FMMVS90.IVPSFL.BASELINE.DATA  - do not use it directly, use work copy!
Use with layout:
AD1QA.FMMVS90.QADSET.LAYOUT(CUST)

In  Edit, Multirecord  mode.

Test that Save function  and Close Editor windows behave as expected:
- Save should be confirmed by a message from MF
- If the dataset was changed and not saved and the Editor was closing, the question if the user want to quit or save the dataset first.

Expected behaving can be found in DDS - CAFilemasterPlusEditor, part 3.1.17.1 GUI Overtyping Behavior when editing a record in Character Mode
In doubts consult with MF.

Other Data Types Tests
----------------------
If time permits, test all above also with  other dataset types:
- RRDS:  
(be aware, that RRDS has also lot of problems in the ISPF 8.5  and 4.1 version, so not all GUI problems you can meet  are relevant to this version and can be solved in this version - see notes by Patrice Cotte about this issue )

AD1QA.FMMVS90.HIDRRDS.BASELINE.DATA2 with
Layout: AD1QA.FMMVS90.QADSET(MODEL)
- ESDS:  AD1QA.FMMVS90.HIDESDS.BASELINE.DATA2 with
Layout: AD1QA.FMMVS90.QADSET(MODEL)
- SEQ FB: AD1QA.FMMVS90.HIDSEQ.BASELINE.DATA2 with
Layout: AD1QA.FMMVS90.QADSET(MODEL)
- SEQ VB: AD1QA.FMMVS90.HIDSVB.BASELINE.DATA2 with
Layout: AD1QA.FMMVS90.QADSET(MODEL)
-PDSE MEMBER in: AD1QA.FMMVS90.TEST..PDSE.MM with
Layout AD1QA.FMMVS90.COPYLIB(PDS)
