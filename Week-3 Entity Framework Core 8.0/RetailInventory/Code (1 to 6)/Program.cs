using Microsoft.EntityFrameworkCore;
using RetailInventory.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // 1. Show current products
        await DisplayProducts(context);

        // 2. Show options
        Console.WriteLine("\nChoose an action:");
        Console.WriteLine("1 - Update a Product");
        Console.WriteLine("2 - Delete a Product");
        Console.WriteLine("3 - Add a New Product");
        Console.Write("Enter your choice: ");
        var choice = Console.ReadLine();

        if (choice == "1")
        {
            // Update product
            Console.Write("\nEnter Product ID to update: ");
            if (int.TryParse(Console.ReadLine(), out int updateId))
            {
                var product = await context.Products.FindAsync(updateId);
                if (product != null)
                {
                    Console.Write($"Current Price = Rs {product.Price}. Enter new price: ");
                    if (decimal.TryParse(Console.ReadLine(), out decimal newPrice))
                    {
                        product.Price = newPrice;
                        await context.SaveChangesAsync();
                        Console.WriteLine($"Product '{product.Name}' updated to Rs {newPrice}");
                    }
                    else Console.WriteLine("Invalid price.");
                }
                else Console.WriteLine("Product not found.");
            }
        }
        else if (choice == "2")
        {
            // Delete product
            Console.Write("\nEnter Product ID to delete: ");
            if (int.TryParse(Console.ReadLine(), out int deleteId))
            {
                var product = await context.Products.FindAsync(deleteId);
                if (product != null)
                {
                    Console.Write($"Are you sure you want to delete '{product.Name}'? (y/n): ");
                    var confirm = Console.ReadLine();
                    if (confirm?.ToLower() == "y")
                    {
                        context.Products.Remove(product);
                        await context.SaveChangesAsync();
                        Console.WriteLine($"Product '{product.Name}' deleted.");
                    }
                    else Console.WriteLine("Cancelled.");
                }
                else Console.WriteLine("Product not found.");
            }
        }
        else if (choice == "3")
        {
            // Add new product
            Console.Write("\nEnter product name: ");
            string? name = Console.ReadLine();

            Console.Write("Enter product price: ");
            if (!decimal.TryParse(Console.ReadLine(), out decimal price))
            {
                Console.WriteLine("Invalid price.");
                return;
            }

            var categories = await context.Categories.ToListAsync();
            Console.WriteLine("\nAvailable Categories:");
            foreach (var c in categories)
            {
                Console.WriteLine($"{c.Id} - {c.Name}");
            }

            Console.Write("Enter Category ID: ");
            if (!int.TryParse(Console.ReadLine(), out int categoryId))
            {
                Console.WriteLine("Invalid category ID.");
                return;
            }

            var category = await context.Categories.FindAsync(categoryId);
            if (category == null)
            {
                Console.WriteLine("Category not found.");
                return;
            }

            var newProduct = new Product
            {
                Name = name ?? "Unnamed Product",
                Price = price,
                CategoryId = categoryId
            };

            await context.Products.AddAsync(newProduct);
            await context.SaveChangesAsync();

            Console.WriteLine($"Product '{newProduct.Name}' added under '{category.Name}'");
        }
        else
        {
            Console.WriteLine("Invalid option.");
        }

        // 4. Final display
        await DisplayProducts(context);
    }

    static async Task DisplayProducts(AppDbContext context)
    {
        Console.WriteLine("\nCurrent Product List:\n");

        var products = await context.Products.Include(p => p.Category).ToListAsync();
        foreach (var p in products)
        {
            Console.WriteLine($"{p.Id}. {p.Name} - Rs {p.Price} (Category: {p.Category?.Name ?? "None"})");
        }
    }
}
