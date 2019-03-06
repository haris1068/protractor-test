#!/bin/bash

webdriver-manager start &
#protractor $@
#./protractor.sh &
sleep 5
./node_modules/.bin/grunt protractor --cucumberOpts={\"tags\":\"@userJourneyB_1\"}

