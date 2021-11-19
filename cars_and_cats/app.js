
const http = require( 'http' );
const fs = require( 'fs' );

const app = http.createServer( function( request, response ){
    console.log('client request URL: ', request.url);
    
    if( request.url === '/cars' ){
        fs.readFile( './views/index.html', 'utf-8', function( errors, contents ){
            response.writeHead( 200, {'Content-Type' : 'text/html'} );
            response.write( contents );
            response.end();
        });
    }
    else if( request.url === '/cats' ){
        fs.readFile( './views/cats.html', 'utf-8', function( errors, contents ){
            response.writeHead( 200, {'Content-Type' : 'text/html'} );
            response.write( contents );
            response.end();
        });
    }
    else if( request.url === '/cars/new' ){
        fs.readFile( './views/new.html', 'utf-8', function( errors, contents ){
            response.writeHead( 200, {'Content-Type' : 'text/html'} );
            response.write( contents );
            response.end();
        });
    }
    else if(request.url === '/car01'){
        fs.readFile('./images/car01.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car02.jpg'){
        fs.readFile('./images/car02.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cat01'){
        fs.readFile('./images/cat01.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat02.jpg'){
        fs.readFile('./images/cat02.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/styles.css') {
        fs.readFile('./stylesheets/styles.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead( 404 );
        response.end( "Route Not Found!" );
    }
});

app.listen( 7077 );
console.log("Running on port 7077");