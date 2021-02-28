using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    class Read_N_Char
    {
        /*  Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.
            For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.
         */
        public static void Main(string[] args)
        {
            Console.WriteLine("privide file path to read");
            string file_path = Console.ReadLine();

            Console.WriteLine("No. of characters to read");
            int n = Int32.Parse(Console.ReadLine());

            string content = System.IO.File.ReadAllText(file_path);
            int current_index = 0;
            while (current_index<= content.Length)
            {
                if(current_index+n <= content.Length)
                    Console.WriteLine(content.Substring(current_index,n));
                else
                    Console.WriteLine(content.Substring(current_index));
                current_index = current_index + n;
            }
        }
    }
}
