﻿CREATE TABLE [dbo].[Patient]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [Name] NVARCHAR(256) NOT NULL,
    [FirstVisitedOn] DATETIMEOFFSET(7) NOT NULL DEFAULT SYSDATETIME()
)
