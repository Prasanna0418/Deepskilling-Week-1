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
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
('Sai', 'Prasanna', 1, 5000.00, '2020-01-15'),
('Kaki', 'Pranathi', 2, 6000.00, '2019-03-22'),
('Sutha', 'Sri', 3, 7000.00, '2018-07-30'),
('Aarthi', 'Arul', 4, 5500.00, '2021-11-05'),
('Kiran', 'Devi', 2, 5800.00, '2022-05-10');
GO
CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO
EXEC sp_GetEmployeeCountByDepartment 2;
