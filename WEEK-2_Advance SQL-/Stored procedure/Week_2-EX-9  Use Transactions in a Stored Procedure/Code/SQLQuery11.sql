CREATE DATABASE EmployeeDB;
GO
USE EmployeeDB;
GO

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Departments(DepartmentID),
    Salary DECIMAL(10,2),
    JoinDate DATE
);

CREATE TABLE SalaryUpdateLog (
    LogID INT PRIMARY KEY IDENTITY(1,1),
    EmployeeID INT,
    OldSalary DECIMAL(10,2),
    NewSalary DECIMAL(10,2),
    Status VARCHAR(50),
    ErrorMessage VARCHAR(255),
    UpdateTime DATETIME DEFAULT GETDATE()
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
('Sai', 'Prasanna', 1, 5000.00, '2020-01-15'),
('Kaki', 'Pranathi', 2, 6000.00, '2019-03-22'),
('Sutha', 'Sri', 3, 7000.00, '2018-07-30'),
('Aarthi', 'Arul', 4, 5500.00, '2021-11-05');

GO
CREATE PROCEDURE sp_UpdateSalaryWithTransaction
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    DECLARE @OldSalary DECIMAL(10,2);
    DECLARE @ErrorMessage VARCHAR(255);

    BEGIN TRANSACTION;
    BEGIN TRY
        SELECT @OldSalary = Salary FROM Employees WHERE EmployeeID = @EmployeeID;

        UPDATE Employees
        SET Salary = @NewSalary
        WHERE EmployeeID = @EmployeeID;

        INSERT INTO SalaryUpdateLog (EmployeeID, OldSalary, NewSalary, Status, ErrorMessage)
        VALUES (@EmployeeID, @OldSalary, @NewSalary, 'Success', NULL);

        COMMIT;
        SELECT * FROM Employees WHERE EmployeeID = @EmployeeID;
    END TRY
    BEGIN CATCH
        SET @ErrorMessage = ERROR_MESSAGE();

        INSERT INTO SalaryUpdateLog (EmployeeID, OldSalary, NewSalary, Status, ErrorMessage)
        VALUES (@EmployeeID, @OldSalary, @NewSalary, 'Failed', @ErrorMessage);

        ROLLBACK;

        SELECT @ErrorMessage AS ErrorMessage;
    END CATCH
END;
GO

EXEC sp_UpdateSalaryWithTransaction 2, 6300.00;

SELECT * FROM SalaryUpdateLog;
