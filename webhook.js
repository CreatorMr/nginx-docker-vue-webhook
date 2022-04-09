/*
 * @@author: Creator
 * @LastEditTime: 2022-04-09 18:52:46
 * @Description: 
 */
const http = require('http')
let crypto = require('crypto')
let { spawn } = require('spawn')
let SECRET = '123456'
function sign(body) {
    return `sha1=` + crypto.createHmac('sha1', SECRET).update(body).digest('hex')
}
let server = http.createServer(function (req, res) {
    if (res.method === 'PSOT' && req.url === '/webhook') {
        console.log('/webhook.js')
        // 获取请求体
        let buffers = []
        req.on('data', function (buffer) {
            buffers.push(buffer)
        })
        req.on('end', function (buffer) {
            let body = Buffer.concat(buffers)
            let event = req.headers['x-github-event']
            // github 请求来的时候，要传递请求体body 另外还会传一个signature过来
            let signature = req.headers['x-hub-signature']
            if (signature !== sign(body)) {
                return res.end('Not Found')
            }
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))

            //部署脚本
            if (event == 'push') {
                console.log('webhook:push')
                let payload = JSON.parse(body)
                console.log(payload, 'payload-repositoryName')
                // let child = spawn('sh', [`./${payload.repository.name}.sh`]) // 开启子进程
                // let buffers = []
                // child.stdout.on('data', function (buffer) {
                //     buffers.push(buffer)
                // })
                // child.stdout.on('end', function (buffer) {
                //     let log = BUffer.concat(buffers)
                //     console.log(log)
                // })
            }
        })
    } else {
        res.end('not found')
    }
})

server.listen(4000, () => {
    console.log(' webhook服务器启动 端口4000')
})
