using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode.Other_programs
{
    /*
     * Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
     */
    class LinkedList
    {
        public Node head;

        public class Node
        {
            public int data;
            public Node next;
            public bool isTraversed;
            public Node(int d)
            {
                data = d;
                next = null;
                isTraversed = false;
            }
        }

        public static int findIntersect(LinkedList l1, LinkedList l2)
        {
            Node a = l1.head;
            Node b = l2.head;

            while (a != null)
            {
                a.isTraversed = true;
                a = a.next;
            }

            while (b != null)
            {
                if (b.isTraversed)
                    return b.data;
                b = b.next;
            }
            return -1;
        }

    }
    class IntersectLinkedLists1
    {
        public static void Main(string[] args)
        {
            LinkedList il = new LinkedList();
            il.head = new LinkedList.Node(3);
            il.head.next = new LinkedList.Node(4);
            il.head.next.next = new LinkedList.Node(5);

            LinkedList l1 = new LinkedList();
            l1.head = new LinkedList.Node(2);
            l1.head.next = il.head;

            LinkedList l2 = new LinkedList();
            l2.head = new LinkedList.Node(20);
            l2.head.next = new LinkedList.Node(4);
            l2.head.next.next = il.head;

            Console.WriteLine(LinkedList.findIntersect(l1, l2));
        }
    }
}
