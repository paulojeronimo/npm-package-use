#!/usr/bin/env node

const test=require('@paulojeronimo/npm-package-test')
const duration='1h 1s'
console.log(`${duration} is ${test.durationToSeconds(duration)} seconds`)
