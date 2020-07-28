using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace _30daysofcode.Other_programs
{
    class FrequencySortUsingHash
    {
		public static void FrequencySort(string m)
        {
			Dictionary<char, int> disct = new Dictionary<char, int>();
			char[] charString = m.ToCharArray();

			foreach(char c in charString)
            {
                if (disct.ContainsKey(c))
                {
					disct[c]++;
                }
                else
                {
					disct.Add(c, 1);
                }
            }

			var ordered = disct.OrderBy(X => X.Value);
			foreach(KeyValuePair<char,int> ch in ordered)
            {
				Console.WriteLine(ch.Key);
			}
		}


		static void Main(String[] args)
		{
			string T = Console.ReadLine();
			FrequencySort(T);
		}
	}
}
