USE [master]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyEventProcessingLogin##]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [##MS_PolicyEventProcessingLogin##] WITH PASSWORD=N'+HOfBBLJTaqxf2s2/0hD4/Pko21QX1MGU+5QdCZzBwk=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyEventProcessingLogin##] DISABLE
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyTsqlExecutionLogin##]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [##MS_PolicyTsqlExecutionLogin##] WITH PASSWORD=N'3Gy38h3c1WzSb192aDqxqAaGJe3Dw5FBW1uMyiYx6h4=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyTsqlExecutionLogin##] DISABLE
GO
/****** Object:  Login [ALMAGRO\Domain Users]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [ALMAGRO\Domain Users] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [ALMAGRO\e.Informatica]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [ALMAGRO\e.Informatica] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [alumno]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [alumno] WITH PASSWORD=N'qRqw84Fmr8waxc8u4YG1PFM2cFhr6/aJ/VYQvcS8TJ0=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
ALTER LOGIN [alumno] DISABLE
GO
/****** Object:  Login [BUILTIN\Usuarios]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [BUILTIN\Usuarios] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT AUTHORITY\SYSTEM]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [NT AUTHORITY\SYSTEM] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT Service\MSSQLSERVER]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [NT Service\MSSQLSERVER] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLSERVERAGENT]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [NT SERVICE\SQLSERVERAGENT] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLTELEMETRY]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [NT SERVICE\SQLTELEMETRY] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLWriter]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [NT SERVICE\SQLWriter] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\Winmgmt]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [NT SERVICE\Winmgmt] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [Pizzas]    Script Date: 8/5/2023 08:27:34 ******/
CREATE LOGIN [Pizzas] WITH PASSWORD=N'w3iK7Arn8uReKZyNe54u89FFsWapbR1PWgpcRwfvsbM=', DEFAULT_DATABASE=[DAI-Pizzas], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
ALTER LOGIN [Pizzas] DISABLE
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [securityadmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [serveradmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [setupadmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [processadmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [diskadmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [dbcreator] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [bulkadmin] ADD MEMBER [ALMAGRO\Domain Users]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [securityadmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [serveradmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [setupadmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [processadmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [diskadmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [dbcreator] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [bulkadmin] ADD MEMBER [alumno]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT Service\MSSQLSERVER]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\SQLSERVERAGENT]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\SQLWriter]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\Winmgmt]
GO
USE [DAI-Pizzas]
GO
/****** Object:  User [alumno]    Script Date: 8/5/2023 08:27:34 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [Pizzas]    Script Date: 8/5/2023 08:27:34 ******/
CREATE USER [Pizzas] FOR LOGIN [Pizzas] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 8/5/2023 08:27:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NULL,
	[LibreGluten] [bit] NULL,
	[Importe] [float] NULL,
	[Descripcion] [varchar](max) NULL,
 CONSTRAINT [PK_Pizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Pizzas] TO  SCHEMA OWNER 
GO
SET IDENTITY_INSERT [dbo].[Pizzas] ON 

INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (1, N'OtraPizzaActualizadax2', 1, 3, NULL)
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (2, N'Pizza Fugazzeta', 1, 1000, N'Pizza con queso Muzzarella, tiene rica cebolla y te deja un aliento como para hacerle el alisado del pelo a tu pareja.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (3, N'OtraPizzaActualizadax2', 1, 1000, NULL)
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (4, N'Pizza Margarita', 1, 1450, N'Salsa de tomate, mozzarella, albahaca, orégano y aceite de oliva. Viene con un mentoplus de regalo.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (5, N'OtraPizzaActualizadax2', 1, 1000, NULL)
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (6, N'Pizza Cuatro Quesos', 1, 1380, N'El queso fontina, originario del Valle de La garompiña; el queso gorgonzola, natural de Milán; el queso parmesano, originario de la ciudad de Parma; y el queso mozzarella del supermercado DIA.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (7, N'Pizza con Jamon', 0, 1210, N'Pizza con queso Muzzarella, se le agrega Jamon y te cobro el doble.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (8, N'Pizza con Rucula y Provolone', 1, 1380, N'Riquisima Pizza a la piedra, con queso provolone. Con el aliento de dragon que te queda aflojas un tornillo del puente Alsina.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (9, N'Pizza Picante.', 1, 1400, N'Masa fina, queso del mercadito de la esquina, aji mejicano recontra picante. ATENCION: Cuando vas al baño se te incendia el papel higienico.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (10, N'Faina', 0, 160, N'Harina, aceite, sal y pimienta... y despues te compras una faina en el COTO.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (16, N'NuevaPizza', 0, 505, N'')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (17, N'OtraPizza', 0, 505, N'')
SET IDENTITY_INSERT [dbo].[Pizzas] OFF
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteById]    Script Date: 8/5/2023 08:27:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_DeleteById]
	@idPizza int
as
begin
	DELETE FROM Pizzas WHERE Id = @idPizza
end
GO
ALTER AUTHORIZATION ON [dbo].[sp_DeleteById] TO  SCHEMA OWNER 
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAll]    Script Date: 8/5/2023 08:27:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_GetAll]
as 
begin
	select * from Pizzas
end
GO
ALTER AUTHORIZATION ON [dbo].[sp_GetAll] TO  SCHEMA OWNER 
GO
/****** Object:  StoredProcedure [dbo].[sp_GetById]    Script Date: 8/5/2023 08:27:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_GetById]
	@idPizza int
as 
begin
	select * from Pizzas where Pizzas.Id = @idPizza
end




GO
ALTER AUTHORIZATION ON [dbo].[sp_GetById] TO  SCHEMA OWNER 
GO
/****** Object:  StoredProcedure [dbo].[sp_Insert]    Script Date: 8/5/2023 08:27:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_Insert] 
       @Nombre                     VARCHAR(50)  = NULL   , 
       @LibreGluten                   BIT      = NULL   , 
       @Importe                     FLOAT  = NULL   , 
       @Descripcion             VARCHAR(MAX)  = NULL  
AS 
BEGIN 
     SET NOCOUNT ON 

     INSERT INTO Pizzas
          (                    
            Nombre                    ,
            LibreGluten                   ,
            Importe                      ,
            Descripcion                
          ) 
     VALUES 
          ( 
            @Nombre ,
            @LibreGluten,
            @Importe,
            @Descripcion
          ) 

END 
GO
ALTER AUTHORIZATION ON [dbo].[sp_Insert] TO  SCHEMA OWNER 
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateById]    Script Date: 8/5/2023 08:27:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[sp_UpdateById]
	@Id                         INT,
	@Nombre                     VARCHAR(50)   , 
    @LibreGluten                   BIT   , 
    @Importe                     FLOAT   , 
    @Descripcion             VARCHAR(MAX)  
as
begin

	--SET NOCOUNT ON
    UPDATE Pizzas SET Nombre = @Nombre, LibreGluten = @LibreGluten, Importe = @Importe, Descripcion = @Descripcion
	WHERE Id = @Id
	RETURN @@ROWCOUNT
end




































GO
ALTER AUTHORIZATION ON [dbo].[sp_UpdateById] TO  SCHEMA OWNER 
GO
