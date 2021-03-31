using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems
{
    /*
     * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
    Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
     */
    class Container_With_Most_Water
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("print array of heights seperated by space");
            string heights = Console.ReadLine();
            string[] m = heights.Split(" ");
            int[] heightArray = new int[m.Length];
            for (int i = 0; i < m.Length; i++)
            {
                heightArray[i] = Int32.Parse(m[i]);
            }

            Console.WriteLine(MaxArea(heightArray));
        }
        public static int MaxArea(int[] height)
        {
            int area = 0;
            int i = 0;
            int j = height.Length - 1;
            while (i < j)
            {
                if (Math.Min(height[i], height[j]) * Math.Abs(i - j) > area)
                    area = Math.Min(height[i], height[j]) * Math.Abs(i - j);
                if (height[i] < height[j])
                    i++;
                else
                    j--;

            }
            return area;

        }
    }
}
