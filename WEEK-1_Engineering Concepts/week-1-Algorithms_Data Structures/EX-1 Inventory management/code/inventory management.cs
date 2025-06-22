using System;
using System.Collections.Generic;

    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }

        public Product(int id, string name, int quantity, double price)
        {
            ProductId = id;
            ProductName = name;
            Quantity = quantity;
            Price = price;
        }

        public override string ToString()
        {
            return $"ID: {ProductId}, Name: {ProductName}, Qty: {Quantity}, Price: {Price:C2}";
        }
    }

    public class Inventory
    {
               private Dictionary<int, Product> products = new Dictionary<int, Product>();

    
        public void AddProduct(Product product)
        {
            if (products.ContainsKey(product.ProductId))
                Console.WriteLine(" Product already exists!");
            else
            {
                products[product.ProductId] = product;
                Console.WriteLine(" Product added.");
            }
        }

    
        public void UpdateProduct(int id, int quantity, double price)
        {
            if (products.ContainsKey(id))
            {
                products[id].Quantity = quantity;
                products[id].Price = price;
                Console.WriteLine(" Product updated.");
            }
            else
                Console.WriteLine(" Product not found.");
        }

   
        public void DeleteProduct(int id)
        {
            if (products.Remove(id))
                Console.WriteLine(" Product deleted.");
            else
                Console.WriteLine(" Product not found.");
        }

            public void DisplayInventory()
        {
            Console.WriteLine("\n📦 Current Inventory:");
            foreach (var item in products.Values)
                Console.WriteLine(item);
        }
    }

    public class Inventorymanagement
    {
        static void Main(string[] args)
        {
            Inventory inventory = new Inventory();

            Console.WriteLine("=== Inventory Management System ===");

            inventory.AddProduct(new Product(101, "Laptop", 10, 59999.99));
            inventory.AddProduct(new Product(102, "Mouse", 50, 299.50));
            inventory.AddProduct(new Product(103, "Keyboard", 25, 799.75));
            inventory.UpdateProduct(102, 60, 279.00);
            inventory.DeleteProduct(103);
            inventory.DisplayInventory();
            Console.WriteLine("\n=== Time Complexity Analysis ===");
            Console.WriteLine("Add:    O(1) average (using Dictionary)");
            Console.WriteLine("Update: O(1) average");
            Console.WriteLine("Delete: O(1) average");
            Console.WriteLine("Note: Worst-case for Dictionary is O(n) due to hash collisions.");
        }
    }

