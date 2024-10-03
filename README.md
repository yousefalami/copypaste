# copypaste
copypaste


{
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "port": 1080,
      "protocol": "socks",
      "settings": {
        "auth": "noauth",
        "udp": true
      },
      "sniffing": {
        "destOverride": [
          "http",
          "tls",
          "quic",
          "fakedns"
        ],
        "enabled": false,
        "routeOnly": true
      },
      "tag": "socks"
    }
  ],
  "outbounds": [
    {
      "mux": {
        "concurrency": 8,
        "enabled": true
      },
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "iranmehrcollege-mode-2-v2.bulud.site",
            "port": 8080,
            "users": [
              {
                "encryption": "none",
                "id": "4e334179-45f0-4758-95e9-429a4a866977"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "none",
        "sockopt": {
          "dialerProxy": "fragment"
        },
        "wsSettings": {
          "headers": {
            "Host": "iranmehrcollege-mode-2-v2.bulud.site"
          },
          "path": "/"
        }
      },
      "tag": "proxy"
    },
    {
      "protocol": "freedom",
      "settings": {
        "fragment": {
          "interval": "5",
          "length": "1-3",
          "packets": "1-1"
        }
      },
      "streamSettings": {
        "sockopt": {
          "tcpNoDelay": true
        }
      },
      "tag": "fragment"
    },
    {
      "protocol": "freedom",
      "tag": "direct"
    },
    {
      "protocol": "blackhole",
      "tag": "block"
    }
  ]
}
