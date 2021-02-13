using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    class sum_of_3_numbers_in_array
    {
        /*
         * Given an array of numbers and a number k, determine if there are three entries in the array which add up to the specified number k. For example, given [20, 303, 3, 4, 25] and k = 49, return true as 20 + 4 + 25 = 49.
         */
        public static void Main(string[] args)
        {
            Console.WriteLine("print array numbers to use");
            string array = Console.ReadLine();
            string[] m = array.Split(" ");
            int[] a = new int[m.Length];
            for (int i = 0; i < m.Length; i++)
            {
                a[i] = Int32.Parse(m[i]);
            }
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write(a[i]);
            }

            Console.WriteLine("number to get sum in the array");
            int k = Int32.Parse(Console.ReadLine());

            sum_of_3_numbers(a, k);
        }
        public static void sum_of_3_numbers (int[] a, int k)
        {
            bool printSuccess = false;
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] >= k)
                    continue;
                else
                {
                    for(int j = i+1; j < a.Length; j++)
                    {
                        if (a[i] + a[j] >= k)
                            continue;
                        else if (a.Contains(k - a[i] - a[j])) {
                            Console.WriteLine(a[i].ToString() + " " + a[j].ToString()+" "+ (k - a[i] - a[j]).ToString());
                            printSuccess = true;
                            break;
                        }                        
                    }
                }
                if (printSuccess)
                    break;
            }
        }
    }
}
