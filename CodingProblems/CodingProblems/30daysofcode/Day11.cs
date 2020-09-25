using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    class Day11
    {
        /*
         Objective
        Today, we're building on our knowledge of Arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video!

        Context
        Given a  2D Array, :

        1 1 1 0 0 0
        0 1 0 0 0 0
        1 1 1 0 0 0
        0 0 0 0 0 0
        0 0 0 0 0 0
        0 0 0 0 0 0
        We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

        a b c
          d
        e f g
        There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

        Task
        Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

        Input Format

        There are  lines of input, where each line contains  space-separated integers describing 2D Array ; every value in  will be in the inclusive range of  to .

        Constraints

        Output Format

        Print the largest (maximum) hourglass sum found in .
         */
        static void Main(string[] args)
        {
            int[][] arr = new int[6][];

            for (int i = 0; i < 6; i++)
            {
                arr[i] = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
            }

            int sum = 0, max_sum = 0;

            for (int i = 0; i < 4; i++)
            {
                for (int j = 0; j < 4; j++)
                {
                    sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i + 1][j + 1] + arr[i+2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
                    Console.WriteLine(sum);
                    if (i==0 && j==0)
                    {
                        max_sum = sum;
                    }
                    else if (max_sum < sum)
                    {
                        max_sum = sum;
                    }
                    
                }
            }

            Console.WriteLine(max_sum);
        }
    }
}
