import static spark.Spark.*;

import spark.Spark;

public class HelloWorld {
    public static void main(String[] args) {
        port(80);
        get("/", (req, res) -> "Hello, World!");
        Spark.exception(Exception.class, (exception, request, response) -> {
            exception.printStackTrace();
        });
    }
}