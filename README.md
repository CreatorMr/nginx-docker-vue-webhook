<!--
 * @Author: your name
 * @Date: 2022-03-27 15:05:04
 * @LastEditTime: 2022-04-09 13:28:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nginx-docker/vue-webhook/README.md
-->

### 配置服务器  CICD 服务器
yum update

### 安装docker

yum install git -y 

<!-- yum install -y openssl openssh-server -->

配置ssh-key 生成公钥

ssh-keygen -t rsa -b 4096 -C "邮箱"
-t 加密算法
-b 指定大小
-c 邮箱
rsa.pub

安装  nvm

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

nvm install stable 安装node

安装 nrm 

yum install -y yum-utils device-mapper-persisitent-data lvm2

添加源

yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

安装docker 
 yum install -y docker-ce docker-ce-cli containerd.io


从docker-hub 安装镜像

