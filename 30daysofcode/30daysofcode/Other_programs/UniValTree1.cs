using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode.Other_programs
{
    public class node
    {
        public int val;
        public node left;
        public node right;

        public node(int value)
        {
            val = value;
            left = null;
            right = null;
        }
    }
    public class uniValTreeCount
    {

        public int Count;
        public bool IsUniVal;

        public uniValTreeCount(int C, bool IsUni)
        {
         Count = C;
         IsUniVal = IsUni;
        }
    }
    class UniValTree1
    {
        public static uniValTreeCount UniValTree_count(node t)
        {
            if (t == null)
            {
                return new uniValTreeCount(0, true);
            }
            if(t.left==null && t.right == null)
            {
                return new uniValTreeCount(1, true);
            }

            uniValTreeCount left_count = UniValTree_count(t.left);
            uniValTreeCount right_count = UniValTree_count(t.right);

            if (left_count.IsUniVal && right_count.IsUniVal
    && (t.left == null || t.left.val == t.val) && (t.right == null || t.right.val == t.val))
            {
                /* if the node's left value(if present) and node's right value(if present) is equal to node value then the node is also a unival, 
                hence adding 1 and sending isUnival flag as true */
                return new uniValTreeCount(left_count.Count + right_count.Count + 1, true);
            }
            return new uniValTreeCount(left_count.Count + right_count.Count, false);
        }

        public static void Main(string[] args)
        {
            node t;
            t = new node(1);
            t.left = new node(1);
            t.right = new node(1);
            t.right.right = new node(1);

            uniValTreeCount m = UniValTree_count(t);
            Console.WriteLine(m.Count);
            Console.WriteLine(m.IsUniVal);
        }
    }
}
