CREATE DATABASE SalesDB;
GO
USE SalesDB;
GO

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100)
);

CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
    SaleDate DATE,
    Quantity INT
);

INSERT INTO Products VALUES
(1, 'Laptop'),
(2, 'Phone'),
(3, 'Tablet');

INSERT INTO Sales VALUES
(101, 1, '2025-01-10', 5),
(102, 1, '2025-02-12', 3),
(103, 2, '2025-01-15', 2),
(104, 2, '2025-03-20', 6),
(105, 3, '2025-02-18', 4),
(106, 3, '2025-03-25', 1);

SELECT ProductName, [Jan], [Feb], [Mar]
FROM (
    SELECT 
        p.ProductName,
        FORMAT(s.SaleDate, 'MMM') AS SaleMonth,
        s.Quantity
    FROM Sales s
    JOIN Products p ON s.ProductID = p.ProductID
) AS SourceTable
PIVOT (
    SUM(Quantity) FOR SaleMonth IN ([Jan], [Feb], [Mar])
) AS PivotTable;

SELECT ProductName, SaleMonth, Quantity
FROM (
    SELECT ProductName, [Jan], [Feb], [Mar]
    FROM (
        SELECT 
            p.ProductName,
            FORMAT(s.SaleDate, 'MMM') AS SaleMonth,
            s.Quantity
        FROM Sales s
        JOIN Products p ON s.ProductID = p.ProductID
    ) AS SourceTable
    PIVOT (
        SUM(Quantity) FOR SaleMonth IN ([Jan], [Feb], [Mar])
    ) AS Pivoted
) AS PTable
UNPIVOT (
    Quantity FOR SaleMonth IN ([Jan], [Feb], [Mar])
) AS Unpivoted;
