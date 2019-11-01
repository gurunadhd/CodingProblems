using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
    class Day_3
    {
        /*
         * Objective
            In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!

            Task
            Given an integer, , perform the following conditional actions:

            If  is odd, print Weird
            If  is even and in the inclusive range of  to , print Not Weird
            If  is even and in the inclusive range of  to , print Weird
            If  is even and greater than , print Not Weird
            Complete the stub code provided in your editor to print whether or not  is weird.

            Input Format

            A single line containing a positive integer, .

            Constraints

            Output Format

            Print Weird if the number is weird; otherwise, print Not Weird.
         */
        static void Main(string[] args)
        {
            int N = Convert.ToInt32(Console.ReadLine());

            if (N % 2 != 0)
            {
                Console.WriteLine("Weird");
            }
            else if (2 <= N && N <= 5)
            {
                Console.WriteLine("Not Weird");
            }
            else if (6 <= N && N<= 20)
            {
                Console.WriteLine("Weird");
            }
            else if (N > 20)
            {
                Console.WriteLine("Not Weird");
            }
        }
    }
}
