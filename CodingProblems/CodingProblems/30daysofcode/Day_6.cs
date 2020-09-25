using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    class Day_6
    {
        /*
         Objective
        Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. Check out the Tutorial tab for learning materials and an instructional video!

        Task
        Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

        Note:  is considered to be an even index.

        Input Format

        The first line contains an integer,  (the number of test cases).
        Each line  of the  subsequent lines contain a String, .

        Constraints

        Output Format

        For each String  (where ), print 's even-indexed characters, followed by a space, followed by 's odd-indexed characters.
         */
        static void Main(String[] args)
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        {
            int n = Convert.ToInt32(Console.ReadLine());
            string[] S = new string[n];
            for(int i = 0; i < n; i++)
            {
                S[i] = Console.ReadLine();
            }

            foreach (string m in S)
            {
                string s_odd = "";
                string s_even = "";
                for (int i = 0; i < m.Length; i++)
                {                  

                    if (i%2 == 0)
                    {
                        s_even = s_even + m[i];
                    }
                    else
                    {
                        s_odd = s_odd + m[i];
                    }
                }
                Console.WriteLine(s_even+" "+ s_odd);
            }
        }
    }
}
