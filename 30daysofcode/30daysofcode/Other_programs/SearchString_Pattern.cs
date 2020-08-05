using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace _30daysofcode.Other_programs
{
    class SearchString_Pattern
	{
		public static bool match_pattern(string s1, string s2)
        {
            if (s1 == s2)
            {
				return true;
            }
            else
            {
				return false;
            }
		}


		static void Main(String[] args)
		{
			Console.WriteLine("print string");
			string T = Console.ReadLine();
			Console.WriteLine("print pattern string");
			string pattern = Console.ReadLine();

			List<int> indexes = new List<int>();
			int i=0;
			while(i<=T.Length-pattern.Length)
            {
				if (match_pattern(T.Substring(i, pattern.Length), pattern))
				{
					indexes.Add(i);
					i = i + pattern.Length;
					
				}
                else
                {
					i++;
                }
            }
			Console.WriteLine("indexes of pattern string");
			foreach (int m in indexes)
            {
				Console.WriteLine(m);
			}
		}
	}
}
