CREATE PROCEDURE getParcels 
AS
Select * from Parcel where IsDeleted = 0
GO