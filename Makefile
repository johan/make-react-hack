run:
	webpack-dev-server --port 8000 --content-base static/

install:
	npm install --save react react-dom
	npm install --save-dev webpack webpack-dev-server \
		babel-core babel-loader \
		babel-preset-es2015 babel-preset-react \
		react-addons-test-utils
