FROM mcr.microsoft.com/dotnet/sdk AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# copy and build app and libraries
COPY . .
RUN dotnet publish "./csharp.csproj" --output /app/ --configuration Release

FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /app
COPY --from=build /app .
EXPOSE 80
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT ["dotnet", "csharp.dll"]