Create table Parcel(
id varchar(255) NOT NULL PRIMARY KEY,
description varchar(255) NOT NULL,
sendernumber varchar(255) NOT NULL,
receivernumber varchar(255) NOT NULL,
startlocation varchar(255) NOT NULL,
currentlocation varchar(255) NOT NULL,
endlocation varchar(255) NOT NULL,
senderid varchar(255) NOT NULL,
IsDeleted varchar(255) DEFAULT 0 NOT NULL,
IsSent varchar(255) DEFAULT 0 NOT NULL,
IsDelivered varchar(255) DEFAULT 0 NOT NULL,
IsUpdated varchar(255) DEFAULT 0 NOT NULL,
FOREIGN KEY (senderid) REFERENCES Users(id))
