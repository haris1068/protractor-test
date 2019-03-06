FROM openjdk:8u151-jdk

RUN apt update -y
RUN apt install -y python-pip python-dev build-essential
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt install -y nodejs
RUN pip install awscli

RUN npm install
ARG version=2.3.0

RUN rm -rf reports

# Set up the Chrome PPA
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list

# Update the package list and install chrome
RUN apt-get update -y
RUN apt-get install -y google-chrome-stable

# Set up Chromedriver Environment variables
ENV CHROMEDRIVER_VERSION 2.19
ENV CHROMEDRIVER_DIR /chromedriver
RUN mkdir $CHROMEDRIVER_DIR

# Download and install Chromedriver
RUN wget -q --continue -P $CHROMEDRIVER_DIR "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip"
RUN unzip $CHROMEDRIVER_DIR/chromedriver* -d $CHROMEDRIVER_DIR

# Put Chromedriver into the PATH
ENV PATH $CHROMEDRIVER_DIR:$PATH

# Installing npm libraries and protractor
RUN npm install -g protractor
RUN webdriver-manager update

WORKDIR /app
