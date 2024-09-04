# Använd en officiell .NET 8 SDK bild som bas för build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Ställ in arbetskatalogen i containern
WORKDIR /app

# Kopiera .csproj-fil(er) och återställ beroenden
COPY *.csproj ./
RUN dotnet restore

# Kopiera hela projektet till arbetskatalogen
COPY . .

# Bygg applikationen i release-läge
RUN dotnet publish -c Release -o out

# Använd en mindre .NET 8 Runtime bild för run stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Ställ in arbetskatalogen i containern
WORKDIR /app

# Kopiera det byggda resultatet från build stage
COPY --from=build /app/out .

# Exponera porten som applikationen ska lyssna på
EXPOSE 80

# Definiera kommandot för att starta applikationen
ENTRYPOINT ["dotnet", "API.dll"]
