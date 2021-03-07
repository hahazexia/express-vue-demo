import log4js from 'log4js'
import path from 'path'

export default function logInit () {
    
    const tempPath = path.resolve(__dirname, '../../log');
    console.log("日志位置", tempPath)

    const logParams = {
        appenders: {
            stdout: {
                type: 'stdout'
            },
            info: {
                type: 'dateFile',
                filename: `${tempPath}/info.log`,
                maxLogSize: 1024 * 1024,
                pattern: '.yyyy-MM-dd.log',
                keepFileExt: true,
                daysToKeep: 15,
                alwaysIncludePattern: true
            },
            error: {
                type: 'dateFile',
                filename: `${tempPath}/error.log`,
                maxLogSize: 1024 * 1024,
                pattern: '.yyyy-MM-dd.log',
                keepFileExt: true,
                daysToKeep: 15,
                alwaysIncludePattern: true
            }
        },
        categories: {
            default: { appenders: [ 'stdout' ], level: 'debug' },
            info: { appenders: [ 'info' ], level: 'info' },
            error: { appenders: ['error'], level: 'error' }
        }
    };

    log4js.configure(logParams);
    global.loggerInfo = log4js.getLogger('info');
    global.loggerError = log4js.getLogger('error');
}