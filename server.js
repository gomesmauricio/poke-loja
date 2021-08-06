const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server.json');
const middlewares = jsonServer.defaults({
	static: './buil'
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(jsonServer.rewriter({
	'/api/*': '/$1',
}))
server.use(router);
server.listem(PORT, () => {
	console.log('Server is rounning');
});
