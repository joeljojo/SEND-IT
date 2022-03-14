CREATE PROCEDURE createUser @id nvarchar(255), @username nvarchar(255), @fullname nvarchar(255), @phonenumber nvarchar(255),
@email nvarchar(255), @password nvarchar(255)
AS
Insert into Users(id, username, fullname, phonenumber,email, password)
values(@id, @username, @fullname, @phonenumber, @email, @password)
GO