FROM maven AS build
WORKDIR /app
COPY pom.xml ./
RUN mvn -f pom.xml dependency:go-offline
COPY src src
RUN mvn -f pom.xml clean package

FROM openjdk
WORKDIR /app
COPY --from=build /app/target/hello-world-1.0-SNAPSHOT-jar-with-dependencies.jar /app/hello-world-1.0-SNAPSHOT.jar
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
EXPOSE 80
CMD ["java","-jar","/app/hello-world-1.0-SNAPSHOT.jar"]