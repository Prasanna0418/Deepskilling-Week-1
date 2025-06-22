using System;

namespace FinancialForecasting
{    class Forecast
    {
        public static double CalculateFutureValue(double presentValue, double rate, int years)
        {
            if (years == 0)
                return presentValue;
            else
                return (1 + rate) * CalculateFutureValue(presentValue, rate, years - 1);
        }
    }

    public class financialforecasting
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Financial Forecasting Tool ===");

            Console.Write("Enter Present Value: ");
            double presentValue = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter Annual Growth Rate (e.g., 0.05 for 5%): ");
            double rate = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter Number of Years to Forecast: ");
            int years = Convert.ToInt32(Console.ReadLine());

            double futureValue = Forecast.CalculateFutureValue(presentValue, rate, years);

            Console.WriteLine($"\nFuture Value after {years} years: {futureValue:C2}");

            Console.WriteLine("\n--- Analysis ---");
            Console.WriteLine("Time Complexity: O(n) due to recursive depth");
            Console.WriteLine("Optimization Tip: For large `n`, use memoization or convert to iterative to avoid stack overflow.");
        }
    }
}
