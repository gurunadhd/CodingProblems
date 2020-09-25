using System;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    /*
     * Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.
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

        public static int findIntersectNode(LinkedList list1, LinkedList list2)
        {
            Node a = list1.head;
            

            while(a!= null)
            {
                Node b = list2.head;
                while (b!= null)
                {
                    if (a.val == b.val)
                        return a.val;
                    else
                        b = b.next;

                }
                a = a.next;
            }

            return -1;
        }
    }

    class IntersectLinkedLists
    {
        public static void Main(string[] args)
        {
            LinkedList list1 = new LinkedList();
            list1.head = new LinkedList.Node(3);
            list1.head.next = new LinkedList.Node(0);
            list1.head.next.next = new LinkedList.Node(9);
            list1.head.next.next.next = new LinkedList.Node(15);
            list1.head.next.next.next.next = new LinkedList.Node(30);

            LinkedList list2 = new LinkedList();
            list2.head = new LinkedList.Node(10);
            list2.head.next = new LinkedList.Node(15);
            list2.head.next.next = new LinkedList.Node(30);

            Console.WriteLine(LinkedList.findIntersectNode(list1, list2));
        }
        
    }
}
