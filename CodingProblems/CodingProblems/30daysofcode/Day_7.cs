using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    class Day_7
    {
        /*
         Objective
        Today, we're learning about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video!

        Task
        Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

        Input Format

        The first line contains an integer,  (the size of our array).
        The second line contains  space-separated integers describing array 's elements.

        Constraints

        , where  is the  integer in the array.
        Output Format

        Print the elements of array  in reverse order as a single line of space-separated numbers.
         */
        static void Main(String[] args)
        
        {
            /*
            int n = Convert.ToInt32(Console.ReadLine());
            string S = Console.ReadLine();
            char[] C = S.ToCharArray();
            Array.Reverse(C);        
            Console.WriteLine(new string(C));
            */
            int n = Convert.ToInt32(Console.ReadLine());

            int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
            Array.Reverse(arr);
            foreach (var num in arr)
            {
                Console.Write($"{num} ");
            }


        }
    }
}
