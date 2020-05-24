using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
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
	class Day_24
	{

		public static Node RemoveDuplicates(Node head)
		{
			//Write your code here
			Node current_head = head;
			Node current = head;

			while (current.next != null)
			{
				if (current.data != current.next.data)
				{
					current = current.next;
				}
				else
				{
					current.data = current.next.data;
					current.next = current.next.next;
					
				}
			}

			return current_head;
		}

		public static Node insert(Node head, int data)
		{
			Node p = new Node(data);


			if (head == null)
				head = p;
			else if (head.next == null)
				head.next = p;
			else
			{
				Node start = head;
				while (start.next != null)
					start = start.next;
				start.next = p;

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
			head = RemoveDuplicates(head);
			display(head);
		}
	}

}
