cmd_Release/obj.target/client.node := g++ -shared -pthread -rdynamic -m64  -Wl,-soname=client.node -o Release/obj.target/client.node -Wl,--start-group Release/obj.target/client/src/client.o -Wl,--end-group 