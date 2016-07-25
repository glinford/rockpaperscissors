#!/bin/bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash && sleep 1 \
&& . ~/.profile || true \
&& . ~/.bashrc || true \
&& . ~/.zshrc || true \
&& nvm install 5.7.0 \
&& npm install -g bower && npm install -g gulp-cli && \
bower install && npm install && gulp
