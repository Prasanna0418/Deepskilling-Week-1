using System;

    public class Logger
    {
        private static Logger _instance;

        private Logger()
        {
            Console.WriteLine("The Logger instance is created.");
        }

        public static Logger GetInstance()
        {
            if (_instance == null)
            {
                _instance = new Logger();
            }
            return _instance;
        }
        public void WriteLog(string executed , string user)
        {
            Console.WriteLine($"Log: User'{user}' executed'{executed}'at {DateTime.Now}: ");
        }
    }

 public class testSingletonpattern
    {
        public void testrun()
        {
            Logger logger1 = Logger.GetInstance();
        logger1.WriteLog("Login", "Aarthi");
            Logger logger2 = Logger.GetInstance();
        logger2.WriteLog("Account Creation", "Lakshmi");
            
            
           if (object.ReferenceEquals(logger1, logger2))
        {
            Console.WriteLine("Test Passed: Singleton pattern is followed.");
        }
        else
        {
            Console.WriteLine(" Test Failed: Different instances.");
        }
    }
}

public class SingletonPattern
{
    public static void Main(string[] args)
    {
        testSingletonpattern test = new testSingletonpattern();
        test.testrun();
    }
}
