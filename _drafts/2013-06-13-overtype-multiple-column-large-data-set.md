X = protected value
| = column separator

ABCDEFGHJKLB XMNOP

         012345 67890 12345
Record 1 ABCDEF|GHJK|LMNOP
Record 2 ABCDEX|GHJK |BXNOP

GHIJK
GHI

ABCDE|FGHIJ|KLXNO
ABCDE|FGHJ|KLXNO
ABCDE|FGHJ|KLXNO

Even before composing the dump to send to MF 
ABCDEFGHIJLMN XP


123456
Functional Specification
========================

Overtype Mode
-------------
done - you are only able to overtype the 5 characters.  If you go over, it ignores you key entry.
done - Traversal Keys - it doesn't go to the next column when using the left and right arrow key
done - Backspace Key - we delete the character where the bsp was done and at a blank space at the end of the string
                if there is a protected character, then the blank space is before that.  -
done - Delete Key - same as Bsp key.
done Paste - if the copy buffer has more characters than it allowable to be pasted, do not allow the operation to continue. - done
		have to account for the protected modes.  if you paste and part of it is the protected mode, do not allow it - done
        (need to discuss how to alert the end user, somehow)

Insert Mode
-----------
When inserting a character into the column, we must have a space at the end to insert it to.
There must be space at the end for you to insert character.

done - you are only able to insert 5 characters.  If you go over, it ignores your key entryjjjjj
done - Traversal Keys - same thing, nothing differt
done - Backspace Key - same behavior
done - Delete Key - same behavior
Copy
Paste done

When I'm overtyping, it doesn't show all 5 characters.  When not overtyping, I am able to view the 5 characters.
Need to figure out if CTRL-Z (undo) "NEW FEATURE" is supported.