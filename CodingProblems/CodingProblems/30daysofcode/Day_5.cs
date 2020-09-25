using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    /*
     Objective
    In this challenge, we're going to use loops to help us do some simple math. Check out the Tutorial tab to learn more.

    Task
    Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.
     */
    class Day_5
    {
        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());
            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine(n + " x " + i + " = " + n * i);
            }
        }
    }
}
