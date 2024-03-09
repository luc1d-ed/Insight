1. Design a program which accepts your date of birth in dd mm yyyy format. Check whether the date entered is valid or not. If it is valid, display "VALID DATE", also compute and display the day number of the year for the date of birth. If it is invalid, display "INVALID DATE" and then terminate the program.
   
   <u>Testing of the program</u>

   Input: Enter your date of birth in dd mm yyyy format

   05

   01

   2010

   Output: VALID DATE

   5

   Input: Enter your date of birth in dd mm yyyy format

   01 

   07

   2023

   Output: VALID DATE

   Input: Enter your date of birth in dd mm yyyy format

   34

   06

   2010

   Output: INVALID DATE

2. Write a program to declare a square matrix A[][] of order MxM where 'M' is the number of rows and the number of columns, such that M must be greater than 2 and less than 10. Accept the value of M as user input. Display an appropriate message for an invalid input. Allow the user to input integers into this matrix. Perform the following tasks:
   
    a) Display the original matrix.

    b) Check if the given matrix is symmetric or not. A square matrix is said to be symmetric, if the element in the ith row and jth column is equal to the element in the jth row and ith column.

    c) Find the sum of the elements of left diagonal and the sum of the elements of right diagonal of the matrix and display them.

    <u>Test your program for the following data and some random data:</u>

    **Example 1**

    INPUT: M = 3

    1 2 3

    2 4 5

    3 5 6

    OUTPUT:

    ORIGINAL MATRIX

    1 2 3

    2 4 5 

    3 5 6

    THE GIVEN MATRIX IS SYMMETRIC

    The sum of the left diagonal = 11

    The sum of the right diagonal = 10

    **Example 2**

    INPUT: M = 4

    7 8 9 2

    4 5 6 3 

    8 5 3 1

    7 6 4 2

    OUTPUT:

    ORIGINAL MATRIX

    7 8 9 2

    4 5 6 3 

    8 5 3 1

    7 6 4 2

    THE GIVEN MATRIX IS NOT SYMMETRIC

    The sum of the left diagonal = 17

    The sum of the right diagonal = 20

    **Example 3**

    INPUT: M = 12

    OUTPUT:

    THE MATRIX SIZE IS OUT OF RANGE

3. The number N will be a **monocot number** if the sum of its extreme (first and last) digits is equal to the sum of mean(all digits except first and last) digits. If the sum of extreme digits is not equal to the sum of mean digits, the number is called **dicot number**

    **Example 1:**

    INPUT: N = 34326

    OUTPUT: 

    Sum of mean digits = 9

    Sum of extreme digits = 9

    34326 is a monocot number

    **Example 2:**

    INPUT: N = 173156

    OUTPUT:

    Sum of mean digits = 16

    Sum of extreme digits = 7

    173156 is a dicot number

    **Example 3:**

    INPUT: N = 825122

    OUTPUT:

    Sum of mean digits = 10

    Sum of extreme digits = 10

    825122 is a monocot number

    **Example 4:**

    INPUT: N = 17156

    OUTPUT:

    Sum of mean digits = 7

    Sum of extreme digits = 13

    17156 is a dicot number