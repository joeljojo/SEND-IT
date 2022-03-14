CREATE PROCEDURE updateUser @id nvarchar(255), @username nvarchar(255), @fullname nvarchar(255), @phonenumber nvarchar(255),
@email nvarchar(255), @password nvarchar(255)
AS
Update Users set username= @username, fullname= @fullname, phonenumber= @phonenumber, email= @email, 
password = @password where id =@id and IsDeleted = 0
GO