USE [DAI-Pizzas]
GO
/****** Object:  User [Pizzas]    Script Date: 4/7/2023 19:55:16 ******/
CREATE USER [Pizzas] FOR LOGIN [Pizzas] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO
/****** Object:  Table [dbo].[Ingredientes]    Script Date: 4/7/2023 19:55:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingredientes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Ingredientes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IngredientesXPizzas]    Script Date: 4/7/2023 19:55:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IngredientesXPizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdPizza] [int] NOT NULL,
	[IdIngrediente] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[IdUnidad] [int] NOT NULL,
 CONSTRAINT [PK_IngredientesXPizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 4/7/2023 19:55:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
	[LibreGluten] [bit] NULL,
	[Importe] [float] NULL,
	[Descripcion] [varchar](max) NULL,
 CONSTRAINT [PK_Pizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Unidades]    Script Date: 4/7/2023 19:55:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Unidades](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Unidades] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 4/7/2023 19:55:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id] [int] NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[Token] [varchar](64) NULL,
	[TokenExpirationDate] [datetime] NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ingredientes] ON 

INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (1, N'Queso Muzzarella')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (2, N'Cebolla')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (3, N'Salsa Carbonara')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (4, N'Huevo')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (5, N'Queso Parmesano')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (6, N'Panceta')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (7, N'Salsa de Tomate')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (8, N'Albahaca')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (9, N'Anchoas')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (10, N'Oregano')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (11, N'Aceitunas')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (12, N'Alcaparras')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (13, N'Queso Gongonzola')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (14, N'Jamon Cocido')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (15, N'Jamon Crudo')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (16, N'Queso Provolone')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (17, N'Nuevo Ingrediente')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (20, N'El Ingrediente')
SET IDENTITY_INSERT [dbo].[Ingredientes] OFF
GO
SET IDENTITY_INSERT [dbo].[IngredientesXPizzas] ON 

INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (2, 2, 1, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (3, 2, 2, 100, 2)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (4, 3, 3, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (5, 3, 4, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (6, 3, 5, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (7, 3, 2, 100, 2)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (8, 3, 6, 50, 2)
SET IDENTITY_INSERT [dbo].[IngredientesXPizzas] OFF
GO
SET IDENTITY_INSERT [dbo].[Pizzas] ON 

INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (2, N'Pizza Fugazzeta', 1, 1000, N'Pizza con queso Muzzarella, tiene rica cebolla y te deja un aliento como para hacerle el alisado del pelo a tu pareja.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (3, N'Pizza Carbonara', 1, 1540.5, N'Salsa carbonara: huevo, queso parmesano, sal y pimienta. Cebolla, bacon (kevin) y queso rallado por encima, ya que por debajo no se ve.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (4, N'Pizza Margarita', 1, 1450, N'Salsa de tomate, mozzarella, albahaca, orégano y aceite de oliva. Viene con un mentoplus de regalo.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (5, N'Pizza Napolitana', 0, 1270, N'Salsa de tomate, queso mozzarella, anchoas, orégano, alcaparras y aceite de oliva. Un corcho de obsequio para cuando vas al excusado.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (6, N'Pizza Cuatro Quesos', 1, 1380, N'El queso fontina, originario del Valle de La garompiña; el queso gorgonzola, natural de Milán; el queso parmesano, originario de la ciudad de Parma; y el queso mozzarella del supermercado DIA.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (7, N'Pizza con Jamon', 0, 1210, N'Pizza con queso Muzzarella, se le agrega Jamon y te cobro el doble.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (8, N'Pizza con Rucula y Provolone', 1, 1380, N'Riquisima Pizza a la piedra, con queso provolone. Con el aliento de dragon que te queda aflojas un tornillo del puente Alsina.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (9, N'PizzaActualizadaBody', 1, 333, NULL)
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (10, N'Faina', 0, 160, N'Harina, aceite, sal y pimienta... y despues te compras una faina en el COTO.')
SET IDENTITY_INSERT [dbo].[Pizzas] OFF
GO
SET IDENTITY_INSERT [dbo].[Unidades] ON 

INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (1, N'Unidad')
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (2, N'Gramos')
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (3, N'Litros')
SET IDENTITY_INSERT [dbo].[Unidades] OFF
GO
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (1, N'Angel', N'Agustina Yael', N'Angel', N'Shaggy', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (2, N'Avola', N'Tomas Agustin', N'Avola', N'Tavo', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (3, N'Bolan', N'Rocco', N'Bolan', N'Freddie', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (4, N'Caceres Smoler', N'Mariano', N'Caceres', N'Howie', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (5, N'Cembal', N'Micaela Yael', N'Cembal', N'Rhythm', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (6, N'Chediex Viner', N'Gabriel', N'Chediex', N'Sabbie', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (7, N'Coladonato', N'Tiago', N'Coladonato', N'KoTi', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (8, N'Forni', N'Tomás Marcos', N'Forni', N'Toddy', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (9, N'Golonbek', N'Matias', N'Golonbek', N'Helios', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (10, N'Gomboc', N'Federico Uriel', N'Gomboc', N'Darwin', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (11, N'Gutman', N'Ignacio', N'Gutman', N'Gucci', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (12, N'Israel', N'Martin', N'Israel', N'MarTeens', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (13, N'Jusid', N'Shirly', N'Jusid', N'Nnyimba', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (14, N'Kujawski', N'Alex Tobias', N'Kujawski', N'Gengis', N'1469e558-2843-469d-9ad1-5a92fcf2e6ea', CAST(N'2023-06-27T11:57:01.480' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (15, N'Kwiatkowski', N'Ivan', N'Kwiatkowski', N'Ninja', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (16, N'Larrain', N'Juan Bautista', N'Larrain', N'Drizzle', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (17, N'Lasorsa Nikcevich', N'Valentin Julian', N'Lasorsa', N'AirMax', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (18, N'Lazzari', N'Santino', N'Lazzari', N'UpnGo', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (19, N'Leybuscchoff', N'Santiago', N'Leybuscchoff', N'Leibupirac', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (20, N'Liponetzky', N'Facundo Ezequiel', N'Liponetzky', N'Lollipop', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (21, N'Makishi', N'Matias Javier', N'Makishi', N'Makiwara', N'854fd4ef-b451-438f-9580-8b0a80e4ad42', CAST(N'2023-07-04T23:09:04.517' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (22, N'Muguelar', N'Mateo', N'Muguelar', N'Muggle', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (23, N'Naiman Zetel', N'Matias', N'Naiman Zetel', N'Rocky', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (24, N'Neiman', N'Luciano Agustin', N'Neiman', N'Freddo', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (25, N'Pascual', N'Santiago Federico', N'Pascual', N'Mister', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (26, N'Polonsky', N'Tomas', N'Polonsky', N'Tango', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (27, N'Quindi', N'Brian', N'Quindi', N'Party', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (28, N'Raiter', N'Maia', N'Raiter', N'QueenBee', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (29, N'Rempel', N'Tomas Franco', N'Rempel', N'Drinky', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (30, N'Salip', N'Ignacio', N'Salip', N'Facha', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (31, N'Schulman', N'Guido', N'Schulman', N'Yummy', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (32, N'Schwarzberg', N'Octavio Leo', N'Schwarzberg', N'HexaTiger', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (33, N'Vaisberg', N'Facundo', N'Vaisberg', N'Faavs', NULL, NULL)
INSERT [dbo].[Usuarios] ([Id], [Apellido], [Nombre], [UserName], [Password], [Token], [TokenExpirationDate]) VALUES (35, N'Ulman', N'Pablo', N'Pablo', N'BolasTristes', N'c4d17feb-1786-4a04-b2e8-c717225e6602', CAST(N'2023-06-26T02:56:56.160' AS DateTime))
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Ingredientes] FOREIGN KEY([IdIngrediente])
REFERENCES [dbo].[Ingredientes] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Ingredientes]
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Pizzas] FOREIGN KEY([IdPizza])
REFERENCES [dbo].[Pizzas] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Pizzas]
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Unidades] FOREIGN KEY([IdUnidad])
REFERENCES [dbo].[Unidades] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Unidades]
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteById]    Script Date: 4/7/2023 19:55:16 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_GetAll]    Script Date: 4/7/2023 19:55:16 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_GetById]    Script Date: 4/7/2023 19:55:16 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_Insert]    Script Date: 4/7/2023 19:55:16 ******/
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
		RETURN @@ROWCOUNT
END 
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateById]    Script Date: 4/7/2023 19:55:16 ******/
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
