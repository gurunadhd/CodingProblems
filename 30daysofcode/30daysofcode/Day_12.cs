using System;
using System.Collections.Generic;
using System.Text;

namespace _30daysofcode
{
    class Person
    {
        protected string firstName;
        protected string lastName;
        protected int id;

        public Person() { }
        public Person(string firstName, string lastName, int identification)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = identification;
        }
        public void printPerson()
        {
            Console.WriteLine("Name: " + lastName + ", " + firstName + "\nID: " + id);
        }
    }

    class Student : Person
    {
        private int[] testScores;

        /*	
        *   Class Constructor
        *   
        *   Parameters: 
        *   firstName - A string denoting the Person's first name.
        *   lastName - A string denoting the Person's last name.
        *   id - An integer denoting the Person's ID number.
        *   scores - An array of integers denoting the Person's test scores.
        */
        // Write your constructor here

        public Student(string firstName, string lastName, int id, int [] testScores)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = id;
            this.testScores = testScores;
        }

        /*	
        *   Method Name: Calculate
        *   Return: A character denoting the grade.
        */
        // Write your method here

        public char Calculate()
        {
            char grade;
            int sum = 0, avg = 0;
            foreach (int i in testScores)
            {
                sum = sum + i;
            }
            avg = sum / testScores.Length;

            if (90<= avg && avg <= 100)
            {
                grade = 'O';
            }
            else if (80 <= avg && avg <= 90)
            {
                grade = 'E';
            }
            else if (70 <= avg && avg <= 80)
            {
                grade = 'A';
            }
            else if (55 <= avg && avg <= 70)
            {
                grade = 'P';
            }
            else if (40 <= avg && avg <= 55)
            {
                grade = 'D';
            }
            else if ( avg < 40)
            {
                grade = 'T';
            }
            else 
            {
                grade = 'X';
            }

            return grade;
        }
    }
    class Day_12
    {
        static void Main()
        {
            string[] inputs = Console.ReadLine().Split();
            string firstName = inputs[0];
            string lastName = inputs[1];
            int id = Convert.ToInt32(inputs[2]);
            int numScores = Convert.ToInt32(Console.ReadLine());
            inputs = Console.ReadLine().Split();
            int[] scores = new int[numScores];
            for (int i = 0; i < numScores; i++)
            {
                scores[i] = Convert.ToInt32(inputs[i]);
            }

            Student s = new Student(firstName, lastName, id, scores);
            s.printPerson();
            Console.WriteLine("Grade: " + s.Calculate() + "\n");
        }
    }
}
