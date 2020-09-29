#!/bin/bash
npm run build
git add .

read message
echo "Mensagem do commit: "
git commit -am "$message"
git push
eval $(ssh-agent)
ssh-add ~/.ssh/id_rsa
ssh 34.95.231.60 \
  'git -C /home/JMNar/api/ ' \
  'pull origin master && ' \
  'pm2 restart api && sudo systemctl restart nginx'
