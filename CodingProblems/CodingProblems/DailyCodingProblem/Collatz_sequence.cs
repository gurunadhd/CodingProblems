using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    class Collatz_sequence
    {
        /*A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?
        */
        public static void Main(string[] args)
        {
            int n=0;
            List<int> m = new List<int>();
            for (int i = 1; i <=100000; i++)
            {
                int k = i;
                do
                {
                    m.Add(k);
                    if (k % 2 == 0)
                        k = k / 2;
                    else
                        k = 3 * k + 1;

                } while (k != 1);

                if (n < m.Count)
                    n = i;
                m.Clear();

            }
            Console.WriteLine(n);
        }
        
    }
}
