using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace _30daysofcode.Other_programs
{
    //return true or false if tree s is a subtree of tree t
    public class treeNode
    {
        public int val;
        public treeNode left;
        public treeNode right;

        public treeNode(int value)
        {
            val = value;
            left = null;
            right = null;
        }
    }


    class univaltree
    {
        public static int count = 0;
        public static void Main(String[] args)
        {
            treeNode t, s;
            t = new treeNode(2);
            t.left = new treeNode(3);
            t.right = new treeNode(2);
            t.left.left = new treeNode(3);
            t.left.right = new treeNode(5);
            t.right.left = new treeNode(7);
            t.right.right = new treeNode(9);
            t.left.left.right = new treeNode(5);

            s = new treeNode(3);
            s.left = new treeNode(3);
            s.right = new treeNode(5);
            s.left.right = new treeNode(5);
            //s.left.right.left = new treeNode(5);

            //Console.WriteLine(isSubtree(t, s));

            /*
             * A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

            Given the root to a binary tree, count the number of unival subtrees.

            For example, the following tree has 5 unival subtrees:

               0
              / \
             1   0
                / \
               1   0
              / \
             1   1

             */
            treeNode ut;
            ut = new treeNode(0);
            ut.left = new treeNode(1);
            ut.right = new treeNode(0);
            ut.right.left = new treeNode(1);
            ut.right.right = new treeNode(0);
            ut.right.left.left = new treeNode(1);
            ut.right.left.right = new treeNode(1);
            Console.WriteLine(isUnivalTree(ut));
            Console.WriteLine(univalCount(ut));
        }


        public static bool univalTree(treeNode t, int val)
        {
            if (t == null)
                return true;
            else
                return t.val == val && univalTree(t.left, val) && univalTree(t.right, val);

        }

        public static bool isUnivalTree(treeNode t)
        {
            if (t != null)
                return univalTree(t, t.val);
            else
                return true;
        }

        public static int univalCount(treeNode t)
        {
            if (isUnivalTree(t))
                ++count;
            if(t.left !=null)
                univalCount(t.left);
            if (t.right != null) 
                univalCount(t.right);

            return count;


        }
    }
}
