var fs = require("fs")
  , sysPath = require('path')
  , _ = require('lodash')
  , exec = require('shelljs').exec
  ;


function GitInfo(config) {
  var gitInfoConfig = {};
  if (config && config.plugins && config.plugins.gitInfo) {
    gitInfoConfig = config.plugins.gitInfo;
  }

  this._config = _.defaults(gitInfoConfig, {
      fileName        : 'version.json'
    , outputDirectory : 'public'
    , enabled         : true
  })
}

GitInfo.prototype.brunchPlugin = true;
GitInfo.prototype.type = 'javascript';

GitInfo.prototype.optimize = function(data, path, callback) {
  if (!this._config.enabled) {
    return;
  }

  var filePath = sysPath.join(this._config.outputDirectory, this._config.fileName);
  var gitInfo = {
      branch  : exec('git branch | sed -n "/\* /s///p"').output.trim()
    , tag     : exec('git describe --abbrev=0').output.trim()
    , hash    : exec('git rev-parse HEAD').output.trim()
    , date    : new Date()
  };
  var gitinfoStr = JSON.stringify(data, undefined, 2);

  fs.writeFile(filePath, gitinfoStr, function (err) {
    callback(err, data);
  });
};

module.exports = GitInfo;
