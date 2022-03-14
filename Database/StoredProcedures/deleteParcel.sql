Create procedure deleteParcel @id varchar(255)
AS
Update Parcel set IsDeleted = 1 where id =@id and IsDeleted =0
GO