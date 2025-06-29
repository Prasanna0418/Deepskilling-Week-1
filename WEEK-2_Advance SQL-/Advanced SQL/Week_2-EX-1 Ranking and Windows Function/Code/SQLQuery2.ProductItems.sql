create database PrasannaDB;
use PrasannaDB
Go

CREATE TABLE ProductItem (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
GO

INSERT INTO ProductItems (ProductID, ProductName, Category, Price)
VALUES
(1, 'Laptop A', 'Electronics', 1200.00),
(2, 'Macbook', 'Electronics', 1000.00),
(3, 'IPhone', 'Electronics', 800.00),
(4, 'Redmi', 'Electronics', 800.00),
(5, 'TV', 'Electronics', 1500.00),
(6, 'Chair', 'Furniture', 300.00),
(7, 'Table', 'Furniture', 450.00),
(8, 'Sofa', 'Furniture', 700.00),
(9, 'Sofa', 'Furniture', 700.00),
(10, 'Bed', 'Furniture', 800.00)

SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Products;
GO

WITH RowNumberRanks AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
)
SELECT * 
FROM RowNumberRanks
WHERE RowNum <= 3;
GO

WITH RankRanks AS (
    SELECT *,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
    FROM Products
)
SELECT * 
FROM RankRanks
WHERE RankNum <= 3;
GO

WITH DenseRankRanks AS (
    SELECT *,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
)
SELECT * 
FROM DenseRankRanks
WHERE DenseRankNum <= 3;
GO
