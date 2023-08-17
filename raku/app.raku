use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> {
        content 'text/plain', "Hello, World!";
    }
};

my $server = Cro::HTTP::Server.new:
    :host<0.0.0.0>, :port<80>, :$application;

$server.start;
react whenever signal(SIGINT) { $server.stop; exit; }
