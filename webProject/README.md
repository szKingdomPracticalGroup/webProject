# webproject

> 前端的web端

git clone https://github.com/szKingdomPracticalGroup/CodeRepository.git
(期间输入对你的git用户名密码)
然后 
git checkout develop(这是为了进入develop分支)
(默认情况下，master分支是上线分支，是最稳定的，当然master，develop都是人为约定俗称的，develop分支一般为开发分支)
然后 git pull 拉取这个分支的代码
再
可能需要 cd ./webProject
然后npm install
最后npm run dev就可以运行了
还要注意的是，你不要直接在develop分支中开发，需要
git checkout -b '你的分支名'
这个就是在develop分支的代码基础上创建了一个分支

