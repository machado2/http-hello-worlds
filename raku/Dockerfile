FROM rakudo-star
RUN apt-get update
RUN apt-get install -y libssl-dev
RUN zef install Cro::HTTP --force-test
COPY . /app/
ENTRYPOINT ["perl6", "/app/app.raku"]
