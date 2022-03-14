CREATE PROCEDURE getAparcel @id nvarchar(255) 
AS
Select * from Parcel where id =@id and IsDeleted =0
GO