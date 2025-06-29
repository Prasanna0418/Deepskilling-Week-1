CREATE DATABASE SalesDB;
GO
USE SalesDB
GO
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID),
    OrderDate DATE
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT FOREIGN KEY REFERENCES Orders(OrderID),
    ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
    Quantity INT
);
GO
INSERT INTO Customers VALUES 
(1, 'Prasanna', 'North'),
(2, 'Pranathi', 'South'),
(3, 'Sutha', 'North'),
(4, 'Aarthi', 'West');

INSERT INTO Products VALUES 
(1, 'Laptop', 'Electronics'),
(2, 'Desk', 'Furniture'),
(3, 'Phone', 'Electronics'),
(4, 'Chair', 'Furniture');

INSERT INTO Orders VALUES 
(100, 1, '2024-06-01'),
(101, 2, '2024-06-02'),
(102, 3, '2024-06-03'),
(103, 4, '2024-06-04');

INSERT INTO OrderDetails VALUES 
(1, 100, 1, 2), 
(2, 100, 2, 1), 
(3, 101, 3, 3), 
(4, 102, 1, 1), 
(5, 103, 4, 2); 
GO
SELECT 
    ISNULL(c.Region, 'All Regions') AS Region,
    ISNULL(p.Category, 'All Categories') AS Category,
    SUM(od.Quantity) AS TotalQuantity
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY GROUPING SETS (
    (c.Region),
    (p.Category),
    (c.Region, p.Category),
    ()
);
GO
SELECT 
    ISNULL(c.Region, 'All Regions') AS Region,
    ISNULL(p.Category, 'All Categories') AS Category,
    SUM(od.Quantity) AS TotalQuantity
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY ROLLUP (c.Region, p.Category);
GO
SELECT 
    ISNULL(c.Region, 'All Regions') AS Region,
    ISNULL(p.Category, 'All Categories') AS Category,
    SUM(od.Quantity) AS TotalQuantity
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY CUBE (c.Region, p.Category);
GO
