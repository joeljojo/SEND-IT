CREATE PROCEDURE createParcel @id nvarchar(255), @description nvarchar(255), @sendernumber nvarchar(255), @receivernumber nvarchar(255),
@startlocation nvarchar(255), @currentLocation nvarchar(255), @endLocation nvarchar(255), 
@senderid nvarchar(255)
AS
Insert into Parcel(id, description, sendernumber, receivernumber, startlocation, currentlocation, endlocation, senderid)
values(@id, @description, @sendernumber, @receivernumber, @startlocation, @currentLocation, @endLocation, @senderid)
GO