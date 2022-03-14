CREATE PROCEDURE updateParcel @id nvarchar(255), @description nvarchar(255), @sendernumber nvarchar(255), @receivernumber nvarchar(255),
@startlocation nvarchar(255), @currentLocation nvarchar(255), @endLocation nvarchar(255), 
@senderid nvarchar(255)
AS
Update Parcel set description=@description, sendernumber=@sendernumber, receivernumber=@receivernumber, startlocation=@startlocation, currentlocation=@currentLocation, endlocation=@endLocation, senderid=@senderid
 where id = @id and IsDeleted = 0
GO