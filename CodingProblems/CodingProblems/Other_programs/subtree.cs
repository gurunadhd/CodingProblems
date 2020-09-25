using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace CodingProblems.Other_programs
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


    class subtree
    {
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

            Console.WriteLine(isSubtree(t, s));
        }

        public static bool identicaltree(treeNode t1, treeNode t2)
        {
            if (t1 == null && t2 == null)
                return true;
            else if (t1 == null || t2 == null)
                return false;
            else if (t1.val == t2.val)
                return identicaltree(t1.left, t2.left) && identicaltree(t1.right, t2.right);
            else
                return false;
        }

        public static bool isSubtree(treeNode t, treeNode s)
        {
            if (t == null && s == null)
                return true;
            else if (t == null || s == null)
                return false;
            else if (identicaltree(t, s))
                return true;
            else if (isSubtree(t.left, s) || isSubtree(t.right, s))
                return true;
            else
                return false;
            
        }
    }
}
