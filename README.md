# 3rd_Homework
*Password Generator*


For this assignment I had to create a password generator.   The password generator had to create a password with a legnth between 8 and 128, and then had to generate characters based upon a user's selections.  The selections available to the user were uppercase letters, lowercase letters, numbers, and special characters.
![screenshot](/Assets/Start.png)
To start this off I created a string for each set of variables that a user could chose from.   I then created a length generator using a while loop.   The loop would not end until the user chose a number between 8 and 128.   I used the NaN (not a number) identifier to make sure that the user chose a number.  I was able to get help from the TA on how to set this code up, since originally I would ask a number and the code would stop.  The while loop was set up incorrectly, but I was able to figure it out with his help.
I then continued by adding four different confirm statements for each type of character set I had created.   I ask the user if they wanted uppercase, lowercase, numbers, and special characters. I added a confirmation statement at the end of each decision.   
After that I added a statement that would end the password generation if the user chose no characters.   If the user chose no characters, the sequence of events stopped.  
I then added a for loop that would randomize over the entire string, based upon the user's choices.   I ran into some difficulty here because I was incorrectly using the length of all the combined characters, NOT the length of the password chosen by the user.   I was able to troubleshoot and figure it out.  
I then attempted to clean up the code.  
A second rather large hurdle that I ran in to was that I had declared some variables outside of the function, thereby making them global variables.   When this happend, after a password was generated, I could not try a new password.   I would be alerted that a length had already been chosen.  I was able to get help from the chat available on BootCamp Spot.   Andrew, the person who helped, was able to immediately identify the problem and help me troubleshoot.
In order to create a more appealing page, I decided to add a reset button to the bottom.  This helped clear the previous input on the page and helped create a more polished look at the end of it.  I did this by copying the generate button and just naming the button reset.   I then added an onclick function to reset the page if the reset button was clicked.
Next I added else statements to all of my confirms, to create a statement for when a user did not chose a certain character.
