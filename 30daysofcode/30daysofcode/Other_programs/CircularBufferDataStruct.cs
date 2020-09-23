using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
    /*
     * You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
     * */
    class CircularBufferDataStruct
    {
        public static void Main(string[] arge)
        {
            CircularBuffer C;
            C = new CircularBuffer(10);

            C.record(10);
            C.record(9);
            C.record(8);
            C.record(7);
            C.record(6);
            C.record(5);
            C.record(4);
            C.record(3);
            C.record(2);
            C.record(1);
            //C.record(10);
            //C.record(11);

            Console.WriteLine(C.getLast(2));
            Console.WriteLine(C.getLast(5));
            Console.WriteLine(C.getLast(9));
            Console.WriteLine(C.getLast(2));
            C.record(20);
            C.record(19);
            C.record(18);
            C.record(17);
            C.record(16);
            C.record(15);
            C.record(14);
            C.record(13);
            C.record(12);
            C.record(11);

            Console.WriteLine(C.getLast(2));
            Console.WriteLine(C.getLast(5));
            Console.WriteLine(C.getLast(9));
            Console.WriteLine(C.getLast(2));
        }
    }

    public class CircularBuffer
    {
        public int maxSize;
        public int[] CBuffer;
        public int CurrIndex;

        public CircularBuffer(int size)
        {
            maxSize = size;
            CBuffer = new int[size];
            CurrIndex = 0;
        }

        public void record(int order_no)
        {
            CBuffer[CurrIndex] = order_no;
            CurrIndex = (CurrIndex + 1) % maxSize;
        }

        public int getLast(int index)
        {
            return CBuffer[(CurrIndex-index+maxSize)%maxSize];
        }
    }
}
