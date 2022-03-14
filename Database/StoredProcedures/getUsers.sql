ALTER PROCEDURE getUsers 
AS
Select * from Users where IsDeleted = 0
GO