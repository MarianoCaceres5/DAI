USE [DAI-Pizzas]
GO
/****** Object:  User [alumno]    Script Date: 20/3/2023 10:08:03 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [Pizzas]    Script Date: 20/3/2023 10:08:03 ******/
CREATE USER [Pizzas] FOR LOGIN [Pizzas] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 20/3/2023 10:08:03 ******/
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
SET IDENTITY_INSERT [dbo].[Pizzas] ON 

INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (1, N'Messi', 1, 3800, N'La del 10')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (2, N'Pizza mil quesos', 1, 3800, N'Para los amantes del amarillo')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (3, N'Fugazzeta', 1, 3800, N'La pizza que quieren los pibes')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (5, N'Fox pizza', 0, 3800, N'Para del zorro')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (6, N'Pizza Mil Quesos', 0, 3000, N'Vamos con los quesos')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (7, N'Pizza con hielo', 1, 440, N'Para los fans del invierno')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (8, N'Pizza organica', 1, 4300, N'Mentira, es igual que las otras')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (9, N'Con queso azul', 0, 211, N'Mas fuerte que patada al pecho')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (11, N'Pizza Mundialista', 1, 2023, N'Comida con Scaloni')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (12, N'La gallega', 0, 4444, N'Es una tortilla')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (13, N'Pizza Francesa v2', 1, 2, N'Siempre segunda, nunca primera')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (14, N'Pizza Naimannnnnnnnnnnnnnnnnnnnn', 0, 23221, N'Inclinada siempre')
SET IDENTITY_INSERT [dbo].[Pizzas] OFF
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteById]    Script Date: 20/3/2023 10:08:03 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_GetAll]    Script Date: 20/3/2023 10:08:03 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_GetById]    Script Date: 20/3/2023 10:08:03 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_Insert]    Script Date: 20/3/2023 10:08:03 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_UpdateById]    Script Date: 20/3/2023 10:08:03 ******/
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
