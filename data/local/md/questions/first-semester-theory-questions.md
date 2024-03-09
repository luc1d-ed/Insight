1. Write a program that takes a positive integer 'N' from the user and arrange it in ascending order using selection sorting and perform binary search.
   
    **Class Name :** SortSearch

    **Data members/ Instance Variables:**
    - **ar[] :**  Single dimension array of integer type
    - **N :** to store integer data

    **Member functions**
    - **void inputData() :** to input 'N' and store data into array
    - **void sorting() :** to arrange into ascending order using Selection sort
    - **int binSearch(int sd) :** Search 'sd' using Binary Search technique.

    Specify the class **SortSearch** giving all the details as specified. Also define the main function to create an object and call accordingly to enable the task.

2. Write a program which will input data into a two dimensional array and find the sum of all the elements of the array except those which are on either left or right diagonals and to display all the elements of the array which are below right diagonals.
   
   **Class Name :** AR01

   **Data Member**
   - **ar[][] :** a two dimensional array to store integer data into it
   - **N :** size of the row and column (Square matrix)

    **Member functions**
    - **AR01(int n1) :** a constructor to initialize each element of the array 'ar' with 0 and size 'N' with n1
    - **void getData() :** to input data into array using keyboard scanner input
    - **int sumDiag() :** to add all the elements of the array except those which are on either left or right diagonals
    - **void dispHalf() :** to display all the elements of the array which are below right diagonals

    Specify the class **AR01** giving all the details as specified. Also define the main function to create an object and call accordingly to enable the task.

3. Design a class **JubNum** to check if a given number is an Jubilee number or not. 
   (A number is said to be a Jubilee number if sum of its digits raised to the power of the length of the number is equal to the number.)

   **Example:**
   - 371 = 3<sup>3</sup> + 7<sup>3</sup> + 1<sup>3</sup>
   - 1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup>+ 4<sup>4</sup>
   - 54748 = 5<sup>5</sup> + 4<sup>5</sup> + 7<sup>5</sup> + 4<sup>5</sup> + 8<sup>5</sup>
    
    Thus, 371, 1634 and 54748 are all examples of Jubilee numbers.

    Some of the members of the class are given below:

    **Class Name :** JubNum

    **Data Members/ Instance Variables**
    - **n :** to store the number
    - **l :** to store the length of the number

    **Methods/ Member Functions**
    - **JubNum(int nn) :** parameterized constructor to initialize the data member n = nn
    - **int sum_pow(int i) :** returns the sum of each digit raised to the power of the length of the number using recursive technique eg., 34 will return 3<sup>2</sup> + 4<sup>2</sup> (as the length of the number is 2)
    - **void isJubilee() :** checks whether the given number is a Jubilee number by invoking the function sum_pow() and displays the result with an appropriate message.
  
    Specify the class **JubNum** giving details of the **constructor()**, **int sum_pow(int)** and **void isJubilee()**. Define a **main()** function to create an object and call the function accordingly to enable the task.

4. Input a word in uppercase and check for the position of the first occurring vowel and perform   the following operation.

   (i) Words that begin with a vowel are concatenated with "Y".

   <u>For example,</u> EUROPE becomes EUROPEY.

   (ii) Words that contain a vowel in-between should have the first part from the position of the vowel till the end, followed by the part of the string from beginning till the position of the vowel and is concatenated by "C".

   <u>For example,</u> PROJECT becomes OJECTPRC.

   (iii) Words which do not contain a vowel are concatenated with "N".

   <u>For example,</u> SKY becomes SKYN.

   Design a class **Rearrange** using the description of the data members and member function given below:

   **Class Name :** Rearrange

    **Data members/ Instance variables**

    - **void readword() :** to accept the word input in  UPPER CASE
    - **void convert() :** converts the word into its changed form and stores it in string *Cxt*
    - **void display() :** displays the original and the changed word

    Specify the class **Rearrange** giving the details of the **constructor()**, **void readword()**, **void convert()** and **void display()**.

    Define a **main()** function to create an object and call the function accordingly to enable the task.

5. An emirp number is a number which is prime backwards and forwards. 

    Example 13 and 31 are both prime numbers. This, 13 us an emirp number

    Design a class **Emirp** to check if a given number is Emirp number or not. Some of the members of the class are given below:

    **Class Name :** Emirp

    **Data members/ Instance Variables**
    - **n :** stores the number
    - **rev :** stores the reverse of the number
    - **f :** stores the divisor

    **Member functions :**
    - **Emirp(int nn) :** to assign n = nn, rev = 0 and f = 2
    - **int isprime(int x, f) :** check if the number is prime using the recursive technique and return 1 if prime otherwise return 0
    - **void isEmirp() :** reverse the given number and check if both the original number and the reverse number are prime, by invoking the function isprim(int) and display the result with an appropriate message.

    Specify the class **Emirp** giving details of the **constructor(int)**, **int isprime(int)** and **void isEmirp()**. Define the main function to create an object and call the methods to check for Emirp number.