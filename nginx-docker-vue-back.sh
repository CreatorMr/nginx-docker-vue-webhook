#!/bin/bash
WORK_PATH="/usr/project/nginx-docker-vue-back"
cd $WORK_PATH
echo "先清除老代码"
git reset --hard origin/main
git clean -f 

echo "拉取新代码"
git pull origin main
echo "开始构建"
docker build -t vue-back:1.0 .

echo "停止旧容器并删除就容器"

docker stop vue-back-container

docker rm vue-back-container
echo "启动新容器"
docker container run -p 3000:3000 --name vue-back-container -d vue-back:1.0
