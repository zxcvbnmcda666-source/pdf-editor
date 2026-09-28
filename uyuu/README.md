# PDF Editor Standalone

从 JustTools 中单独搬出的 PDF Editor。

包含完整 8 个 PDF 功能：

1. 合并
2. 分裂
3. 压缩
4. 转换（PDF ↔ 图片）
5. 注释
6. 编辑
7. 页面管理器
8. 签名

项目保留这些功能运行所需的 PDF 组件、Worker 和 UI 依赖；JustTools 中其他工具已排除。

## 本地运行

```bash
npm install
npm run dev
```

然后打开终端显示的本地地址。

## 构建

```bash
npm run build
npm run preview
```

PDF 文件处理主要在浏览器端完成，不需要上传到服务器。
