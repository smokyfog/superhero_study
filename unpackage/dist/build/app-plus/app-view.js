var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'msg']]],[1,'']]])
Z([3,'txt'])
Z([3,'text'])
Z([[7],[3,'myval']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie_score_wapper'])
Z([3,'__i0__'])
Z([3,'yellow'])
Z([[7],[3,'yellowScore']])
Z([3,'star_ico'])
Z([3,'/static/icos/star-yellow.png'])
Z([3,'__i1__'])
Z([3,'gray'])
Z([[7],[3,'grayScore']])
Z(z[4])
Z([3,'/static/icos/star-gray.png'])
Z([[2,'=='],[[7],[3,'showNum']],[1,1]])
Z([3,'movie_score'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'innerScore']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'black'])
Z([3,'__e'])
Z([3,'cover'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'opertor']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([1,true])
Z([3,'carousel'])
Z([1,1000])
Z(z[1])
Z([1,3000])
Z([3,'__i0__'])
Z([3,'caroursel'])
Z([[7],[3,'carourselList']])
Z([3,'id'])
Z(z[2])
Z([[6],[[7],[3,'caroursel']],[3,'image']])
Z([3,'page_block super_hot'])
Z([3,'hot_title_wapper'])
Z([3,'hot_ico'])
Z([3,'/static/icos/hot.png'])
Z([3,'hot_title'])
Z([3,'热门超英'])
Z([3,'page_block hot'])
Z([3,'true'])
Z([3,'__i1__'])
Z([3,'hotSuperheroList'])
Z([[7],[3,'hotSuperheroList']])
Z(z[9])
Z([3,'__e'])
Z([3,'single_poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTraller']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'hotSuperheroList']],[3,'id']])
Z([3,'poster_wapper'])
Z([3,'poster'])
Z([[6],[[7],[3,'hotSuperheroList']],[3,'cover']])
Z([3,'movie_name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'hotSuperheroList']],[3,'name']]],[1,'']]])
Z([3,'__l'])
Z([[6],[[7],[3,'hotSuperheroList']],[3,'score']])
Z([3,'1'])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i1__']]])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'/static/icos/interest.png'])
Z(z[16])
Z([3,'热门预告'])
Z([3,'hot_movies page_block'])
Z([3,'index'])
Z([3,'trailer'])
Z([[7],[3,'hotTrailerList']])
Z(z[44])
Z(z[24])
Z([3,'hot_movie_single'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'meIsPlaying']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z(z[51])
Z([[6],[[7],[3,'trailer']],[3,'poster']])
Z([[6],[[7],[3,'trailer']],[3,'trailer']])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'/static/icos/guess-u-like.png'])
Z(z[16])
Z([3,'猜你喜欢'])
Z([3,'page_block guess_u_like'])
Z([3,'gIndex'])
Z([3,'guess'])
Z([[7],[3,'guessULikeList']])
Z(z[62])
Z([3,'single_like_movie'])
Z(z[24])
Z([3,'poster like_movie'])
Z(z[26])
Z([[6],[[7],[3,'guess']],[3,'id']])
Z([[6],[[7],[3,'guess']],[3,'cover']])
Z([3,'movie_desc'])
Z([3,'movie_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'name']]],[1,'']]])
Z(z[33])
Z([1,9.1])
Z([3,'0'])
Z([[2,'+'],[1,'2-'],[[7],[3,'gIndex']]])
Z([3,'movie_info movie_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'basicInfo']]],[1,'']]])
Z(z[79])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'releaseDate']]],[1,'']]])
Z(z[24])
Z([3,'movie_oper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'gIndex']])
Z([3,'praise_ico'])
Z([3,'/static/icos/praise.png'])
Z([3,'praise_me'])
Z([3,'点赞'])
Z([[6],[[7],[3,'animationDataArr']],[[7],[3,'gIndex']]])
Z([3,'praise_me animation_opacity'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'face'])
Z([[6],[[7],[3,'userInfo']],[3,'faceImage']])
Z(z[3])
Z([3,'http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png'])
Z(z[2])
Z([3,'info-wapper'])
Z([3,'nickname'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'userInfo']],[3,'nickname']]],[1,'']]])
Z([3,'nav-info'])
Z([a,[[2,'+'],[[2,'+'],[1,'ID: '],[[6],[[7],[3,'userInfo']],[3,'id']]],[1,'']]])
Z([3,'../registLogin/registLogin'])
Z([3,'nickname regist-login'])
Z([3,'注册/登陆'])
Z(z[2])
Z([3,'__e'])
Z([3,'set-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jump_meinfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'settings'])
Z([3,'/static/icos/settings.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill '])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page_block'])
Z([3,'margin-top:20rpx;'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'dateChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([3,'birthday'])
Z([a,[[7],[3,'birthday']]])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'pending-wapper'])
Z([3,'pending-face'])
Z([3,'face'])
Z([3,'scaleToFill'])
Z([[7],[3,'tempFace']])
Z([3,'notice'])
Z([3,'notice-words'])
Z([3,'* 请从相册中选择等比宽高的图片噢~'])
Z([3,'footer-opertor'])
Z([3,'__e'])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePendingFace']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-fill page'])
Z([3,'page_block info-list'])
Z([3,'__e'])
Z([3,'item-wapper face-line-upbottom'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'info-words'])
Z([3,'头像'])
Z([3,'right-wapper'])
Z([3,'face'])
Z([[6],[[7],[3,'globalUser']],[3,'faceImage']])
Z([3,'arrow-block'])
Z([3,'arrow-ico'])
Z([3,'/static/icos/left-gray-arrow.png'])
Z([3,'line-top'])
Z([3,'line'])
Z(z[2])
Z([3,'item-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyNickName']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'昵称'])
Z(z[7])
Z([3,'gray-fields'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'globalUser']],[3,'nickname']]],[1,'']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[2])
Z(z[16])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'生日'])
Z(z[7])
Z(z[21])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'globalUser']],[3,'birthday']]],[1,'']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[2])
Z(z[16])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifySex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'性别'])
Z(z[7])
Z(z[21])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,1]])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,0]])
Z([3,'女'])
Z([3,'未选择'])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'footer-wapper'])
Z(z[2])
Z([3,'footer-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'cleanStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[2])
Z(z[58])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitNickname']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page_block'])
Z([3,'margin-top:20rpx;'])
Z([3,'input'])
Z([3,'10'])
Z([3,'nickname'])
Z([3,'请输入昵称'])
Z([3,'graywords'])
Z([3,'text'])
Z([[6],[[7],[3,'globalUser']],[3,'nickname']])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'player'])
Z([3,'movie'])
Z([3,'myTrailer'])
Z([[6],[[7],[3,'trailerInfo']],[3,'poster']])
Z([[6],[[7],[3,'trailerInfo']],[3,'trailer']])
Z([3,'movie_info'])
Z([[2,'+'],[1,'../cover/cover?cover\x3d'],[[6],[[7],[3,'trailerInfo']],[3,'cover']]])
Z([3,'cover'])
Z([[6],[[7],[3,'trailerInfo']],[3,'cover']])
Z([3,'movie_desc'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'name']]])
Z([3,'basic_info'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'basicInfo']]])
Z(z[13])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'originalName']]])
Z(z[13])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'totalTime']]])
Z(z[13])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'releaseDate']]])
Z([3,'score_block'])
Z([3,'big_score'])
Z([3,'score_words'])
Z([3,'综合评分：'])
Z([3,'movie_score'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'score']]])
Z([3,'score_stars'])
Z([[2,'>='],[[6],[[7],[3,'trailerInfo']],[3,'score']],[1,0]])
Z([3,'__l'])
Z([[6],[[7],[3,'trailerInfo']],[3,'score']])
Z([3,'0'])
Z([3,'1'])
Z([3,'prise_counts'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'trailerInfo']],[3,'prisedCounts']]],[1,' 人点赞']]])
Z([3,'line_wapper'])
Z([3,'line'])
Z([3,'plots_block'])
Z([3,'plots_title'])
Z([3,'剧情介绍'])
Z([3,'plots_desc'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'plotDesc']]])
Z([3,'scroll_block'])
Z([3,'scroll_title'])
Z([3,'演职人员'])
Z([3,'scroll_list'])
Z([3,'staffIndex'])
Z([3,'director'])
Z([[7],[3,'directorArray']])
Z([3,'id'])
Z([3,'actor_wapper'])
Z([3,'__e'])
Z([3,'single_actor'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookStaffs']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'staffIndex']])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'director']],[3,'photo']])
Z([3,'actor_name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'director']],[3,'name']]],[1,'']]])
Z([3,'actor_role'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'director']],[3,'actName']]],[1,'']]])
Z([3,'actorIndex'])
Z([3,'actor'])
Z([[7],[3,'actorArray']])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[52])
Z(z[53])
Z([[2,'+'],[[7],[3,'actorIndex']],[[6],[[7],[3,'directorArray']],[3,'length']]])
Z(z[55])
Z([[6],[[7],[3,'actor']],[3,'photo']])
Z(z[57])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'actor']],[3,'name']]],[1,'']]])
Z(z[59])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'actor']],[3,'actName']]],[1,'']]])
Z(z[42])
Z(z[43])
Z([3,'剧照'])
Z(z[45])
Z([3,'imgIndex'])
Z([3,'img'])
Z([[7],[3,'plotPicsArray']])
Z(z[80])
Z(z[51])
Z([3,'ploat_image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'imgIndex']])
Z(z[55])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face-wapper'])
Z([3,'face'])
Z([3,'/static/icos/default-face.png'])
Z([3,'info-wapper'])
Z([3,'words-lbl'])
Z([3,'账号'])
Z([3,'input'])
Z([3,'username'])
Z([3,'请输入用户名称'])
Z([3,'text'])
Z([3,''])
Z(z[6])
Z([3,'margin-top:40rpx;'])
Z(z[7])
Z([3,'密码'])
Z(z[9])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[12])
Z(z[13])
Z(z[9])
Z([3,'submit'])
Z([3,'margin-top:60rpx;width:90%;'])
Z([3,'primary'])
Z([3,'注册/登陆'])
Z([3,'third-wapper'])
Z([3,'third-line'])
Z([3,'single-line'])
Z([3,'line'])
Z([3,'third-words'])
Z([3,'第三方账号登录'])
Z(z[31])
Z(z[32])
Z([3,'third-icos-wapper'])
Z(z[1])
Z([3,'third-ico'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'/static/icos/weixin.png'])
Z(z[1])
Z(z[39])
Z(z[40])
Z([3,'qq'])
Z([3,'/static/icos/QQ.png'])
Z([3,'margin-left:80rpx;'])
Z(z[1])
Z(z[39])
Z(z[40])
Z([3,'sinaweibo'])
Z([3,'/static/icos/weibo.png'])
Z(z[48])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'search_block'])
Z([3,'search_ico_wapper'])
Z([3,'search_ico'])
Z([3,'/static/icos/search.png'])
Z([3,'__e'])
Z([3,'search_text'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'searchMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'10'])
Z([3,'搜索预告'])
Z([3,'movie_list page_block'])
Z([3,'__i0__'])
Z([3,'trailer'])
Z([[7],[3,'trailerList']])
Z([3,'id'])
Z([3,'movie_wapper'])
Z(z[5])
Z([3,'poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTraller']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z([[6],[[7],[3,'trailer']],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitSex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page_block'])
Z([3,'margin-top:20rpx;'])
Z(z[1])
Z([3,'radio-sex'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'sexChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'radio-single'])
Z([[2,'=='],[[7],[3,'sex']],[1,1]])
Z([3,'1'])
Z([3,'男'])
Z(z[8])
Z([[2,'=='],[[7],[3,'sex']],[1,0]])
Z([3,'0'])
Z([3,'女'])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/helloComp.wxml','./components/trailerStars.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meBirthday/meBirthday.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/meNickName/meNickName.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/search/search.wxml','./pages/sex/sex.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_oz(z,0,e,s,gg)
_(oB,xC)
var oD=_n('view')
var fE=_mz(z,'input',['class',1,'type',1,'value',2],[],e,s,gg)
_(oD,fE)
_(oB,oD)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var cI=_v()
_(hG,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_mz(z,'image',['class',4,'src',1],[],aL,lK,gg)
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,3,oJ,e,s,gg,cI,'yellow','__i0__','')
var oP=_v()
_(hG,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_mz(z,'image',['class',9,'src',1],[],fS,oR,gg)
_(cT,oV)
return cT
}
oP.wxXCkey=2
_2z(z,8,xQ,e,s,gg,oP,'gray','__i1__','')
var oH=_v()
_(hG,oH)
if(_oz(z,11,e,s,gg)){oH.wxVkey=1
var cW=_n('view')
_rz(z,cW,'class',12,e,s,gg)
var oX=_oz(z,13,e,s,gg)
_(cW,oX)
_(oH,cW)
}
oH.wxXCkey=1
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aZ=_n('view')
_rz(z,aZ,'class',0,e,s,gg)
var t1=_mz(z,'image',['bindlongpress',1,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
_(aZ,t1)
_(r,aZ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_mz(z,'swiper',['autoplay',1,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var x5=_v()
_(o4,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_n('swiper-item')
var oBB=_mz(z,'image',['class',10,'src',1],[],c8,f7,gg)
_(cAB,oBB)
_(h9,cAB)
return h9
}
x5.wxXCkey=2
_2z(z,8,o6,e,s,gg,x5,'caroursel','__i0__','id')
_(b3,o4)
var lCB=_n('view')
_rz(z,lCB,'class',12,e,s,gg)
var aDB=_n('view')
_rz(z,aDB,'class',13,e,s,gg)
var tEB=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
_(aDB,tEB)
var eFB=_n('view')
_rz(z,eFB,'class',16,e,s,gg)
var bGB=_oz(z,17,e,s,gg)
_(eFB,bGB)
_(aDB,eFB)
_(lCB,aDB)
_(b3,lCB)
var oHB=_mz(z,'scroll-view',['class',18,'scrollX',1],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2,'data-trailerId',3],[],cLB,fKB,gg)
var oPB=_n('view')
_rz(z,oPB,'class',28,cLB,fKB,gg)
var lQB=_mz(z,'image',['class',29,'src',1],[],cLB,fKB,gg)
_(oPB,lQB)
var aRB=_n('view')
_rz(z,aRB,'class',31,cLB,fKB,gg)
var tSB=_oz(z,32,cLB,fKB,gg)
_(aRB,tSB)
_(oPB,aRB)
var eTB=_mz(z,'trailer-stars',['bind:__l',33,'innerScore',1,'showNum',2,'vueId',3],[],cLB,fKB,gg)
_(oPB,eTB)
_(cOB,oPB)
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=4
_2z(z,22,oJB,e,s,gg,xIB,'hotSuperheroList','__i1__','id')
_(b3,oHB)
var bUB=_n('view')
_rz(z,bUB,'class',37,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',38,e,s,gg)
var xWB=_mz(z,'image',['class',39,'src',1],[],e,s,gg)
_(oVB,xWB)
var oXB=_n('view')
_rz(z,oXB,'class',41,e,s,gg)
var fYB=_oz(z,42,e,s,gg)
_(oXB,fYB)
_(oVB,oXB)
_(bUB,oVB)
_(b3,bUB)
var cZB=_n('view')
_rz(z,cZB,'class',43,e,s,gg)
var h1B=_v()
_(cZB,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_mz(z,'video',['controls',-1,'bindplay',48,'class',1,'data-event-opts',2,'data-playIndex',3,'id',4,'poster',5,'src',6],[],o4B,c3B,gg)
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=2
_2z(z,46,o2B,e,s,gg,h1B,'trailer','index','index')
_(b3,cZB)
var e8B=_n('view')
_rz(z,e8B,'class',55,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',56,e,s,gg)
var o0B=_mz(z,'image',['class',57,'src',1],[],e,s,gg)
_(b9B,o0B)
var xAC=_n('view')
_rz(z,xAC,'class',59,e,s,gg)
var oBC=_oz(z,60,e,s,gg)
_(xAC,oBC)
_(b9B,xAC)
_(e8B,b9B)
_(b3,e8B)
var fCC=_n('view')
_rz(z,fCC,'class',61,e,s,gg)
var cDC=_v()
_(fCC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_n('view')
_rz(z,aJC,'class',66,cGC,oFC,gg)
var tKC=_mz(z,'image',['bindtap',67,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],cGC,oFC,gg)
_(aJC,tKC)
var eLC=_n('view')
_rz(z,eLC,'class',72,cGC,oFC,gg)
var bMC=_n('view')
_rz(z,bMC,'class',73,cGC,oFC,gg)
var oNC=_oz(z,74,cGC,oFC,gg)
_(bMC,oNC)
_(eLC,bMC)
var xOC=_mz(z,'trailer-stars',['bind:__l',75,'innerScore',1,'showNum',2,'vueId',3],[],cGC,oFC,gg)
_(eLC,xOC)
var oPC=_n('view')
_rz(z,oPC,'class',79,cGC,oFC,gg)
var fQC=_oz(z,80,cGC,oFC,gg)
_(oPC,fQC)
_(eLC,oPC)
var cRC=_n('view')
_rz(z,cRC,'class',81,cGC,oFC,gg)
var hSC=_oz(z,82,cGC,oFC,gg)
_(cRC,hSC)
_(eLC,cRC)
_(aJC,eLC)
var oTC=_mz(z,'view',['bindtap',83,'class',1,'data-event-opts',2,'data-gIndex',3],[],cGC,oFC,gg)
var cUC=_mz(z,'image',['class',87,'src',1],[],cGC,oFC,gg)
_(oTC,cUC)
var oVC=_n('view')
_rz(z,oVC,'class',89,cGC,oFC,gg)
var lWC=_oz(z,90,cGC,oFC,gg)
_(oVC,lWC)
_(oTC,oVC)
var aXC=_mz(z,'view',['animation',91,'class',1],[],cGC,oFC,gg)
var tYC=_oz(z,93,cGC,oFC,gg)
_(aXC,tYC)
_(oTC,aXC)
_(aJC,oTC)
_(oHC,aJC)
return oHC
}
cDC.wxXCkey=4
_2z(z,64,hEC,e,s,gg,cDC,'guess','gIndex','gIndex')
_(b3,fCC)
_(r,b3)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_n('view')
_rz(z,o2C,'class',1,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,2,e,s,gg)){x3C.wxVkey=1
var c6C=_n('view')
var h7C=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(c6C,h7C)
_(x3C,c6C)
}
else{x3C.wxVkey=2
var o8C=_n('view')
var c9C=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(o8C,c9C)
_(x3C,o8C)
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,7,e,s,gg)){o4C.wxVkey=1
var o0C=_n('view')
_rz(z,o0C,'class',8,e,s,gg)
var lAD=_n('view')
_rz(z,lAD,'class',9,e,s,gg)
var aBD=_oz(z,10,e,s,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_n('view')
_rz(z,tCD,'class',11,e,s,gg)
var eDD=_oz(z,12,e,s,gg)
_(tCD,eDD)
_(o0C,tCD)
_(o4C,o0C)
}
else{o4C.wxVkey=2
var bED=_n('view')
var oFD=_n('navigator')
_rz(z,oFD,'url',13,e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',14,e,s,gg)
var oHD=_oz(z,15,e,s,gg)
_(xGD,oHD)
_(oFD,xGD)
_(bED,oFD)
_(o4C,bED)
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,16,e,s,gg)){f5C.wxVkey=1
var fID=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var cJD=_mz(z,'image',['class',20,'src',1],[],e,s,gg)
_(fID,cJD)
_(f5C,fID)
}
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
_(b1C,o2C)
_(r,b1C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oLD=_n('view')
_rz(z,oLD,'class',0,e,s,gg)
var cMD=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var oND=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var lOD=_mz(z,'picker',['bindchange',5,'data-event-opts',1,'mode',2],[],e,s,gg)
var aPD=_n('view')
_rz(z,aPD,'class',8,e,s,gg)
var tQD=_oz(z,9,e,s,gg)
_(aPD,tQD)
_(lOD,aPD)
_(oND,lOD)
_(cMD,oND)
var eRD=_mz(z,'button',['class',10,'formType',1,'type',2],[],e,s,gg)
var bSD=_oz(z,13,e,s,gg)
_(eRD,bSD)
_(cMD,eRD)
_(oLD,cMD)
_(r,oLD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'class',1,e,s,gg)
var fWD=_mz(z,'image',['class',2,'id',1,'mode',2,'src',3],[],e,s,gg)
_(oVD,fWD)
_(xUD,oVD)
var cXD=_n('view')
_rz(z,cXD,'class',6,e,s,gg)
var hYD=_n('view')
_rz(z,hYD,'class',7,e,s,gg)
var oZD=_oz(z,8,e,s,gg)
_(hYD,oZD)
_(cXD,hYD)
_(xUD,cXD)
var c1D=_n('view')
_rz(z,c1D,'class',9,e,s,gg)
var o2D=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var l3D=_oz(z,13,e,s,gg)
_(o2D,l3D)
_(c1D,o2D)
var a4D=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var t5D=_oz(z,17,e,s,gg)
_(a4D,t5D)
_(c1D,a4D)
_(xUD,c1D)
_(r,xUD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var b7D=_n('view')
_rz(z,b7D,'class',0,e,s,gg)
var o8D=_n('view')
_rz(z,o8D,'class',1,e,s,gg)
var x9D=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var o0D=_n('view')
_rz(z,o0D,'class',5,e,s,gg)
var fAE=_oz(z,6,e,s,gg)
_(o0D,fAE)
_(x9D,o0D)
var cBE=_n('view')
_rz(z,cBE,'class',7,e,s,gg)
var hCE=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(cBE,hCE)
var oDE=_n('view')
_rz(z,oDE,'class',10,e,s,gg)
var cEE=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(oDE,cEE)
_(cBE,oDE)
_(x9D,cBE)
_(o8D,x9D)
var oFE=_n('view')
_rz(z,oFE,'class',13,e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',14,e,s,gg)
_(oFE,lGE)
_(o8D,oFE)
var aHE=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',18,e,s,gg)
var eJE=_oz(z,19,e,s,gg)
_(tIE,eJE)
_(aHE,tIE)
var bKE=_n('view')
_rz(z,bKE,'class',20,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',21,e,s,gg)
var xME=_oz(z,22,e,s,gg)
_(oLE,xME)
_(bKE,oLE)
var oNE=_n('view')
_rz(z,oNE,'class',23,e,s,gg)
var fOE=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
_(oNE,fOE)
_(bKE,oNE)
_(aHE,bKE)
_(o8D,aHE)
var cPE=_n('view')
_rz(z,cPE,'class',26,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',27,e,s,gg)
_(cPE,hQE)
_(o8D,cPE)
var oRE=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],e,s,gg)
var cSE=_n('view')
_rz(z,cSE,'class',31,e,s,gg)
var oTE=_oz(z,32,e,s,gg)
_(cSE,oTE)
_(oRE,cSE)
var lUE=_n('view')
_rz(z,lUE,'class',33,e,s,gg)
var aVE=_n('view')
_rz(z,aVE,'class',34,e,s,gg)
var tWE=_oz(z,35,e,s,gg)
_(aVE,tWE)
_(lUE,aVE)
var eXE=_n('view')
_rz(z,eXE,'class',36,e,s,gg)
var bYE=_mz(z,'image',['class',37,'src',1],[],e,s,gg)
_(eXE,bYE)
_(lUE,eXE)
_(oRE,lUE)
_(o8D,oRE)
var oZE=_n('view')
_rz(z,oZE,'class',39,e,s,gg)
var x1E=_n('view')
_rz(z,x1E,'class',40,e,s,gg)
_(oZE,x1E)
_(o8D,oZE)
var o2E=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var f3E=_n('view')
_rz(z,f3E,'class',44,e,s,gg)
var c4E=_oz(z,45,e,s,gg)
_(f3E,c4E)
_(o2E,f3E)
var h5E=_n('view')
_rz(z,h5E,'class',46,e,s,gg)
var o6E=_n('view')
_rz(z,o6E,'class',47,e,s,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,48,e,s,gg)){c7E.wxVkey=1
var o8E=_n('view')
var l9E=_oz(z,49,e,s,gg)
_(o8E,l9E)
_(c7E,o8E)
}
else{c7E.wxVkey=2
var a0E=_v()
_(c7E,a0E)
if(_oz(z,50,e,s,gg)){a0E.wxVkey=1
var tAF=_n('view')
var eBF=_oz(z,51,e,s,gg)
_(tAF,eBF)
_(a0E,tAF)
}
else{a0E.wxVkey=2
var bCF=_n('view')
var oDF=_oz(z,52,e,s,gg)
_(bCF,oDF)
_(a0E,bCF)
}
a0E.wxXCkey=1
}
c7E.wxXCkey=1
_(h5E,o6E)
var xEF=_n('view')
_rz(z,xEF,'class',53,e,s,gg)
var oFF=_mz(z,'image',['class',54,'src',1],[],e,s,gg)
_(xEF,oFF)
_(h5E,xEF)
_(o2E,h5E)
_(o8D,o2E)
_(b7D,o8D)
var fGF=_n('view')
_rz(z,fGF,'class',56,e,s,gg)
var cHF=_mz(z,'view',['bindtap',57,'class',1,'data-event-opts',2],[],e,s,gg)
var hIF=_oz(z,60,e,s,gg)
_(cHF,hIF)
_(fGF,cHF)
var oJF=_mz(z,'view',['bindtap',61,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cKF=_oz(z,65,e,s,gg)
_(oJF,cKF)
_(fGF,oJF)
_(b7D,fGF)
_(r,b7D)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lMF=_n('view')
_rz(z,lMF,'class',0,e,s,gg)
var aNF=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var tOF=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var ePF=_mz(z,'input',['class',5,'maxlength',1,'name',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(tOF,ePF)
_(aNF,tOF)
var bQF=_mz(z,'button',['class',12,'formType',1,'type',2],[],e,s,gg)
var oRF=_oz(z,15,e,s,gg)
_(bQF,oRF)
_(aNF,bQF)
_(lMF,aNF)
_(r,lMF)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oTF=_n('view')
_rz(z,oTF,'class',0,e,s,gg)
var fUF=_n('view')
_rz(z,fUF,'class',1,e,s,gg)
var cVF=_mz(z,'video',['controls',-1,'class',2,'id',1,'poster',2,'src',3],[],e,s,gg)
_(fUF,cVF)
_(oTF,fUF)
var hWF=_n('view')
_rz(z,hWF,'class',6,e,s,gg)
var oXF=_n('navigator')
_rz(z,oXF,'url',7,e,s,gg)
var cYF=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(oXF,cYF)
_(hWF,oXF)
var oZF=_n('view')
_rz(z,oZF,'class',10,e,s,gg)
var l1F=_n('view')
_rz(z,l1F,'class',11,e,s,gg)
var a2F=_oz(z,12,e,s,gg)
_(l1F,a2F)
_(oZF,l1F)
var t3F=_n('view')
_rz(z,t3F,'class',13,e,s,gg)
var e4F=_oz(z,14,e,s,gg)
_(t3F,e4F)
_(oZF,t3F)
var b5F=_n('view')
_rz(z,b5F,'class',15,e,s,gg)
var o6F=_oz(z,16,e,s,gg)
_(b5F,o6F)
_(oZF,b5F)
var x7F=_n('view')
_rz(z,x7F,'class',17,e,s,gg)
var o8F=_oz(z,18,e,s,gg)
_(x7F,o8F)
_(oZF,x7F)
var f9F=_n('view')
_rz(z,f9F,'class',19,e,s,gg)
var c0F=_oz(z,20,e,s,gg)
_(f9F,c0F)
_(oZF,f9F)
var hAG=_n('view')
_rz(z,hAG,'class',21,e,s,gg)
var oBG=_n('view')
_rz(z,oBG,'class',22,e,s,gg)
var cCG=_n('view')
_rz(z,cCG,'class',23,e,s,gg)
var oDG=_oz(z,24,e,s,gg)
_(cCG,oDG)
_(oBG,cCG)
var lEG=_n('view')
_rz(z,lEG,'class',25,e,s,gg)
var aFG=_oz(z,26,e,s,gg)
_(lEG,aFG)
_(oBG,lEG)
_(hAG,oBG)
var tGG=_n('view')
_rz(z,tGG,'class',27,e,s,gg)
var eHG=_v()
_(tGG,eHG)
if(_oz(z,28,e,s,gg)){eHG.wxVkey=1
var bIG=_mz(z,'trailer-stars',['bind:__l',29,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(eHG,bIG)
}
var oJG=_n('view')
_rz(z,oJG,'class',33,e,s,gg)
var xKG=_oz(z,34,e,s,gg)
_(oJG,xKG)
_(tGG,oJG)
eHG.wxXCkey=1
eHG.wxXCkey=3
_(hAG,tGG)
_(oZF,hAG)
_(hWF,oZF)
_(oTF,hWF)
var oLG=_n('view')
_rz(z,oLG,'class',35,e,s,gg)
var fMG=_n('view')
_rz(z,fMG,'class',36,e,s,gg)
_(oLG,fMG)
_(oTF,oLG)
var cNG=_n('view')
_rz(z,cNG,'class',37,e,s,gg)
var hOG=_n('view')
_rz(z,hOG,'class',38,e,s,gg)
var oPG=_oz(z,39,e,s,gg)
_(hOG,oPG)
_(cNG,hOG)
var cQG=_n('view')
_rz(z,cQG,'class',40,e,s,gg)
var oRG=_oz(z,41,e,s,gg)
_(cQG,oRG)
_(cNG,cQG)
_(oTF,cNG)
var lSG=_n('view')
_rz(z,lSG,'class',42,e,s,gg)
var aTG=_n('view')
_rz(z,aTG,'class',43,e,s,gg)
var tUG=_oz(z,44,e,s,gg)
_(aTG,tUG)
_(lSG,aTG)
var eVG=_mz(z,'scroll-view',['scrollX',-1,'class',45],[],e,s,gg)
var bWG=_v()
_(eVG,bWG)
var oXG=function(oZG,xYG,f1G,gg){
var h3G=_n('view')
_rz(z,h3G,'class',50,oZG,xYG,gg)
var o4G=_mz(z,'image',['bindtap',51,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],oZG,xYG,gg)
_(h3G,o4G)
var c5G=_n('view')
_rz(z,c5G,'class',57,oZG,xYG,gg)
var o6G=_oz(z,58,oZG,xYG,gg)
_(c5G,o6G)
_(h3G,c5G)
var l7G=_n('view')
_rz(z,l7G,'class',59,oZG,xYG,gg)
var a8G=_oz(z,60,oZG,xYG,gg)
_(l7G,a8G)
_(h3G,l7G)
_(f1G,h3G)
return f1G
}
bWG.wxXCkey=2
_2z(z,48,oXG,e,s,gg,bWG,'director','staffIndex','id')
var t9G=_v()
_(eVG,t9G)
var e0G=function(oBH,bAH,xCH,gg){
var fEH=_n('view')
_rz(z,fEH,'class',65,oBH,bAH,gg)
var cFH=_mz(z,'image',['bindtap',66,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],oBH,bAH,gg)
_(fEH,cFH)
var hGH=_n('view')
_rz(z,hGH,'class',72,oBH,bAH,gg)
var oHH=_oz(z,73,oBH,bAH,gg)
_(hGH,oHH)
_(fEH,hGH)
var cIH=_n('view')
_rz(z,cIH,'class',74,oBH,bAH,gg)
var oJH=_oz(z,75,oBH,bAH,gg)
_(cIH,oJH)
_(fEH,cIH)
_(xCH,fEH)
return xCH
}
t9G.wxXCkey=2
_2z(z,63,e0G,e,s,gg,t9G,'actor','actorIndex','id')
_(lSG,eVG)
_(oTF,lSG)
var lKH=_n('view')
_rz(z,lKH,'class',76,e,s,gg)
var aLH=_n('view')
_rz(z,aLH,'class',77,e,s,gg)
var tMH=_oz(z,78,e,s,gg)
_(aLH,tMH)
_(lKH,aLH)
var eNH=_mz(z,'scroll-view',['scrollX',-1,'class',79],[],e,s,gg)
var bOH=_v()
_(eNH,bOH)
var oPH=function(oRH,xQH,fSH,gg){
var hUH=_mz(z,'image',['bindtap',84,'class',1,'data-event-opts',2,'data-imgIndex',3,'mode',4,'src',5],[],oRH,xQH,gg)
_(fSH,hUH)
return fSH
}
bOH.wxXCkey=2
_2z(z,82,oPH,e,s,gg,bOH,'img','imgIndex','imgIndex')
_(lKH,eNH)
_(oTF,lKH)
_(r,oTF)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cWH=_n('view')
_rz(z,cWH,'class',0,e,s,gg)
var oXH=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var lYH=_n('view')
_rz(z,lYH,'class',3,e,s,gg)
var aZH=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(lYH,aZH)
_(oXH,lYH)
var t1H=_n('view')
_rz(z,t1H,'class',6,e,s,gg)
var e2H=_n('label')
_rz(z,e2H,'class',7,e,s,gg)
var b3H=_oz(z,8,e,s,gg)
_(e2H,b3H)
_(t1H,e2H)
var o4H=_mz(z,'input',['class',9,'name',1,'placeholder',2,'type',3,'value',4],[],e,s,gg)
_(t1H,o4H)
_(oXH,t1H)
var x5H=_mz(z,'view',['class',14,'style',1],[],e,s,gg)
var o6H=_n('label')
_rz(z,o6H,'class',16,e,s,gg)
var f7H=_oz(z,17,e,s,gg)
_(o6H,f7H)
_(x5H,o6H)
var c8H=_mz(z,'input',['class',18,'name',1,'password',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
_(x5H,c8H)
_(oXH,x5H)
var h9H=_mz(z,'button',['class',24,'formType',1,'style',2,'type',3],[],e,s,gg)
var o0H=_oz(z,28,e,s,gg)
_(h9H,o0H)
_(oXH,h9H)
_(cWH,oXH)
var cAI=_n('view')
_rz(z,cAI,'class',29,e,s,gg)
var oBI=_n('view')
_rz(z,oBI,'class',30,e,s,gg)
var lCI=_n('view')
_rz(z,lCI,'class',31,e,s,gg)
var aDI=_n('view')
_rz(z,aDI,'class',32,e,s,gg)
_(lCI,aDI)
_(oBI,lCI)
var tEI=_n('view')
_rz(z,tEI,'class',33,e,s,gg)
var eFI=_oz(z,34,e,s,gg)
_(tEI,eFI)
_(oBI,tEI)
var bGI=_n('view')
_rz(z,bGI,'class',35,e,s,gg)
var oHI=_n('view')
_rz(z,oHI,'class',36,e,s,gg)
_(bGI,oHI)
_(oBI,bGI)
_(cAI,oBI)
var xII=_n('view')
_rz(z,xII,'class',37,e,s,gg)
var oJI=_mz(z,'image',['bindtap',38,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
_(xII,oJI)
var fKI=_mz(z,'image',['bindtap',43,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(xII,fKI)
var cLI=_mz(z,'image',['bindtap',49,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(xII,cLI)
_(cAI,xII)
_(cWH,cAI)
_(r,cWH)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oNI=_n('view')
_rz(z,oNI,'class',0,e,s,gg)
var cOI=_n('view')
_rz(z,cOI,'class',1,e,s,gg)
var oPI=_n('view')
_rz(z,oPI,'class',2,e,s,gg)
var lQI=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(oPI,lQI)
_(cOI,oPI)
var aRI=_mz(z,'input',['bindconfirm',5,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5],[],e,s,gg)
_(cOI,aRI)
_(oNI,cOI)
var tSI=_n('view')
_rz(z,tSI,'class',11,e,s,gg)
var eTI=_v()
_(tSI,eTI)
var bUI=function(xWI,oVI,oXI,gg){
var cZI=_n('view')
_rz(z,cZI,'class',16,xWI,oVI,gg)
var h1I=_mz(z,'image',['bindtap',17,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],xWI,oVI,gg)
_(cZI,h1I)
_(oXI,cZI)
return oXI
}
eTI.wxXCkey=2
_2z(z,14,bUI,e,s,gg,eTI,'trailer','__i0__','id')
_(oNI,tSI)
_(r,oNI)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var c3I=_n('view')
_rz(z,c3I,'class',0,e,s,gg)
var o4I=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var l5I=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var a6I=_mz(z,'radio-group',['bindchange',5,'class',1,'data-event-opts',2],[],e,s,gg)
var t7I=_n('label')
_rz(z,t7I,'class',8,e,s,gg)
var e8I=_mz(z,'radio',['checked',9,'value',1],[],e,s,gg)
_(t7I,e8I)
var b9I=_oz(z,11,e,s,gg)
_(t7I,b9I)
_(a6I,t7I)
var o0I=_n('label')
_rz(z,o0I,'class',12,e,s,gg)
var xAJ=_mz(z,'radio',['checked',13,'value',1],[],e,s,gg)
_(o0I,xAJ)
var oBJ=_oz(z,15,e,s,gg)
_(o0I,oBJ)
_(a6I,o0I)
_(l5I,a6I)
_(o4I,l5I)
var fCJ=_mz(z,'button',['class',16,'formType',1,'type',2],[],e,s,gg)
var cDJ=_oz(z,19,e,s,gg)
_(fCJ,cDJ)
_(o4I,fCJ)
_(c3I,o4I)
_(r,c3I)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page { width: 100%; height: 100%; background: #f7f7f7; }\n.",[1],"page_block { background-color: #fff; }\n.",[1],"line_wapper { padding: 0 ",[0,20],"; }\n.",[1],"line { height: 1px; background-color: #DBDBDA; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/helloComp.wxss']=setCssToHead([".",[1],"txt{ color: red; }\n",],undefined,{path:"./components/helloComp.wxss"});    
__wxAppCode__['components/helloComp.wxml']=$gwx('./components/helloComp.wxml');

__wxAppCode__['components/trailerStars.wxss']=setCssToHead([".",[1],"movie_score_wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: raw; -ms-flex-direction: raw; flex-direction: raw; }\n.",[1],"star_ico { width: ",[0,20],"; height: ",[0,20],"; margin-top: ",[0,6],"; }\n.",[1],"movie_score { font-size: 12px; color: gray; margin-left: ",[0,20],"; }\n",],undefined,{path:"./components/trailerStars.wxss"});    
__wxAppCode__['components/trailerStars.wxml']=$gwx('./components/trailerStars.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black { background-color: #000000; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: fixed; }\n.",[1],"cover { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"carousel{ width: 100%; height: ",[0,440],"; }\n.",[1],"super_hot{ margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"hot_title_wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"hot_ico { width: ",[0,30],"; height: ",[0,30],"; margin-top: ",[0,15],"; }\n.",[1],"hot_title { font-size: 20px; margin-left: ",[0,20],"; font-weight: 500; }\n.",[1],"hot { width: 100%; white-space: nowrap; }\n.",[1],"single_poster { display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"poster_wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie_name { width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: bold; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"hot_movies { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; }\n.",[1],"hot_movie_single { width: ",[0,350],"; height: ",[0,220],"; margin-top: ",[0,10],"; }\n.",[1],"guess_u_like { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"single_like_movie { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,30]," ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"like_movie { width: ",[0,180],"; height: ",[0,240],"; border-radius: 3%; }\n.",[1],"movie_desc { width: ",[0,340],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"movie_info { white-space: normal; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie_title { color: #808080; font-size: 14px; }\n.",[1],"movie_oper { width: ",[0,140],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-left: dashed 1px; border-left-color: #dbdbda; }\n.",[1],"praise_ico { width: ",[0,40],"; height: ",[0,40],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"praise_me { font-size: 14px; color: #feab2a; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"animation_opacity{ font-weight: bold; opacity: 0; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; }\n.",[1],"header { padding: ",[0,120]," ",[0,30]," ",[0,40]," ",[0,30],"; background-color: #ffd655; background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_1OAYFAIAAAzO_Q1tPg693.png) repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face { width: ",[0,120],"; height: ",[0,120],"; border-radius: 50%; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"info-wapper { width: 80%; margin-left: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"nickname { color: #6a5018; font-size: 18px; font-weight: bold; }\n.",[1],"regist-login { margin-left: ",[0,60],"; margin-top: ",[0,30],"; }\n.",[1],"nav-info { color: #a38e62; font-size: 14px; margin-top: ",[0,10],"; }\n.",[1],"set-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 15%; }\n.",[1],"settings { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"big-next { font-size: ",[0,160],"; color: #F7F7F7; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meBirthday/meBirthday.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"birth-input { background-color: white; height: ",[0,80],"; line-height: ",[0,40],"; padding-left: ",[0,20],"; }\n.",[1],"birthday { background-color: white; height: ",[0,80],"; padding-left: ",[0,20],"; padding-top: ",[0,30],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/meBirthday/meBirthday.wxss"});    
__wxAppCode__['pages/meBirthday/meBirthday.wxml']=$gwx('./pages/meBirthday/meBirthday.wxml');

__wxAppCode__['pages/meFace/meFace.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"pending-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,40],"; }\n.",[1],"pending-face { width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"notice { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"notice-words { color: gray; font-size: 13px; margin-top: ",[0,30],"; width: ",[0,600],"; }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/meFace/meFace.wxss"});    
__wxAppCode__['pages/meFace/meFace.wxml']=$gwx('./pages/meFace/meFace.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"info-list { padding: ",[0,0]," ",[0,30],"; }\n.",[1],"info-words { color: #333333; font-size: 16px; width: 25%; line-height: ",[0,80],"; }\n.",[1],"face { width: ",[0,80],"; height: ",[0,80],"; border-radius: 50%; }\n.",[1],"arrow-block { margin-left: ",[0,10],"; line-height: ",[0,86],"; }\n.",[1],"arrow-ico { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"item-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face-line-upbottom { margin-top: ",[0,20],"; padding-top: ",[0,20],"; padding-bottom: ",[0,20],"; }\n.",[1],"line-top { }\n.",[1],"right-wapper { width: 80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"gray-fields { font-size: 14px; color: darkgray; line-height: ",[0,80],"; }\n.",[1],"footer-wapper { position: fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; }\n.",[1],"footer-words { text-align: center; background-color: white; padding: ",[0,20],"; color: #333333; font-size: 16px; }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/meNickName/meNickName.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"graywords { color: #EAEAEA; }\n.",[1],"input { height: ",[0,80],"; line-height: ",[0,80],"; width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/meNickName/meNickName.wxss"});    
__wxAppCode__['pages/meNickName/meNickName.wxml']=$gwx('./pages/meNickName/meNickName.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"player { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: black; }\n.",[1],"movie { width: 100%; height: ",[0,440],"; }\n.",[1],"movie_info { padding: ",[0,40]," ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #f7f4f9; }\n.",[1],"cover { width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie_desc { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,30],"; width: ",[0,400],"; }\n.",[1],"title { font-size: 30px; width: 100%; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"basic_info { color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score_block{ background: white; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score_words { font-size: 12px; color: gray; }\n.",[1],"score_stars { margin-left: ",[0,20],"; margin-top: ",[0,10],"; }\n.",[1],"movie_score { font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #FEAB2A; line-height: ",[0,60],"; }\n.",[1],"prise_counts { font-size: 12px; color: gray; line-height: ",[0,44],"; }\n.",[1],"plots_block { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots_title { color: #A9A9A9; font-size: 14px; }\n.",[1],"plots_desc { margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll_block { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll_list { width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"ploat_image { width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],"; }\n.",[1],"single_actor { width: ",[0,170],"; height: ",[0,240],"; margin-right: ",[0,10],"; }\n.",[1],"actor_wapper{ display: inline-block; }\n.",[1],"actor_name { width: ",[0,170],"; text-align: center; font-size: 15px; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor_role { width: ",[0,170],"; text-align: center; font-size: 13px; color: #A9A9A9; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n",],undefined,{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/registLogin/registLogin.wxss']=setCssToHead([".",[1],"body { border-top: solid 1px #DBDBDA; padding: 0 ",[0,40],"; }\n.",[1],"face-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,120],"; margin-bottom: ",[0,120],"; }\n.",[1],"face { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"info-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: solid 1px #DBDBDA; padding-bottom: ",[0,20],"; }\n.",[1],"words-lbl { color: #808080; }\n.",[1],"input { width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"graywords { color: #EAEAEA; }\n.",[1],"third-wapper { width: 100%; margin-top: ",[0,60],"; }\n.",[1],"third-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-words { color: #A9A9A9; font-size: 13px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"single-line { padding: ",[0,15]," ",[0,20],"; width: 25%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"third-icos-wapper { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-ico { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"third-btn-ico { background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png); width: ",[0,60],"; height: ",[0,60],"; background-color: white; background-size: ",[0,60]," ",[0,60],"; background-repeat:no-repeat; border:none; padding: 0; }\nwx-button::after{ border: none; }\n",],undefined,{path:"./pages/registLogin/registLogin.wxss"});    
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search_ico { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"search_text { font-size: 14px; background-color: #eaeaea; height: ",[0,60],"; width: ",[0,650],"; }\n.",[1],"search_block { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; top: 100; z-index: 2000; background-color: #F8F8F8; }\n.",[1],"search_ico_wapper { background-color: #eaeaea; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding: ",[0,0]," ",[0,10],"; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie_wapper{ padding: ",[0,10]," ",[0,20],"; }\n.",[1],"movie_list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,100]," ",[0,10]," ",[0,0]," ",[0,10],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/sex/sex.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; }\n.",[1],"radio-sex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"radio-single { padding: ",[0,20]," ",[0,20],"; }\n.",[1],"submitBtn { width: 95%; margin-top: ",[0,40],"; }\n",],undefined,{path:"./pages/sex/sex.wxss"});    
__wxAppCode__['pages/sex/sex.wxml']=$gwx('./pages/sex/sex.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
