/* Protocole de communication client-serveur */
const https = require('https');
/* Application */
const hostname = 'localhost';
const app = require('./app');
/* Dotenv est un module sans dépendance qui charge les variables d'environnement d'un fichier 
.env dans process.env. Le stockage de la configuration 
dans l'environnement séparé du code est basé sur la méthodologie de l'application Twelve-Factor. */

const normalizePort = val => {

    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {

    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {

        case 'EACCES':
            console.error(bind + 'requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = https.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {

    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;

    console.log('Listening on ' + bind);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});