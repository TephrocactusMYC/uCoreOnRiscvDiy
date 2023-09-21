Object.assign(window.search, {"doc_urls":["index.html#ucore-on-risc-v","index.html#first-to-do","labminus1.html#lab负一","labminus1.html#进入正文","labminus1.html#如何选择你的环境","labminus1.html#vmware","labminus1.html#ubuntu22","labminus1.html#如何设置你的虚拟机","labminus1.html#要不要开虚拟化","labminus1.html#如何安装","labminus1.html#装上之后应该做什么","labminus1.html#如何自行解决问题","lab0.html#first-of-all","lab0.html#start","lab0.html#question","lab0.html#answer","lab0-5.html#lab05","lab0-5.html#note","lab0-5.html#how-to-debug","lab1.html#lab1","lab1.html#about-challenge"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":3,"title":3},"1":{"body":1,"breadcrumbs":1,"title":1},"10":{"body":0,"breadcrumbs":1,"title":0},"11":{"body":11,"breadcrumbs":1,"title":0},"12":{"body":31,"breadcrumbs":2,"title":1},"13":{"body":102,"breadcrumbs":2,"title":1},"14":{"body":28,"breadcrumbs":2,"title":1},"15":{"body":10,"breadcrumbs":2,"title":1},"16":{"body":0,"breadcrumbs":2,"title":1},"17":{"body":19,"breadcrumbs":2,"title":1},"18":{"body":1,"breadcrumbs":2,"title":1},"19":{"body":10,"breadcrumbs":2,"title":1},"2":{"body":0,"breadcrumbs":2,"title":1},"20":{"body":5,"breadcrumbs":2,"title":1},"3":{"body":0,"breadcrumbs":1,"title":0},"4":{"body":3,"breadcrumbs":1,"title":0},"5":{"body":2,"breadcrumbs":2,"title":1},"6":{"body":4,"breadcrumbs":2,"title":1},"7":{"body":0,"breadcrumbs":1,"title":0},"8":{"body":0,"breadcrumbs":1,"title":0},"9":{"body":1,"breadcrumbs":1,"title":0}},"docs":{"0":{"body":"2023年南开大学操作系统实验指北 注意！本指北不能完全替代指导手册，一切以指导手册为准！","breadcrumbs":"ABOUT » uCore on risc-v","id":"0","title":"uCore on risc-v"},"1":{"body":"在看这个指北之前，先去这个 仓库 给我点个STAR,一个年级也二百多人呢! :)","breadcrumbs":"ABOUT » FIRST TO DO","id":"1","title":"FIRST TO DO"},"10":{"body":"先做个快照！千万别反复安装虚拟机。。。","breadcrumbs":"lab负一 » 装上之后应该做什么？","id":"10","title":"装上之后应该做什么？"},"11":{"body":"建议，逐字逐句，逐个比特阅读下面两个文档。 How To Ask Questions The Smart Way Stop Ask Questions The Stupid Ways Public 还有问题咋办？问一下gpt，问一下百度、谷歌，这么多问题我都能在csdn和github issue里面搜到，相信你们也可以","breadcrumbs":"lab负一 » 如何自行解决问题","id":"11","title":"如何自行解决问题"},"12":{"body":"6.828 ref sudo apt install libsdl1.2-dev\nsudo apt install libtool-bin\nsudo apt install libglib2.0-dev\nsudo apt install libz-dev\nsudo apt install libpixman-1-dev 关于配置环境，我录了一个 视频 。我所使用的是UBUNTU22，具体设置如下 0-0","breadcrumbs":"lab0 » First of All!","id":"12","title":"First of All!"},"13":{"body":"在上面的视频之中，可能有人发现了问题，下面这句话当你退出当前的shell之后会失效。因此你需要把这句话也设置为环境变量，比如写入.bashrc(也许你需要把pwd改成你安装的路径) export PATH=$PWD/riscv32-softmmu:$PWD/riscv64-softmmu:$PATH START! cd lab0\nmake 0-1 then make qemu The shell should looks like: 0-2 then , in another shell make gdb if : riscv64-unknown-elf-gdb \\ -ex 'file bin/kernel' \\ -ex 'set arch riscv:rv64' \\ -ex 'target remote localhost:1234'\nriscv64-unknown-elf-gdb: error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory\nmake: *** [Makefile:177: gdb] Error 127 install it... ref if : riscv64-unknown-elf-gdb \\ -ex 'file bin/kernel' \\ -ex 'set arch riscv:rv64' \\ -ex 'target remote localhost:1234'\nriscv64-unknown-elf-gdb: error while loading shared libraries: libpython2.7.so.1.0: cannot open shared object file: No such file or directory\nmake: *** [Makefile:177: gdb] Error 127 install it... ref then,make gdb again! lab0-3 FINISHI!","breadcrumbs":"lab0 » START","id":"13","title":"START"},"14":{"body":"实验指导书里有这样两条命令 $qemu-system-riscv64 \\\n-machine virt \\\n-nographic \\\n-bios default \\\n-device loader,file=$(UCOREIMG),addr=0x80200000\\\n-s -S riscv64-unknown-elf-gdb \\\n-ex 'file bin/kernel' \\\n-ex 'set arch riscv:rv64' \\\n-ex 'target remote localhost:1234' 直接运行为什么会报错？ UCOREIMG:未找到命令","breadcrumbs":"lab0 » question","id":"14","title":"question"},"15":{"body":"你没有执行make，这时候那个ucoreimg都没有，自然不会成功。先make，这时候在bin下面会有ucoreimg make了，还是不行。很简单，$(UCOREIMG)是个变量，你在shell里运行，shell会找这个变量。 shell的变量会存在诸如：/etc/environment、.bashrc等地方，你在shell之中输入env可以看见所有shell能找到的变量。 可是shell里没这个东西啊，没人定义，自然就报错了 那么，实验指导书里这两个命令在哪呢？ 在makefile里 lab0-4.png ucoreimg也在这里被定义了 lab0-5.png 到此，解释了我们上面为什么运行make qemu和make gdb而不是实验指导书里那几个很长的命令的原因了","breadcrumbs":"lab0 » ANSWER:","id":"15","title":"ANSWER:"},"16":{"body":"","breadcrumbs":"lab0.5 » lab0.5","id":"16","title":"lab0.5"},"17":{"body":"lab0 is not over,bucause you could find that make gdb connect time out! lab0-3 you should make debug lab0-7 then lab0-6 Now you can start lab0.5!","breadcrumbs":"lab0.5 » NOTE","id":"17","title":"NOTE"},"18":{"body":"加了一个怎么调试的视频，按理说不应该有人需要这个视频的，此处应该有一个流汗黄豆的表情 在看视频之前，视频有几处口误，比如应该不太需要看c语言的汇编代码。重点是boot的过程，这一过程有一部分在opensbi的源代码之中，建议还是看看，opensbi 有详细的文档，看不懂先看文档，再搜索，最后再问 gpt。","breadcrumbs":"lab0.5 » how to debug","id":"18","title":"how to debug"},"19":{"body":"Result of exercise 2 looks like: lab1-result You should use make grade lab1.png","breadcrumbs":"lab1 » lab1","id":"19","title":"lab1"},"2":{"body":"如果会配环境，请直接跳过正文部分，直接看本章最后“如何自行解决问题”。","breadcrumbs":"lab负一 » lab负一","id":"2","title":"lab负一"},"20":{"body":"Very easy... I think EVERYONE should complete it!","breadcrumbs":"lab1 » About challenge","id":"20","title":"About challenge"},"3":{"body":"很好，恭喜大家来到这个本来只有文科生才会需要的lab负一。","breadcrumbs":"lab负一 » 进入正文","id":"3","title":"进入正文"},"4":{"body":"在不会linux命令行的情况下，别挑战自己用 wsl 了。“没那个能力知道吧！” 因此在此推荐vmware+ubuntu22","breadcrumbs":"lab负一 » 如何选择你的环境","id":"4","title":"如何选择你的环境"},"5":{"body":"首先，你需要一个17，pro。一定要用pro！ 好处在于可以有快照。 从哪下载？自己csdn搜。","breadcrumbs":"lab负一 » vmware","id":"5","title":"vmware"},"6":{"body":"直接百度ubuntu，然后进入官网下载。 你说用ubuntu14 16 18行不行？不知道，我没试过。。。","breadcrumbs":"lab负一 » ubuntu22","id":"6","title":"ubuntu22"},"7":{"body":"本质上，只要不蓝屏，你内存越大越好，磁盘越大越好，核数越多越好。总之拉满没坏处。","breadcrumbs":"lab负一 » 如何设置你的虚拟机","id":"7","title":"如何设置你的虚拟机"},"8":{"body":"虚拟化开了以后你的虚拟机会变得流畅，这时候ubuntu终于有1%的win7手感了。 注意，vmware开启虚拟化会和windows自己的虚拟化冲突，解决这一过程较为繁琐而且容易把自己电脑搞坏了，不会就算了。","breadcrumbs":"lab负一 » 要不要开虚拟化","id":"8","title":"要不要开虚拟化"},"9":{"body":"自己百度，csdn上这种文章有很多。 简而言之，选好系统和磁盘位置，一路默认下来，基本上不会有什么问题。","breadcrumbs":"lab负一 » 如何安装","id":"9","title":"如何安装"}},"length":21,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"13":{"tf":1.4142135623730951}}},"1":{"2":{"7":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"6":{"tf":1.0}}},"7":{"df":0,"docs":{},"，":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"。":{"df":0,"docs":{},"一":{"df":0,"docs":{},"定":{"df":0,"docs":{},"要":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}}}}},"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}}},"2":{"0":{"2":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"13":{"tf":1.0},"19":{"tf":1.0}}},"3":{"df":2,"docs":{"13":{"tf":1.0},"17":{"tf":1.0}}},"4":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}},"5":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}},"6":{".":{"8":{"2":{"8":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"17":{"tf":1.0}}},"7":{"df":1,"docs":{"17":{"tf":1.0}}},"a":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":2.23606797749979}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}}}}},"df":1,"docs":{"12":{"tf":1.0}}},"o":{"df":1,"docs":{"14":{"tf":1.0}}}}},"c":{"d":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"20":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"20":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"d":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":2,"docs":{"17":{"tf":1.0},"18":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":1,"docs":{"12":{"tf":2.0}},"i":{"c":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"20":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":2,"docs":{"13":{"tf":2.0},"14":{"tf":1.0}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":2.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"20":{"tf":1.0}}}}}}}},"x":{"df":2,"docs":{"13":{"tf":2.449489742783178},"14":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"13":{"tf":2.449489742783178},"14":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"12":{"tf":1.0}}}}}}},"g":{"d":{"b":{"df":4,"docs":{"13":{"tf":2.8284271247461903},"14":{"tf":1.0},"15":{"tf":1.0},"17":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}},"r":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":2.23606797749979},"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"l":{"a":{"b":{"0":{".":{"5":{"df":2,"docs":{"16":{"tf":1.0},"17":{"tf":1.0}}},"df":0,"docs":{}},"df":3,"docs":{"13":{"tf":1.4142135623730951},"15":{"tf":1.4142135623730951},"17":{"tf":2.0}}},"1":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"2":{".":{"0":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{".":{"5":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"2":{".":{"7":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{".":{"1":{".":{"0":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"s":{"d":{"df":0,"docs":{},"l":{"1":{".":{"2":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"z":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"a":{"d":{"df":1,"docs":{"13":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{",":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"=":{"$":{"(":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{")":{",":{"a":{"d":{"d":{"df":0,"docs":{},"r":{"=":{"0":{"df":0,"docs":{},"x":{"8":{"0":{"2":{"0":{"0":{"0":{"0":{"0":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{":":{"1":{"2":{"3":{"4":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"13":{"tf":1.0},"19":{"tf":1.0}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":4,"docs":{"13":{"tf":2.23606797749979},"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"19":{"tf":1.0}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"15":{"tf":1.0}},"e":{":":{"1":{"7":{"7":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"17":{"tf":1.0}}}},"w":{"df":1,"docs":{"17":{"tf":1.0}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{",":{"b":{"df":0,"docs":{},"u":{"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"=":{"$":{"df":0,"docs":{},"p":{"df":0,"docs":{},"w":{"d":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"v":{"3":{"2":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":2,"docs":{"13":{"tf":1.0},"14":{"tf":1.0}},"和":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.4142135623730951}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"0":{"tf":1.0}},"v":{"6":{"4":{"df":2,"docs":{"13":{"tf":2.0},"14":{"tf":1.4142135623730951}}},"df":0,"docs":{}},":":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"6":{"4":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"s":{"df":1,"docs":{"14":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"13":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{":":{"$":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{},"w":{"d":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"v":{"6":{"4":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"17":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"11":{"tf":1.0}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"12":{"tf":2.23606797749979}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{",":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"20":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"1":{"4":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"2":{"2":{"df":2,"docs":{"12":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":2,"docs":{"14":{"tf":1.0},"15":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":2,"docs":{"13":{"tf":2.0},"14":{"tf":1.0}}}}}}}},"s":{"df":1,"docs":{"19":{"tf":1.0}}}},"v":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"20":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"+":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"2":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"0":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"13":{"tf":1.4142135623730951}}},"1":{"2":{"7":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"6":{"tf":1.0}}},"7":{"df":0,"docs":{},"，":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"。":{"df":0,"docs":{},"一":{"df":0,"docs":{},"定":{"df":0,"docs":{},"要":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}}}}},"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}}},"2":{"0":{"2":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"13":{"tf":1.0},"19":{"tf":1.0}}},"3":{"df":2,"docs":{"13":{"tf":1.0},"17":{"tf":1.0}}},"4":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}},"5":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}},"6":{".":{"8":{"2":{"8":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"17":{"tf":1.0}}},"7":{"df":1,"docs":{"17":{"tf":1.0}}},"a":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":2.23606797749979}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}}}}},"df":1,"docs":{"12":{"tf":1.0}}},"o":{"df":1,"docs":{"14":{"tf":1.0}}}}},"c":{"d":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"20":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"20":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"d":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":2,"docs":{"17":{"tf":1.0},"18":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":1,"docs":{"12":{"tf":2.0}},"i":{"c":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"20":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":2,"docs":{"13":{"tf":2.0},"14":{"tf":1.0}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":2.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"20":{"tf":1.0}}}}}}}},"x":{"df":2,"docs":{"13":{"tf":2.449489742783178},"14":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"13":{"tf":2.449489742783178},"14":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"12":{"tf":1.4142135623730951}}}}}}},"g":{"d":{"b":{"df":4,"docs":{"13":{"tf":2.8284271247461903},"14":{"tf":1.0},"15":{"tf":1.0},"17":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}},"r":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":2.23606797749979},"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"l":{"a":{"b":{"0":{".":{"5":{"df":3,"docs":{"16":{"tf":1.7320508075688772},"17":{"tf":1.4142135623730951},"18":{"tf":1.0}}},"df":0,"docs":{}},"df":5,"docs":{"12":{"tf":1.0},"13":{"tf":1.7320508075688772},"14":{"tf":1.0},"15":{"tf":1.7320508075688772},"17":{"tf":2.0}}},"1":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":2,"docs":{"19":{"tf":2.0},"20":{"tf":1.0}}},"df":10,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"2":{".":{"0":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{".":{"5":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"2":{".":{"7":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{".":{"1":{".":{"0":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"s":{"d":{"df":0,"docs":{},"l":{"1":{".":{"2":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"z":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"a":{"d":{"df":1,"docs":{"13":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{",":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"=":{"$":{"(":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{")":{",":{"a":{"d":{"d":{"df":0,"docs":{},"r":{"=":{"0":{"df":0,"docs":{},"x":{"8":{"0":{"2":{"0":{"0":{"0":{"0":{"0":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{":":{"1":{"2":{"3":{"4":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"13":{"tf":1.0},"19":{"tf":1.0}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":4,"docs":{"13":{"tf":2.23606797749979},"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"19":{"tf":1.0}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"15":{"tf":1.0}},"e":{":":{"1":{"7":{"7":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}}},"w":{"df":1,"docs":{"17":{"tf":1.0}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{",":{"b":{"df":0,"docs":{},"u":{"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"=":{"$":{"df":0,"docs":{},"p":{"df":0,"docs":{},"w":{"d":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"v":{"3":{"2":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":2,"docs":{"13":{"tf":1.0},"14":{"tf":1.0}},"和":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"14":{"tf":1.4142135623730951}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.4142135623730951}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"v":{"6":{"4":{"df":2,"docs":{"13":{"tf":2.0},"14":{"tf":1.4142135623730951}}},"df":0,"docs":{}},":":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"6":{"4":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"s":{"df":1,"docs":{"14":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"13":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{":":{"$":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{},"w":{"d":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"v":{"6":{"4":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}},"t":{"df":2,"docs":{"13":{"tf":1.7320508075688772},"17":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"11":{"tf":1.0}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"12":{"tf":2.23606797749979}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{",":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"20":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"1":{"4":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"2":{"2":{"df":2,"docs":{"12":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":2,"docs":{"14":{"tf":1.0},"15":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":2,"docs":{"13":{"tf":2.0},"14":{"tf":1.0}}}}}}}},"s":{"df":1,"docs":{"19":{"tf":1.0}}}},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"20":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"+":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"2":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"20":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"18":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"12":{"tf":1.0}}}}}}},"l":{"a":{"b":{"0":{".":{"5":{"df":1,"docs":{"16":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"df":1,"docs":{"19":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"2":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":1,"docs":{"0":{"tf":1.0}},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"AND","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});