# git 的基本使用

## 1. 初始化项目

`远程仓库`

> 在 github 上申请账号，然后配置 ssh 后即可使用（见附录），点击右上角加号，再点击 New repository，起个名字即可完成项目仓库的生成

`本地仓库`

> 本地需下载 git，之后配置账号密码以及信息即可使用（见附录），初始化命令为 `git init`

`链接本地与远程仓库`

> 1. 若需要从远程 clone 文件，需要先执行 `git clone [地址]`
> 2. 若需要从远程特定分支 clone，需要执行 `git clone [地址] -b [分支名]`
> 3. 若不需要，则跳过上面两步
> 4. 链接远程 `git remote add origin [地址]`
> 5. 为 push/pull 设定上游（追踪远程分支） `git push --set-upstream origin [分支名（默认master）]`

## 2. 项目中的基本使用

> 1. 放入暂存区 `git add .`
> 2. 撤销`add`操作 `git reset head .`
> 3. 提交到本地仓库 `git commit -m"备注"`
> 4. 撤销`commit`操作

    git reset --mixed head^  //撤回add及commit，代码依旧保留（--mixed为默认参数，可以不加）
    git reset --soft head^  //仅撤回commit，代码依旧保留
    git reset --hard head^  //仅撤回commit，代码也删除，恢复到上一次的commit状态

    * head^的意思是上一个版本，也可以写成 head~1，如果你进行了 2 次 commit，想都撤回，可以使用 head~2
    * 如果只是注释写错了，可以使用`git commit --amend`来修改

> 5. 提交到远程仓库 `git push`
> 6. 撤销`push`操作，实际上无法撤销远程仓库，只能先撤销`commit`，再使用`git push --force`提交一遍

## 3. 关于分支
> 分支的作用在于多人开发而不互相干扰，大家从主分支上切一个自己的分支进行开发，完成后再合并回主分支

`常见指令`
> 1. 查看本地分支，`git branch`
> 2. 查看本地及远程分支，`git branch -a`
> 3. 查看本地分支及其追踪，`git branch -vv`
> 4. 创建新分支，`git branch [分支]`
> 5. 切换分支，`git checkout [分支名]`
> 6. 创建并切换分支，`git checkout -b [分支名]` 
> 5. 合并到当前分支，`git merge [目标分支]`

# git 更方便的工具

## 1. git flow
> git flow的作用在于对项目更细化的处理，使得随性的git变得规范化

`安装及使用`
> 1. 初始化`Git flow init` //初始化完成后，当前分支变为develop
> 2. 进行新功能开发`git flow feature start xxx`//该功能相当于创建了一个新功能分支
> 3. 完成新功能开发`git flow feature finish xxx`//该功能会把新功能分支合并到develop分支，然后删除新功能分支
> 4. 基于develop创建一个发布（release）分支`git flow feature release start xxx`
> 5. 完成一个发布分支`git flow feature release finish xxx`//将修改合并到master分支，同时合并回develop分支
> 6. 基于master创建一个紧急修改分支`git flow hotfix start xxx`
> 7. 完成一个紧急修改分支`git flow hotfix finish xxx`


## 2. commitlint
> 使用该插件可以方便提交，规范commit，以及能生成本地log文件

`安装及使用`
> 1. 使用vue的情况下，直接运行 `vue add commitlint`即可安装（依赖于`right-pad`，可能需要手动安装）
> 2. 使用`npm run cz`，即可执行`git add .`及`git commit`操作
> 3. 使用`npm run log`，即可生成日志

# git 模型

### 1. 个人使用的简单模型
> 个人使用时，一般两个分支足已，master用于保存稳定的发布版代码，develop用于保存开发中的代码
### 2. 公司使用的正式模型
> 公司使用时，一般由个人分支，测试分支，主分支，预发布分支，发布分支构成
> `个人分支`被用于个人使用，每个人有一个或多个，完成开发后会合并到测试分支中
> `测试分支`用于测试人员测试，检查无误后会合并到主分支中
> `主分支`被用于存放稳定的代码，不允许个人进行push，只允许从测试分支合并上去，当积累足够多的时候，合并到预发布分支上
> `预发布分支`测试稳定后，合并入发布分支
> `发布分支`用于稳定的发布

# git 安装及配置附录

## 1. git 安装
> - 建议使用腾讯软件管家进行下载，官网很慢
> - 安装时配置项有个设定默认编译器，建议切换成vscode

## 2. 配置邮箱用户名
> - `git config  --global user.name [你的目标用户名]`；
> - `git config  --global user.email [你的目标邮箱名]`;
> - 查看配置`git config --global --list`

## 3. 为当前设备配置 ssh 密钥
> 1. 生成：`ssh-keygen`
> 2. 获取：`cat  ~/.ssh/id_rsa.pub`
> 3. 将这串字符串复制下来，打开github的setting->ssh，粘贴进去，标题自己起一个，一般起设备名就行
