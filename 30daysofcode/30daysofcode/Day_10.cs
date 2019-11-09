using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
    class Day_10
    {
        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());

            string binary = "";
            int cons_total = 0, cons_total_max = 0;

            while (n >0)
            {
                int reminder = n % 2;
                if (reminder == 1)
                {
                    
                    if(cons_total_max == cons_total)
                    {
                        cons_total_max = cons_total_max + 1;
                    }
                    cons_total = cons_total + 1;

                }
                if (reminder == 0)
                {
                    cons_total = 0;                   
                }
                char c = Convert.ToChar(48+reminder);
                
                binary = Char.ToString(c) + binary;
               
                n = n / 2;
                

            }

            Console.WriteLine(cons_total_max);
        }
    }
}
