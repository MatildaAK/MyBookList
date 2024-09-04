# Använd en basimage för .NET 8 och Angular CLI
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /workspace

# Installera Node.js och Angular CLI
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g @angular/cli@18

# Installera MariaDB-klient och andra verktyg
RUN apt-get update && apt-get install -y mariadb-client

# Exponera portar
EXPOSE 4200 5000 5001
