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
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
Z([3,'__l'])
Z([3,'movie_score_wapper'])
Z([3,'__i0__'])
Z([3,'yellow'])
Z([[7],[3,'yellowScore']])
Z([3,'star_ico'])
Z([3,'/static/icos/star-yellow.png'])
Z([3,'__i1__'])
Z([3,'gray'])
Z([[7],[3,'grayScore']])
Z(z[5])
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
Z([3,'__l'])
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
Z([3,'__l'])
Z([3,'page'])
Z([1,true])
Z([3,'carousel'])
Z([1,1000])
Z(z[2])
Z([1,3000])
Z([3,'__i0__'])
Z([3,'caroursel'])
Z([[7],[3,'carourselList']])
Z([3,'id'])
Z(z[3])
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
Z(z[10])
Z([3,'single_poster'])
Z([3,'poster_wapper'])
Z([3,'poster'])
Z([[6],[[7],[3,'hotSuperheroList']],[3,'cover']])
Z([3,'movie_name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'hotSuperheroList']],[3,'name']]],[1,'']]])
Z([[6],[[7],[3,'hotSuperheroList']],[3,'score']])
Z([3,'1'])
Z(z[13])
Z(z[14])
Z(z[15])
Z([3,'/static/icos/interest.png'])
Z(z[17])
Z([3,'热门预告'])
Z([3,'hot_movies page_block'])
Z([3,'index'])
Z([3,'trailer'])
Z([[7],[3,'hotTrailerList']])
Z(z[40])
Z([3,'hot_movie_single'])
Z([[6],[[7],[3,'trailer']],[3,'poster']])
Z([[6],[[7],[3,'trailer']],[3,'trailer']])
Z(z[13])
Z(z[14])
Z(z[15])
Z([3,'/static/icos/guess-u-like.png'])
Z(z[17])
Z([3,'猜你喜欢'])
Z([3,'page_block guess_u_like'])
Z([3,'gIndex'])
Z([3,'guess'])
Z([[7],[3,'guessULikeList']])
Z(z[54])
Z([3,'single_like_movie'])
Z([3,'poster like_movie'])
Z([[6],[[7],[3,'guess']],[3,'cover']])
Z([3,'movie_desc'])
Z([3,'movie_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'name']]],[1,'']]])
Z([1,9.1])
Z([3,'0'])
Z([3,'movie_info movie_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'basicInfo']]],[1,'']]])
Z(z[66])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'releaseDate']]],[1,'']]])
Z([3,'__e'])
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
Z([3,'__l'])
Z([3,'这是个人页面'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page'])
Z([3,'player'])
Z([3,'movie'])
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
Z([[6],[[7],[3,'trailerInfo']],[3,'score']])
Z([3,'0'])
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
Z(z[47])
Z(z[48])
Z(z[49])
Z(z[50])
Z(z[51])
Z([[2,'+'],[[7],[3,'actorIndex']],[[6],[[7],[3,'directorArray']],[3,'length']]])
Z(z[53])
Z([[6],[[7],[3,'actor']],[3,'photo']])
Z(z[55])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'actor']],[3,'name']]],[1,'']]])
Z(z[57])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'actor']],[3,'actName']]],[1,'']]])
Z(z[40])
Z(z[41])
Z([3,'剧照'])
Z(z[43])
Z([3,'imgIndex'])
Z([3,'img'])
Z([[7],[3,'plotPicsArray']])
Z(z[78])
Z(z[49])
Z([3,'ploat_image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'imgIndex']])
Z(z[53])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
Z(z[6])
Z([3,'poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTraller']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z([[6],[[7],[3,'trailer']],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/helloComp.wxml','./components/trailerStars.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/movie/movie.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/helloComp.wxml:view:1:1")
var oB=_n('view')
_rz(z,oB,'bind:__l',0,e,s,gg)
var xC=_oz(z,1,e,s,gg)
_(oB,xC)
cs.push("./components/helloComp.wxml:view:1:35")
var oD=_n('view')
cs.push("./components/helloComp.wxml:input:1:41")
var fE=_mz(z,'input',['class',2,'type',1,'value',2],[],e,s,gg)
cs.pop()
_(oD,fE)
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./components/trailerStars.wxml:view:1:1")
var hG=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var cI=_v()
_(hG,cI)
cs.push("./components/trailerStars.wxml:block:1:49")
var oJ=function(aL,lK,tM,gg){
cs.push("./components/trailerStars.wxml:block:1:49")
cs.push("./components/trailerStars.wxml:image:1:124")
var bO=_mz(z,'image',['class',5,'src',1],[],aL,lK,gg)
cs.pop()
_(tM,bO)
cs.pop()
return tM
}
_wp('./components/trailerStars.wxml:block:1:49: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cI.wxXCkey=2
_2z(z,4,oJ,e,s,gg,cI,'yellow','__i0__','')
cs.pop()
var oP=_v()
_(hG,oP)
cs.push("./components/trailerStars.wxml:block:1:199")
var xQ=function(fS,oR,cT,gg){
cs.push("./components/trailerStars.wxml:block:1:199")
cs.push("./components/trailerStars.wxml:image:1:270")
var oV=_mz(z,'image',['class',10,'src',1],[],fS,oR,gg)
cs.pop()
_(cT,oV)
cs.pop()
return cT
}
_wp('./components/trailerStars.wxml:block:1:199: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oP.wxXCkey=2
_2z(z,9,xQ,e,s,gg,oP,'gray','__i1__','')
cs.pop()
var oH=_v()
_(hG,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
cs.push("./components/trailerStars.wxml:block:1:343")
cs.push("./components/trailerStars.wxml:view:1:373")
var cW=_n('view')
_rz(z,cW,'class',13,e,s,gg)
var oX=_oz(z,14,e,s,gg)
_(cW,oX)
cs.pop()
_(oH,cW)
cs.pop()
}
oH.wxXCkey=1
cs.pop()
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/cover/cover.wxml:view:1:1")
var aZ=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/cover/cover.wxml:image:1:36")
var t1=_mz(z,'image',['bindlongpress',2,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
cs.pop()
_(aZ,t1)
cs.pop()
_(r,aZ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./pages/index/index.wxml:view:1:1")
var b3=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:swiper:1:35")
var o4=_mz(z,'swiper',['autoplay',2,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var x5=_v()
_(o4,x5)
cs.push("./pages/index/index.wxml:block:1:146")
var o6=function(c8,f7,h9,gg){
cs.push("./pages/index/index.wxml:block:1:146")
cs.push("./pages/index/index.wxml:swiper-item:1:238")
var cAB=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:251")
var oBB=_mz(z,'image',['class',11,'src',1],[],c8,f7,gg)
cs.pop()
_(cAB,oBB)
cs.pop()
_(h9,cAB)
cs.pop()
return h9
}
x5.wxXCkey=2
_2z(z,9,o6,e,s,gg,x5,'caroursel','__i0__','id')
cs.pop()
cs.pop()
_(b3,o4)
cs.push("./pages/index/index.wxml:view:1:340")
var lCB=_n('view')
_rz(z,lCB,'class',13,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:375")
var aDB=_n('view')
_rz(z,aDB,'class',14,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:406")
var tEB=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
cs.pop()
_(aDB,tEB)
cs.push("./pages/index/index.wxml:view:1:464")
var eFB=_n('view')
_rz(z,eFB,'class',17,e,s,gg)
var bGB=_oz(z,18,e,s,gg)
_(eFB,bGB)
cs.pop()
_(aDB,eFB)
cs.pop()
_(lCB,aDB)
cs.pop()
_(b3,lCB)
cs.push("./pages/index/index.wxml:scroll-view:1:521")
var oHB=_mz(z,'scroll-view',['class',19,'scrollX',1],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
cs.push("./pages/index/index.wxml:block:1:573")
var oJB=function(cLB,fKB,hMB,gg){
cs.push("./pages/index/index.wxml:block:1:573")
cs.push("./pages/index/index.wxml:view:1:675")
var cOB=_n('view')
_rz(z,cOB,'class',25,cLB,fKB,gg)
cs.push("./pages/index/index.wxml:view:1:703")
var oPB=_n('view')
_rz(z,oPB,'class',26,cLB,fKB,gg)
cs.push("./pages/index/index.wxml:image:1:731")
var lQB=_mz(z,'image',['class',27,'src',1],[],cLB,fKB,gg)
cs.pop()
_(oPB,lQB)
cs.push("./pages/index/index.wxml:view:1:794")
var aRB=_n('view')
_rz(z,aRB,'class',29,cLB,fKB,gg)
var tSB=_oz(z,30,cLB,fKB,gg)
_(aRB,tSB)
cs.pop()
_(oPB,aRB)
cs.push("./pages/index/index.wxml:trailer-stars:1:857")
var eTB=_mz(z,'trailer-stars',['innerScore',31,'showNum',1],[],cLB,fKB,gg)
cs.pop()
_(oPB,eTB)
cs.pop()
_(cOB,oPB)
cs.pop()
_(hMB,cOB)
cs.pop()
return hMB
}
xIB.wxXCkey=4
_2z(z,23,oJB,e,s,gg,xIB,'hotSuperheroList','__i1__','id')
cs.pop()
cs.pop()
_(b3,oHB)
cs.push("./pages/index/index.wxml:view:1:976")
var bUB=_n('view')
_rz(z,bUB,'class',33,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1011")
var oVB=_n('view')
_rz(z,oVB,'class',34,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1042")
var xWB=_mz(z,'image',['class',35,'src',1],[],e,s,gg)
cs.pop()
_(oVB,xWB)
cs.push("./pages/index/index.wxml:view:1:1105")
var oXB=_n('view')
_rz(z,oXB,'class',37,e,s,gg)
var fYB=_oz(z,38,e,s,gg)
_(oXB,fYB)
cs.pop()
_(oVB,oXB)
cs.pop()
_(bUB,oVB)
cs.pop()
_(b3,bUB)
cs.push("./pages/index/index.wxml:view:1:1162")
var cZB=_n('view')
_rz(z,cZB,'class',39,e,s,gg)
var h1B=_v()
_(cZB,h1B)
cs.push("./pages/index/index.wxml:block:1:1198")
var o2B=function(o4B,c3B,l5B,gg){
cs.push("./pages/index/index.wxml:block:1:1198")
cs.push("./pages/index/index.wxml:video:1:1291")
var t7B=_mz(z,'video',['controls',-1,'class',44,'poster',1,'src',2],[],o4B,c3B,gg)
cs.pop()
_(l5B,t7B)
cs.pop()
return l5B
}
h1B.wxXCkey=2
_2z(z,42,o2B,e,s,gg,h1B,'trailer','index','index')
cs.pop()
cs.pop()
_(b3,cZB)
cs.push("./pages/index/index.wxml:view:1:1409")
var e8B=_n('view')
_rz(z,e8B,'class',47,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1444")
var b9B=_n('view')
_rz(z,b9B,'class',48,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1475")
var o0B=_mz(z,'image',['class',49,'src',1],[],e,s,gg)
cs.pop()
_(b9B,o0B)
cs.push("./pages/index/index.wxml:view:1:1542")
var xAC=_n('view')
_rz(z,xAC,'class',51,e,s,gg)
var oBC=_oz(z,52,e,s,gg)
_(xAC,oBC)
cs.pop()
_(b9B,xAC)
cs.pop()
_(e8B,b9B)
cs.pop()
_(b3,e8B)
cs.push("./pages/index/index.wxml:view:1:1599")
var fCC=_n('view')
_rz(z,fCC,'class',53,e,s,gg)
var cDC=_v()
_(fCC,cDC)
cs.push("./pages/index/index.wxml:block:1:1637")
var hEC=function(cGC,oFC,oHC,gg){
cs.push("./pages/index/index.wxml:block:1:1637")
cs.push("./pages/index/index.wxml:view:1:1730")
var aJC=_n('view')
_rz(z,aJC,'class',58,cGC,oFC,gg)
cs.push("./pages/index/index.wxml:image:1:1762")
var tKC=_mz(z,'image',['class',59,'src',1],[],cGC,oFC,gg)
cs.pop()
_(aJC,tKC)
cs.push("./pages/index/index.wxml:view:1:1825")
var eLC=_n('view')
_rz(z,eLC,'class',61,cGC,oFC,gg)
cs.push("./pages/index/index.wxml:view:1:1850")
var bMC=_n('view')
_rz(z,bMC,'class',62,cGC,oFC,gg)
var oNC=_oz(z,63,cGC,oFC,gg)
_(bMC,oNC)
cs.pop()
_(eLC,bMC)
cs.push("./pages/index/index.wxml:trailer-stars:1:1903")
var xOC=_mz(z,'trailer-stars',['innerScore',64,'showNum',1],[],cGC,oFC,gg)
cs.pop()
_(eLC,xOC)
cs.push("./pages/index/index.wxml:view:1:1967")
var oPC=_n('view')
_rz(z,oPC,'class',66,cGC,oFC,gg)
var fQC=_oz(z,67,cGC,oFC,gg)
_(oPC,fQC)
cs.pop()
_(eLC,oPC)
cs.push("./pages/index/index.wxml:view:1:2036")
var cRC=_n('view')
_rz(z,cRC,'class',68,cGC,oFC,gg)
var hSC=_oz(z,69,cGC,oFC,gg)
_(cRC,hSC)
cs.pop()
_(eLC,cRC)
cs.pop()
_(aJC,eLC)
cs.push("./pages/index/index.wxml:view:1:2114")
var oTC=_mz(z,'view',['bindtap',70,'class',1,'data-event-opts',2,'data-gIndex',3],[],cGC,oFC,gg)
cs.push("./pages/index/index.wxml:image:1:2236")
var cUC=_mz(z,'image',['class',74,'src',1],[],cGC,oFC,gg)
cs.pop()
_(oTC,cUC)
cs.push("./pages/index/index.wxml:view:1:2300")
var oVC=_n('view')
_rz(z,oVC,'class',76,cGC,oFC,gg)
var lWC=_oz(z,77,cGC,oFC,gg)
_(oVC,lWC)
cs.pop()
_(oTC,oVC)
cs.push("./pages/index/index.wxml:view:1:2337")
var aXC=_mz(z,'view',['animation',78,'class',1],[],cGC,oFC,gg)
var tYC=_oz(z,80,cGC,oFC,gg)
_(aXC,tYC)
cs.pop()
_(oTC,aXC)
cs.pop()
_(aJC,oTC)
cs.pop()
_(oHC,aJC)
cs.pop()
return oHC
}
cDC.wxXCkey=4
_2z(z,56,hEC,e,s,gg,cDC,'guess','gIndex','gIndex')
cs.pop()
cs.pop()
_(b3,fCC)
cs.pop()
_(r,b3)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./pages/me/me.wxml:view:1:1")
var b1C=_n('view')
_rz(z,b1C,'bind:__l',0,e,s,gg)
var o2C=_oz(z,1,e,s,gg)
_(b1C,o2C)
cs.pop()
_(r,b1C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./pages/movie/movie.wxml:view:1:1")
var o4C=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:35")
var f5C=_n('view')
_rz(z,f5C,'class',2,e,s,gg)
cs.push("./pages/movie/movie.wxml:video:1:56")
var c6C=_mz(z,'video',['controls',-1,'class',3,'poster',1,'src',2],[],e,s,gg)
cs.pop()
_(f5C,c6C)
cs.pop()
_(o4C,f5C)
cs.push("./pages/movie/movie.wxml:view:1:163")
var h7C=_n('view')
_rz(z,h7C,'class',6,e,s,gg)
cs.push("./pages/movie/movie.wxml:navigator:1:188")
var o8C=_n('navigator')
_rz(z,o8C,'url',7,e,s,gg)
cs.push("./pages/movie/movie.wxml:image:1:251")
var c9C=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
cs.pop()
_(o8C,c9C)
cs.pop()
_(h7C,o8C)
cs.push("./pages/movie/movie.wxml:view:1:320")
var o0C=_n('view')
_rz(z,o0C,'class',10,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:345")
var lAD=_n('view')
_rz(z,lAD,'class',11,e,s,gg)
var aBD=_oz(z,12,e,s,gg)
_(lAD,aBD)
cs.pop()
_(o0C,lAD)
cs.push("./pages/movie/movie.wxml:view:1:392")
var tCD=_n('view')
_rz(z,tCD,'class',13,e,s,gg)
var eDD=_oz(z,14,e,s,gg)
_(tCD,eDD)
cs.pop()
_(o0C,tCD)
cs.push("./pages/movie/movie.wxml:view:1:449")
var bED=_n('view')
_rz(z,bED,'class',15,e,s,gg)
var oFD=_oz(z,16,e,s,gg)
_(bED,oFD)
cs.pop()
_(o0C,bED)
cs.push("./pages/movie/movie.wxml:view:1:509")
var xGD=_n('view')
_rz(z,xGD,'class',17,e,s,gg)
var oHD=_oz(z,18,e,s,gg)
_(xGD,oHD)
cs.pop()
_(o0C,xGD)
cs.push("./pages/movie/movie.wxml:view:1:566")
var fID=_n('view')
_rz(z,fID,'class',19,e,s,gg)
var cJD=_oz(z,20,e,s,gg)
_(fID,cJD)
cs.pop()
_(o0C,fID)
cs.push("./pages/movie/movie.wxml:view:1:625")
var hKD=_n('view')
_rz(z,hKD,'class',21,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:651")
var oLD=_n('view')
_rz(z,oLD,'class',22,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:675")
var cMD=_n('view')
_rz(z,cMD,'class',23,e,s,gg)
var oND=_oz(z,24,e,s,gg)
_(cMD,oND)
cs.pop()
_(oLD,cMD)
cs.push("./pages/movie/movie.wxml:view:1:723")
var lOD=_n('view')
_rz(z,lOD,'class',25,e,s,gg)
var aPD=_oz(z,26,e,s,gg)
_(lOD,aPD)
cs.pop()
_(oLD,lOD)
cs.pop()
_(hKD,oLD)
cs.push("./pages/movie/movie.wxml:view:1:784")
var tQD=_n('view')
_rz(z,tQD,'class',27,e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,28,e,s,gg)){eRD.wxVkey=1
cs.push("./pages/movie/movie.wxml:block:1:810")
cs.push("./pages/movie/movie.wxml:block:1:850")
cs.push("./pages/movie/movie.wxml:trailer-stars:1:857")
var bSD=_mz(z,'trailer-stars',['innerScore',29,'showNum',1],[],e,s,gg)
cs.pop()
_(eRD,bSD)
cs.pop()
cs.pop()
}
cs.push("./pages/movie/movie.wxml:view:1:951")
var oTD=_n('view')
_rz(z,oTD,'class',31,e,s,gg)
var xUD=_oz(z,32,e,s,gg)
_(oTD,xUD)
cs.pop()
_(tQD,oTD)
eRD.wxXCkey=1
eRD.wxXCkey=3
cs.pop()
_(hKD,tQD)
cs.pop()
_(o0C,hKD)
cs.pop()
_(h7C,o0C)
cs.pop()
_(o4C,h7C)
cs.push("./pages/movie/movie.wxml:view:1:1057")
var oVD=_n('view')
_rz(z,oVD,'class',33,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1083")
var fWD=_n('view')
_rz(z,fWD,'class',34,e,s,gg)
cs.pop()
_(oVD,fWD)
cs.pop()
_(o4C,oVD)
cs.push("./pages/movie/movie.wxml:view:1:1116")
var cXD=_n('view')
_rz(z,cXD,'class',35,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1142")
var hYD=_n('view')
_rz(z,hYD,'class',36,e,s,gg)
var oZD=_oz(z,37,e,s,gg)
_(hYD,oZD)
cs.pop()
_(cXD,hYD)
cs.push("./pages/movie/movie.wxml:view:1:1187")
var c1D=_n('view')
_rz(z,c1D,'class',38,e,s,gg)
var o2D=_oz(z,39,e,s,gg)
_(c1D,o2D)
cs.pop()
_(cXD,c1D)
cs.pop()
_(o4C,cXD)
cs.push("./pages/movie/movie.wxml:view:1:1250")
var l3D=_n('view')
_rz(z,l3D,'class',40,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1277")
var a4D=_n('view')
_rz(z,a4D,'class',41,e,s,gg)
var t5D=_oz(z,42,e,s,gg)
_(a4D,t5D)
cs.pop()
_(l3D,a4D)
cs.push("./pages/movie/movie.wxml:scroll-view:1:1323")
var e6D=_mz(z,'scroll-view',['scrollX',-1,'class',43],[],e,s,gg)
var b7D=_v()
_(e6D,b7D)
cs.push("./pages/movie/movie.wxml:block:1:1365")
var o8D=function(o0D,x9D,fAE,gg){
cs.push("./pages/movie/movie.wxml:block:1:1365")
cs.push("./pages/movie/movie.wxml:view:1:1460")
var hCE=_n('view')
_rz(z,hCE,'class',48,o0D,x9D,gg)
cs.push("./pages/movie/movie.wxml:image:1:1487")
var oDE=_mz(z,'image',['bindtap',49,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],o0D,x9D,gg)
cs.pop()
_(hCE,oDE)
cs.push("./pages/movie/movie.wxml:view:1:1673")
var cEE=_n('view')
_rz(z,cEE,'class',55,o0D,x9D,gg)
var oFE=_oz(z,56,o0D,x9D,gg)
_(cEE,oFE)
cs.pop()
_(hCE,cEE)
cs.push("./pages/movie/movie.wxml:view:1:1728")
var lGE=_n('view')
_rz(z,lGE,'class',57,o0D,x9D,gg)
var aHE=_oz(z,58,o0D,x9D,gg)
_(lGE,aHE)
cs.pop()
_(hCE,lGE)
cs.pop()
_(fAE,hCE)
cs.pop()
return fAE
}
b7D.wxXCkey=2
_2z(z,46,o8D,e,s,gg,b7D,'director','staffIndex','id')
cs.pop()
var tIE=_v()
_(e6D,tIE)
cs.push("./pages/movie/movie.wxml:block:1:1801")
var eJE=function(oLE,bKE,xME,gg){
cs.push("./pages/movie/movie.wxml:block:1:1801")
cs.push("./pages/movie/movie.wxml:view:1:1890")
var fOE=_n('view')
_rz(z,fOE,'class',63,oLE,bKE,gg)
cs.push("./pages/movie/movie.wxml:image:1:1917")
var cPE=_mz(z,'image',['bindtap',64,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],oLE,bKE,gg)
cs.pop()
_(fOE,cPE)
cs.push("./pages/movie/movie.wxml:view:1:2121")
var hQE=_n('view')
_rz(z,hQE,'class',70,oLE,bKE,gg)
var oRE=_oz(z,71,oLE,bKE,gg)
_(hQE,oRE)
cs.pop()
_(fOE,hQE)
cs.push("./pages/movie/movie.wxml:view:1:2173")
var cSE=_n('view')
_rz(z,cSE,'class',72,oLE,bKE,gg)
var oTE=_oz(z,73,oLE,bKE,gg)
_(cSE,oTE)
cs.pop()
_(fOE,cSE)
cs.pop()
_(xME,fOE)
cs.pop()
return xME
}
tIE.wxXCkey=2
_2z(z,61,eJE,e,s,gg,tIE,'actor','actorIndex','id')
cs.pop()
cs.pop()
_(l3D,e6D)
cs.pop()
_(o4C,l3D)
cs.push("./pages/movie/movie.wxml:view:1:2264")
var lUE=_n('view')
_rz(z,lUE,'class',74,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:2291")
var aVE=_n('view')
_rz(z,aVE,'class',75,e,s,gg)
var tWE=_oz(z,76,e,s,gg)
_(aVE,tWE)
cs.pop()
_(lUE,aVE)
cs.push("./pages/movie/movie.wxml:scroll-view:1:2331")
var eXE=_mz(z,'scroll-view',['scrollX',-1,'class',77],[],e,s,gg)
var bYE=_v()
_(eXE,bYE)
cs.push("./pages/movie/movie.wxml:block:1:2373")
var oZE=function(o2E,x1E,f3E,gg){
cs.push("./pages/movie/movie.wxml:block:1:2373")
cs.push("./pages/movie/movie.wxml:image:1:2467")
var h5E=_mz(z,'image',['bindtap',82,'class',1,'data-event-opts',2,'data-imgIndex',3,'mode',4,'src',5],[],o2E,x1E,gg)
cs.pop()
_(f3E,h5E)
cs.pop()
return f3E
}
bYE.wxXCkey=2
_2z(z,80,oZE,e,s,gg,bYE,'img','imgIndex','imgIndex')
cs.pop()
cs.pop()
_(lUE,eXE)
cs.pop()
_(o4C,lUE)
cs.pop()
_(r,o4C)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./pages/search/search.wxml:view:1:1")
var c7E=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/search/search.wxml:view:1:35")
var o8E=_n('view')
_rz(z,o8E,'class',2,e,s,gg)
cs.push("./pages/search/search.wxml:view:1:62")
var l9E=_n('view')
_rz(z,l9E,'class',3,e,s,gg)
cs.push("./pages/search/search.wxml:image:1:94")
var a0E=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(l9E,a0E)
cs.pop()
_(o8E,l9E)
cs.push("./pages/search/search.wxml:input:1:165")
var tAF=_mz(z,'input',['bindconfirm',6,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5],[],e,s,gg)
cs.pop()
_(o8E,tAF)
cs.pop()
_(c7E,o8E)
cs.push("./pages/search/search.wxml:view:1:344")
var eBF=_n('view')
_rz(z,eBF,'class',12,e,s,gg)
var bCF=_v()
_(eBF,bCF)
cs.push("./pages/search/search.wxml:block:1:380")
var oDF=function(oFF,xEF,fGF,gg){
cs.push("./pages/search/search.wxml:block:1:380")
cs.push("./pages/search/search.wxml:view:1:468")
var hIF=_n('view')
_rz(z,hIF,'class',17,oFF,xEF,gg)
cs.push("./pages/search/search.wxml:image:1:495")
var oJF=_mz(z,'image',['bindtap',18,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],oFF,xEF,gg)
cs.pop()
_(hIF,oJF)
cs.pop()
_(fGF,hIF)
cs.pop()
return fGF
}
bCF.wxXCkey=2
_2z(z,15,oDF,e,s,gg,bCF,'trailer','__i0__','id')
cs.pop()
cs.pop()
_(c7E,eBF)
cs.pop()
_(r,c7E)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
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
console.log(cs, env);
console.log(err)
throw err
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

__wxAppCode__['pages/me/me.wxss']=undefined;    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"player { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: black; }\n.",[1],"movie { width: 100%; height: ",[0,440],"; }\n.",[1],"movie_info { padding: ",[0,40]," ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #f7f4f9; }\n.",[1],"cover { width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie_desc { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,30],"; width: ",[0,400],"; }\n.",[1],"title { font-size: 30px; width: 100%; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"basic_info { color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score_block{ background: white; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score_words { font-size: 12px; color: gray; }\n.",[1],"score_stars { margin-left: ",[0,20],"; margin-top: ",[0,10],"; }\n.",[1],"movie_score { font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #FEAB2A; line-height: ",[0,60],"; }\n.",[1],"prise_counts { font-size: 12px; color: gray; line-height: ",[0,44],"; }\n.",[1],"plots_block { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots_title { color: #A9A9A9; font-size: 14px; }\n.",[1],"plots_desc { margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll_block { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll_list { width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"ploat_image { width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],"; }\n.",[1],"single_actor { width: ",[0,170],"; height: ",[0,240],"; margin-right: ",[0,10],"; }\n.",[1],"actor_wapper{ display: inline-block; }\n.",[1],"actor_name { width: ",[0,170],"; text-align: center; font-size: 15px; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor_role { width: ",[0,170],"; text-align: center; font-size: 13px; color: #A9A9A9; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n",],undefined,{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search_ico { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"search_text { font-size: 14px; background-color: #eaeaea; height: ",[0,60],"; width: ",[0,650],"; }\n.",[1],"search_block { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; top: 100; z-index: 2000; background-color: #F8F8F8; }\n.",[1],"search_ico_wapper { background-color: #eaeaea; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding: ",[0,0]," ",[0,10],"; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie_wapper{ padding: ",[0,10]," ",[0,20],"; }\n.",[1],"movie_list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,100]," ",[0,10]," ",[0,0]," ",[0,10],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
