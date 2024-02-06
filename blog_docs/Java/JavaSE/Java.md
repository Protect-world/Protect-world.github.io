#  黑马Java笔记		 		



#### Day01

##### 1:计算机概述(了解)

###### 	(1)计算机

###### 	(2)计算机硬件

###### 	(3)计算机软件

​		系统软件：window,linux,mac
​		应用软件：qq,yy,飞秋

###### 	(4)软件开发(理解)

​		软件：是由数据和指令组成的。(计算器)
​		开发：就是把软件做出来。
​		如何实现软件开发呢?
​			就是使用开发工具和计算机语言做出东西来

###### 	(5)语言

​		自然语言：人与人交流沟通的
​		计算机语言：人与计算机交流沟通的
​			C,C++,C#,Java
​	(6)人机交换
​		图形界面：操作方便只管
​		DOS命令：需要记忆一些常见的命令

##### 2:键盘功能键的认识和快捷键(掌握)

###### 	(1)功能键的认识

​		tab
​		shift
​		ctrl
​		alt
​		windos
​		空格
​		上下左右
​		回车
​		截图

###### 	(2)快捷键

​		全选	Ctrl+A
​		复制	Ctrl+C
​		粘贴	Ctrl+V
​		剪切	Ctrl+X
​		撤销	Ctrl+Z
​		保存	Ctrl+S

##### 3:常见的DOS命令(掌握)

###### 	(1)常见的如下

​		盘符的切换
​			d:回车
​		目录的进入
​			cd javase
​			cd javase\day01\code
​		目录的回退
​			cd..
​			cd\
​		清屏
​			cls
​		退出
​			exit

###### 	(2)其他的几个(了解)

​		创建目录
​		删除目录
​		创建文件
​		删除文件
​		显示目录下的内容
​		删除带内容的目录

##### 4:Java语言概述(了解)

###### 	(1)Java语言的发展史

​		Java之父：詹姆斯.高斯林

​		JDK1.4.2
​	    JDK5
​	    JDK7

###### (2)Java语言的特点

​	有很多小特点，重点有两个开源，跨平台

###### (3)Java语言是跨平台的，请问是如何保证的呢?(理解)

​	我们是通过翻译的案  例讲解的。
​	
​	针对不同的操作系统，提高不同的jvm来实现的。

###### (4)Java语言的平台

​	JavaSE
​	JavaME--Android
​	JavaEE

##### 5:JDK,JRE,JVM的作用及关系(掌握)

###### 	(1)作用

​		JVM：保证Java语言跨平台
​		JRE：Java程序的运行环境
​		JDK：Java程序的开发环境

###### 	(2)关系

​		JDK：JRE+工具
​		JRE：JVM+类库

##### 6:JDK的下载,安装,卸载(掌握)

###### 	(1)下载到官网。

​		A:也可以到百度搜索即可。
​		B:我给你。

###### 	(2)安装

​		A:绿色版	解压就可以使用
​		B:安装版	必须一步一步的安装，一般只要会点击下一步即可

​	//**注意：
​		建议所有跟开发相关的软件都不要安装在有中文或者空格的目录下。**//

###### 	(3)卸载

​	A:绿色版	直接删除文件夹
​	B:安装版	
​		a:控制面板 -- 添加删除程序
​		b:通过专业的软件卸载工具。(比如360的软件管家卸载)

##### 7:第一个程序：HelloWorld案例(掌握)

​	

```java
class HelloWorld {//类的声明//
 public static void main(String[] args) {
     //主方法/
			System.out.println("HelloWorld");
            //输出语句//
		}
	}
```

###### 	(1)程序解释：

​		A:Java程序的最基本单位是类，所以我们要定义一个类。
​			格式：class 类名
​			举例：class HelloWorld
​		B:在类中写内容的时候，用大括号括起来。
​		C:Java程序要想执行，必须有main方法。
​			格式：public static void main(String[] args)
​		D:要指向那些东西呢，也用大括号括起来。
​		E:你要做什么呢?今天我们仅仅做了一个简单的输出
​			格式：System.out.println("HelloWorld");
​			注意：""里面的内容是可以改动的。
​	

###### 	(2)Java程序的开发执行流程：

​		A:编写java源程序(.java)
​		B:通过javac命令编译生成.class文件
​		C:通过java命令运行.class文件

##### 8:常见的问题(掌握)

###### 	(1)扩展名被隐藏

​		如何找到：工具--文件夹选项--查看--去除隐藏扩展名的那个勾勾

###### 	(2)我要求文件名称和类名一致。

​		实际上不这样做也是可以的。
​		但是，注意：
​			javac后面跟的是文件名+扩展名
​			java后面跟的类名不带扩展名

###### 	(3)Java语言严格区分大小写，请注意。

​		 还有就是单词不要写错了。

###### 	(4)见到非法字符: \65307肯定是中文问题。

​		我们写程序要求标点符号必须全部是英文状态。

###### 	(5)括号的配对问题。

​		一般来说，括号都是成对出现的。

###### 	(6)遇到

​		在类 HelloWorld 中找不到主方法, 请将主方法定义为
​		肯定是主方法的格式问题。

##### 9:path环境变量(掌握)

###### 	(1)path环境变量的作用

​		保证javac命令可以在任意目录下运行。若不配置path环境变量，则只能在jdk目录下的bin目录里边写代码
​		同理可以配置qq等

###### 	(2)path配置的两种方案：

​		A:方案1(了解)
​		B:方案2
​			找到环境变量的位置，在系统变量里面
​			新建：
​				变量名：JAVA_HOME
​				变量值：C:\Program Files\Java\jdk1.8.0_144
​			修改：
​				变量名：Path
​				变量值：%JAVA_HOME%\bin;以前的内容

##### 10:classpath环境变量(理解)

###### 	(1)classpath环境变量的作用

​		保证class文件可以在任意目录下运行

###### 	(2)classpath环境变量的配置

​		找到环境变量的位置，在系统变量里面
​		新建：
​			变量名：classpath

​            变量值：

.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar；       

##### 11：附图：

​      ![Java语言跨平台原理图解](\img\1.初识\Java语言跨平台原理图解.png)



![大纲](\img\1.初识\大纲.png)



![运行步骤](\img\1.初识\运行步骤.png)



#### Day02

##### 1:关键字(掌握)

###### 	(1)被Java语言赋予特定含义的单词

###### 	(2)特点：

​		全部小写。

###### 	(3)注意事项：

​		A:goto和const作为保留字存在。
​		B:类似于Notepad++这样的高级记事本会对关键字有特殊颜色标记

##### 2:标识符(掌握)

###### 	(1)就是给类，接口，方法，变量等起名字的字符序列

###### 	(2)组成规则：

​		A:英文大小写字母
​		B:数字
​		C:$和_

###### 	(3)注意事项：

​		A:不能以数字开头
​		B:不能是java中的关键字
​		C:区分大小写

###### 	(4)常见的命名规则(见名知意)

​		A:包	全部小写
​			单级包：小写
​				举例：liuyi,com
​			多级包：小写，并用.隔开
​				举例：cn.itcast,com.baidu				

​		B:类或者接口

​			一个单词：首字母大写
​				举例：Student,Demo
​			多个单词：每个单词首字母大写
​				举例：HelloWorld,StudentName
​		C:方法或者变量
​			一个单词：首字母小写
​				举例：name,main
​			多个单词：从第二个单词开始，每个单词首字母大写
​				举例：studentAge,showAllNames()
​		D:常量
​			全部大写
​			一个单词：大写
​				举例：PI
​			多个单词：大写，并用_隔开
​				举例：STUDENT_MAX_AGE

##### 3:注释(掌握)

###### 	(1)就是对程序进行解释说明的文字

###### 	(2)分类：

​		A:单行注释	//
​		B:多行注释	/**/
​		C:文档注释(后面讲) /** */ (3)把HelloWorld案例写了一个带注释的版本。

​		后面我们要写一个程序的过程。
​		需求：
​		分析：
​		实现：
​		代码体现：

###### 	(4)注释的作用

​		A:解释说明程序，提高了代码的阅读性。
​		B:可以帮助我们调试程序。
​			后面我们会讲解一个更高端的一个调试工具

##### 4:常量(掌握)

###### 	(1)在程序执行的过程中，其值不发生改变的量

###### 	(2)分类：

​		A:字面值常量
​		B:自定义常量(后面讲)

###### 	(3)字面值常量

​		A:字符串常量 "hello"
​		B:整数常量	12,23
​		C:小数常量	12.345
​		D:字符常量	'a','A','0'
​		E:布尔常量	true,false
​		F:空常量	null(后面讲)

###### 	(4)在Java中针对整数常量提供了四种表现形式

​		A:二进制	由0，1组成。以0b开头。
​		B:八进制	由0，1，...7组成。以0开头。
​		C:十进制	由0，1，...9组成。整数默认是十进制。
​		D:十六进制	由0，1，...9,a,b,c,d,e,f(大小写均可)组成。以0x开头。

##### 5:进制转换(了解)

###### 	(1)其他进制到十进制

​		系数：就是每一个位上的数值
​		基数：x进制的基数就是x
​		权：对每一个位上的数据，从右，并且从0开始编号，对应的编号就是该数据的权。

​		结果：系数*基数^权次幂之和。

###### (2)十进制到其他进制

​	除基取余，直到商为0，余数反转。

###### (3)进制转换的快速转换法

​	A:十进制和二进制间的转换
​		8421码。
​	B:二进制到八进制，十六进制的转换

###### (4)有符号的数据表示法

​	*原码，反码，补码*

例：以7的二进制111为代表：

​	原 码：

​				正数的原码最高位是0

​			    负数的原码最高位为1

​				其他的是数值位

​			符号位					数值位

+7			0							0000111	

-7			1							 0000111



​	反码：

​				正数的反码和原码相同

​			    负相同，数值位取反，就是1变0，0变1

​			符号位					数值位

+7			0							0000111	

-7			1							 1111000



​	补码：

​				正数的补码和原码相同

​			    负数的补码是在反码的基础上加1

​			符号位					数值位

+7			0							0000111	

-7			1							 1111001

例： A：已知某数X的原码为10110100B，试求X的补码和反码。

​						符号位			数值位

​	原码：			1				  0110100	

​	反码：			1				  1001011

​	补码：			1				  1001100

​		B：已知某数X的补码11101110B，试求其原码。

​						符号位			数值位

​	补码：			1				  1101110

​	反码：			1				  1101101

​	原码：			1				  0010010

##### 6:变量(掌握)

###### 	(1)在程序的执行过程中，其值在某个范围内可以发生改变的量

###### 	(2)变量的定义格式：

​		A:数据类型 变量名 = 初始化值;
​		B:数据类型 变量名;
​		  变量名 = 初始化值;

##### 7:数据类型(掌握)

###### 	(1)Java是一种强类型语言，针对每种数据都提供了对应的数据类型。

###### 	(2)分类：

​		A:基本数据类型：4类8种
​		B:引用数据类型：类，接口，数组。

###### 	(3)基本数据类型

​		A:整数			占用字节数
​			byte			1
​			short			2
​			int 			4
​			long			8
​		B:浮点数
​			float			4
​			double			8
​		C:字符
​			char			2
​		D:布尔
​			boolean			1		

​	\\\**注意：
​		整数默认是int类型，浮点数默认是double。
​		长整数要加L或者l。
​		单精度的浮点数要加F或者f。*\\\\

##### 8:数据类型转换(掌握)

###### 	(1)boolean类型不参与转换

###### 	(2)默认转换

​		A:从小到大
​		B:byte,short,char -- int -- long -- float -- double
​		C:byte,short,char之间不相互转换，直接转成int类型参与运算。

###### 	(3)强制转换

​	A:从大到小
​	B:可能会有精度的损失，一般不建议这样使用。
​	C:格式：
​		目标数据类型 变量名 = (目标数据类型) (被转换的数据);

###### 	(4)思考题和面试题：

​	A:下面两种方式有区别吗?
​		float f1 = 12.345f;
​		float f2 = (float)12.345;
​	B:下面的程序有问题吗，如果有，在哪里呢?
​		byte b1 = 3;
​		byte b2 = 4;
​		byte b3 = b1 + b2;\*类型提升，问题所在*\
​		byte b4 = 3 + 4;

\\*解答：byte b3=b1+b2;有问题，原因在于相加时是int类型转换为byte类型，即大变小，故而报错;解决方法：用下面的byte b4=3+4即正确*\

​	C:下面的操作结果是什么呢?
​		byte b = (byte)130;\**51颗**\
​	D:字符参与运算
​		是查找ASCII里面的值
​		'a'		97
​		'A'		65
​		'0'		48
​					System.out.println('a');
​		System.out.println('a' + 1);
​	E:字符串参与运算
​		这里其实是字符串的连接
​		
​		System.out.println("hello"+'a'+1);\\*helloa1*\
​		System.out.println('a'+1+"hello");\*98hello*\
​		System.out.println("5+5="+5+5);\\**5+5=55*\
​		System.out.println(5+5+"=5+5");\**10=5+5*

注意“\\*java 中的字符char可以储存一个中文汉字码？为什么？*\

 \\**答：可以，因为java语言中字符占用两个字节。*\\

#### Day03

##### 1:运算符(掌握)

###### 	(1)算术运算符

​		A:+,-,*,/,%,++,--
​		B:+的用法
​			a:加法
​			b:正号
​			c:字符串连接符
​		C:/和%的区别
​			数据做除法操作的  时候，/取得是商，%取得是余数
​		D:++和--的用法
​			a:他们的作用是自增或者自减
​			b:使用
​					单独使用：

​					/*放在操作数据的前面和后面效果一样。
​					a++或者++a效果一样。*/*
​				参与操作使用：
​					放在操作数的前面：先自增或者自减，再参与操作
​						int a = 10;
​						int b = ++a;
​					放在操作数的后面：先参与操作，再自增或者自减
​						int a = 10;
​						int b = a++;

###### 	(2)赋值运算符

​		A:=,+=,-=,*=,/=,%=等
​		B:=叫做赋值运算符，也是最基本的赋值运算符
​			int x = 10; 把10赋值给int类型的变量x。
​		C:扩展的赋值运算符的特点
​			隐含了自动强制转换。

​				面试题：
​				short s = 1;
​				s = s + 1;
​				short s = 1;
​				s += 1;
​			请问上面的代码哪个有问题?

/*答： 第一个有问题，第二个没有问题，原因：

  扩展的赋值运算符隐含了一个强制类型转换。

​			/*s +=1;不是等价于s = s+1而是等价于s=（s的数据类型）（s+1）；*/

###### (3)比较运算符

​	A:==,!=,>,>=,<,<=
​	B:无论运算符两端简单还是复杂最终结果是boolean类型。
​	C:千万不要把==写成了=

###### (4)逻辑运算符

​	A:&,|,^,!,&&,||
​	B:逻辑运算符用于连接boolean类型的式子
​	C:结论
​		&:有false则false
​		|:有true则true
​		^:相同则false，不同则true。
​			情侣关系。
​		!:非true则false，非false则true
​		
​		&&:结果和&是一样的，只不过有短路效果。左边是false，右边不执行。
​		||:结果和|是一样的，只不过有短路效果。左边是true，右边不执行。

###### (5)位运算符(了解)

​	A:^的特殊用法
​		一个数据针对另一个数据位异或两次，该数不变
​	B:面试题
​		a:请实现两个变量的交换
​			采用第三方变量
​			用位异或运算符
​				左边a,b,a
​				右边a^b
​		b:请用最有效率的方式计算出2乘以8的结果
​			2<<3

```java
例/*
	<<:左移	左边最高位丢弃，右边补齐0
	>>:右移	最高位是0，左边补齐0；最高为是1，左边补齐1
	>>>:无符号右移 无论最高位是0还是1，左边补齐0
	
	面试题：
		请用最有效率的方式写出计算2乘以8的结果?
			2 * 8
			
			2 << 3

*/
class OperatorDemo3 {
	public static void main(String[] args) {
		//<< 把<<左边的数据乘以2的移动次幂
		System.out.println(3 << 2); //3*2^2 = 3*4 = 12;
	
		//>> 把>>左边的数据除以2的移动次幂
		System.out.println(24 >> 2); //24 / 2^2 = 24 / 4 = 6
		System.out.println(24 >>> 2);
		
		System.out.println(-24 >> 2); 
		System.out.println(-24 >>> 2);
	}
}
/*
	计算出3的二进制：11
		00000000 00000000 00000000 00000011
	(00)000000 00000000 00000000 0000001100
		
	>>的移动：	
	计算出24的二进制：11000
		原码：10000000 00000000 00000000 00011000
		反码：11111111 11111111 11111111 11100111
		补码：11111111 11111111 11111111 11101000
		
		11111111 11111111 11111111 11101000
		1111111111 11111111 11111111 111010(00) 补码
		
		补码：1111111111 11111111 11111111 111010
		反码：1111111111 11111111 11111111 111001
		原码：1000000000 00000000 00000000 000110
		
		结果：-6
		
	>>>的移动：
		计算出24的二进制：11000
		原码：10000000 00000000 00000000 00011000
		反码：11111111 11111111 11111111 11100111
		补码：11111111 11111111 11111111 11101000
		
		11111111 11111111 11111111 11101000
		0011111111 11111111 11111111 111010(00)
		
		结果：
*/
```



###### (6)三元运算符

​	A:格式
​		**比较表达式?表达式1:表达式2;**
​	B:执行流程：
​		首先计算比较表达式的值，看是true还是false。
​		如果是true，表达式1就是结果。
​		如果是false，表达式2就是结果。
​	C:案例：
​		a:比较两个数据是否相等
​		b:获取两个数据中的最大值
​		c:获取三个数据中的最大值

##### 2:键盘录入(掌握)

###### 	(1)实际开发中，数据是变化的，为了提高程序的灵活性，我们加入键盘录入数据。

###### 	(2)如何实现呢?目前就记住

​		A:导包
​			import java.util.Scanner;
​			位置：在class的上边
​		B:创建对象
​			Scanner sc = new Scanner(System.in);
​		C:获取数据
​			int x = sc.nextInt();
​	(3)把三元运算符的案例加入键盘录入改进。

##### 3:流程控制语句

​	(1)顺序结构 从上往下，依次执行
​	(2)选择结构	按照不同的选择，执行不同的代码
​	(3)循环结构 做一些重复的代码

##### 4:if语句(掌握)

###### 	(1)三种格式

​		A:格式1
​			if(比较表达式) {
​				语句体;
​			}
​			执行流程：
​			判断比较表达式的值，看是true还是false
​			如果是true，就执行语句体
​			如果是false，就不执行语句体	
​	B:格式2
​		if(比较表达式) {
​			语句体1;
​		}else {
​			语句体2;
​		}
​		
​		执行流程：
​			判断比较表达式 的值，看是true还是false
​			如果是true，就执行语句体1
​			如果是false，就执行语句体2
​	C:格式3
​		if(比较表达式1)  {
​			语句体1;
​		}else if(比较表达式2){
​			语句体2;
​		}
​		...
​		else {
​			语句体n+1;
​		}
​		
​		执行流程：
​			判断比较表达式1的值，看是true还是false
​			如果是true，就执行语句体1
​			如果是false，就继续判断比较表达式2的值，看是true还是false
​			如果是true，就执行语句体2
​			如果是false，就继续判断比较表达式3的值，看是true还是false
​			...
​			如果都不满足，就执行语句体n+1

​			![if语句格式3](\img\2.语句\if语句格式3.png)

(2)注意事项

​	A:比较表达式无论简单还是复杂，结果是boolean类型
​	B:if语句控制的语句体如果是一条语句，是可以省略大括号的；如果是多条，不能省略。
​		建议：永远不要省略。
​	C:一般来说，有左大括号，就没有分号，有分号，就没有左大括号。
​	D:else后面如果没有if，是不会出现比较表达式的。
​	E:三种if语句其实都是一个语句，只要有一个执行，其他的就不再执行。

###### (3)案例：

​	A:比较两个数是否相等

```java
import java.util.Scanner;

public class IFTest_01 {
	public static void main(String[] args){
		  Scanner sc=new Scanner(System.in);
		      //创建对象
		      System.out.println("输入第一个数");
		  int x=sc.nextInt();
		      //获取数据x
		      System.out.println("输入第二个数");
		  int y=sc.nextInt();
		      //获取数据y
		     if(x==y){
		         System.out.println("x等于y");
		     }else {
		             	System.out.println("x不等于y");
		         }
		     }
		  
		}
```

​	B:获取两个数中的最大值

```java
import java.util.Scanner;
class IFTest_02{
    public static void main(String[] args){
        Scanner sc=new Scanner (system.in);
    	System.out.println("输入第一个数字");
        int x=sc nextInt();
        //获取数据x
        System.out.println("输入第二个数字");
        int y=sc nextInt();
        //获取数据y
  	/*方法一：利用if函数*/
        int max;
        if(x>y){
            max=x;
        }  
  		else{
            max=y;
        }  
    	System.out.println("max="+max);
    }
}
	/*方法二：利用三目运算符*/
		int z=(x>y)?x:y;
		System.out.println("z="+z);
```

​	C:获取三个数中的最大值(if语句的嵌套)

```java
import java.util.Scanner;
class IFTest_03{
    public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    //创建键盘录入对象    
   System.out.println("输入你的考试成绩");
        int x=sc.nextInt();
        //获取数据x
   System.out.println("输入你的考试成绩");
        int y=sc.nextInt();
        //获取数据y
   System.out.println("输入你的考试成绩");
        int z=sc.nextInt();
        //获取数据z
    if(x>y){
        	if(x>z){
                max=x;}
        	else{
                max=z;}
    }		else{
            if(y>z){
                max=y;}
            else{
                max=z;}
            }
   
        System.out.println("max="+max);
    }
}
```

​	D:根据成绩输出对应的等级

```java
import java.util.Scanner;
class IFTest_04{
    public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    //创建键盘录入对象    
   System.out.println("输入你的考试成绩");
        int score=sc.nextInt();
        //获取数据score
    if(score<0 || score>100){
        System.out.println("你输入的成绩有误，请重输");
    }
        else if(score>=90 && score<=100){
        System.out.println("优秀")；
    }else if(score>=70 && score<=80){
        System.out.println("良好")；}
        else if(score>=60 && score<=70){
         System.out.println("及格")；
     
     }
     }
    }
        
    

    
```

​	E:根据月份，输出对应的季节

```java
import java.util.Scanner;
class IFTest_05{
    public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    //创建键盘录入对象    
   System.out.println("输入一个月份");
        int month=sc.nextInt();
        //获取数据month
    if(month<0 || month>12){
        System.out.println("你输入的月份有误，请重输");
    }
        else if(month>=3 && moonth<=5){
        System.out.println("春季")；
    }else if(month>=6 && month<=8){
        System.out.println("夏季")；}
        else if(month>=9 && month<=11){
         System.out.println("秋季");
        else {
         System.out.println("冬季");
        }
     
     }
     }
    }
```

​	F:根据x计算对应y的值并输出

###### (4)三元运算符和if语句第二种格式的关系

​	所有的三元运算符能够实现的，if语句的第二种格式 都能实现。
​	反之不成立。
​	
​	如果if语句第二种格式控制的语句体是输出语句，就不可以。
​	因为三元运算符是一个运算符，必须要有一个结果返回，不能是一个输出语句。

 

#### Day04

##### 1:switch语句(掌握)

###### 	(1)格式：

​		switch(表达式) {
​			case 值1:
​				语句体1;
​				break;
​			case 值2:
​				语句体2;
​				break;
​			...
​			default:
​				语句体n+1;
​				break;
​		}
​		

​	格式解释说明：
​		switch:说明这是switch语句。
​		表达式:可以是byte,short,int,char
​			JDK5以后可以是枚举
​			JDK7以后可以是字符串
​		case:后面的值就是要和表达式进行比较的值
​		break:表示程序到这里中断，跳出switch语句
​		default:如果所有的情况都不匹配,就执行这里,相当于if语句中的else

![选择结构（switch语句）结构](\img\2.语句\选择结构（switch语句）结构.png)

###### (2)面试题

​	switch语句的表达式可以是byte吗?可以是long吗?可以是String吗?
​		可以,不可以,JDK7以后可以

###### (3)执行流程:

​	A:首先计算表达式的值
​	B:和每一个case进行匹配，如果有就执行对应的语句体，看到break就结束。
​	C:如果没有匹配，就执行default的语句体n+1。

###### (4)注意事项:

​	A:case后面只能是常量，不能是变量，而且，多个case后面的值不能出现相同的
​	B:default可以省略吗?
​		可以省略，但是不建议，因为它的作用是对不正确的情况给出提示。
​		特殊情况：
​			case就可以把值固定。
​			A,B,C,D
​	C:break可以省略吗?
​		可以省略，但是结果可能不是我们想要的。
​		会出现一个现象：**case穿透。**
​		最终我们建议不要省略
​	D:default一定要在最后吗?
​		不是，可以在任意位置。但是建议在最后。
​	E:switch语句的结束条件
​		a:遇到break就结束了
​		b:执行到末尾就结束了

###### (5)案例：

​	A:键盘录入一个数字(1-7),输出对应的星期几。

```java
import java.util.Scanner;
//导包
public class SwitchDemo_01 {
	public static void main(String[] args){
	Scanner sc=new Scanner(System.in);
	//控制键盘录入数据
	System.out.println("输入第一个数字");
	int week=sc.nextInt();
	//获取数据week
	//switch判断语句
	switch(week){
	case 1:System.out.println("星期一");
		break;
	case 2:System.out.println("星期二");
		break;
	case 3:System.out.println("星期三");
		break;
	case 4:System.out.println("星期四");
		break;
	case 5:System.out.println("星期五");
		break;
	case 6:System.out.println("星期六");
		break;
	case 7:System.out.println("星期天");
		break;
	default:
		System.out.println("你输入的数据有问题，请重输");
		break;
	}
	System.out.println("week="+week);
	}
}
```

​	B:单项选择题
​	C:键盘录入一个字符串的问题
​		String s = sc.nextLine();
​	D:根据给定的月份,输出对应的季节

```java
import java.util.Scanner;
//导包
public class SwitchDemo_02 {
	public static void main(String[] args){
	Scanner sc=new Scanner(System.in);
	//控制键盘录入数据
	System.out.println("输入第一个数字(1-12之间)");
	int month=sc.nextInt();
	//获取数据week
	//switch判断语句
	switch(month){
	case 3:
	case 4:
	case 5:System.out.println("春季");
		break;
    case 6:
	case 7:
	case 8:System.out.println("夏季");
		break;
	 case 9:
     case 10:
     case 11:System.out.println("夏季");
    	break;
     case 12:
     case 1:
     case 2:System.out.println("冬季");
		 break;
	default:
		System.out.println("你输入的数据有问题，请重输");
		break;
	}
	}
}
```



###### (6)if语句和switch语句各自的场景

​	A:if
​		针对boolean类型的判断
​		针对一个范围的判断
​		针对几个常量的判断
​	B:switch
​		针对几个常量的判断

##### 2:循环语句(掌握)

###### 	(1)有三种:for,while,do...while

###### 	(2)for循环语句

​		A:格式
​			for(初始化语句;判断条件语句;控制条件语句){
​				循环体语句;
​			}
​			

​		执行流程：
​			a:执行初始化语句
​			b:执行判断条件语句
​				如果这里是true，就继续
​				如果这里是false，循环就结束
​			c:执行循环体语句
​			d:执行控制条件语句
​			e:回到b

![for循环语句结构](\img\2.语句\for循环语句结构.png)

​	B:注意事项
​		a:判断条件语句无论简单还是复杂，结果是boolean类型
​		b:循环体语句如果是一条，可以省略大括号，但是不建议
​		c:有分号就没有左大括号，有左大括号就没有分号
​	C:案例
​		a:输出10次HelloWorld

```java
class ForDemo_01{
    public static void main(String[] args){
        //原始做法：
        		System.out.println("HelloWorld");  
System.out.println("HelloWorld");
System.out.println("HelloWorld");
System.out.println("HelloWorld");
System.out.println("HelloWorld");
System.out.println("HelloWorld");
System.out.println("HelloWorld");  
System.out.println("HelloWorld");
System.out.println("HelloWorld");
System.out.println("HelloWorld");
    System.out.println("-----------------");
//改进：使用for循环
        for(int x=1;x<=10;x++){
            System.out.println("HelloWorld");
        }
    }
}
```

​		b:输出1-10的数据

```java
class ForDemo_02{
    public static void main(String[] args){
        //原始做法：
System.out.println("1") 
System.out.println("2");
System.out.println("3");
System.out.println("4");
System.out.println("5");
System.out.println("6");
System.out.println("7");  
System.out.println("8");
System.out.println("9");
System.out.println("10");
System.out.println("-----------------");
//改进：使用for循环
        for(int x=1;x<=10,x++）{
 		System.out.println("1");
        }
    }
}
```

​		c:输出10-1的数据

```java
class ForDemo_03{
    public static void main(String[] args){
        //原始做法：
System.out.println("1");  
System.out.println("2");
System.out.println("3");
System.out.println("4");
System.out.println("5");
System.out.println("6");
System.out.println("7");  
System.out.println("8");
System.out.println("9");
System.out.println("10");
System.out.println("-----------------");
//改进：使用for循环
        for(int x=10;x>=0;x--){
 		System.out.println("10");
        }
    }
}
```

​		d:求1-10的和

```java
/*
*	需求：求出1-10之间的数据之和
	分析：
		0+1=1
			1+2=3
				3+3=6
					6+4=10
						10+5=15
							......
	由此我么定义两个变量：
		一个变量用于存储第一个加数，第一个加数其实保存的是以前的缩有数据和，默认初始化值应该是0。
		一个变量用于存储第二个加数，第二个加数其实就是每次的数据变化的值。
*/
class ForDemo_04{
    public static void main(String[] args){
        //原始方法：
        System.out.println(1+2+3+4+5+6+7+8+9+10);
 System.out.println("-----------------"); 
        //For方法：
        for(int x=1;x<=10;x++){
            //这里的x其实是第二个加数
 		sum =sum+x;
            /*
            	0+1=1
            		1+2=3
            			3+3=6
            				...
            */
            //sum + =x;
        }System.out.println("sum:"+sum);
    }
}    
```

​		e:求1-100的和,求1-100的偶数和,求1-100的奇数和

```java
/*
*	需求：1):求出1-100之间的数据之和
	     2):求出1-100之间偶数和
	     3):求出1-100之间奇数和
	分析：
		0+1=1
			1+2=3
				3+3=6
					6+4=10
						10+5=15
							......
	由此我么定义两个变量：
		
*/
class ForDemo_05{
    public static void main(String[] args){
        //For方法求1-100之和：
        for(int x=1;x<=100;x++){
            //这里的x其实是第二个加数
 		sum =sum+x;
            /*
            	0+1=1
            		1+2=3
            			3+3=6
            				...
            */
            //sum + =x;
        }System.out.println("1-100的sum和:"+sum);
		System.out.println("-----------")  
    /*求出1-100的偶数和
    	方法一*/
    int sum2=0;
        for(intx=1;x<=100;x++){
            if(x%2==0){
                sum2+=x;
            }
        }
    	System.out.println("sun2"+sum2);
        System.out.println("----------")
    /*求出1-100的奇数和
    */
    int sum2=0;
        for(int x=1;x<=100;x+=2){
            
                sum2+=x;
            
        }
    	System.out.println("sun2"+sum2);
        System.out.println("----------")
    
    } 
} 
```

​		f:求5的阶乘

```java
/*需求：求5的阶乘
	n！=n*(n-1)!规则
	n！=n*(n-1)*(n-2)*...*3*2*1
	求和思想，
	求阶乘思想
*/
class ForDemo_06{
    public static void main(String[] args){
        //定义最终结果变量
int jc=1;
        for(intx=1;x<=5;x++){
            
                jc*=x;
            
        }
    	System.out.println("jc="+jc);
        System.out.println("----------")
   }  
}
```

​		g:在控制台打印水仙花数

```java
/*需求：在控制台打印水仙花数
  分析：
  		水仙花数是一个三位数，其各位数字的立方和等于该数本身。
  		举例：153就是一个水仙花数。
  		153=1*1*1+5*5*5+3*3*3=1+125+27=153
  	A：三位数其实是告诉了我们范围。
  	B：通过for循环我们就可以实现获取每个三位数
  	   但是麻烦是如何获取这个三位数的个，十，百位上的数据
  	   我么如何获取一个数据的个，十，百呢？
  	   		假设有一个数据：153
  	   		ge：153%10=3
  	   		shi：153/10%10=5
  	   		bai:153/10/10%10=1
  	   		qian:x/10/10/10%10
  	   		wan:x/10/10/10/10%10
  	   		...
  	   		
  	C:让ge*ge*ge+shi*shi*shi+bai*bai*bai和该数据比较，如果相同，就把该数据在控制台输出。 
*/
class ForDemo_07{
    public static void main(String[] args){
        //三位数告诉我们范围
        for(int x=100;x<1000,x++){
            int ge=x%10;
            int shi=x/10%10;
            int bai=x/10/10%10;
            
            //让ge*ge*ge+shi*shi*shi+bai*bai*bai和该数据比较
            if(x==(ge*ge*ge+shi*shi*shi+bai*bai*bai)){
                //如果相同，就把数据在控制台输出
             System.out.println(x);
            }
        }
    }
}
```

​		h:统计水仙花个数

```java
/*
	需求：
		统计水仙花个数
	分析：
		A：水仙花数是一个三位数，其各位数字的立方和等于该数本身。
  		举例：153就是一个水仙花数。
  		153=1*1*1+5*5*5+3*3*3=1+125+27=153
		B：定义统计变量，初始化值是0
		C:三位数告诉我们范围，用for语句可以解决。
		D：获取每一个三位数的个，十，百数据
		E：按照要求进行判断
		F:如果满足要求就计数
*/
class ForDemo_08{
    public static void main(String[] args){
        //定义统计变量，初始化值是0
        int count =0;
        //三位数告诉我们范围，用for循环就可以搞定
        for(int x=100;x<1000;x++){
            //获取每一个三位数的个，十，百数据
            int ge=x%10;
            int shi=x/10%10;
            int bai=x/10/10%10;
            //按照要求进行判断
            if(x==(ge*ge*ge+shi*shi*shi+bai*bai*bai)){
               //如果满足要求就计数
                count++;
            }  
       	}
    	System.out.println("水仙花数共有"+count+"个");
}
}                       
```

​		i:改进版的回文数
​			一个五位数
​			个位 = 万位
​			十位 = 千位

​			个位 + 十位 + 千位 + 万位 = 百位
​		j:统计1-1000之间同时满足如下条件的数据有多少个
​			x%3==2
​			x%5==3
​			x%7==2

```java
/*
需求：请统计1-1000之间同时满足如下条件的数据有多少个：
	对3整除余2
	对5整除余3
	对7整除余2
分析：
	A：1-1000之间是一个范围，用foe很容易实现
	B：每个数据要同时满足如下需求
		x%3==2
		x%5==3
		x%7==2
	D:如果满足条件，统计数据即可，最后如初统计变量
*/
class ForDemo_10{
    public static void main(String[] args){
        //定义统计变量，初始化值是0
        int count = 0;
        //1-1000之间是一个范围，用for很容易就可以实现
        for(int x=1;x<=1000;x++){
            /*
            	每个数据要同时满足如下要求
            	x%3==2
            	x%5==3
            	x%7==2
            */
            if(x%3==2 && x%5==3 && x%7==2){
                count++;
                System.out.println(x);
            }
        }
       //输入数据
        	System.out.println("满足这样条件的数据共有："+count+"个");
        
    }
}
```



###### (3)while循环

​	A:基本格式
​		while(判断条件语句) {
​			循环体语句;
​		}
​		
​		扩展格式：
​		初始化语句;
​		while(判断条件语句){
​			循环体语句;
​			控制条件语句;
​		}
​		
​		通过查看这个格式，我们就知道while循环可以和for循环等价转换。
​	B:while的练习
​		把for语句的练习用while改进
​	C:for和while的区别
​		a:使用上的区别
​			for语句的那个控制条件变量,在循环结束后不能在使用了。
​			而while的可以继续使用。
​		b:理解上的区别
​			for适合于一个范围的判断
​			while适合次数不明确的
​				举例:吃葡萄
​	D:案例：
​		a:珠穆



朗玛峰问题

```java
/*
	我国最高山峰是珠穆朗玛峰：8848m，我现在有一张足够大的纸张，厚度为：0.01m。
	请问：我折叠多少次，可以保证厚度不低于珠穆朗玛峰的高度？
	分析：
		A：定义一个统计变量,默认值是0
		B：最高山峰是珠穆朗玛峰：8848m这是最终的厚度，我现在有一张足够大的纸，厚度为：0.01m这是初始厚度
		C:我折叠多少次，就可以保证厚度不低于珠穆朗玛峰的高度？
		  折叠一次有什么变化？就是厚度是以前的2倍。
		D:只要每次变化的厚度没有超过珠穆朗玛峰的高度，就折叠，统计变量++
		E：输出统计变量。
*/
class   WhileDemo_01{
    public static void main(String[] args){
    //定义一个统计变量，默认值是0
     int count=0;
        
     //最高山峰是珠穆朗玛峰：8848这是最终厚度
     //我现在有一张祖国大的纸张，厚度为：0.01m这是初始厚度
     //为了简单，我把0.01变成1，同理8848就变成了884800
     int end =884800;
     int start =1;
        while(start<end){
            //只要每次变化的厚度没有超过珠穆朗玛峰的高度，就折叠，统计变量++
            count++;
            //折叠一次有什么变化呢？就是厚度是以前的2倍。
            start*=2;
        	System.out.println(start);
        }
        System.out.println("最多可以叠"+count+"次可以保证纸张厚度低于珠穆朗玛峰高度");
    }
}
```

​		b:小芳存钱问题(break以后才能做)

```java
/*
	需求：小芳的妈妈每天给她2.5元钱，她都会存起来，但是，
		每当这一天是存钱得到第5天或者5的倍数的话，她都会花去6元钱，
		请问，经过多少天，小芳才可以存到100元钱。
	分析：
		A：小芳的妈妈每天给她2.5元钱
			double dayMoney =2.5;
		B:她都会存起来
			double daySum = 0；
		C：从第一天开始存储
			int dayCount =1；
		D：经过多少天，小芳可以存到100元钱。
			double result =100；
		E：这一台能是存钱的第五天或者5的倍数的话，他都会花去6元钱，
			说明要判断dayCount的值，如果对5整除就会减去6元钱，
				daySum -=6；
			由此还隐含了一个问题，就是如果不是5的倍数的话，钱就要累加
				daySum +=dayMoney；
		F:因为不知道是多少天，所以我用死循环，一旦超过100元我就推出循环
*/
class WhileDemo_02{
  	public static void main(String[] args){
        //每天要存储2.5元
        double dayMoney =2.5;
        
        //存钱的初始值是0
        double daySum =0;
        
        //从第一天开始存储
        int dayCount =1;
        
        //最终存储不小于100就不储存了
        int result =100;
        
        //因为不知道是多少天，所以我用了死循环
        while(true){
            //累加钱
            daySum +=dayMoney;
            
            //一旦超过100元我就退出循环。
            if(daySum>=result){
                System.out.println("我花了"+dayCount+"天存储了100元");
                break;
            }
        	if(dayCount%5==0){
                //花去6元钱
                daySum -=6;
                System.out.println("第"+dayCount+"天花了6元钱");             
            }
       //天数变化
            dayCount++;
        }
    }  
}
```



###### (4)do...while循环

​	A:基本格式
​		do {
​			循环  语句;
​		}while(判断条件语句);
​		
​		扩展格式：
​		初始化语句;
​		do {
​			循环体语句;
​			控制条件语句;
​		}while(判断条件语句);
​		
​		通过查看格式，我们就可以看出其实三种循环的格式可以是统一的。
​	B:三种循环的区别
​		a:do...while循环至少执行一次循环体
​		b:for和while必须先判断条件是否是true，然后后才能决定是否执行循环体

###### (5)循环使用的注意事项(死循环)

​	A:一定要注意修改控制条件,否则容易出现死循环。
​	B:最简单的死循环格式
​		a:while(true){...}
​		
​		b:for(;;){}

##### 3:控制跳转语句(掌握)

###### (1)循环

 循环嵌套：就是循环语句的循环体本身是一个循环语句

​	通过结果我们知道这样的一个结论：

​		**外循环控制行数**

​		**内循环控制列数**

###### 	(2)break:中断的意思

​		A:用在循环和switch语句中，离开此应用场景无意义。
​		B:作用
​			a:跳出单层循环
​			b:跳出多层循环，需要标签语句的配合

###### 	(3)continue:继续

​		A:用在循环中，离开此应用场景无意义。
​		B:作用
​			a:跳出单层循环的一次，可以继续下一次
​		C:填空题
​			for(int x=1; x<=10; x++) {
​				if(x%3 == 0) {
​					//补齐代码
​				}
​				System.out.println("Java基础班");
​			}
​			如何让控制台输出2次：Java基础班
​			如何让控制台输出7次：Java基础班
​			如何让控制台输出13次：Java基础班

###### 	(4)return:返回

​		A:用于结束方法的，后面还会在继续讲解和使用。
​		B:一旦遇到return,程序就不会在继续往后执行。

#### Day05

##### 1:方法(掌握)

###### 	(1)方法：就是完成特定功能的代码块。

​		注意：在很多语言里面有函数的定义，而在Java中，函数被称为方法。

###### 	(2)格式：

​		修饰符 返回值类型 方法名(参数类型 参数名1,参数类型 参数名2...) {
​			方法体语句;
​			return 返回值;
​		}

​	修饰符：目前就用 public static。后面再详细讲解其他修饰符
​	返回值类型：就是功能结果的数据类型
​	方法名：就是起了一个名字，方便我们调用该方法。
​	参数类型：就是参数的数据类型
​	参数名：就是变量
​	参数分类：
​		实参：实际参与运算的数据
​		形参：方法上定义的，用于接收实际参数的变量
​	方法体语句：就是完成功能的代码块
​	return：结束方法
​	返回值：就是功能的结果，由return带给调用者。

###### (3)两个明确：

​	返回值类型：结果的数据类型
​	参数列表：参数的个数及对应的数据类型

###### (4)方法调用

​	A:有明确返回值的方法
​		a:单独调用，没有意义
​		b:输出调用，不是很好，因为我可能需要不结果进行进一步的操作。但是讲课一般我就用了。
​		c:赋值调用，推荐方案
​	B:void类型修饰的方法
​		a:单独调用

###### (5)案例：

​	A:求和方案

```java
/*	需求：
		求两个数据之和的案例
	两个明确：
		返回值类型： int
		参数列表：2个，都是int 类型
*/
class FunctionDemo_01{
    public static void main(String[] args){
    //第一步：从程序从main方法开始执行    
        int x=10;
        int y=20;
    //第二步：定义了两个int类型的变量
        int result =sum(x,y);
    //第三步：调用方法    
        System.out.println(result);
    //第七步：输出result，其实就是输出30
    }
    
   
    public static int sum(int a,int b){
    //第四步：分别把x，y的值给了a，b
      return a+b；
    //第五步：把a+b的结果计算出来，30    
    //第六步：通过result把30返回来
        
        
    }    
    }
}
```

​	B:获取两个数中的较大值
​

```java
import java.util.Scanner;

class FunctionTest_02{
    public static void main(String[] args){
       //创建键盘录入对象
     Scanner sc=new Scanner(System.in);
       System.out.println("输入第一个数据");
        	int a=sc.nextInt();
       System.out.println("输入第二个数据");
       	 	int b=sc.nextInt();
       int result =getMax(a,b);
        System.out.println("较大值是："+result);
    }
	/* 需求：两个数最大值
		两个明确：
				返回值类型：int
				参数列表：int a，int b
	*/
   public static int getMax(int a,int b){
  //if语句
   /*
   		if(a>b){
   			System.out.println(a);
   			return a;
   		}else{
   			System.out.println(b);
   			return b;
   		}
   	*/	
 //用三元改进
       //int c=((a>b)? a:b);
       //return c;
   
   	   //由于c就是后面的式子
       return ((a>b)?a:b);
   }

}
```

​	C:比较两个数据是否相同

```java
/*	需求： 键盘录入两个数据，比较两个数是否相等
	分析：
		比较两个数是否相等结果是一个boolean类型。
*/
	import java.util.Scanner;
class FounctionTest_03{
    public static void main(String[] args){
        //创建键盘录入对象
        Scanner sc=new Scanner(System.in);
    	
    	System.out.println("输入第一个数");
        int a=sc.nextInt();
        
        System.out.println("输入第二个数");
        int b=sc.nextInt();
        
        boolean flag=compare(a,b);
    	System.out.println(flag);    
    }

	/*需求：比较两个数是否相等
	  两个明确：
	  		返回值类型：boolean
	  		参数列表：int a, int b */
public static boolean compare(int a, int b){
    /* if方法：
    
    	if(a==b){
            return true;
        }else{
            return false;
        } 
    */    
    //三元改进
    boolean flag =((a==b)? true:false);
    return flag;
	
	//继续改进
    return ((a==b)? true:false);
	
    //最终版
    return a==b;

}	

}
```

​	D:获取三个数中的最大值
​

```java
import java.util.Scanner;

class FunctionTest_04{
    public static void main(String[] args){
       //创建键盘录入对象
     Scanner sc=new Scanner(System.in);
       System.out.println("输入第一个数据");
        	int a=sc.nextInt();
       System.out.println("输入第二个数据");
       	 	int b=sc.nextInt();
       System.out.println("输入第三个数据");
       		int c=sc.nextInt();
        int max =getMax(a,b,c);
        System.out.println("最大值是："+max);
    }
	/* 需求：三个数最大值
		两个明确：
				返回值类型：int
				参数列表：int a，int b，int c
	*/
   public static int getMax(int a,int b,int c){
  //if语句
   /*
   		if(a>b){
   			if(a>c){
   				return a;
   			}else{
   				return c;
   			}
   		}else{
   			if(b>c);
   				return b;
   			}else{
   				return c;
   			}
   		}
   	*/	
 //用三元改进
       	int (a>b){
       			return (a>c? a:c);
   		}else{
       			return(b>c? b:c);
   }
    */
       int temp =((a>b)? a:b);
       int max =((temp>c)?	temp:c);
    	return max;
   }

}
```

​	E:输出m行n列的星形
​

​	




###### 	(7)Netbeans的概述和使用

​		A:是可以做Java开发的另一个IDE工具。
​		B:使用
​			A:四则运算
​				a:修改图标
​				b:设置皮肤
​				c:设置居中
​				d:数据校验
​			B:登录注册

#### Day26 网络编程

##### 1:网络编程(理解)

###### 	(1)网络编程：用Java语言实现计算机间数据的信息传递和资源共享

###### 	(2)网络编程模型

###### 	(3)网络编程的三要素

​		A:IP地址
​			a:点分十进制
​			b:IP地址的组成
​			c:IP地址的分类
​			d:dos命令
​			e:InetAddress

```java
package day26_Net;

import java.net.InetAddress;
import java.net.UnknownHostException;

/*
    如果一个类没有构造方法：
    A：成员全部是静态的(Math,Arrays,Collections)
    B：单例设计模式(Runtime)
    C：类中有静态方法返回该类的对象(InetAddress)
        Class Demo{
            private Demo(){}

            public static Demo getXxx(){
                return new Demo();
            }
        }

    看InetAddress的成员方法:
    public static InetAddress getByName(String host):根据主机名或者IP地址的字符串表示得到IP地址对象
 */
public class InetAddressDemo {
    public static void main(String[] args) throws UnknownHostException {
        InetAddress address =InetAddress.getByName("LAPTOP-1RIMHBFK");
        //获取两个东西:主机名，IP地址
        //public String getHostName()
        String name =address.getHostName();
        //public String getHostAddress()
        String ip = address.getHostAddress();
        System.out.println(name+"***"+ip);
    }
}

```

​		B:端口
​			是应用程序的标识。范围：0-65535。其中0-1024不建议使用。
​		C:协议
​			UDP:数据打包,有限制,不连接,效率高,不可靠
​			TCP:建立数据通道,无限制,效率低,可靠

###### 	(3)Socket机制

![day26Socket通信原理图解](\img\11.网络编程\day26Socket通信原理图解.png)

​		A:通信两端都应该有Socket对象
​		B:所有的通信都是通过Socket间的IO进行操作的

###### 	(4)UDP协议发送和接收数据(掌握 自己补齐代码)

​		发送：
​			创建UDP发送端的Socket对象
​			创建数据并把数据打包
​			发送数据
​			释放资源

```java
package day26_Net;

import java.io.IOException;
import java.net.*;

/*
    UDP协议发送数据：
    A：创建发送端Socket对象
    B：创建数据,并把数据打包
    C：调用Socket对象的发送数据包
    D：释放资源
 */
public class SendDemo {
    public static void main(String[] args) throws IOException {
        //创建发送端Socket对象
        //DatagramSocket
        DatagramSocket ds =new DatagramSocket();

        //创建数据,并打包
        //创建数据
        byte[] bye ="hello".getBytes();
        //长度
        int length =bye.length;
        //ip地址
        InetAddress address =InetAddress.getByName("LAPTOP-1RIMHBFK");
        //端口
        int port =10096;
        DatagramPacket dp =new DatagramPacket(bye,length,address,port);
        //调用并发送
        ds.send(dp);
        //释放资源
        ds.close();

    }
}

```

​	接收：
​		创建UDP接收端的Socket对象
​		创建数据包用于接收数据
​		接收数据
​		解析数据包
​		释放资源

```java
package day26_Net;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

/*
    UDP协议接收数据：
    A：创建接收端Socket对象
    B：创建一个数据包(接受容器)
    C：调用Socket对象的接受方法接收数据
    D：解析数据包,并显示再控制台
    E：释放资源
 */
public class ReceiveDemo {
    public static void main(String[] args) throws IOException {
        //创建接收端对象
        //DatagramSocket(int port)
        DatagramSocket ds =new DatagramSocket(10096);

        //创建一个数据包(接受容器)
        //DatagramPacket(byte[] buf,int length)
        byte[] bye =new byte[1024];
        int length=bye.length;
        DatagramPacket dp =new DatagramPacket(bye,length);

        //接收数据：调用Socket对象的接受方法接收数据
        //public void receive(DatagramPacket p)
        ds.receive(dp);//阻塞式

        //解析数据包,并显示在控制台
        //获取对方ip
        InetAddress address =dp.getAddress();
        String ip =address.getHostAddress();
        //public byte[] getData():获取数据缓冲区
        //public int getLength():获取数据的实际长度
        byte[] byes =dp.getData();
        int len =dp.getLength();
        String s =new String(byes,0,len);
        System.out.println(ip+"传递数据是"+s);


        //释放资源
        ds.close();
    }
}

```



###### (5)TCP协议发送和接收数据(掌握 自己补齐代码)

![day26TCP协议发送和接收数据图解](\img\11.网络编程\day26TCP协议发送和接收数据图解.png)

发送：
​		创建TCP客户端的Socket对象
​		获取输出流，写数据
​		释放资源
​		
​	接收：
​		创建TCP服务器端的Socket对象
​		监听客户端连接
​		获取输入流，读取数据
​		释放资源

###### (6)案例：

​	A:UDP
​		a:最基本的UDP协议发送和接收数据（如上UDP例题代码）

```java
package day26_Net;

import java.io.IOException;
import java.net.*;

/*
    UDP协议发送数据：
    A：创建发送端Socket对象
    B：创建数据,并把数据打包
    C：调用Socket对象的发送数据包
    D：释放资源
 */
public class SendDemo {
    public static void main(String[] args) throws IOException {
        //创建发送端Socket对象
        //DatagramSocket
        DatagramSocket ds =new DatagramSocket();

        //创建数据,并打包
        //创建数据
        byte[] bye ="hello".getBytes();
        //长度
        int length =bye.length;
        //ip地址
        InetAddress address =InetAddress.getByName("LAPTOP-1RIMHBFK");
        //端口
        int port =10096;
        DatagramPacket dp =new DatagramPacket(bye,length,address,port);
        //调用并发送
        ds.send(dp);
        //释放资源
        ds.close();

    }
}

//*******************************************

package day26_Net;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

/*
    UDP协议接收数据：
    A：创建接收端Socket对象
    B：创建一个数据包(接受容器)
    C：调用Socket对象的接受方法接收数据
    D：解析数据包,并显示再控制台
    E：释放资源
 */
public class ReceiveDemo {
    public static void main(String[] args) throws IOException {
        //创建接收端对象
        //DatagramSocket(int port)
        DatagramSocket ds =new DatagramSocket(10096);

        //创建一个数据包(接受容器)
        //DatagramPacket(byte[] buf,int length)
        byte[] bye =new byte[1024];
        int length=bye.length;
        DatagramPacket dp =new DatagramPacket(bye,length);

        //接收数据：调用Socket对象的接受方法接收数据
        //public void receive(DatagramPacket p)
        ds.receive(dp);//阻塞式

        //解析数据包,并显示在控制台
        //获取对方ip
        InetAddress address =dp.getAddress();
        String ip =address.getHostAddress();
        //public byte[] getData():获取数据缓冲区
        //public int getLength():获取数据的实际长度
        byte[] byes =dp.getData();
        int len =dp.getLength();
        String s =new String(byes,0,len);
        System.out.println(ip+"传递数据是"+s);


        //释放资源
        ds.close();
    }
}

```

​		b:把发送数据改进为键盘录入

```java
package day26_Net;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
/*
    数据来自于键盘录入
    键盘录入数据要自己控制录入结束。
 */
public class SendInputDemo {
    public static void main(String[] args) throws IOException {
        //创建发送端的Socket对象
        DatagramSocket ds =new DatagramSocket();

        //封装键盘录入数据
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
        String line =null;
        while ((line= br.readLine())!=null){
            if("889".equals(line)){
                break;
            }
            //创建数据并打包
            byte[] bye =line.getBytes();
            DatagramPacket dp =new DatagramPacket(bye,bye.length, InetAddress.getByName("LAPTOP-1RIMHBFK"),12345);
            //发送数据
            ds.send(dp);
        }
        //释放资源
        ds.close();
    }
}

```

​		c:一个简易聊天小程序并用多线程改进
​	B:TCP

![day26TCP协议发送和接收数据图解](\img\11.网络编程\day26TCP协议发送和接收数据图解.png)

​		a:最基本的TCP协议发送和接收数据

```java
package day26_Net;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

/*
    TCP协议发送数据：
    A：创建发送端的Socket对象
            这一步如果成功,就说明连接已经建立成功了
    B：获取输出流,写数据
    C：释放资源

    连接被拒绝,TCP协议一定要先看服务器。
    java.net.ConnectException: Connection refused:connect
 */
public class ClientDemo {
    public static void main(String[] args) throws IOException {
     //创建发送端的socket对象
        Socket s =new Socket("LAPTOP-1RIMHBFK",8888);

        //获取输出流,写数据
        OutputStream os =s.getOutputStream();
        os.write("hello.java.tcp".getBytes());

        //释放资源
        os.close();
    }
}
//********************************
package day26_Net;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

/*
    A：创建接收端的Socket对象
    B:监听客户端连接,返回一个对应的Socket对象
    C：获取输入流,写数据
    D：释放资源
 */
public class ServerDemo {
    public static void main(String[] args) throws IOException {
        //创建接收端的Socket连接
        ServerSocket ss =new ServerSocket(8888);

        //监听客户端,返回一个对应的Socket对象
        Socket s =ss.accept();

        //输入流,读取数据显示在控制台
        InputStream is =s.getInputStream();

        byte[] byes=new byte[1024];

        int len=is.read(byes);
        String str =new String(byes,0,len);
        String ip=s.getInetAddress().getHostAddress();
        System.out.println(ip+":"+str);

        //释放资源
        s.close();
        is.close();

    }
}

```

​		b:服务器给出反馈

```java
// 发送端如a部分所示
//接收端：
package day26_Net;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

/*
    服务器增加反馈
 */
public class ServeDemo_02 {
    public static void main(String[] args) throws IOException {
        //创建服务器Socket对象
        ServerSocket ss =new ServerSocket(9999);
        //监听客户端的连接
        Socket s =ss.accept();//阻塞

        //获取输入流
        InputStream is =s.getInputStream();
        byte[] bytes =new byte[1024];
        int len =is.read(bytes);
        String server =new String(bytes,0,len);
        System.out.println("server:"+server);

        //获取输出流
        OutputStream os =s.getOutputStream();
        os.write("数据已经收到".getBytes());

        //释放资源
        s.close();
    }
}

```

​		c:客户端键盘录入服务器控制台输出

```java
package day26_Net;

import java.io.*;
import java.net.Socket;

public class ClientDemo_03 {
    public static void main(String[] args) throws IOException {
        //创建客户端Socket对象
        Socket s =new Socket("192.168.3.107",6666);

        //封装键盘目录
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
        //封装通道内的数据
        BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));

        String line =null;
        while ((line=br.readLine())!=null){
           //自定义关闭系统
            if ("over".equals(line)){
                break;
            }
        }
        bw.write(line);
        bw.newLine();
        bw.flush();

        //释放资源
        s.close();
    }
}
//*******************************
package day26_Net;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

/*
    服务器增加反馈
 */
public class ServeDemo_03 {
    public static void main(String[] args) throws IOException {
        //创建服务器Socket对象
        ServerSocket ss =new ServerSocket(6666 );
        //监听客户端的连接
        Socket s =ss.accept();//阻塞

        //获取输入流
        InputStream is =s.getInputStream();
        byte[] bytes =new byte[1024];
        int len =is.read(bytes);
        String server =new String(bytes,0,len);
        System.out.println("server:"+server);

        //获取输出流
        OutputStream os =s.getOutputStream();
        os.write("数据已经收到".getBytes());

        //释放资源
        s.close();
    }
}

```

​		d:客户端键盘录入服务器写到文本文件

```java
//如c发送端
//package day26_Net;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ServeDemo_04 {
    public static void main(String[] args) throws IOException {
        //服务端
        ServerSocket ss =new ServerSocket(0004);

        //监听
        Socket s =ss.accept();
        //封装通道内的数据
        BufferedReader br =new BufferedReader(new InputStreamReader(s.getInputStream()));

        //封装文本文件
        BufferedWriter bw = new BufferedWriter(new FileWriter("a.txt"));

        String line =null;
        while ((line=br.readLine())!=null){
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        bw.close();
        s.close();
    }
}

```

​		e:客户端读取文本文件服务器控制台输出

```java
//发送端
package day26_Net;

import java.io.*;
import java.net.Socket;

/*
    客户端文本文件,服务器输出到控制台
 */
public class ClientDemo_05 {
    public static void main(String[] args) throws IOException {
        //创建Socket对象
        Socket s =new Socket("192.168.3.107",0005);

        //封装到文件
        BufferedReader br =new BufferedReader(new FileReader("InetAddressDemo"));

        //封装通道内的流
        BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));

        String line =null;
        while ((line=br.readLine())!=null){
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        //释放资源
        s.close();
        br.close();

    }
}
//************************************
package day26_Net;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class ServeDemo_05 {
    public static void main(String[] args) throws IOException {
        //创建服务器Socket文件
        ServerSocket ss =new ServerSocket(0005);

        //监听
        Socket s =ss.accept();

        //封装通道内的流
        BufferedReader br =new BufferedReader(new InputStreamReader(s.getInputStream()));

        String line =null;
        while ((line=br.readLine())!=null){
            System.out.println(line);
        }
        s.close();
    }
}


```

​		f:客户端读取文本文件服务器写到文本文件

```java
package day26_Net;

import java.io.*;
import java.net.Socket;

public class UploadClient {
    public static void main(String[] args) throws IOException {
        //创建客户端Socket对象
        Socket s =new Socket("192.168.3.107",200216);

        //封装文本文件
        BufferedReader br =new BufferedReader(new FileReader("2.txt"));

        //封装通道内流
        BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));

        String line =null;
        while ((line=br.readLine())!=null){
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        //释放资源
        bw.close();
        s.close();
    }
}
//***************************************

package day26_Net;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class UploadServer {
    public static void main(String[] args) throws IOException {
        //创建服务器的Socket对象
        ServerSocket ss =new ServerSocket(200216);

        //监听客户端连接
        Socket s =ss.accept();

        //封装通道内的流
        BufferedReader br =new BufferedReader(new InputStreamReader(s.getInputStream()));

        //封装文本文件
        BufferedWriter bw =new BufferedWriter(new FileWriter("Copy.java"));

        String line =null;
        while ((line=br.readLine())!=null){
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        //释放资源
        br.close();
        s.close();
    }
}

```

​		g:上传图片

```java
package day26_Net;

import java.io.*;
import java.net.Socket;

public class UploadClient_02 {
    public static void main(String[] args) throws IOException {
        //创建客户端Socket对象
        Socket s =new Socket("192.168.3.107",00010);

        //封装图片文件
        BufferedInputStream bis =new BufferedInputStream(new FileInputStream("F:\\Users\\王希龙\\Desktop\\background\\185dca482c1c3dbe85d8e97c2bc0eb3c.jpeg"));
        //封装通道流
        BufferedOutputStream bo =new BufferedOutputStream(new BufferedOutputStream(s.getOutputStream()));

        byte[] bytes =new byte[1024];
        int len =0;
        while ((len=bis.read(bytes))!=-1){
            bo.write(len);
        }

        //读取反馈
        InputStream is =s.getInputStream();
        byte[] bytes1=new byte[1024];
        int len2=is.read(bytes1);
        String client =new String(bytes1,0,len2);
        System.out.println(client);

        //释放资源
        bis.close();
        s.close();
    }
}
//*************************************

package day26_Net;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class UploadServer_02 {
    public static void main(String[] args) throws IOException {
        //服务器Socket对象
        ServerSocket ss =new ServerSocket(00010);

        //监听客户端连接
        Socket s =ss.accept();

        //封装通道内流
        BufferedInputStream bi =new BufferedInputStream(s.getInputStream());
        //封装图片文件
        BufferedOutputStream bo =new BufferedOutputStream(new FileOutputStream("梅西.jpg"));

        byte[] bytes =new byte[1024];
        int len=0;
        while ((len=bi.read(bytes))!=-1){
            bo.write(bytes,0,len);
        }

        //给一个反馈
        OutputStream os =s.getOutputStream();
        os.write("图片上传成功".getBytes());

        bo.close();
        s.close();

    }
}

```

​		h:多线程改进上传文件

```java
//写一个UserThread类	P26.29
package day26_Net;

import java.io.*;
import java.net.Socket;

public class UserThread implements Runnable {
    private Socket s;

    public UserThread(Socket s){
        this.s=s;
    }


    @Override
    public void run() {
        try {
            //封装通道内的流
            BufferedReader br =new BufferedReader(new InputStreamReader(s.getInputStream()));

            //封装文本文件
            //BufferedWriter bw =new BufferedWriter(new FileWriter("Copy.java"));

            //为了防止名称冲突
            String newName =System.currentTimeMillis()+".java";

            BufferedWriter bw =new BufferedWriter(new FileWriter(newName));

            String line =null;
            while ((line=br.readLine())!=null){
                bw.write(line);
                bw.newLine();
                bw.flush();
            }

            //给出反馈
            OutputStream os =s.getOutputStream();
                os.write("文件上传成功".getBytes());

            //释放资源
            bw.close();
            s.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

//*******************
package day26_Net;

import java.io.*;
import java.net.Socket;

public class UploadClient_03 {
    public static void main(String[] args) throws IOException {
        //创建客户端Socket对象
        Socket s =new Socket("192.168.3.107",00010);

        //封装图片文件
        BufferedInputStream bis =new BufferedInputStream(new FileInputStream("bos.txt"));
        //封装通道流
        BufferedOutputStream bo =new BufferedOutputStream(new BufferedOutputStream(s.getOutputStream()));

        byte[] bytes =new byte[1024];
        int len =0;
        while ((len=bis.read(bytes))!=-1){
            bo.write(len);
        }

        //读取反馈
        InputStream is =s.getInputStream();
        byte[] bytes1=new byte[1024];
        int len2=is.read(bytes1);
        String client =new String(bytes1,0,len2);
        System.out.println(client);

        //释放资源
        bis.close();
        s.close();
    }
}
//*****************************
package day26_Net;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class UploadServer_03 {
    public static void main(String[] args) throws IOException {
        //创建客户端Socket对象
        ServerSocket ss =new ServerSocket(00010);

        while (true){
            Socket s =ss.accept();
            new Thread(new UserThread(s)).start();
        }
    }
}


```

#### Day27 反射

##### 1:反射(理解)

###### 	(1)类的加载及类加载器

```java
//类的加载
	当程序要使用某个类时，如果该类还未被加载到内存中，则系统会通过加载,连接,初始化三步来实现对这个类进行初始化
    //加载
       * 就是指将class文件读入内存,并为之创建一个Class对象。
       * 任何类被使用时系统都会建立一个Class对象
    //连接
       * 验证是否有正确的内部结构，并和其他类协调一致
       * 准备负责为类的的静态成员分配内存,并设置默认初始化值
       * 解析将类的二进制数据中的符号引用替换为直接引用初始化就是我们以前讲过的初始化步骤
        
//类加载器
        * 负责将class文件加载到内在中,并为之生成对应的Class对象
        * 虽然我们不需要关心类加载机制。但是了解这个机制我们就能更好的理解程序的运行
//类加载器的组成
        * Bootstrap ClassLoader 根类加载器
        	*也被称为引导类加载器,负责java核心类的加载
        		*比如System String等。在JDK中JRE的lib目录下rt.jar文件中
        * Extension ClassLoader 扩展类加载器
        	*负责JRE的扩展目录中jar包的加载。
        		*在JDK中JRE的lib目录下ext目录
        * System ClassLoader 系统类加载器
        	*负责在JVM启动时加载来自Java命令的class文件,以及classpath环境变量所指定的jar包和路径
```



###### 	(2)反射：

​		通过字节码文件对象，去使用成员变量，构造方法，成员方法

###### 	(3)反射的使用

​		A:通过反射获取构造方法并使用

```java
package day27_Reflect;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

/*
    通过反射获取构造方法并使用
 */
public class ReflectDemo_02 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        //获取字节码文件对象
        Class c =Class.forName("day27_Reflect_02.Person");

        //获取构造方法
        //public Constructor[] getConstructors():所有公共构造方法
        //public Constructor[] getDeclaredConstructors():所有构造方法
        //Constructor[] cons =c.getDeclaredConstructors();
        //for (Constructor con :cons){
        //    System.out.println(con);

    //}
        //获取单个构造方法
        //public Constructor<T> getConstructor(Class<?>... paramTypes)
        //参数表示的是:你要获取的构造方法的构造参数个数及数据类型的class字节码文件对象
        Constructor con =c.getConstructor();//返回的是构造方法对象

        //Person p =new Person();
        //System.out.println(p);
        //public T newInstance(Object...initargs)
        //使用此Constructor 对象表示的构造方法来创建构造方法的声明类的新实例,并用指定的初始化参数初始化该实例
        Object obj = con.newInstance();
        System.out.println(obj);

        //Person = =(Person)obj;
        //p.show();

    }
}

```

​		B:通过反射获取成员变量并使用

```java
package day27_Reflect_02;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

/*
    通过发生获取成员变量并使用
 */
public class ReflectDemo {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        //获取字节码文件对象
        Class c =Class.forName("day27_Reflect_02.Person");

        //获取所有的成员变量
        Field[] fields =c.getFields();
        for (Field field :fields){
            System.out.println(field);
        }

        /*
            Person p = new Person();
            p.adderss ="咸阳";
            System.out.println(p);
         */

        /*
            Person p =new Person(); p.address ="北京"; System.out.println(p);
         */

        //通过无参构造方法创建对象
        Constructor con =c.getConstructor();
        Object obj =con.newInstance();
        //获取单个的成员变量
        //获取address并对其赋值
        Field addressField =c.getField("address");
        //public void set(Object obj,Object value)
        //将指定对象变量上此Field 对象表示的字段设置为指定的新值
        addressField.set(obj,"咸阳");  //给obj对象的addressField字段设置值为"北京"
        System.out.println(obj);

        //获取name并对其赋值
        //NoSuchMethodException
        Field nameField = c.getDeclaredField("name");
        //IllegalAccessException
        nameField.setAccessible(true);
        nameField.set(obj,"温景凯");
        System.out.println(obj);

        //获取age并对其赋值
        Field ageField = c.getDeclaredField("age");
        ageField.setAccessible(true);
        ageField.set(obj,22);
        System.out.println(obj);
    }
}

```

​		C:通过反射获取成员方法并使用

```java
package day27_Reflect_02;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ReflectDemo_02 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        //获取字节码文件对象
        Class c =Class.forName("day27_Reflect_02.Person");

        //获取所有的方法
        //Method[] methods = c.getMethods();//获取自己的包括父亲的公共方法
        //Method[] methods = c.getDeclaredMethods();//获取自己的所有方法
        //for(Method method : methods){
        //    System.out.println(method);
        //    }

        Constructor con =c.getConstructor();
        Object obj =con.newInstance();

        /*
            Person p =new Person(); p.show();
         */

        //获取单个方法并使用
        //public void show()
        //public Method getMethod(String name,Class<?>... parameterTypes)
        //第一个参数表示的方法名,第二个参数表示的是方法的参数的class类型
        Method m1 =c.getMethod("show");
        //obj.m1();//错误
        //public Object invoke(Object obj,Object...args)
        //返回值是Object接收,第一个参数表示对象是谁,第二个参数表示调用该方法的实际参数
        m1.invoke(obj);//调用obj对象的m1方法

        System.out.println("*********************");
        //public void method(String s)
        Method m2 =c.getMethod("method",String.class);
        m2.invoke(obj,"+hello");
        System.out.println("**********************");

        /***
         * 因为上面的method为void类型 所以没有返回值，故而只能返回到obj，打印出来为null
         * getString方法有返回值，所以需要转换为字符串类型然后打印
         */
        //public String getString(String s,int i)
        Method m3 =c.getMethod("getString",String.class,int.class);
        //Object objString =m3.invoke(obj,"hello",100);
        //String.out.println(objString);
        String s = (String) m3.invoke(obj,"hello",1000);
        System.out.println(s);

        //private void function()
        Method m4 =c.getDeclaredMethod("function");
        m4.setAccessible(true);
        m4.invoke(obj);
    }
}

```



###### 	(4)反射案例

​		A:通过反射运行配置文件的内容

```java
//class.txt文件
className=???
methodName=???
(具体键与值取决于选定的类地址与内部方法)
    
//Student类
package day27_Reflect_02;
	
public class Student {
    public void love(){
        System.out.println("我爱java");
    }
}
//Teacher类
package day27_Reflect_02;

public class Teacher {
    public void love(){
      System.out.println("爱教学生java");
    }
}

//Test类
package day27_Reflect_02;

import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Properties;

/*
    通过配置文件运行类中的方法

    反射:
            需要有配置文件配合使用。
            用class.txt代替
            并且你知道有两个键
                className
                methodName
 */
public class Test {
    public static void main(String[] args) throws IOException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        //反射前的做法
//        Student s =new Student();
//        s.love();
//
//        Teacher t =new Teacher();
//        t.love();
        //反射后的做法

        //加载键值对数据
        Properties prop =new Properties();
        FileReader fr =new FileReader("src/day27_Reflect_02/class.txt");
        prop.load(fr);
        fr.close();

        //获取数据
        String className =prop.getProperty("className");
        String methodName =prop.getProperty("methodName");

        //反射
        Class c =Class.forName(className);

        Constructor con =c.getConstructor();
        Object obj =con.newInstance();

        //调用方法
        Method m =c.getMethod(methodName);
        m.invoke(obj);
    }
}


```

​		B:通过反射越过泛型检查

```java
package day27_Reflect_02;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;

/*
    我给你ArrayList<Integer>的一个对象,我想在这个集合中添加一个字符串数据,如何实现呢？
 */
public class ArrayListDemo {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        //创建集合对象
        ArrayList<Integer> array =new ArrayList<Integer>();
//        array.add(43);  不用反射的老式方法
        //array.add("hello") 泛型机制为Integer类型 所以不能添加
//        for (Integer arrays :array){
//            System.out.println(arrays);
//        }

        //利用反射
        Class c =array.getClass();
        Method m =c.getMethod("add",Object.class);

        m.invoke(array,"hello");
        System.out.println(array);
    }
}

```

​		C:通过反射给任意的一个对象的任意的属性赋值为指定的值

###### 	(5)动态代理

​	

```txt
动态代理：
	*代理：本来应该自己做的事情,却请了别人来做,被请的人就是代理对象。
		*举例：春季回家买票让人代买
	*动态代理：在程序运行过程中产生的这个对象
		*而程序运行过程中产生对象其实就是我们刚才反射讲解的内容,所以,动态代理其实就是通过反射来生成一个代理
```

​	

```txt
*在Java中java.lang.reflect包下提供了一个Proxy类和一个InvocationHandler接口,通过使用这个类和接口就可以生成动态代理对象。JDK提供的代理只能针对接口做处理。我们有更强大的代理cglib
*Proxy类中的方法创建动态代理类对象
	*public static Object newProxyInstance(ClassLoader loader.Class<?>[] interfaces.InvocationHandler h)
	*最终会调用InvocationHandler的方法
*InvocationHandler
	*Object invoke(Object proxy,Method method,Object[] args)
```



##### 2:设计模式

###### 	(1)装饰设计模式

​		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));		

Scanner sc = new Scanner(System.in);

###### (2)模版设计模式

##### 3:JDK新特性

###### 	(1)JDK5(掌握)

​		装箱和拆箱
​		泛型
​		增强for
​		静态导入
​		可变参数
​		枚举

###### 	(2)JDK6(了解)

###### 	(3)JDK7(理解)

​		二进制的表现形式
​		用_分隔数据
​		switch语句可是用字符串
​		泛型推断(菱形泛型)
​		多catch的使用
​		自动释放资源的用法

###### 	(4)JDK8(了解)

​		可以去网上了解资料

<hr>



# Java 提升部分

<hr>

<!--注：该部分用于能力的提升，不限于基础知识拓展-->

<hr>

### 1、对象的销毁

<hr>

虽然 Java 语言是基于 C++ 的，但是它和 C++/C 的一个重要的特征就是不需要手动管理对象的销毁工作。在著名一书《深入理解Java虚拟机》 中提到一个观点

**Java和C++之间有一堵由内存动态分配和垃圾收集技术所围成的“高墙”,墙外面的人想进去，墙里面的人想出来**

在 Java 中，我们不再需要手动管理对象的销毁，它是由 **Java虚拟机**进行管理和销毁的。虽然我们不需要手动管理对象，但是你需要指导 “对象作用域” 这个概念

<hr>

### 2、对象作用域

<hr>

多数语言都有**作用域**这个概念。作用域决定了其内部定义的变量名的可见性和生命周期。在C、C++和Java中，作用域通常由**{}**的位置来决定