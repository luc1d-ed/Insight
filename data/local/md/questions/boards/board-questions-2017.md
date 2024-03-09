1. A class **Palin** has been defined to check whether a positive number is a *Palindrome* number or not.
   *The number **‘N’** is palindrome if the original number and its reverse are same.*
   Some of the members of the class are given below:

   **Class name** : **Palin**
   
   **Data members/instance variables:**

   |   num     |         integer to store the number           |
   |:------:   |:------------------------------------------:   |
   | revnum    | integer to store the reverse of the number    |

   **Methods/Member functions:**

   |      Palin ( )      |                                  constructor to initialize data members with legal initial values                                  |
   |:-------------------:|:----------------------------------------------------------------------------------------------------------------------------------:|
   |   void accept ( )   |                                                        to accept the number                                                        |
   | int reverse (int y) |                     reverses the parameterized argument 'y' and stores it in 'revnum' using recursive technique                    |
   |    void check ( )   | check whether the number is a Palindrome by invoking the function 'reverse ( )' and display the result with an appropriate message |

   Specify the class **Palin** giving the details of the **constructor( )**, **void accept( )**,
   **int reverse( int )** and **void check( )**. Define the **main( )** function to create an object and
   call the functions accordingly to enable the task.

2. A class **Adder** has been defined to add any two accepted time.
 
   **Example**: Time A - 6 hours 35 minutes

    Time B - 7 hours 45 minutes

   Their sum is - 14 hours 20 minutes ( where 60 minutes = 1 hour)

   The details of the members of the class are given below:

   **Class name** : **Adder**

   **Data member/instance variable:**

   | a [ ] | integer array to hold two elements (hours and minutes) |
   |:-----:|:------------------------------------------------------:|

   **Member functions/methods:**

   |            Adder ( )            |                            constructor to assign 0 to the array elements                            |
   |:-------------------------------:|:---------------------------------------------------------------------------------------------------:|
   | void readtime( )                | to enter the elements of the array                                                                  |
   | void addtime( Adder X, Adder Y) | adds the time of two parameterized objects X and Y and stores the sum in the current calling object |
   | void disptime ( )               | displays the elements with an appropriate message (i.e. hours = and minutes = )                     |

   Specify the class **Adder** giving details of the **constructor( )**, **void readtime( )**,
   **void addtime(Adder, Adder)** and **void disptime( )**. Define the **main( )** function to create
   objects and call the functions accordingly to enable the task.
   
3. A super class **Product** has been defined to store the details of a product sold by a wholesaler to a retailer. Define a *sub class* **Sales** to compute the total amount paid by the retailer *with* or *without fine* along with *service tax*.
   
   Some of the members of both the classes are given below:

   **Class name** : **Product**

   **Data member/instance variable**

   | name   | stores the name of the product                            |
   |:------:|:---------------------------------------------------------:|
   | code   | integer to store the product code                         |
   | amount | stores the total sale amount of the product (in decimals) |


There is just too much, I can't do this whole day!