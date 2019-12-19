# nestjsPro
使用nestjs技术栈构建前后端的项目 
主要功能接口：图片上传管理、文章管理
前端展示功能：图片列表展示、文章分类列表显示、分页、文章搜索、文章推荐等
后台管理系统暂没提交代码

项目启动步骤：

# 安装依赖 npm install

# 数据库 配置
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'huashan211!',
database: 'lhsvs',

# 运行 node dist/main.js
## 
`[Nest] 8616   - 2019-12-19 15:27:08   [NestFactory] Starting Nest application...
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] TypeOrmModule dependencies initialized +74ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] PassportModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] MulterModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] JwtModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] TypeOrmCoreModule dependencies initialized +69ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] HomeModule dependencies initialized +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] CalligraphyModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] AuthModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] CategoryModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] UploadModule dependencies initialized +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [InstanceLoader] ArticleModule dependencies initialized +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] AppController {/api}: +3ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/login, POST} route +4ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/me, GET} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] ArticleController {/api/article}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/add, POST} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/delete, POST} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/update, POST} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/list, POST} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/detail, POST} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/, GET} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] ArticleDetailController {/api/articleDetail}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/:id, GET} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] CategoryController {/api/category}: +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/add, POST} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/list, POST} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] UploadController {/api}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/upload/file/, POST} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/file/list, POST} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/delete/file, POST} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/update/file, POST} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] HomeController {/home}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/, GET} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] DetailController {/detail}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/:ida, GET} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] HomeCategoryController {/category}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/:ida, GET} route +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] SearchArticleController {/search}: +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/:wk, GET} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] ContactController {/contact}: +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [RoutesResolver] CalligraphyController {/calligraphy}: +0ms
[Nest] 8616   - 2019-12-19 15:27:08   [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 8616   - 2019-12-19 15:27:08   [NestApplication] Nest application successfully started +2ms`
# 看到以上信息则 成功启动服务端

# 浏览器打开： http://localhost:4000/home
