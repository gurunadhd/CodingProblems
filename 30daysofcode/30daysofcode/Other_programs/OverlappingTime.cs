using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode.Other_programs
{
    /*
     * Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

       For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
     */
    public class timeslot
    {
        public int start;
        public int end;

        public timeslot(int s, int e)
        {
            start = s;
            end = e;
        }

        public static int minimumRooms(timeslot[] t)
        {
            int rooms = 0;
            if (t.Length >= 1)
                rooms = 1;
            for(int i = 0; i< t.Length; i++)
            {
                bool newRoom = false;
                for(int j = 0; j < i; j++)
                {
                    if((t[j].start <= t[i].start && t[i].start <= t[j].end) || (t[j].start <= t[i].end && t[i].start <= t[j].end) || t[i].start== t[j].end || t[i].end == t[j].start)
                    {
                        newRoom = true;
                    }
                    else
                    {
                        newRoom = false;
                    }
                }
                if (newRoom)
                    rooms++;
            }
            return rooms;
        }
    }

    class OverlappingTime
    {
        
        public static void Main(string[] args)
        {
            //timeslot[] t = new timeslot[] { new timeslot(30, 75), new timeslot(0, 50), new timeslot(60, 150) };
            timeslot[] t = new timeslot[] { new timeslot(80, 90), new timeslot(20, 40), new timeslot(10, 19), new timeslot(80, 90) };

            Console.WriteLine(timeslot.minimumRooms(t));
        }

        


    }
}
