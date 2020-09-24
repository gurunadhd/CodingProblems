using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode.Other_programs
{
    /*
     * Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

steps
====
Get count of the nodes in the first list, let count be c1.
Get count of the nodes in the second list, let count be c2.
Get the difference of counts d = abs(c1 – c2)
Now traverse the bigger list from the first node till d nodes so that from here onwards both the lists have equal no of nodes.
Then we can traverse both the lists in parallel till we come across a common node. (Note that getting a common node is done by comparing the address of the nodes)
     */
    class LinkedList
    {
        public Node head;
        public class Node
        {
            public int val;
            public Node next;

            public Node(int v)
            {
                val = v;
                next = null;
            }
        }

        public static int getCount(LinkedList l)
        {
            Node a = l.head;
            int count = 0;
            while (a != null)
            {
                count++;
                a = a.next;
            }

            return count;
        }

        public static int getIntersect(LinkedList l1, LinkedList l2)
        {
            int c1 = getCount(l1);
            int c2 = getCount(l2);

            if (c1 > c2)
                return getIntersect_diff(c1 - c2, l1, l2);
            else
                return getIntersect_diff(c2 - c1, l2, l1);

        }

        public static int getIntersect_diff(int diff, LinkedList b, LinkedList s)
        {
            Node b1 = b.head;
            for(int i = 1; i <= diff; i++)
            {
                b1 = b1.next;
            }

            Node s1 = s.head;

            while(b1!=null && s1 != null)
            {
                if(b1.val == s1.val)
                    return b1.val;

                b1 = b1.next;
                s1 = s1.next;

            }

            return -1;
        }
    }
    class listIntersection
    {
        public static void Main(string[] args)
        {
            LinkedList l1 = new LinkedList();
            l1.head = new LinkedList.Node(2);
            l1.head.next = new LinkedList.Node(21);
            l1.head.next.next = new LinkedList.Node(22);
            l1.head.next.next.next = new LinkedList.Node(23);


            LinkedList l2 = new LinkedList();
            l2.head = new LinkedList.Node(12);
            l2.head.next = new LinkedList.Node(13);
            l2.head.next.next = new LinkedList.Node(21);
            l2.head.next.next.next = new LinkedList.Node(22);
            l2.head.next.next.next.next = new LinkedList.Node(23);

            Console.WriteLine(LinkedList.getIntersect(l1, l2));
        }
    }
}
