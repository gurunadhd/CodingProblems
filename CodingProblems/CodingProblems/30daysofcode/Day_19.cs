using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    public interface AdvancedArithmetic
    {
        int divisorSum(int n);
    }

    public class Calculator : AdvancedArithmetic
    {
        public int divisorSum(int n)
        {
            int sum = 1;
            for (int i = 2; i <= n; i++)
            {
                if (n % i == 0)
                {
                    sum = sum + i;

                }

            }
            return sum;

        }
    }
    class Day_19
    {
        static void Main(string[] args)
        {
            int n = Int32.Parse(Console.ReadLine());
            AdvancedArithmetic myCalculator = new Calculator();
            int sum = myCalculator.divisorSum(n);
            Console.WriteLine("I implemented: AdvancedArithmetic\n" + sum);
        }
    }
}
