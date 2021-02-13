using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    class Add_XOR
    {
        /*
         * Given integers M and N, write a program that counts how many positive integer pairs (a, b) satisfy the following conditions:
                a + b = M
                a XOR b = N
         */
        public static void Main(string[] args)
        {
            Console.WriteLine("print M, N for Add and XOR");
            string X  = Console.ReadLine();
            int M = Int32.Parse(X.Split(" ")[0]);
            int N = Int32.Parse(X.Split(" ")[1]);
            count(M, N);
        }
        public static void count(int M, int N)
        {
            int count=0;
            for( int i = 1; i < M/2+1; i++)
            {
                if ((i ^ (M - i)) == N)
                {
                    count++;
                    Console.WriteLine($"{i} {M-i}");
                }
                    
            }
            Console.WriteLine(count);
        }
    }
}
