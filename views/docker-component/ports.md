#### ports

#####  ports和expose的区别

简单说就是ports用来把服务端口映射给宿主机，可以访问宿主机IP地址的人都可以访问ports映射出来的端口。

而expose用来把服务端口开放给其他服务，客户端服务可以通过links功能访问服务端服务的端口。



##### example:

```yaml
services:
  nginx:
    image: ngxin:1.2
    ports:
      - {宿主机端口}:{docker服务容器端口}
```



##### 1. 映射到端口

使用下面的参数可以将服务的80端口映射宿主机的8080端口（也可以是其他端口）

```yaml
services:
  nginx:
    image: tflinux_nginx1.20
    ports:
      - 8080:80
```



##### 2. 映射到地址

使用下面的参数可以将服务的80端口映射到宿主机的10.16.1.1的8080端口（也可以是其他端口）。

```yaml
services:
  nginx:
    image: tflinux_nginx1.20
    ports:
      - 10.16.1.1:8080:80
```



##### 3.随机映射

使用下面的参数可以将服务的80端口映射到宿主机的一个随机的端口上。

```yaml
services:
  nginx:
    image: tflinux_nginx1.20
    ports:
      - 80
```