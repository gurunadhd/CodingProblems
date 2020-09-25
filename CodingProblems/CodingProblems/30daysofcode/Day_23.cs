using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace CodingProblems._30daysofcode
{
    class Node
    {
        public Node left, right;
        public int data;
        public Node(int data)
        {
            this.data = data;
            left = right = null;
        }
    }
    class day_23
    {

        static void levelOrder(Node root)
        {
            //Write your code here

            Queue<Node> queue = new Queue<Node>();
            queue.Enqueue(root);

            while (queue.Count >=1)
            {
                Node current = queue.Dequeue();
                Console.Write(current.data + " ");
                if (current.left != null) queue.Enqueue(current.left);
                if (current.right != null) queue.Enqueue(current.right);
            }
        }

        static Node insert(Node root, int data)
        {
            if (root == null)
            {
                return new Node(data);
            }
            else
            {
                Node cur;
                if (data <= root.data)
                {
                    cur = insert(root.left, data);
                    root.left = cur;
                }
                else
                {
                    cur = insert(root.right, data);
                    root.right = cur;
                }
                return root;
            }
        }
        static void Main(String[] args)
        {
            Node root = null;
            int T = Int32.Parse(Console.ReadLine());
            while (T-- > 0)
            {
                int data = Int32.Parse(Console.ReadLine());
                root = insert(root, data);
            }
            levelOrder(root);

        }
    }
}
