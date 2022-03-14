Create procedure deleteUser @id varchar(255)
AS
Update Users set IsDeleted = 1 where id =@id
GO