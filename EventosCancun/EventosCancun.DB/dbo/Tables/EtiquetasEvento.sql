CREATE TABLE [dbo].[EtiquetasEvento] (
    [ID]         INT IDENTITY (1, 1) NOT NULL,
    [IdEvento]   INT NOT NULL,
    [IdEtiqueta] INT NOT NULL,
    CONSTRAINT [PK_EtiquetasEvento] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_EtiquetasEvento_Etiquetas] FOREIGN KEY ([IdEtiqueta]) REFERENCES [dbo].[Etiquetas] ([ID]),
    CONSTRAINT [FK_EtiquetasEvento_Eventos] FOREIGN KEY ([IdEvento]) REFERENCES [dbo].[Eventos] ([ID])
);

