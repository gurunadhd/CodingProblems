using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodingProblems
{
    class lexicographically_small_moving_last
    {
        /*
         * You are given a string of length N and a parameter k. The string can be manipulated by taking one of the first k letters and moving it to the end.

            Write a program to determine the lexicographically smallest string that can be created after an unlimited number of moves.

            For example, suppose we are given the string daily and k = 1. The best we can create in this case is ailyd.
         */ 
        public static void Main(string[] args)
        {
            Console.WriteLine("print string");
            string str = Console.ReadLine();

            Console.WriteLine("print K to move letter to end");
            int k = Int32.Parse(Console.ReadLine());

            if (k>str.Length || k<=0)
                Console.WriteLine("K is not valid");
            else
            {
                string sub_str_to_move = str.Substring(0, k);
                string sub_str_to_append = str.Substring(k);
                string sub_str_to_append_left = str.Substring(0, k);
                char First_letter_to_compare;

                if (sub_str_to_move.Min() > sub_str_to_append[0])
                    First_letter_to_compare = sub_str_to_append[0];
                else
                {
                    First_letter_to_compare = sub_str_to_move.Min();
                    sub_str_to_move = sub_str_to_move.Remove(sub_str_to_move.IndexOf(First_letter_to_compare), 1);
                    sub_str_to_append_left = sub_str_to_append_left.Remove(sub_str_to_append_left.IndexOf(First_letter_to_compare), 1);
                }
                    

                while (sub_str_to_move != "")
                {
                    if (sub_str_to_move.Min() > First_letter_to_compare)
                    {
                        sub_str_to_append = sub_str_to_append + sub_str_to_move.ToCharArray().Min();
                        sub_str_to_append_left = sub_str_to_append_left.Remove(sub_str_to_append_left.IndexOf(sub_str_to_move.Min()),1);
                    }

                    if (sub_str_to_move.IndexOf(sub_str_to_move.ToCharArray().Min()) <= sub_str_to_move.Length)
                        sub_str_to_move = sub_str_to_move.Substring(0, sub_str_to_move.IndexOf(sub_str_to_move.ToCharArray().Min())) + sub_str_to_move.Substring(1 + sub_str_to_move.IndexOf(sub_str_to_move.ToCharArray().Min()));
                    else
                        sub_str_to_move = sub_str_to_move.Substring(0, sub_str_to_move.IndexOf(sub_str_to_move.ToCharArray().Min()));

                    //Console.WriteLine(sub_str_to_append);
                    //Console.WriteLine(sub_str_to_move);
                    //Console.WriteLine(sub_str_to_append_left);
                }
                if(sub_str_to_append.Length == str.Length)
                    Console.WriteLine(sub_str_to_append_left + sub_str_to_append);
                else
                    Console.WriteLine(First_letter_to_compare + sub_str_to_append_left + sub_str_to_append);
            }
        }
    }
}
