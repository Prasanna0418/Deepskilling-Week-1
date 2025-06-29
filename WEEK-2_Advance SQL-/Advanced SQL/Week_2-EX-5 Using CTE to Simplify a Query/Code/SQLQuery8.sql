CREATE DATABASE CustomerOrdersDB;
GO
USE CustomerOrdersDB;
GO

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100)  
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID),
    OrderDate DATE
);

INSERT INTO Customers (CustomerID, CustomerName) VALUES 
(1, 'Alice'), 
(2, 'Bob'), 
(3, 'Charlie'), 
(4, 'Diana');

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES 
(101, 1, '2025-01-01'),
(102, 1, '2025-01-05'),
(103, 1, '2025-01-10'),
(104, 1, '2025-01-15'),  

(105, 2, '2025-01-02'),
(106, 2, '2025-01-06'), 

(107, 3, '2025-01-03'),
(108, 3, '2025-01-07'),
(109, 3, '2025-01-11'),
(110, 3, '2025-01-20'), 

(111, 4, '2025-01-04');  
GO
WITH CustomerOrderCounts AS (
    SELECT
        CustomerID,
        COUNT(OrderID) AS OrderCount
    FROM Orders
    GROUP BY CustomerID
)
SELECT
    c.CustomerID,
    c.CustomerName,
    coc.OrderCount
FROM CustomerOrderCounts coc
JOIN Customers c ON c.CustomerID = coc.CustomerID
WHERE coc.OrderCount > 3;
