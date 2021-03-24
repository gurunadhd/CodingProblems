using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodingProblems.LeetCode
{
    class Two_Sum
    {
        /*
         * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
         */
        public static void Main(string[] args)
        {
            Console.WriteLine("enter array seperated by space");
            int[] arr = Console.ReadLine().Split(" ").Select(token => Int32.Parse(token)).ToArray();

            Console.WriteLine("enter two sum value");

            int total = Int32.Parse(Console.ReadLine());

            TwoSum(arr, total);
        }
        public static void TwoSum(int[] arr, int total)
        {
            List<int> buffer= new List<int>{ };
            for(int i = 0; i < arr.Length; i++)
            {
                if (buffer.Contains(total - arr[i]))
                    Console.WriteLine(Array.IndexOf(arr,total - arr[i]) + " " + i);
                else
                    buffer.Add(arr[i]);
            }
        }
    }
}
