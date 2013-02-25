SET IDENTITY_INSERT [dbo].[BusBreakdowns] ON
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (1, N'3.2', N'3924', N'2.12')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (2, N'2.8', N'3914', N'1.3')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (3, N'4.05', N'3550', N'1.5')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (4, N'4.7', N'3625', N'0.79')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (5, N'2.0', N'3171', N'2.8')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (6, N'9.29', N'2699', N'1.28')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (7, N'9.29', N'3008', N'1.28')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (8, N'2.3', N'2815', N'1.74')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (9, N'4.65', N'3366', N'1.17')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (10, N'5.32', N'3667', N'0.82')
INSERT INTO [dbo].[BusBreakdowns] ([Id], [CollisionWithInjury], [DistanceBetweenFailures], [CustomerAccidentRate]) VALUES (11, N'4.1', N'4170', N'0.8')
SET IDENTITY_INSERT [dbo].[BusBreakdowns] OFF

SET IDENTITY_INSERT [dbo].[DailyPlazaTraffic] ON
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (1, N'Robert F. Kennedy Bridge Bronx Plaza', N'26774')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (2, N'Robert F. Kennedy Bridge Manhattan Plaza', N'18613')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (3, N'Bronx-Whitestone Bridge', N'31343')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (4, N'Henry Hudson Bridge', N'9864')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (5, N'Marine Parkway-Gil Hodges Memorial Bridge', N'3806')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (6, N'Cross Bay Veterans Memorial Bridge', N'4577')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (7, N'Queens Midtown Tunnel', N'13831')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (8, N'Brooklyn-Battery Tunnel', N'6900')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (9, N'Throgs Neck Bridge', N'25262')
INSERT INTO [dbo].[DailyPlazaTraffic] ([Id], [Name], [Count]) VALUES (10, N'Verrazano-Narrows Bridge', N'18275')
SET IDENTITY_INSERT [dbo].[DailyPlazaTraffic] OFF

SET IDENTITY_INSERT [dbo].[ServiceStatus] ON
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (1, N'PLANNED WORK', N'123', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (2, N'PLANNED WORK', N'456', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (3, N'PLANNED WORK', N'7', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (4, N'PLANNED WORK', N'ACE', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (5, N'PLANNED WORK', N'BDFM', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (6, N'GOOD SERVICE', N'G', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (7, N'PLANNED WORK', N'JZ', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (8, N'GOOD SERVICE', N'L', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (9, N'PLANNED WORK', N'NQR', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (10, N'GOOD SERVICE', N'S', NULL, NULL, NULL, NULL, NULL)
INSERT INTO [dbo].[ServiceStatus] ([Id], [Status], [Name], [Url], [Text], [PlannedWorkHeadline], [Time], [Date]) VALUES (11, N'GOOD SERVICE', N'SIR', NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[ServiceStatus] OFF

SET IDENTITY_INSERT [dbo].[Stations] ON
INSERT INTO [dbo].[Stations] ([Id], [Name]) VALUES (1, N'Times Square')
INSERT INTO [dbo].[Stations] ([Id], [Name]) VALUES (2, N'Grand Central')
SET IDENTITY_INSERT [dbo].[Stations] OFF

SET IDENTITY_INSERT [dbo].[TurnstileTraffics] ON
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (2, 36.333333333333336,  1328356800000, 1)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (4, 87.361111111111114,  1328371200000, 1)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (5, 22.842105263157894,  1328356800000, 2)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (6, 143.57894736842104,  1328371200000, 2)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (8, 216.22222222222223,  1328385600000, 1)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (10, 418.80555555555554, 1328400000000, 1)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (11, 351.11111111111109, 1328414400000, 1)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (12, 213.94444444444446, 1328428800000, 1)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (13, 329.94736842105266, 1328385600000, 2)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (14, 411.57894736842104, 1328400000000, 2)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (15, 255.42105263157896, 1328414400000, 2)
INSERT INTO [dbo].[TurnstileTraffics] ([Id], [Count], [Time], [StationTurnstileTraffic_TurnstileTraffic_Id]) VALUES (16, 89.578947368421055, 1328428800000, 2)
SET IDENTITY_INSERT [dbo].[TurnstileTraffics] OFF

SET IDENTITY_INSERT [dbo].[SubwayLines] ON
INSERT INTO [dbo].[SubwayLines] ([Id], [Name], [MeanWait]) VALUES (1, N'Line1', 50)
INSERT INTO [dbo].[SubwayLines] ([Id], [Name], [MeanWait]) VALUES (2, N'Line2', 60)
SET IDENTITY_INSERT [dbo].[SubwayLines] OFF

SET IDENTITY_INSERT [dbo].[SubwayLineWaits] ON
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (1, 1230786000000, 73.1, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (2, 1233464400000, 73.9, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (3, 1235883600000, 74.1, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (6, 1243828800000, 74.2, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (7, 1246420800000, 74.4, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (8, 1249099200000, 75.2, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (9, 1251777600000, 75.6, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (10, 1254369600000, 75.5, 1)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (11, 1230786000000, 71.8, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (12, 1233464400000, 71.9, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (13, 1235883600000, 72.3, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (14, 1238558400000, 72.8, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (15, 1241150400000, 72.9, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (16, 1243828800000, 72.2, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (17, 1246420800000, 73.2, 2)
INSERT INTO [dbo].[SubwayLineWaits] ([Id], [Time], [LatePercent], [SubwaySubwayWait_SubwayWait_Id]) VALUES (18, 1249099200000, 73.5, 2)
SET IDENTITY_INSERT [dbo].[SubwayLineWaits] OFF
