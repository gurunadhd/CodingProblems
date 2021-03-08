using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodingProblems.DailyCodingProblem
{
    /*
     * In Ancient Greece, it was common to write text with the first line going left to right, the second line going right to left, and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

For example, given the following tree:

       1
    /     \
  2         3
 / \       / \
4   5     6   7
You should return [1, 3, 2, 4, 5, 6, 7].
     */
    public class Node
    {
        public int data;
        public Node left;
        public Node right;

        public Node(int i)
        {
            data = i;
            left = null;
            right = null;
        }
        
    }
    class boustrophedon_order_tree
    {
        public static void Main(string[] args)
        {
            Node m = new Node(1);
            m.left = new Node(2);
            m.right = new Node(3);
            m.left.left = new Node(4);
            m.left.right = new Node(5);
            m.right.left = new Node(6);
            m.right.right = new Node(7);
            m.left.left.left = new Node(8);
            m.right.right.left = new Node(9);
            m.left.left.left.right = new Node(10);
            m.right.right.left.right = new Node(11);

            print_boustrophedon_order_tree(m);
        }
        

        public static void print_boustrophedon_order_tree(Node m)
        {
            Dictionary<int, List<int>> d = new Dictionary<int, List<int>>();
            TreetoDict(m, d, 0);

            foreach(var k in d)
            {
                if (k.Key % 2 == 0)
                    foreach (int i in k.Value)
                    {
                        Console.WriteLine(i);
                    }
                else
                    for(int i = k.Value.Count-1; i>=0;i--)
                    {
                        Console.WriteLine(k.Value[i]);
                    }
            }
        }

        public static bool TreetoDict(Node m, Dictionary<int, List<int>> d, int index)
        {
            if (m.left == null && m.right == null)
            {
                if (d.ContainsKey(index))
                    d[index].Add(m.data);
                else
                    d.Add(index, new List<int> { m.data });
                return true;
            }
            else{
                if (d.ContainsKey(index))
                    d[index].Add(m.data);
                else
                    d.Add(index, new List<int> { m.data });
                if (m.left != null && m.right == null)
                    return TreetoDict(m.left, d, index + 1);
                else if (m.left == null && m.right != null)
                    return TreetoDict(m.right, d, index + 1);
                else
                    return TreetoDict(m.left, d, index + 1) && TreetoDict(m.right, d, index + 1);

            }            
        }
    }

   
}
