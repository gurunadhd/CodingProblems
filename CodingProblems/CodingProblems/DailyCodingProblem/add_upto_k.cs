using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    class add_upto_k
    {
        /*
         * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

            For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

            Bonus: Can you do this in one pass?
         */
        public static void Main(string[] args)
        {
            int[] m = new int[] { 10, 15, 3, 7 };
            int k = 13;

            for( int i = 0; i < m.Length; i++)
            {
                if(Array.IndexOf(m,k - m[i]) > 0)
                {
                    Console.WriteLine("two numbers to make sum = " + k);
                    Console.WriteLine(m[i]);
                    Console.WriteLine(k- m[i]);
                    Console.WriteLine(Array.IndexOf(m, k - m[i]));

                    break;
                }
            }
        }
    }
}
