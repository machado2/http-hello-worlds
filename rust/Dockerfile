FROM rust
WORKDIR /app
COPY Cargo.toml .
COPY dummy.rs /app/src/main.rs
RUN cargo build --release
COPY src src
RUN cargo install --path .
ENV ROCKET_ENV=production
ENV ROCKET_PORT=80
ENV ROCKET_ADDRESS=0.0.0.0
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
CMD ["/app/target/release/rocket_hello_world"]
