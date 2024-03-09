# <p style="text-align: center"><span style="color:#FF5969">First Semester Practical Solutions</span></p>

1. **Write a program to input a natural number less than 1000 and display it in words. Test your program on the sample data and some random data.**
   
   <u>Sample input and output of the program</u>

   Input: 29

   Output: TWENTY NINE

   Input: 17001

   Output: OUT OF RANGE

   Input: 119

   Output: ONE HUNDRED AND NINETEEN

   Input: 500

   Output: FIVE HUNDRED

```
import java.util.*;
class Number_Name
{
    public static void main(String Args[])
    {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number : ");
        int number = input.nextInt();
        if(number > 0 && number < 1000)
        {
            String ones [] = {"", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"};
            String teens []= {"TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"};
            String tens []= {"", "TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"};
            String name = "";
            if (number >= 100) 
            {
                name += ones[number / 100] + " HUNDRED ";
                number %= 100;
            } 
            if (number >= 20) 
            {
                name += tens[number / 10] + " ";
                number %= 10;
            }
            else if (number >= 10 && number <= 19) 
            {
                name += teens[number - 10] + " ";
                number = 0;
            }
            if (number > 0 ) 
            {
                name += ones[number] + " ";
            }
            System.out.println(name.trim());
        }
        else if ( number == 0 )
        {
            System.out.println("ZERO");
        }
        else
        {
            System.out.println("OUT OF RANGE");
        }
    }
}
```

2. Encryption is a technique of encoding messages to maintain their secrecy. A String array of size 'n' where 'n' is greater than 1 and less than 10, stores single sentences (each sentence ends with a full stop) in each row of the array.

    **Write a program to accept the size of the array. Display an appropriate message if the size is not satisfying the given condition. Define a string array of the inputted size and fill it with sentences row-wise. Change the sentence of the odd rows with an encryption of two character ahead of the original character. Also change the sentence of the even rows by storing the sentence in reverse order. Display the encrypted sentences as per the sample data given below.**

    <u>Test your program on the sample data and some random data</u>

    Input: n=4

    IT IS CLOUDY.

    IT MAY RAIN.

    THE WEATHER IS FINE.

    IT IS COOL.

    Output:

    KV KU ENQWFA.

    RAIN MAY IT.

    VJG YGCVJGT KU HKPG.

    COOL IS IT.

    Input: n=13

    Output: INVALID ENTRY

```
import java.util.*;
class Encryption
{
    public static void main(String Args[])
    {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array : ");
        int n = input.nextInt();
        input.nextLine();
        if( n > 0 && n < 10)
        {
            String ar[] = new String[n];
            for(int i = 0; i < n; i++)
            {
                System.out.print("Enter the "+i+" sentence : ");
                ar[i] = input.nextLine().toUpperCase();
                if(! ar[i].endsWith("."))
                {
                    System.out.println("The sentence does not end in a full stop.");
                    System.out.print("Enter the "+i+" sentence : ");
                    ar[i] = input.nextLine().toUpperCase();
                }
            }
            for(int i = 0; i < n; i++)
            {
                if ((i%2) == 1)
                {
                    String word [] = (ar[i].substring(0, ar[i].length() - 1)).split(" ");
                    String reversed = "";
                    for(int j = word.length-1; j >= 0; j--)
                    {
                        reversed += word [j];
                        if( j != 0)
                        {
                            reversed += " ";
                        }
                    }
                    reversed += ".";
                    ar[i] = reversed;
                }
                else
                {
                    String encrypted = "";
                    for(int j = 0; j < ar[i].length(); j++)
                    {
                        char current = ar[i].charAt(j);
                        if(Character.isLetter(current))
                        {
                            char incremented = (char) (current + 2);
                            if (incremented > 'Z')
                            incremented = (char) ('A' + (incremented - 'Z' - 1));
                            encrypted += incremented;
                        }
                        else
                        {
                            encrypted +=current;
                        }
                    }
                    ar[i] = encrypted;
                }
            }
            for(int i = 0; i < n; i++)
            {
                System.out.println(ar[i]);
            }
        }
        else
        {
            System.out.println("INVALID ENTRY");
        }
    }
}
```

3. **Design a program which accepts your date of birth in dd mm yyyy format. Check whether the date entered is valid or not. If it is valid, display "VALID DATE", also compute and display the day number of the year for the date of birth. If it is invalid, display "INVALID DATE" and then terminate the program.**
   
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

```
import java.util.*;
class ValidDate
{
    public static void main(String Args[])
    {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your date of birth in dd mm yyyy format");
        System.out.print("dd : ");
        int day = input.nextInt();
        System.out.print("mm : ");
        int month = input.nextInt();
        System.out.print("yyyy : ");
        int year = input.nextInt();
        int maxDays [] = {31,28,31,30,31,30,31,31,30,31,30,31};
        int day_number = 0;
        if((year%4) == 0)
        {
            maxDays[1] += 1;
        }
        if(month > 0 && month <= 12)
        {
            if(day > 0 && day <= maxDays[month-1])
            {
                System.out.println("VALID DATE");
                for(int i = 0; i < month; i++)
                {
                    day_number += maxDays[i];
                }
                day_number += day;
                System.out.println(day_number);
            }
            else
            {
                System.out.println("INVALID DATE");
            }
        }
        else
        {
            System.out.println("INVALID DATE");
        }
    }
}
```