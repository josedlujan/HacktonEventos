CREATE TABLE [dbo].[Eventos] (
    [ID]             INT            IDENTITY (1, 1) NOT NULL,
    [Titulo]         VARCHAR (50)   NOT NULL,
    [Subtitulo]      VARCHAR (100)  NOT NULL,
    [Fecha]          DATETIME       NOT NULL,
    [FechaFin]       DATETIME       NULL,
    [EventoVIP]      BIT            CONSTRAINT [DF_Eventos_EventoVIP] DEFAULT ((0)) NOT NULL,
    [PaginaWeb]      VARCHAR (1000) NOT NULL,
    [NumeroContacto] VARCHAR (20)   NOT NULL,
    [CorreoContacto] VARCHAR (1000) NOT NULL,
    [CorreoCliente]  VARCHAR (1000) NOT NULL,
    [NombreCliente]  VARCHAR (300)  NOT NULL,
    CONSTRAINT [PK_Eventos] PRIMARY KEY CLUSTERED ([ID] ASC)
);

