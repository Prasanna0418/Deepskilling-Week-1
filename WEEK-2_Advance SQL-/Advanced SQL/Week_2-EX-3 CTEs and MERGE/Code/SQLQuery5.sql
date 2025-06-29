
CREATE DATABASE InventoryDB;
GO

WITH CalendarCTE AS (
    SELECT CAST('2025-01-01' AS DATE) AS CalendarDate
    UNION ALL
    SELECT DATEADD(DAY, 1, CalendarDate)
    FROM CalendarCTE
    WHERE CalendarDate < '2025-01-31'
)

SELECT * INTO Calendar FROM CalendarCTE;
GO

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Price DECIMAL(10,2)
);

INSERT INTO Products VALUES 
(1, 'Laptop', 800.00),
(2, 'Phone', 500.00),
(3, 'Tablet', 300.00);
GO
CREATE TABLE StagingProducts (
    ProductID INT,
    ProductName VARCHAR(100),
    Price DECIMAL(10,2)
);

INSERT INTO StagingProducts VALUES
(1, 'Laptop', 850.00),   
(2, 'Phone', 520.00),    
(4, 'Monitor', 200.00); 
GO

MERGE INTO Products AS Target
USING StagingProducts AS Source
ON Target.ProductID = Source.ProductID
WHEN MATCHED THEN
    UPDATE SET 
        Target.ProductName = Source.ProductName,
        Target.Price = Source.Price
WHEN NOT MATCHED THEN
    INSERT (ProductID, ProductName, Price)
    VALUES (Source.ProductID, Source.ProductName, Source.Price);
GO
SELECT * FROM Products;

SELECT * FROM Calendar;
