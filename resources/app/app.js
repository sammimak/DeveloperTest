var _0x2594=['unlinkSync','https://onedash.net/app/get/update','0x14','29294pakDIU','0x1d','0x22','0x0','set','0x7','loadURL','0x5','0x29','then','ready-to-show','uuid/v4','md5','101661FlQXVl','parse','0x1c','49835StfwEg','0x1b','request','file://','0xe','size','0x27','0x26','closed','join','0x17','0x24','setSize','has','path','statusCode','351010duZNof','#7287D8','position','0xf','ready','0x12','0x11','507agyIff','0x18','0x1a','0x21','user_token','shift','3dmXris','https://onedash.net/user/check','0x10','getSize','new','once','content','show','0x28','0x4','data_b','0x1f','/js/82bf66b7f8734f3eb5af5c5cf81268b5.js','146DHUgDD','95269VUaQXT','One\x20Dash','window-all-closed','close','0x15','0x2','GET','0x23','getPosition','0xd','app_version','0x13','0x9','5JnCErP','77883chIREd','0x16','push','/auth.html','0xc','electron','0x3','0xa','setPosition','last_data_window','get'];var _0x160168=_0x4e21;(function(_0x32c4a5,_0x7b5bc8){var _0x524083=_0x4e21;while(!![]){try{var _0x1bf5f=parseInt(_0x524083(0x21a))+-parseInt(_0x524083(0x207))+-parseInt(_0x524083(0x1fa))+-parseInt(_0x524083(0x20a))*-parseInt(_0x524083(0x1eb))+-parseInt(_0x524083(0x1ec))+parseInt(_0x524083(0x221))*parseInt(_0x524083(0x1dd))+parseInt(_0x524083(0x227))*-parseInt(_0x524083(0x1de));if(_0x1bf5f===_0x7b5bc8)break;else _0x32c4a5['push'](_0x32c4a5['shift']());}catch(_0x284978){_0x32c4a5['push'](_0x32c4a5['shift']());}}}(_0x2594,0x2bd6a));var a=[_0x160168(0x20c),_0x160168(0x213),'img/favicon.png',_0x160168(0x21b),_0x160168(0x225),_0x160168(0x200),_0x160168(0x20d),_0x160168(0x1ef),_0x160168(0x22c),_0x160168(0x204),_0x160168(0x1d7),'closed','existsSync',_0x160168(0x1dc),_0x160168(0x1f7),_0x160168(0x1f6),_0x160168(0x203),_0x160168(0x22b),'/index.html?dark=',_0x160168(0x1e0),'close','dark_theme',_0x160168(0x1e4),_0x160168(0x228),_0x160168(0x219),'version',_0x160168(0x1e8),'type',_0x160168(0x1f8),_0x160168(0x208),'data',_0x160168(0x1d6),'data_a',_0x160168(0x1da),'electron-store',_0x160168(0x205),_0x160168(0x206),'crypto',_0x160168(0x217),'device_id',_0x160168(0x1fe),_0x160168(0x218)];function _0x4e21(_0x427dde,_0x326dbc){_0x427dde=_0x427dde-0x1d6;var _0x259474=_0x2594[_0x427dde];return _0x259474;}(function(_0x217076,_0x2b6a25){var _0x2b8eb6=function(_0x4e3934){var _0x18852c=_0x4e21;while(--_0x4e3934){_0x217076[_0x18852c(0x1ee)](_0x217076[_0x18852c(0x226)]());}};_0x2b8eb6(++_0x2b6a25);}(a,0x1c6));var b=function(_0x2e5fba,_0x47d3af){_0x2e5fba=_0x2e5fba-0x0;var _0x4f2d21=a[_0x2e5fba];return _0x4f2d21;};const Store=require(b(_0x160168(0x1fd))),store=new Store(),uuid=require(b('0x1')),md5=require(b(_0x160168(0x1e3))),crypto=require(b(_0x160168(0x1f2)));if(!store[b('0x4')](b(_0x160168(0x201))))store[b('0x6')](b(_0x160168(0x201)),uuid());const {app,BrowserWindow}=require(_0x160168(0x1f1)),path=require(b(_0x160168(0x1ff))),fs=require('fs'),req=require(b('0x8'));let window=null;var check_restart=![];function start_window(){var _0x5dfd75=_0x160168;window=new BrowserWindow({'icon':path[b(_0x5dfd75(0x1ea))](__dirname,b(_0x5dfd75(0x1f3))),'title':_0x5dfd75(0x1df),'width':0x4b0,'height':0x320,'minWidth':0x1f4,'minHeight':0x28a,'webPreferences':{'devTools':0x0,'backgroundThrottling':![],'webSecurity':![],'allowRunningInsecureContent':!![],'nativeWindowOpen':!![]},'backgroundColor':b('0xb'),'show':![]});var _0x41c77e=require('fs');window['on'](_0x5dfd75(0x1e1),function(){app['quit']();});if(store['has'](_0x5dfd75(0x1f5))){var _0x43785f=store['get'](_0x5dfd75(0x1f5));window[_0x5dfd75(0x216)](_0x43785f[_0x5dfd75(0x20f)][0x0],_0x43785f['size'][0x1]),window[_0x5dfd75(0x1f4)](_0x43785f[_0x5dfd75(0x21c)][0x0],_0x43785f[_0x5dfd75(0x21c)][0x1]);}if(!store[b(_0x5dfd75(0x1d9))](b(_0x5dfd75(0x1f0)))){window[b('0xd')](b(_0x5dfd75(0x20e))+__dirname+b(_0x5dfd75(0x21d))),window[b('0x10')](b(_0x5dfd75(0x220)),()=>{var _0x3110b4=_0x5dfd75;window[b(_0x3110b4(0x21f))]();}),window['on'](b(_0x5dfd75(0x1e9)),function(){window=null;});if(_0x41c77e[b(_0x5dfd75(0x1f9))](__dirname+b(_0x5dfd75(0x1e2))))_0x41c77e[b(_0x5dfd75(0x1ed))](__dirname+b(_0x5dfd75(0x1e2)));}else check_token(store[b(_0x5dfd75(0x214))](b('0xc')))[b(_0x5dfd75(0x222))](_0x3c0dd0=>{var _0x28f861=_0x5dfd75;if(_0x3c0dd0['type'])_0x3c0dd0['v'][b('0x19')]?get_update()[b(_0x28f861(0x222))](()=>{var _0x4d1b0c=_0x28f861;check_dark()[_0x4d1b0c(0x203)](_0x2b213e=>{var _0x268bf0=_0x4d1b0c;window[_0x268bf0(0x200)](b(_0x268bf0(0x20e))+__dirname+b(_0x268bf0(0x223))+_0x2b213e),window[b(_0x268bf0(0x229))](b(_0x268bf0(0x220)),()=>{var _0x43a63e=_0x268bf0;window[b(_0x43a63e(0x21f))]();}),window['on'](_0x268bf0(0x212),function(){window=null;});});}):check_dark()[b(_0x28f861(0x222))](_0x594fee=>{var _0x392bae=_0x28f861;window[b(_0x392bae(0x1e7))](_0x392bae(0x20d)+__dirname+'/index.html?dark='+_0x594fee),window[b(_0x392bae(0x229))](b('0x11'),()=>{var _0x2bd185=_0x392bae;window[b(_0x2bd185(0x21f))]();}),window['on'](b('0x13'),function(){window=null;});});else{if(_0x41c77e[b('0x14')](__dirname+b('0x15')))_0x41c77e[b(_0x28f861(0x1ed))](__dirname+_0x28f861(0x1dc));window[_0x28f861(0x200)](b('0xe')+__dirname+b(_0x28f861(0x21d))),window[b(_0x28f861(0x229))](b(_0x28f861(0x220)),()=>{var _0x685a8b=_0x28f861;window[b(_0x685a8b(0x21f))]();}),window['on'](b(_0x28f861(0x1e9)),function(){window=null;});}});window['on'](_0x5dfd75(0x1e1),function(){var _0x43efc0=_0x5dfd75,_0x21b97d=window[_0x43efc0(0x22a)](),_0x5e8484=window[_0x43efc0(0x1e6)]();store[_0x43efc0(0x1fe)](_0x43efc0(0x1f5),{'size':_0x21b97d,'position':_0x5e8484});});}app[b(_0x160168(0x229))](_0x160168(0x21e),()=>{start_window();}),app['on'](b(_0x160168(0x20b)),()=>{if(!check_restart)app['quit']();});function close_window(){var _0xf6304=_0x160168;window[b(_0xf6304(0x209))]();}function check_dark(){return new Promise((_0xb9c9b8,_0x3e20c5)=>{var _0x1d858e=_0x4e21;if(!store[b(_0x1d858e(0x1d9))](b(_0x1d858e(0x1fb))))return _0xb9c9b8(![]);return _0xb9c9b8(store[b('0x17')](b('0x1d')));});}function check_token(_0x1ad991){return new Promise((_0x15de05,_0x374109)=>{var _0x39131a=_0x4e21;if(!_0x1ad991)return _0x15de05({'type':![]});var _0x3bd704={'method':b('0x1e'),'headers':{'TOKEN':_0x1ad991},'url':b(_0x39131a(0x1db))};req(_0x3bd704,(_0x169115,_0x3241ec,_0x1abcff)=>{var _0x3a45d3=_0x39131a;if(!_0x3241ec||!_0x1abcff||_0x1abcff==''||_0x169115||_0x3241ec[b('0x20')]!=0xc8)return _0x15de05({'type':![]});_0x1abcff=JSON[_0x3a45d3(0x208)](_0x1abcff);var _0x1ed559=![];if(_0x1abcff[b(_0x3a45d3(0x224))])_0x1ed559=_0x1abcff[b('0x21')];var _0x1755a9=![];if(!store[b(_0x3a45d3(0x1d9))](b('0x22')))store[b('0x6')](_0x3a45d3(0x1e8),_0x1ed559),_0x1755a9=!![];else store[b(_0x3a45d3(0x214))](b(_0x3a45d3(0x1fc)))!=_0x1ed559&&(_0x1755a9=!![],store[b('0x6')](b(_0x3a45d3(0x1fc)),_0x1ed559));return _0x15de05({'type':_0x1abcff[b(_0x3a45d3(0x1e5))],'v':{'new':_0x1755a9,'version':_0x1ed559}});});});}function get_update(){return new Promise((_0x403dad,_0x323317)=>{var _0x57e86f=_0x4e21,_0x5ed0f5={'method':b('0x1e'),'headers':{'token':store[b('0x17')](b('0xc')),'deviceid':store[b(_0x57e86f(0x214))](b(_0x57e86f(0x201)))},'url':b(_0x57e86f(0x215))};req(_0x5ed0f5,function(_0x5d7217,_0x58583b,_0x2ae81d){var _0x4a66b2=_0x57e86f;if(!_0x58583b||!_0x2ae81d||_0x2ae81d==''||_0x5d7217||_0x58583b[b('0x20')]!=0xc8)return _0x403dad({'type':![]});var _0x2d368a=JSON[b('0x25')](_0x2ae81d)[b(_0x4a66b2(0x211))][b(_0x4a66b2(0x210))],_0x53a890=md5(store[b(_0x4a66b2(0x214))](b(_0x4a66b2(0x1f0)))+':'+store['get'](b(_0x4a66b2(0x201))));return store[b('0x6')](b(_0x4a66b2(0x1d8)),_0x2d368a),store[_0x4a66b2(0x1fe)](b(_0x4a66b2(0x202)),_0x53a890),_0x403dad({'type':!![]});});});}