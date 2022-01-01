# Full Stack for Front-end Engineers, v2

> Because I don't have credit card, I can't follow the exercise precisely so
> the note here is not everything that the course covered. You need to check
> the course or at least the course slide in the references section below.

## What is "Full Stack"?

The thing about full stack is, it's very contentious. It is almost impossible
to be good at every part of the stack.

> Find the area that we're passionate about, and then kind of dig into that and
> become an expert at that end.

When we say "what is full stack?", a lot of front-end engineers (especially)
like "There's a front-end, there's a back-end somewhere. And then it works
together somehow".

Why is full stack is such a hard definition? Because front-end is hard enough
to define. Front-end literally covers so many different use cases that it's
really hard to nail down exactly what a definition is. The back-end is just as
complicated too.

So, what is "full stack"? Someone who can build an application from start to
finish.

## Command Line

### Why the command line?

> GUI stands for Graphical User Interface.

- Not all servers has GUI.

- No matter how well designed a GUI is, we can't encompass all the
possibilities that are capable in a command line.

- GUIs are opinionated, it's someone opinion about exactly the user should see,
how should they interact with that, and how it's laid out is completely
contextual.

- Command line is ubiquitous. The command line works in every language in
every country. Every OS has a command line.

- Command line is consistent, it's always gonna be the same.

## Shell

Shell is the command interpreter to interface with system. The terminal is
just a container for shell.

> At this point, the instructor didn't talk about POSIX so what he said in
> the course only work with POSIX compliant shell.

## Understanding the Internet

Internet is a series of requests and responses by different devices, just
talking to each other.

Another internet definition is, internet is a series of publicly interconnected
devices.

> "Internet is a series of tubes", LOL.

IP stands for Internet Protocol, and IP Address is a label assigned to an
internet connected device.

### The Difference Between TCP and UDP

TCP stands for Transmission Control Protocol.

UDP stands for User Datagram Protocol.

TCP is lossless. It's guaranteed if we send someone some information over TCP,
it's going to make it. TCP has things called error correction, error checking.

UDP is just a one-way blast of information.

### DNS

DNS stands for Domain Name System. To make things simple, DNS is an intelligent
internet phone book.

For example, if we want to go to twitter.com. It's not necessary routing us
directly to the servers in San Francisco because that would be really slow. But
DNS says, "what's the closest server that this resolve to". So all it does is
it maps domain names to IP addresses. We need them because most of us can't
remember our own IP address.

> Domain Name System is just a way of making the internet accessible for more
> people.

### Domain

Domain is something like `frontendmaster.com` and `twitter.com`. The `.com`,
`.net`, `.wtf`, etc, that's the Top Level Domain (TLD).

#### Subdomain

The subdomain would be something like `gist.github.com` and
`blog.jemyoung.com`.

Why would we use subdomain instead of a path (github.com/gist)?

> If we want to have more than one actual separate server, subdomain allow
> us to partition our data more effectively, prevents cross site scripting
> and stuff like that.
>
> For users, the subdomain is just indicates it's a different site.

#### Nameservers

How DNS resolve the routing? There's this idea called Nameservers.

Nameservers is the actual entity that keeps that mapping. It's basically
map domains to IP addresses.

### Internet Control Message Protocol (ICMP)

First, we can check how many hop we made when trying to access `google.com`
with `traceroute` like this:
```sh
traceroute google.com
```

> The lower the hop number is, the better.

`traceroute` and `ping` both running ICMP requests.

We can configure our server to not respond to ICMP requests, and this is what
we called *black holing*.

Black holing is where we explicitly deny requests.

### Packet

Packet is the smallest bit of information we can transmit. Think packet as an
envelope with data in it. And what does envelope have on it if we're trying to
mail something? It's got an address and it's got information where you're from
(just in case it need to come back).

Basically packet is a base unit of information on how everything's
transmitting.

Packet mainly contains metadata. The key information is, where it's going,
where it came from, and then all these metadata attached to it.

> That metadata is usually in the form of headers.

The packet that was send over the internet is not just one, but many of them.

## Server

What does a server do? Server serve content, basically server serve something
back.

**Anything can be a server as long as it responds to a request and serving
content**.

Generally ports below `1000` are reserved. The internet runs on port `80`, on
HTTPS the internet runs on port `443`.

## Data Center

Even though be can use anything for server, usually server are custom built
machine specifically for just serving content and not necessarily interacting
with as much.

Servers generally live in place called data center. Data centers usually
consist a lot of computers in cold environment, and the amount of power
data centers consumes is massive.

### Virtual Private Server

Often times, most people don't need the entire server. They just need a
fraction of the server. And that's the idea build around cloud computing,
only pay for what we need.

So what cloud computing do is take a server, and then "slice" it into
little chunk. And these chunks can't talk to each other. There's this idea
of process isolation. For example, Mr. X running `xyz.com` and then Mrs. Y
running `com.xyz.` They can run on the same server but they didn't even know
that either and they just ran what they need.

When we slice a server, it's called a Virtual Private Server.

## SSH Keys

SSH stands for Secure Socket Shell. SSH made up of two parts, there's a public
key and there's a private key.

The way SSH key works is, the private key stay on our local machine and the
public key goes on the server. And what happens is, everything is encrypted
with the private key. So, when it's encrypted, it goes in transit and no one
can intercept what's happening.

## DNS Records

After we buy a domain, that will be resolved via the `nameservers` and because
the `nameservers` keep records and they're called DNS records.

There's different types of DNS records depending on what we wanna do.

Most records are called `A` record and they map a name to an IP address. The
other records is `CNAME` and they map a canonical name to a different name.

For example, `jemyoung.com` is `A` record and it map to an IP address
`23.23.185.61`. `blog.jemyoung.com` is a `CNAME` record and it map the
subdomain to `jemyoung.com`.

> We can check the records that a given domain has using `dig` program.

## Nginx

Nginx is pronouns engine x. Nginx is one of the most popular web servers out
there. It's reverse proxy, it's a web server, it's a proxy server, it's a file
server, it can do caching, it can do performance tuning, it can compress our
file and send it out, it can handle our encryption. Nginx does a little bit
of everything.

When we rent a server, the server itself doesn't do anything. When a request
come in, what the server should do? We have to figure that out.

Is the request should go to database? Is the request should go to app? Or the
request should go to another server? That's why Nginx is there. Nginx helps
route those requests to the right thing.

## Process Manager

Process manager is just a way to keep our application up and running. Process
manager can also handles errors, restarts, logging and clustering.

In this course, the process manager that used is `pm2`. We can install `pm2`
with `npm` like this:
```sh
npm i pm2 -g
```

To start a process using `pm2`, we can do that with something like this:
```sh
# `app.js` is just an example of running a server.
pm2 start app.js
```

To make sure that the processes start when the server restart (right now if
the server restart, we still have to run `pm2 start app.js` again), we can
modify the `pm2` startup file so that it creates a daemon that will always
start our application when we start the server like this:
```sh
pm2 startup
```

To freeze a process list on reboot, we can use:
```sh
pm2 save
```

To check what process we start with `pm2`, we can use:
```sh
pm2 status
```

## How Internet Works

Domain -> IP address via `nameserver` -> Server -> Web server (Nginx)
-> Application server

## Nmap

`nmap` is a port scanner and what it does is, it can run over an entire range
of IP addresses and checks for open ports.

Install `nmap` using your OS package manager, in arch-based linux is something
like this:
```sh
sudo pacman -S nmap
```

We can run `nmap` in our localhost like this:
```sh
# the pattern would be: nmap <ip-address>
# `localhost` is just an alias for ip address on our local machine.
nmap localhost
```

## Port

Port is a communication endpoint that maps to a specific process or network
service.

## Uncomplicated Firewall (ufw)

Firewall control to ports and who can get in and out of our computer, and
uncomplicated firewall (ufw) make it easy to `allow`, `deny`, or `reject`
request.

> `deny` doesn't give response that the port is closed and the requester just
> hang waiting for response, while `reject` will give response that the port is
> closed.

The usage example:
```sh
ufw allow ssh
ufw reject http
```

## HTTP

HTTP stands for HyperText Transport Protocol. HTTP runs over TCP, so a packet
wraps HTTP data and then the browser decode that.

The model for HTTP is request and response.

### HTTP Headers

Part of the metadata in packet is header, it's all the information about where
a destination is going, where it's from, what kind of encoding it's using, what
kind of encoding it's using, what kind of encoding it's accepted. And based on
if it's a request (going to the server) or the response (coming out of the
server) changes what kind of header we're looking for and what kind of header
we're gonna set.

### HTTP Status Code

HTTP status code indicates the status of an HTTP request.

Pattern | About
---     | ---
1xx     | Information
2xx     | Success
3xx     | Redirect
4xx     | Client error
5xx     | Server error

## HTTPS

HTTPS is SSL (Secure Sockets Layer) over HTTP. Why do we need it? So that
someone can't intercept the traffic between the client and our server .

> We can use [certbot](http://certbot.eff.org/) to automatically enable
> HTTPS on our website.

## Websockets

Websocket is a persistent bidirectional connection between client and server.
We can use it from the client to open a long-lived connection and we just push
message back and forth client to server. It's two way and multiplexed.

> Multiplexing is how to handle a request and response with one big tunnel
> instead of multiple small tunnel. For example, let's say we want to access
> `main.js` and `image.png`, we need to open two tunnel and doing two
> connection over tcp which can be slow if we scale that up (every component
> that a user access will open their own tunnel to the server).

## References

- [Frontend master course full stack for front-end engineers](https://frontendmasters.com/courses/fullstack-v2/).
- [Frontend master course full stack for front-end engineers slides](https://docs.google.com/presentation/d/1Mvf_rOFz1wZeH1irajJqhRQgzid7BkqJBd8wigpz39M/edit#slide=id.p).
- [Maxmind geoip database](https://www.maxmind.com/en/geoip-demo).
- [HTTP status code from wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
- [Chatbot using websockets exercise github repo](https://github.com/young/fsfev2).
