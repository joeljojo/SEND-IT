CREATE PROCEDURE getAUser @id nvarchar(255) 
AS
Select * from Users where id =@id and IsDeleted =0
GO