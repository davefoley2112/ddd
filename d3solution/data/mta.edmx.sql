
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 02/22/2013 16:16:24
-- Generated from EDMX file: C:\github\d3\d3solution\data\mta.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [MTA];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[ServiceStatus]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ServiceStatus];
GO
IF OBJECT_ID(N'[dbo].[DailyPlazaTraffic]', 'U') IS NOT NULL
    DROP TABLE [dbo].[DailyPlazaTraffic];
GO
IF OBJECT_ID(N'[dbo].[BusBreakdowns]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BusBreakdowns];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'ServiceStatus'
CREATE TABLE [dbo].[ServiceStatus] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Status] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Url] nvarchar(max)  NULL,
    [Text] nvarchar(max)  NULL,
    [PlannedWorkHeadline] nvarchar(max)  NULL,
    [Time] nvarchar(max)  NULL,
    [Date] nvarchar(max)  NULL
);
GO

-- Creating table 'DailyPlazaTraffic'
CREATE TABLE [dbo].[DailyPlazaTraffic] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Count] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'BusBreakdowns'
CREATE TABLE [dbo].[BusBreakdowns] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [CollisionWithInjury] nvarchar(max)  NOT NULL,
    [DistanceBetweenFailures] nvarchar(max)  NOT NULL,
    [CustomerAccidentRate] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Stations'
CREATE TABLE [dbo].[Stations] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'TurnstileTraffics'
CREATE TABLE [dbo].[TurnstileTraffics] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Count] nvarchar(max)  NOT NULL,
    [Time] nvarchar(max)  NOT NULL,
    [StationId] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'ServiceStatus'
ALTER TABLE [dbo].[ServiceStatus]
ADD CONSTRAINT [PK_ServiceStatus]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'DailyPlazaTraffic'
ALTER TABLE [dbo].[DailyPlazaTraffic]
ADD CONSTRAINT [PK_DailyPlazaTraffic]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'BusBreakdowns'
ALTER TABLE [dbo].[BusBreakdowns]
ADD CONSTRAINT [PK_BusBreakdowns]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Stations'
ALTER TABLE [dbo].[Stations]
ADD CONSTRAINT [PK_Stations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TurnstileTraffics'
ALTER TABLE [dbo].[TurnstileTraffics]
ADD CONSTRAINT [PK_TurnstileTraffics]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [StationId] in table 'TurnstileTraffics'
ALTER TABLE [dbo].[TurnstileTraffics]
ADD CONSTRAINT [FK_StationTurnstileTraffic]
    FOREIGN KEY ([StationId])
    REFERENCES [dbo].[Stations]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_StationTurnstileTraffic'
CREATE INDEX [IX_FK_StationTurnstileTraffic]
ON [dbo].[TurnstileTraffics]
    ([StationId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------