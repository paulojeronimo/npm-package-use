#!/usr/bin/env node

import durationToSeconds from '@paulojeronimo/npm-package-test'
const duration='1h 1s'
console.log(`${duration} is ${durationToSeconds(duration)} seconds`)
