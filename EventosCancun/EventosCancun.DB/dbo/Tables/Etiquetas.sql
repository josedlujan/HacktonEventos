CREATE TABLE [dbo].[Etiquetas] (
    [ID]     INT          IDENTITY (1, 1) NOT NULL,
    [Nombre] VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Etiquetas] PRIMARY KEY CLUSTERED ([ID] ASC)
);

