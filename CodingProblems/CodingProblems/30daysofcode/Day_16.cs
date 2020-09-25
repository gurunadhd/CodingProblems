using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    class Day_16
    {
        static void Main(String[] args)
        {
            string S = Console.ReadLine();

            try
            {
                int i = Convert.ToInt32(S);

                Console.WriteLine(S);

            }
            catch (Exception)
            {
                Console.WriteLine("Bad String");
            }
        }
    }
}
