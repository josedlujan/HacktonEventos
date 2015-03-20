CREATE TABLE [dbo].[UsuariosMoviles] (
    [ID]              INT              IDENTITY (1, 1) NOT NULL,
    [Nombre]          VARCHAR (100)    NOT NULL,
    [Apellido]        VARCHAR (100)    NOT NULL,
    [FechaNacimiento] DATE             NULL,
    [Sexo]            BIT              NULL,
    [Estado]          INT              CONSTRAINT [DF_UsuariosMoviles_Estado] DEFAULT ((0)) NOT NULL,
    [Token]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_UsuariosMoviles] PRIMARY KEY CLUSTERED ([ID] ASC)
);

