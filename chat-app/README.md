# Fluvio Chat App Demo

This project provides an example of using `@fluvio/client` to write a chat application using Node.js.

<p align="center"><img src="./chat-client/public/img/chat.svg" alt="Chat App" width="800"/></p>

## Application Overview

This demo consists of a WebSocket proxy server relaying messages from a React client web application to the `@fluvio/client`, sending `user`, `chat`, and `session` messages to the Fluvio cluster.

Read the [API docs](https://infinyon.github.io/fluvio-client-node/) for more information.
<hr/>
<br/>

## Building the Demo App

In a terminal window, from `chat-app` directory, run the following command:

```bash
npm run build
``` 

This will run the `./build.sh` script, which will install the build dependencies and build the client and server applications.

### **Run the Server**

In the terminal window, from `chat-app` directory, run the following command:

```bash
cd chat-server && npm run setup && npm run start
```

The script `npm run setup` will provision `fluvio` topics. 

On a freshly installed cluster with no prior events, you should see the following message if the server successfully started.

```bash
> chat-server@1.0.0 setup /Users/aj/projects/github/fluvio-demo-apps-node/chat-app/chat-server
> sh ./setup.sh

topic "chat-app-users" created
topic "chat-app-messages" created
topic "chat-app-sessions" created

> chat-server@1.0.0 start /Users/aj/projects/github/fluvio-demo-apps-node/chat-app/chat-server
> npx ts-node ./src/chat-server.ts

requiring platform specific module
Users
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
ChatMessages
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│ messages │   0    │
└──────────┴────────┘
----
Chat server is running at http://localhost:5050...
```

### **Run the Client**

Open a new terminal window, navigate to the `chat-app` directory, and start the application:

```bash
cd chat-client && npm run start:dev
```

If everything was installed and built successfully, you should see the following message when starting the application.

```bash
...
Child HtmlWebpackCompiler:
     1 asset
    Entrypoint HtmlWebpackPlugin_0 = __child-HtmlWebpackPlugin_0
    [./node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] 989 bytes {HtmlWebpackPlugin_0} [built]
ℹ ｢wdm｣: Compiled successfully.
```

Open the website and create an account.