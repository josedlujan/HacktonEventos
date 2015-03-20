CREATE TABLE [dbo].[EventoURLs] (
    [ID]       INT           IDENTITY (1, 1) NOT NULL,
    [IdEvento] INT           NOT NULL,
    [URL]      VARCHAR (300) NOT NULL,
    CONSTRAINT [PK_EventoURLs] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_EventoURLs_Eventos] FOREIGN KEY ([IdEvento]) REFERENCES [dbo].[Eventos] ([ID])
);

