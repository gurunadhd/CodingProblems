using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
    class Day_18
    {
        Stack<char> S;
        Queue<char> Q;

        public Day_18()
        {
            S = new Stack<char>();
            Q = new Queue<char>();
        }
        public void pushCharacter(char c)
        {
            S.Push(c);
        }
        public void enqueueCharacter(char c)
        {
            Q.Enqueue(c);
        }
        public char popCharacter()
        {
            return S.Pop();
        }
        public char dequeueCharacter()
        {
            return Q.Dequeue();
        }
        static void Main(String[] args)
        {
            // read the string s.
            string s = Console.ReadLine();

            // create the Solution class object p.
            Day_18 obj = new Day_18();

            // push/enqueue all the characters of string s to stack.
            foreach (char c in s)
            {
                obj.pushCharacter(c);
                obj.enqueueCharacter(c);
            }

            bool isPalindrome = true;

            // pop the top character from stack.
            // dequeue the first character from queue.
            // compare both the characters.
            for (int i = 0; i < s.Length / 2; i++)
            {
                if (obj.popCharacter() != obj.dequeueCharacter())
                {
                    isPalindrome = false;

                    break;
                }
            }

            // finally print whether string s is palindrome or not.
            if (isPalindrome)
            {
                Console.Write("The word, {0}, is a palindrome.", s);
            }
            else
            {
                Console.Write("The word, {0}, is not a palindrome.", s);
            }

        }
    }
}
