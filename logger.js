var winston = require('winston');
var _ = require('lodash');

// Set up logger
var customColors = {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    crit: 'red',
    fatal: 'red'
};

var logger = new (winston.Logger)({
    colors: customColors,
    levels: {
        trace: 0,
        debug: 1,
        info: 2,
        warn: 3,
        crit: 4,
        fatal: 5
    },
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            timestamp: true
        })
    ]
});
var options ={
    colorize: 'true',
    filename:  process.cwd() +'/winstonLogs/dailyLog',
    datePattern: '_yyyy-MM-dd.log',
    maxsize: 20000
};

logger.add(require('winston-daily-rotate-file'), options);

winston.addColors(customColors);
// Extend logger object to properly log 'Error' types
var origLog = logger.log;

logger.log = function (level, msg) {
    var objType = Object.prototype.toString.call(msg);
    if (objType === '[object Error]') {
        origLog.call(logger, level, msg.toString());
    } else {
        origLog.call(logger, level, msg);
    }
};
/* LOGGER EXAMPLES
  logger.trace('testing');
  logger.debug('testing');
  logger.info('testing');
  logger.warn('testing');
  logger.crit('testing');
  logger.fatal('testing');
 */

module.exports = logger;