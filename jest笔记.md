# 安装

    1. npm init
    2. npm i jest

# 配置

    1. 在package.json中修改test为jest
    2. 可以在package.json中添加"jest"来添加配置，或者在根目录中新建jest.config.js来配置
    3. 使用时需要新建一个文件夹，测试文件命名格式为*.test.js/ts
    4. 在根目录使用npm run test进行测试

# 简单使用

### 普通匹配器

    expect(function(arg)).toBe("result")
