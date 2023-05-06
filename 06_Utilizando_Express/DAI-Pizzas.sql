USE [master]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyEventProcessingLogin##]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [##MS_PolicyEventProcessingLogin##] WITH PASSWORD=N'hejettfhc/QudKFOwN7yqfkfdD46NSoOAixZtONtqJQ=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyEventProcessingLogin##] DISABLE
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyTsqlExecutionLogin##]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [##MS_PolicyTsqlExecutionLogin##] WITH PASSWORD=N'KPYEViD2zGN571p90V6ubuMb595Qnt6uMuI6R69wxH4=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyTsqlExecutionLogin##] DISABLE
GO
/****** Object:  Login [BUILTIN\Usuarios]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [BUILTIN\Usuarios] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [DESKTOP-N1MNC7R\Nano]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [DESKTOP-N1MNC7R\Nano] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT AUTHORITY\SYSTEM]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [NT AUTHORITY\SYSTEM] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT Service\MSSQL$SQLEXPRESS]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [NT Service\MSSQL$SQLEXPRESS] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLTELEMETRY$SQLEXPRESS]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [NT SERVICE\SQLTELEMETRY$SQLEXPRESS] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\SQLWriter]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [NT SERVICE\SQLWriter] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\Winmgmt]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [NT SERVICE\Winmgmt] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [Pizzas]    Script Date: 6/5/2023 16:01:47 ******/
CREATE LOGIN [Pizzas] WITH PASSWORD=N't6KD0T/IF0/XKJiIP5fNa049Cqwofk2e5Rk+LWXf3t4=', DEFAULT_DATABASE=[DAI-Pizzas], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
ALTER LOGIN [Pizzas] DISABLE
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [DESKTOP-N1MNC7R\Nano]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT Service\MSSQL$SQLEXPRESS]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\SQLWriter]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\Winmgmt]
GO
USE [DAI-Pizzas]
GO
/****** Object:  User [Pizzas]    Script Date: 6/5/2023 16:01:47 ******/
CREATE USER [Pizzas] FOR LOGIN [Pizzas] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 6/5/2023 16:01:47 ******/
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

INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (1, N'Pizza Muzzarella', 0, 800.5, N'Pizza con queso Muzzarella.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (2, N'OtraPizzaActualizada', 1, 1000, NULL)
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (4, N'Pizza Margarita', 1, 1450, N'Salsa de tomate, mozzarella, albahaca, orégano y aceite de oliva. Viene con un mentoplus de regalo.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (5, N'PizzaActualizada', NULL, 700, NULL)
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (6, N'Pizza Cuatro Quesos', 1, 1380, N'El queso fontina, originario del Valle de La garompiña; el queso gorgonzola, natural de Milán; el queso parmesano, originario de la ciudad de Parma; y el queso mozzarella del supermercado DIA.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (8, N'Pizza con Rucula y Provolone', 1, 1380, N'Riquisima Pizza a la piedra, con queso provolone. Con el aliento de dragon que te queda aflojas un tornillo del puente Alsina.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (9, N'Pizza Picante.', 1, 1400, N'Masa fina, queso del mercadito de la esquina, aji mejicano recontra picante. ATENCION: Cuando vas al baño se te incendia el papel higienico.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (10, N'Faina', 0, 160, N'Harina, aceite, sal y pimienta... y despues te compras una faina en el COTO.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (11, N'PizzaModificada', 0, 0, N'')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (12, N'Nuevaaa', 0, 0, N'')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (13, N'Nuevaaa', 0, 600000, N'')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (14, N'LaPizza', 1, 0, N'')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (16, N'', 0, 7500, N'PizzaSinNombre')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (17, N'PizzaPostman', 0, 300, N'')
SET IDENTITY_INSERT [dbo].[Pizzas] OFF
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteById]    Script Date: 6/5/2023 16:01:47 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_GetAll]    Script Date: 6/5/2023 16:01:47 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_GetById]    Script Date: 6/5/2023 16:01:47 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_Insert]    Script Date: 6/5/2023 16:01:47 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_UpdateById]    Script Date: 6/5/2023 16:01:47 ******/
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
