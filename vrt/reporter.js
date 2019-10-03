/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const fs = require('fs');

module.exports = class VRTReporter {
  constructor(globalConfig = {}, options = {}) {
    this.globalConfig = globalConfig;
    this.options = options;
    this.reportPath = './vrt-report';
  }

  onRunComplete(context, results) {
    // if (!fs.existsSync(this.reportPath)) {
    //   fs.mkdirSync(this.reportPath);
    // }

    results.testResults.forEach(testResult => {
      console.log(testResult.testFilePath);
      testResult.testResults.forEach(result => {
        console.log(result.title);
      });
    });
  }
};
