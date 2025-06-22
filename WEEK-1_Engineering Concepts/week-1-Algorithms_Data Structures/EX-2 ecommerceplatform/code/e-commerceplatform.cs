using System;
using System.Linq;

    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(int id, string name, string category)
        {
            ProductId = id;
            ProductName = name;
            Category = category;
        }

        public override string ToString()
        {
            return $"ID: {ProductId}, Name: {ProductName}, Category: {Category}";
        }
    }

    public class SearchEngine
    {
  
        public static Product LinearSearch(Product[] products, string name)
        {
            foreach (var product in products)
            {
                if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
                    return product;
            }
            return null;
        }

      
        public static Product BinarySearch(Product[] sortedProducts, string name)
        {
            int left = 0;
            int right = sortedProducts.Length - 1;

            while (left <= right)
            {
                int mid = left + (right - left) / 2;
                int comparison = string.Compare(sortedProducts[mid].ProductName, name, StringComparison.OrdinalIgnoreCase);

                if (comparison == 0)
                    return sortedProducts[mid];
                else if (comparison < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            return null;
        }
    }


    public class ecommerceplatform
    {
        static void Main(string[] args)
        {
            // Product database (array)
            Product[] products = new Product[]
            {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shoes", "Fashion"),
                new Product(3, "Mobile", "Electronics"),
                new Product(4, "Watch", "Accessories"),
                new Product(5, "Backpack", "Travel")
            };

            Console.WriteLine("==== LINEAR SEARCH ====");
            var linearResult = SearchEngine.LinearSearch(products, "Watch");
            Console.WriteLine(linearResult != null ? linearResult.ToString() : "Product not found");

            Console.WriteLine("\n==== BINARY SEARCH ====");
            var sortedProducts = products.OrderBy(p => p.ProductName).ToArray(); // Sort alphabetically by name
            var binaryResult = SearchEngine.BinarySearch(sortedProducts, "Watch");
            Console.WriteLine(binaryResult != null ? binaryResult.ToString() : "Product not found");

            Console.WriteLine("\n==== TIME COMPLEXITY COMPARISON ====");
            Console.WriteLine("Linear Search → Time Complexity: O(n)");
            Console.WriteLine("Binary Search → Time Complexity: O(log n)");
            Console.WriteLine("Binary Search is more efficient for large sorted datasets.");
        }
    }
