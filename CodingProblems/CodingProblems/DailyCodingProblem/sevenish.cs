using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    class sevenish
    {
        /*
         * Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number.
         */
        public static void Main(string[] args)
        {
            Console.WriteLine("Print number to find sevenish");
            int n = Int32.Parse(Console.ReadLine());            
            Console.WriteLine(sevenishVal(n));
        }
        public static int sevenishVal(int n)
        {
            List<int> sevenish_array = new List<int>();
            List<int> sevenish_power_list = new List<int>();

            while(sevenish_array.Count<n)
            {
                int m = 0;
                for(int i = 0; i <= sevenish_power_list.Count; i++)
                {
                    m = Convert.ToInt32(Math.Pow(7, sevenish_power_list.Count));

                    if (!sevenish_array.Contains(m))
                    {
                        sevenish_array.Add(m);                        
                    }
                    else
                        sevenish_array.Add(m+ sevenish_power_list[i-1]);                    
                }
                sevenish_power_list.Add(m);
            }

            return sevenish_array[n-1];
        }
    }
}
