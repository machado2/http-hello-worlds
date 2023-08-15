FROM debian:buster-slim
RUN apt-get update
RUN apt-get install -y g++ cmake libboost-all-dev git
RUN git clone https://github.com/ipkn/crow.git
WORKDIR /code
ADD . .
RUN g++ -o main main.cpp -I/crow/include -L/usr/local/lib -pthread -lboost_system
EXPOSE 80
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
CMD ["./main"]
