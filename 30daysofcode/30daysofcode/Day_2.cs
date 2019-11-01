using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
    class Day_2
    {
        // Complete the solve function below.
        static void solve(double meal_cost, int tip_percent, int tax_percent)
        {
            Console.WriteLine(Convert.ToInt32(meal_cost * (100 + tip_percent + tax_percent) / 100));

        }

        static void Main(string[] args)
        {
            double meal_cost = Convert.ToDouble(Console.ReadLine());

            int tip_percent = Convert.ToInt32(Console.ReadLine());

            int tax_percent = Convert.ToInt32(Console.ReadLine());

            solve(meal_cost, tip_percent, tax_percent);
        }
    }
}
