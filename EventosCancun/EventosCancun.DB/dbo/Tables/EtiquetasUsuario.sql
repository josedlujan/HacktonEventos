CREATE TABLE [dbo].[EtiquetasUsuario] (
    [ID]             INT IDENTITY (1, 1) NOT NULL,
    [IdUsuarioMovil] INT NOT NULL,
    [IdEtiqueta]     INT NOT NULL,
    CONSTRAINT [PK_EtiquetasUsuario] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_EtiquetasUsuario_Etiquetas] FOREIGN KEY ([IdEtiqueta]) REFERENCES [dbo].[Etiquetas] ([ID]),
    CONSTRAINT [FK_EtiquetasUsuario_UsuariosMoviles] FOREIGN KEY ([IdUsuarioMovil]) REFERENCES [dbo].[UsuariosMoviles] ([ID])
);

