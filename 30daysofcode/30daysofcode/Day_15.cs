﻿using System;
class Node
{
    public int data;
    public Node next;
    public Node(int d)
    {
        data = d;
        next = null;
    }

}
class Day_15
{

    public static Node insert(Node head, int data)
    {
        //Complete this method

        if (head == null)
        {
            head = new Node(data);
        }
        else
        {
            Node curr = head;

            while(curr.next != null)
            {
                curr = curr.next;
            }
            curr.next = new Node(data);
        }

        return head;
    }

    public static void display(Node head)
    {
        Node start = head;
        while (start != null)
        {
            Console.Write(start.data + " ");
            start = start.next;
        }
    }
    static void Main(String[] args)
    {

        Node head = null;
        int T = Int32.Parse(Console.ReadLine());
        while (T-- > 0)
        {
            int data = Int32.Parse(Console.ReadLine());
            head = insert(head, data);
        }
        display(head);
    }
}