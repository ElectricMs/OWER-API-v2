module.exports = {
    DATA_SOURCE: 'https://overwatch.blizzard.com/en-us/career/',
    NAME_SEARCH: 'https://overwatch.blizzard.com/en-us/search/account-by-name/',

    API_KEY: '2211030', // 替换为您的密钥
    HOST: '127.0.0.1', // 服务运行的IP，默认为0.0.0.0
    PORT: 16524, // 指定默认的端口号
    CORE: 0, // 处理器核心数，默认为0即可，程序会自动按照CPU核心数进行处理

    CACHE_EXPIRATION_TIME: 600 * 1 * 1000, // 缓存有效期10min
    CLEANUP_CRON_PATTERN: '0 0 */1 * *' // 每天半夜清理失效缓存，cron表达式

}