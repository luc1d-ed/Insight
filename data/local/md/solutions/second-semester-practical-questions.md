# <p style="text-align: center"><span style="color:#FF5969">Second Semester Practical Solutions</span></p>

1. **Design a program which accepts your date of birth in dd mm yyyy format. Check whether the date entered is valid or not. If it is valid, display "VALID DATE", also compute and display the day number of the year for the date of birth. If it is invalid, display INVALID DATE" and then terminate the program.**

```
import java.util.*;
class SM2_Q1
{
    public static void main(String Args[])
    {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your birth date in dd mm yyyy format");
        System.out.print("dd : ");
        int dd = input.nextInt();
        System.out.print("mm : ");
        int mm = input.nextInt();
        System.out.print("yyyy : ");
        int yyyy = input.nextInt();
        int days []= {31,28,31,30,31,30,31,31,30,31,30,31}; 
        if((yyyy%4)==0) 
        {
            days[1] = 29; 
        } 
        if(mm>=1 && mm<=12) 
        {
            if(dd<=days[mm-1]) 
            {
                System.out.println("VALID DATE");
                int day_count = 0;
                for(int i=0;i<=(mm-2);i++) 
                {
                    day_count+=days[i];
                }
                day_count+=dd;
                System.out.println("Number of days : "+day_count);
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

2. **Write a program to declare a square matrix A[][] of order MxM where 'M' is the number of rows and the number of columns, such that M must be greater than 2 and less than 10. Accept the value of M as user input.** 
**Display an appropriate message for an invalid input. Allow the user to input integers into this matrix.**
**Perform the following tasks:**
**a) Display the original matrix.**
**b) Check if the given matrix is symmetric or not. A square matrix is said to be symmetric, if the element  in the ith row and jth column is equal to the element of the jth row and ith column.**
**c) Find the sum of the elements of left diagonal and the sum of the elements of right diagonal of the matrix and display them.**

```
import java.util.*;
class Q2_2S
{
    public static void main(String Args[])
    {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the value of 'M': ");
        int M = input.nextInt();
        if(M>2 && M<10) 
        {
            int A[][]= new int[M][M];
            int i,j;
            for(i=0;i<M;i++)
            {
                for(j=0;j<M;j++)
                {
                    System.out.print("["+i+"] ["+j+"] : ");
                    A[i][j]=input.nextInt();
                }
            }.
            System.out.println("ORIGINAL MATRIX");
            for(i=0;i<M;i++)
            {
                for(j=0;j<M;j++)
                {
                    System.out.print(A[i][j]+" ");
                }
                System.out.println();
            }
            boolean isSymmetric = false;
            for(i=0;i<M;i++)
            {
                for(j=0;j<M;j++)
                {
                    if(A[i][j]==A[j][i]);
                    {
                        isSymmetric = true; 
                    }
                }
            }
            if(isSymmetric) 
            {
                System.out.println("THE GIVEN MATRIX IS SYMMETRIC.");
            }
            else
            {
                System.out.println("THE GIVEN MATRIX NOT IS SYMMETRIC.");
            }
            int sum_left=0;
            int sum_right=0;
            for(i=0;i<M;i++)
            {
                sum_left+=A[i][i];
                sum_right+=A[i][(M-1)-i];
            }
            System.out.println("The sum of the left diagonal = "+sum_left);
            System.out.println("The sum of the right diagonal = "+sum_right);
        }
        else
        {
            System.out.print("The value of M should be between 2 and 10");
        }
    }
}
```

3. **A number N will be a monocot number if the sum of its extreme (first and last) digits is equal to the sum of mean(all digits except first and last) digits. If the sum of extreme digits is not equal to the sum of mean digits, the number is called dicot number.**

```
import java.util.*;
class SM2_Q3
{
    public static void main(String Args[])
    {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number : ");
        int N = input.nextInt();
        String number = Integer.toString(N);.
        int extreme = number.charAt(0) -'0' + number.charAt(number.length()-1) -'0'; 
        String mean_digits = number.substring(1, number.length() - 1); 
        int mean = 0;
        for(int i =0;i<mean_digits.length();i++)
        {
            mean += Character.getNumericValue(mean_digits.charAt(i)); 
        }
        System.out.println("Sum of mean digits : "+mean);
        System.out.println("Sum of extreme digits : "+extreme);
        if(mean==extreme)
        {
            System.out.println(N+" is a monocot number.");
        }
        else
        {
            System.out.println(N+" is a dicot number.");
        }
    }
}
```