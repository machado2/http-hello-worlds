FROM golang:latest
WORKDIR /app
COPY . .
RUN go build -o main .
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
EXPOSE 80
CMD ["/app/main"]