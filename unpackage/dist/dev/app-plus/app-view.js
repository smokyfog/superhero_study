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
Z([3,'page page-fill'])
Z([3,'page-body uni-content-info'])
Z([3,'cropper-content'])
Z([[7],[3,'isShowImg']])
Z([3,'uni-corpper myDistance'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperInitW']]],[1,'px;height:']],[[7],[3,'cropperInitH']]],[1,'px;background:#000']])
Z([3,'uni-corpper-content'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px;left:']],[[7],[3,'cropperL']]],[1,'px;top:']],[[7],[3,'cropperT']]],[1,'px']])
Z([3,'myImage'])
Z([[7],[3,'imageSrc']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px']])
Z([3,'__e'])
Z(z[12])
Z(z[12])
Z([3,'uni-corpper-crop-box'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'contentStartMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'contentMoveing']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'contentTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'left:'],[[7],[3,'cutL']]],[1,'px;top:']],[[7],[3,'cutT']]],[1,'px;right:']],[[7],[3,'cutR']]],[1,'px;bottom:']],[[7],[3,'cutB']]],[1,'px']])
Z([3,'uni-cropper-view-box'])
Z([3,'uni-cropper-dashed-h'])
Z([3,'uni-cropper-dashed-v'])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-line-t'])
Z([3,'top'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-line-r'])
Z([3,'right'])
Z(z[25])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-line-b'])
Z([3,'bottom'])
Z(z[25])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-line-l'])
Z([3,'left'])
Z(z[25])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-point point-t'])
Z(z[24])
Z(z[25])
Z([3,'uni-cropper-point point-tr'])
Z([3,'topTight'])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-point point-r'])
Z(z[29])
Z(z[25])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-point point-rb'])
Z([3,'rightBottom'])
Z(z[25])
Z(z[12])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-point point-b'])
Z(z[34])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'dragEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'uni-cropper-point point-bl'])
Z([3,'bottomLeft'])
Z(z[12])
Z(z[12])
Z([3,'uni-cropper-point point-l'])
Z(z[39])
Z(z[25])
Z([3,'uni-cropper-point point-lt'])
Z([3,'leftTop'])
Z([3,'footer-opertor'])
Z(z[12])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[12])
Z(z[75])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImageInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
Z([3,'myCanvas'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'position:absolute;border: 1px solid red; width:'],[[7],[3,'imageW']]],[1,'px;height:']],[[7],[3,'imageH']]],[1,'px;top:-9999px;left:-9999px;']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
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
Z([3,'__e'])
Z([3,'single_poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTraller']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'hotSuperheroList']],[3,'id']])
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
Z(z[43])
Z(z[25])
Z([3,'hot_movie_single'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'meIsPlaying']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z(z[50])
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
Z(z[61])
Z([3,'single_like_movie'])
Z(z[25])
Z([3,'poster like_movie'])
Z(z[27])
Z([[6],[[7],[3,'guess']],[3,'id']])
Z([[6],[[7],[3,'guess']],[3,'cover']])
Z([3,'movie_desc'])
Z([3,'movie_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'name']]],[1,'']]])
Z([1,9.1])
Z([3,'0'])
Z([3,'movie_info movie_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'basicInfo']]],[1,'']]])
Z(z[76])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guess']],[3,'releaseDate']]],[1,'']]])
Z(z[25])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page page-fill'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'face'])
Z([[6],[[7],[3,'userInfo']],[3,'faceImage']])
Z(z[4])
Z([3,'http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png'])
Z(z[3])
Z([3,'info-wapper'])
Z([3,'nickname'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'userInfo']],[3,'username']]],[1,'']]])
Z([3,'nav-info'])
Z([a,[[2,'+'],[[2,'+'],[1,'ID: '],[[6],[[7],[3,'userInfo']],[3,'id']]],[1,'']]])
Z([3,'../registLogin/registLogin'])
Z([3,'nickname regist-login'])
Z([3,'注册/登陆'])
Z(z[3])
Z([3,'__e'])
Z([3,'set-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jump_meinfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'settings'])
Z([3,'/static/icos/settings.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page page-fill '])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page_block'])
Z([3,'margin-top:20rpx;'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'dateChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([3,'birthday'])
Z([a,[[7],[3,'birthday']]])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
Z(z[11])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
Z(z[3])
Z([3,'item-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyNickName']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'昵称'])
Z(z[8])
Z([3,'gray-fields'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'globalUser']],[3,'nickname']]],[1,'']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[3])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'生日'])
Z(z[8])
Z(z[22])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'globalUser']],[3,'birthday']]],[1,'']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[3])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifySex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'性别'])
Z(z[8])
Z(z[22])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,1]])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,0]])
Z([3,'女'])
Z([3,'未选择'])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'footer-wapper'])
Z(z[3])
Z([3,'footer-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'cleanStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[3])
Z(z[59])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'originalName']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'totalTime']]])
Z(z[14])
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
Z(z[48])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[52])
Z([[2,'+'],[[7],[3,'actorIndex']],[[6],[[7],[3,'directorArray']],[3,'length']]])
Z(z[54])
Z([[6],[[7],[3,'actor']],[3,'photo']])
Z(z[56])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'actor']],[3,'name']]],[1,'']]])
Z(z[58])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'actor']],[3,'actName']]],[1,'']]])
Z(z[41])
Z(z[42])
Z([3,'剧照'])
Z(z[44])
Z([3,'imgIndex'])
Z([3,'img'])
Z([[7],[3,'plotPicsArray']])
Z(z[79])
Z(z[50])
Z([3,'ploat_image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'imgIndex']])
Z(z[54])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
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
Z(z[7])
Z([3,'margin-top:40rpx;'])
Z(z[8])
Z([3,'密码'])
Z(z[10])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[13])
Z(z[14])
Z(z[10])
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
Z(z[32])
Z(z[33])
Z([3,'third-icos-wapper'])
Z(z[2])
Z([3,'third-ico'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'/static/icos/weixin.png'])
Z(z[2])
Z(z[40])
Z(z[41])
Z([3,'qq'])
Z([3,'/static/icos/QQ.png'])
Z([3,'margin-left:80rpx;'])
Z(z[2])
Z(z[40])
Z(z[41])
Z([3,'sinaweibo'])
Z([3,'/static/icos/weibo.png'])
Z(z[49])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page page-fill'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitSex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page_block'])
Z([3,'margin-top:20rpx;'])
Z(z[2])
Z([3,'radio-sex'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'sexChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'radio-single'])
Z([[2,'=='],[[7],[3,'sex']],[1,1]])
Z([3,'1'])
Z([3,'男'])
Z(z[9])
Z([[2,'=='],[[7],[3,'sex']],[1,0]])
Z([3,'0'])
Z([3,'女'])
Z([3,'submitBtn'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/helloComp.wxml','./components/trailerStars.wxml','./pages/cover/cover.wxml','./pages/faceCrop/faceCrop.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meBirthday/meBirthday.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/meNickName/meNickName.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/search/search.wxml','./pages/sex/sex.wxml'];d_[x[0]]={}
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
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:1")
var b3=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:45")
var o4=_n('view')
_rz(z,o4,'class',2,e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:86")
var x5=_n('view')
_rz(z,x5,'class',3,e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,4,e,s,gg)){o6.wxVkey=1
cs.push("./pages/faceCrop/faceCrop.wxml:block:1:116")
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:145")
var f7=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:265")
var c8=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:image:1:397")
var h9=_mz(z,'image',['class',9,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(c8,h9)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:506")
var o0=_mz(z,'view',['catchtouchend',12,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:851")
var cAB=_n('view')
_rz(z,cAB,'class',18,e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:886")
var oBB=_n('view')
_rz(z,oBB,'class',19,e,s,gg)
cs.pop()
_(cAB,oBB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:928")
var lCB=_n('view')
_rz(z,lCB,'class',20,e,s,gg)
cs.pop()
_(cAB,lCB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:970")
var aDB=_mz(z,'view',['catchtouchmove',21,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,aDB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:1175")
var tEB=_mz(z,'view',['catchtouchmove',26,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,tEB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:1382")
var eFB=_mz(z,'view',['catchtouchmove',31,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,eFB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:1590")
var bGB=_mz(z,'view',['catchtouchmove',36,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,bGB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:1796")
var oHB=_mz(z,'view',['catchtouchmove',41,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,oHB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:2008")
var xIB=_mz(z,'view',['class',46,'data-drag',1],[],e,s,gg)
cs.pop()
_(cAB,xIB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:2077")
var oJB=_mz(z,'view',['catchtouchmove',48,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,oJB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:2291")
var fKB=_mz(z,'view',['catchtouchmove',53,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,fKB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:2512")
var cLB=_mz(z,'view',['catchtouchend',58,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-drag',4,'data-event-opts',5],[],e,s,gg)
cs.pop()
_(cAB,cLB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:2785")
var hMB=_mz(z,'view',['class',64,'data-drag',1],[],e,s,gg)
cs.pop()
_(cAB,hMB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:2856")
var oNB=_mz(z,'view',['catchtouchmove',66,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
cs.pop()
_(cAB,oNB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:3069")
var cOB=_mz(z,'view',['class',71,'data-drag',1],[],e,s,gg)
cs.pop()
_(cAB,cOB)
cs.pop()
_(o0,cAB)
cs.pop()
_(c8,o0)
cs.pop()
_(f7,c8)
cs.pop()
_(o6,f7)
cs.pop()
}
o6.wxXCkey=1
cs.pop()
_(o4,x5)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:3180")
var oPB=_n('view')
_rz(z,oPB,'class',73,e,s,gg)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:3209")
var lQB=_mz(z,'view',['bindtap',74,'class',1,'data-event-opts',2],[],e,s,gg)
var aRB=_oz(z,77,e,s,gg)
_(lQB,aRB)
cs.pop()
_(oPB,lQB)
cs.push("./pages/faceCrop/faceCrop.wxml:view:1:3328")
var tSB=_mz(z,'view',['bindtap',78,'class',1,'data-event-opts',2],[],e,s,gg)
var eTB=_oz(z,81,e,s,gg)
_(tSB,eTB)
cs.pop()
_(oPB,tSB)
cs.pop()
_(o4,oPB)
cs.push("./pages/faceCrop/faceCrop.wxml:canvas:1:3458")
var bUB=_mz(z,'canvas',['canvasId',82,'style',1],[],e,s,gg)
cs.pop()
_(o4,bUB)
cs.pop()
_(b3,o4)
cs.pop()
_(r,b3)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./pages/index/index.wxml:view:1:1")
var xWB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:swiper:1:35")
var oXB=_mz(z,'swiper',['autoplay',2,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var fYB=_v()
_(oXB,fYB)
cs.push("./pages/index/index.wxml:block:1:146")
var cZB=function(o2B,h1B,c3B,gg){
cs.push("./pages/index/index.wxml:block:1:146")
cs.push("./pages/index/index.wxml:swiper-item:1:238")
var l5B=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:251")
var a6B=_mz(z,'image',['class',11,'src',1],[],o2B,h1B,gg)
cs.pop()
_(l5B,a6B)
cs.pop()
_(c3B,l5B)
cs.pop()
return c3B
}
fYB.wxXCkey=2
_2z(z,9,cZB,e,s,gg,fYB,'caroursel','__i0__','id')
cs.pop()
cs.pop()
_(xWB,oXB)
cs.push("./pages/index/index.wxml:view:1:340")
var t7B=_n('view')
_rz(z,t7B,'class',13,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:375")
var e8B=_n('view')
_rz(z,e8B,'class',14,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:406")
var b9B=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
cs.pop()
_(e8B,b9B)
cs.push("./pages/index/index.wxml:view:1:464")
var o0B=_n('view')
_rz(z,o0B,'class',17,e,s,gg)
var xAC=_oz(z,18,e,s,gg)
_(o0B,xAC)
cs.pop()
_(e8B,o0B)
cs.pop()
_(t7B,e8B)
cs.pop()
_(xWB,t7B)
cs.push("./pages/index/index.wxml:scroll-view:1:521")
var oBC=_mz(z,'scroll-view',['class',19,'scrollX',1],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
cs.push("./pages/index/index.wxml:block:1:573")
var cDC=function(oFC,hEC,cGC,gg){
cs.push("./pages/index/index.wxml:block:1:573")
cs.push("./pages/index/index.wxml:view:1:675")
var lIC=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2,'data-trailerId',3],[],oFC,hEC,gg)
cs.push("./pages/index/index.wxml:view:1:819")
var aJC=_n('view')
_rz(z,aJC,'class',29,oFC,hEC,gg)
cs.push("./pages/index/index.wxml:image:1:847")
var tKC=_mz(z,'image',['class',30,'src',1],[],oFC,hEC,gg)
cs.pop()
_(aJC,tKC)
cs.push("./pages/index/index.wxml:view:1:910")
var eLC=_n('view')
_rz(z,eLC,'class',32,oFC,hEC,gg)
var bMC=_oz(z,33,oFC,hEC,gg)
_(eLC,bMC)
cs.pop()
_(aJC,eLC)
cs.push("./pages/index/index.wxml:trailer-stars:1:973")
var oNC=_mz(z,'trailer-stars',['innerScore',34,'showNum',1],[],oFC,hEC,gg)
cs.pop()
_(aJC,oNC)
cs.pop()
_(lIC,aJC)
cs.pop()
_(cGC,lIC)
cs.pop()
return cGC
}
fCC.wxXCkey=4
_2z(z,23,cDC,e,s,gg,fCC,'hotSuperheroList','__i1__','id')
cs.pop()
cs.pop()
_(xWB,oBC)
cs.push("./pages/index/index.wxml:view:1:1092")
var xOC=_n('view')
_rz(z,xOC,'class',36,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1127")
var oPC=_n('view')
_rz(z,oPC,'class',37,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1158")
var fQC=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
cs.pop()
_(oPC,fQC)
cs.push("./pages/index/index.wxml:view:1:1221")
var cRC=_n('view')
_rz(z,cRC,'class',40,e,s,gg)
var hSC=_oz(z,41,e,s,gg)
_(cRC,hSC)
cs.pop()
_(oPC,cRC)
cs.pop()
_(xOC,oPC)
cs.pop()
_(xWB,xOC)
cs.push("./pages/index/index.wxml:view:1:1278")
var oTC=_n('view')
_rz(z,oTC,'class',42,e,s,gg)
var cUC=_v()
_(oTC,cUC)
cs.push("./pages/index/index.wxml:block:1:1314")
var oVC=function(aXC,lWC,tYC,gg){
cs.push("./pages/index/index.wxml:block:1:1314")
cs.push("./pages/index/index.wxml:video:1:1407")
var b1C=_mz(z,'video',['controls',-1,'bindplay',47,'class',1,'data-event-opts',2,'data-playIndex',3,'id',4,'poster',5,'src',6],[],aXC,lWC,gg)
cs.pop()
_(tYC,b1C)
cs.pop()
return tYC
}
cUC.wxXCkey=2
_2z(z,45,oVC,e,s,gg,cUC,'trailer','index','index')
cs.pop()
cs.pop()
_(xWB,oTC)
cs.push("./pages/index/index.wxml:view:1:1654")
var o2C=_n('view')
_rz(z,o2C,'class',54,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1689")
var x3C=_n('view')
_rz(z,x3C,'class',55,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1720")
var o4C=_mz(z,'image',['class',56,'src',1],[],e,s,gg)
cs.pop()
_(x3C,o4C)
cs.push("./pages/index/index.wxml:view:1:1787")
var f5C=_n('view')
_rz(z,f5C,'class',58,e,s,gg)
var c6C=_oz(z,59,e,s,gg)
_(f5C,c6C)
cs.pop()
_(x3C,f5C)
cs.pop()
_(o2C,x3C)
cs.pop()
_(xWB,o2C)
cs.push("./pages/index/index.wxml:view:1:1844")
var h7C=_n('view')
_rz(z,h7C,'class',60,e,s,gg)
var o8C=_v()
_(h7C,o8C)
cs.push("./pages/index/index.wxml:block:1:1882")
var c9C=function(lAD,o0C,aBD,gg){
cs.push("./pages/index/index.wxml:block:1:1882")
cs.push("./pages/index/index.wxml:view:1:1975")
var eDD=_n('view')
_rz(z,eDD,'class',65,lAD,o0C,gg)
cs.push("./pages/index/index.wxml:image:1:2007")
var bED=_mz(z,'image',['bindtap',66,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],lAD,o0C,gg)
cs.pop()
_(eDD,bED)
cs.push("./pages/index/index.wxml:view:1:2175")
var oFD=_n('view')
_rz(z,oFD,'class',71,lAD,o0C,gg)
cs.push("./pages/index/index.wxml:view:1:2200")
var xGD=_n('view')
_rz(z,xGD,'class',72,lAD,o0C,gg)
var oHD=_oz(z,73,lAD,o0C,gg)
_(xGD,oHD)
cs.pop()
_(oFD,xGD)
cs.push("./pages/index/index.wxml:trailer-stars:1:2253")
var fID=_mz(z,'trailer-stars',['innerScore',74,'showNum',1],[],lAD,o0C,gg)
cs.pop()
_(oFD,fID)
cs.push("./pages/index/index.wxml:view:1:2317")
var cJD=_n('view')
_rz(z,cJD,'class',76,lAD,o0C,gg)
var hKD=_oz(z,77,lAD,o0C,gg)
_(cJD,hKD)
cs.pop()
_(oFD,cJD)
cs.push("./pages/index/index.wxml:view:1:2386")
var oLD=_n('view')
_rz(z,oLD,'class',78,lAD,o0C,gg)
var cMD=_oz(z,79,lAD,o0C,gg)
_(oLD,cMD)
cs.pop()
_(oFD,oLD)
cs.pop()
_(eDD,oFD)
cs.push("./pages/index/index.wxml:view:1:2464")
var oND=_mz(z,'view',['bindtap',80,'class',1,'data-event-opts',2,'data-gIndex',3],[],lAD,o0C,gg)
cs.push("./pages/index/index.wxml:image:1:2586")
var lOD=_mz(z,'image',['class',84,'src',1],[],lAD,o0C,gg)
cs.pop()
_(oND,lOD)
cs.push("./pages/index/index.wxml:view:1:2650")
var aPD=_n('view')
_rz(z,aPD,'class',86,lAD,o0C,gg)
var tQD=_oz(z,87,lAD,o0C,gg)
_(aPD,tQD)
cs.pop()
_(oND,aPD)
cs.push("./pages/index/index.wxml:view:1:2687")
var eRD=_mz(z,'view',['animation',88,'class',1],[],lAD,o0C,gg)
var bSD=_oz(z,90,lAD,o0C,gg)
_(eRD,bSD)
cs.pop()
_(oND,eRD)
cs.pop()
_(eDD,oND)
cs.pop()
_(aBD,eDD)
cs.pop()
return aBD
}
o8C.wxXCkey=4
_2z(z,63,c9C,e,s,gg,o8C,'guess','gIndex','gIndex')
cs.pop()
cs.pop()
_(xWB,h7C)
cs.pop()
_(r,xWB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./pages/me/me.wxml:view:1:1")
var xUD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/me/me.wxml:view:1:45")
var oVD=_n('view')
_rz(z,oVD,'class',2,e,s,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,3,e,s,gg)){fWD.wxVkey=1
cs.push("./pages/me/me.wxml:block:1:66")
cs.push("./pages/me/me.wxml:view:1:97")
var oZD=_n('view')
cs.push("./pages/me/me.wxml:image:1:103")
var c1D=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(oZD,c1D)
cs.pop()
_(fWD,oZD)
cs.pop()
}
else{fWD.wxVkey=2
cs.push("./pages/me/me.wxml:block:1:175")
cs.push("./pages/me/me.wxml:view:1:190")
var o2D=_n('view')
cs.push("./pages/me/me.wxml:image:1:196")
var l3D=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
cs.pop()
_(o2D,l3D)
cs.pop()
_(fWD,o2D)
cs.pop()
}
var cXD=_v()
_(oVD,cXD)
if(_oz(z,8,e,s,gg)){cXD.wxVkey=1
cs.push("./pages/me/me.wxml:block:1:322")
cs.push("./pages/me/me.wxml:view:1:353")
var a4D=_n('view')
_rz(z,a4D,'class',9,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:379")
var t5D=_n('view')
_rz(z,t5D,'class',10,e,s,gg)
var e6D=_oz(z,11,e,s,gg)
_(t5D,e6D)
cs.pop()
_(a4D,t5D)
cs.push("./pages/me/me.wxml:view:1:436")
var b7D=_n('view')
_rz(z,b7D,'class',12,e,s,gg)
var o8D=_oz(z,13,e,s,gg)
_(b7D,o8D)
cs.pop()
_(a4D,b7D)
cs.pop()
_(cXD,a4D)
cs.pop()
}
else{cXD.wxVkey=2
cs.push("./pages/me/me.wxml:block:1:506")
cs.push("./pages/me/me.wxml:view:1:521")
var x9D=_n('view')
cs.push("./pages/me/me.wxml:navigator:1:527")
var o0D=_n('navigator')
_rz(z,o0D,'url',14,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:571")
var fAE=_n('view')
_rz(z,fAE,'class',15,e,s,gg)
var cBE=_oz(z,16,e,s,gg)
_(fAE,cBE)
cs.pop()
_(o0D,fAE)
cs.pop()
_(x9D,o0D)
cs.pop()
_(cXD,x9D)
cs.pop()
}
var hYD=_v()
_(oVD,hYD)
if(_oz(z,17,e,s,gg)){hYD.wxVkey=1
cs.push("./pages/me/me.wxml:block:1:654")
cs.push("./pages/me/me.wxml:view:1:685")
var hCE=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/me/me.wxml:image:1:785")
var oDE=_mz(z,'image',['class',21,'src',1],[],e,s,gg)
cs.pop()
_(hCE,oDE)
cs.pop()
_(hYD,hCE)
cs.pop()
}
fWD.wxXCkey=1
cXD.wxXCkey=1
hYD.wxXCkey=1
cs.pop()
_(xUD,oVD)
cs.pop()
_(r,xUD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./pages/meBirthday/meBirthday.wxml:view:1:1")
var oFE=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/meBirthday/meBirthday.wxml:form:1:46")
var lGE=_mz(z,'form',['bindsubmit',2,'data-event-opts',1],[],e,s,gg)
cs.push("./pages/meBirthday/meBirthday.wxml:view:1:140")
var aHE=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
cs.push("./pages/meBirthday/meBirthday.wxml:picker:1:191")
var tIE=_mz(z,'picker',['bindchange',6,'data-event-opts',1,'mode',2],[],e,s,gg)
cs.push("./pages/meBirthday/meBirthday.wxml:view:1:291")
var eJE=_n('view')
_rz(z,eJE,'class',9,e,s,gg)
var bKE=_oz(z,10,e,s,gg)
_(eJE,bKE)
cs.pop()
_(tIE,eJE)
cs.pop()
_(aHE,tIE)
cs.pop()
_(lGE,aHE)
cs.push("./pages/meBirthday/meBirthday.wxml:button:1:349")
var oLE=_mz(z,'button',['class',11,'formType',1,'type',2],[],e,s,gg)
var xME=_oz(z,14,e,s,gg)
_(oLE,xME)
cs.pop()
_(lGE,oLE)
cs.pop()
_(oFE,lGE)
cs.pop()
_(r,oFE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./pages/meFace/meFace.wxml:view:1:1")
var fOE=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/meFace/meFace.wxml:view:1:45")
var cPE=_n('view')
_rz(z,cPE,'class',2,e,s,gg)
cs.push("./pages/meFace/meFace.wxml:image:1:74")
var hQE=_mz(z,'image',['class',3,'id',1,'mode',2,'src',3],[],e,s,gg)
cs.pop()
_(cPE,hQE)
cs.pop()
_(fOE,cPE)
cs.push("./pages/meFace/meFace.wxml:view:1:165")
var oRE=_n('view')
_rz(z,oRE,'class',7,e,s,gg)
cs.push("./pages/meFace/meFace.wxml:view:1:186")
var cSE=_n('view')
_rz(z,cSE,'class',8,e,s,gg)
var oTE=_oz(z,9,e,s,gg)
_(cSE,oTE)
cs.pop()
_(oRE,cSE)
cs.pop()
_(fOE,oRE)
cs.push("./pages/meFace/meFace.wxml:view:1:275")
var lUE=_n('view')
_rz(z,lUE,'class',10,e,s,gg)
cs.push("./pages/meFace/meFace.wxml:view:1:304")
var aVE=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var tWE=_oz(z,14,e,s,gg)
_(aVE,tWE)
cs.pop()
_(lUE,aVE)
cs.push("./pages/meFace/meFace.wxml:view:1:432")
var eXE=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var bYE=_oz(z,18,e,s,gg)
_(eXE,bYE)
cs.pop()
_(lUE,eXE)
cs.pop()
_(fOE,lUE)
cs.pop()
_(r,fOE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
cs.push("./pages/meInfo/meInfo.wxml:view:1:1")
var x1E=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:45")
var o2E=_n('view')
_rz(z,o2E,'class',2,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:80")
var f3E=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:197")
var c4E=_n('view')
_rz(z,c4E,'class',6,e,s,gg)
var h5E=_oz(z,7,e,s,gg)
_(c4E,h5E)
cs.pop()
_(f3E,c4E)
cs.push("./pages/meInfo/meInfo.wxml:view:1:235")
var o6E=_n('view')
_rz(z,o6E,'class',8,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:262")
var c7E=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
cs.pop()
_(o6E,c7E)
cs.push("./pages/meInfo/meInfo.wxml:view:1:321")
var o8E=_n('view')
_rz(z,o8E,'class',11,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:347")
var l9E=_mz(z,'image',['class',12,'src',1],[],e,s,gg)
cs.pop()
_(o8E,l9E)
cs.pop()
_(o6E,o8E)
cs.pop()
_(f3E,o6E)
cs.pop()
_(o2E,f3E)
cs.push("./pages/meInfo/meInfo.wxml:view:1:440")
var a0E=_n('view')
_rz(z,a0E,'class',14,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:463")
var tAF=_n('view')
_rz(z,tAF,'class',15,e,s,gg)
cs.pop()
_(a0E,tAF)
cs.pop()
_(o2E,a0E)
cs.push("./pages/meInfo/meInfo.wxml:view:1:496")
var eBF=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:600")
var bCF=_n('view')
_rz(z,bCF,'class',19,e,s,gg)
var oDF=_oz(z,20,e,s,gg)
_(bCF,oDF)
cs.pop()
_(eBF,bCF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:638")
var xEF=_n('view')
_rz(z,xEF,'class',21,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:665")
var oFF=_n('view')
_rz(z,oFF,'class',22,e,s,gg)
var fGF=_oz(z,23,e,s,gg)
_(oFF,fGF)
cs.pop()
_(xEF,oFF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:727")
var cHF=_n('view')
_rz(z,cHF,'class',24,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:753")
var hIF=_mz(z,'image',['class',25,'src',1],[],e,s,gg)
cs.pop()
_(cHF,hIF)
cs.pop()
_(xEF,cHF)
cs.pop()
_(eBF,xEF)
cs.pop()
_(o2E,eBF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:846")
var oJF=_n('view')
_rz(z,oJF,'class',27,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:869")
var cKF=_n('view')
_rz(z,cKF,'class',28,e,s,gg)
cs.pop()
_(oJF,cKF)
cs.pop()
_(o2E,oJF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:902")
var oLF=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1006")
var lMF=_n('view')
_rz(z,lMF,'class',32,e,s,gg)
var aNF=_oz(z,33,e,s,gg)
_(lMF,aNF)
cs.pop()
_(oLF,lMF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1044")
var tOF=_n('view')
_rz(z,tOF,'class',34,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1071")
var ePF=_n('view')
_rz(z,ePF,'class',35,e,s,gg)
var bQF=_oz(z,36,e,s,gg)
_(ePF,bQF)
cs.pop()
_(tOF,ePF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1133")
var oRF=_n('view')
_rz(z,oRF,'class',37,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:1159")
var xSF=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
cs.pop()
_(oRF,xSF)
cs.pop()
_(tOF,oRF)
cs.pop()
_(oLF,tOF)
cs.pop()
_(o2E,oLF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1252")
var oTF=_n('view')
_rz(z,oTF,'class',40,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1275")
var fUF=_n('view')
_rz(z,fUF,'class',41,e,s,gg)
cs.pop()
_(oTF,fUF)
cs.pop()
_(o2E,oTF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1308")
var cVF=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1407")
var hWF=_n('view')
_rz(z,hWF,'class',45,e,s,gg)
var oXF=_oz(z,46,e,s,gg)
_(hWF,oXF)
cs.pop()
_(cVF,hWF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1445")
var cYF=_n('view')
_rz(z,cYF,'class',47,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1472")
var oZF=_n('view')
_rz(z,oZF,'class',48,e,s,gg)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,49,e,s,gg)){l1F.wxVkey=1
cs.push("./pages/meInfo/meInfo.wxml:block:1:1498")
cs.push("./pages/meInfo/meInfo.wxml:view:1:1535")
var a2F=_n('view')
var t3F=_oz(z,50,e,s,gg)
_(a2F,t3F)
cs.pop()
_(l1F,a2F)
cs.pop()
}
else{l1F.wxVkey=2
cs.push("./pages/meInfo/meInfo.wxml:block:1:1559")
var e4F=_v()
_(l1F,e4F)
if(_oz(z,51,e,s,gg)){e4F.wxVkey=1
cs.push("./pages/meInfo/meInfo.wxml:block:1:1574")
cs.push("./pages/meInfo/meInfo.wxml:view:1:1611")
var b5F=_n('view')
var o6F=_oz(z,52,e,s,gg)
_(b5F,o6F)
cs.pop()
_(e4F,b5F)
cs.pop()
}
else{e4F.wxVkey=2
cs.push("./pages/meInfo/meInfo.wxml:block:1:1635")
cs.push("./pages/meInfo/meInfo.wxml:view:1:1650")
var x7F=_n('view')
var o8F=_oz(z,53,e,s,gg)
_(x7F,o8F)
cs.pop()
_(e4F,x7F)
cs.pop()
}
e4F.wxXCkey=1
cs.pop()
}
l1F.wxXCkey=1
cs.pop()
_(cYF,oZF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1695")
var f9F=_n('view')
_rz(z,f9F,'class',54,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:1721")
var c0F=_mz(z,'image',['class',55,'src',1],[],e,s,gg)
cs.pop()
_(f9F,c0F)
cs.pop()
_(cYF,f9F)
cs.pop()
_(cVF,cYF)
cs.pop()
_(o2E,cVF)
cs.pop()
_(x1E,o2E)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1821")
var hAG=_n('view')
_rz(z,hAG,'class',57,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1849")
var oBG=_mz(z,'view',['bindtap',58,'class',1,'data-event-opts',2],[],e,s,gg)
var cCG=_oz(z,61,e,s,gg)
_(oBG,cCG)
cs.pop()
_(hAG,oBG)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1971")
var oDG=_mz(z,'view',['bindtap',62,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var lEG=_oz(z,66,e,s,gg)
_(oDG,lEG)
cs.pop()
_(hAG,oDG)
cs.pop()
_(x1E,hAG)
cs.pop()
_(r,x1E)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
cs.push("./pages/meNickName/meNickName.wxml:view:1:1")
var tGG=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/meNickName/meNickName.wxml:form:1:45")
var eHG=_mz(z,'form',['bindsubmit',2,'data-event-opts',1],[],e,s,gg)
cs.push("./pages/meNickName/meNickName.wxml:view:1:139")
var bIG=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
cs.push("./pages/meNickName/meNickName.wxml:input:1:190")
var oJG=_mz(z,'input',['class',6,'maxlength',1,'name',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(bIG,oJG)
cs.pop()
_(eHG,bIG)
cs.push("./pages/meNickName/meNickName.wxml:button:1:354")
var xKG=_mz(z,'button',['class',13,'formType',1,'type',2],[],e,s,gg)
var oLG=_oz(z,16,e,s,gg)
_(xKG,oLG)
cs.pop()
_(eHG,xKG)
cs.pop()
_(tGG,eHG)
cs.pop()
_(r,tGG)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
cs.push("./pages/movie/movie.wxml:view:1:1")
var cNG=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:35")
var hOG=_n('view')
_rz(z,hOG,'class',2,e,s,gg)
cs.push("./pages/movie/movie.wxml:video:1:56")
var oPG=_mz(z,'video',['controls',-1,'class',3,'id',1,'poster',2,'src',3],[],e,s,gg)
cs.pop()
_(hOG,oPG)
cs.pop()
_(cNG,hOG)
cs.push("./pages/movie/movie.wxml:view:1:178")
var cQG=_n('view')
_rz(z,cQG,'class',7,e,s,gg)
cs.push("./pages/movie/movie.wxml:navigator:1:203")
var oRG=_n('navigator')
_rz(z,oRG,'url',8,e,s,gg)
cs.push("./pages/movie/movie.wxml:image:1:266")
var lSG=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
cs.pop()
_(oRG,lSG)
cs.pop()
_(cQG,oRG)
cs.push("./pages/movie/movie.wxml:view:1:335")
var aTG=_n('view')
_rz(z,aTG,'class',11,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:360")
var tUG=_n('view')
_rz(z,tUG,'class',12,e,s,gg)
var eVG=_oz(z,13,e,s,gg)
_(tUG,eVG)
cs.pop()
_(aTG,tUG)
cs.push("./pages/movie/movie.wxml:view:1:407")
var bWG=_n('view')
_rz(z,bWG,'class',14,e,s,gg)
var oXG=_oz(z,15,e,s,gg)
_(bWG,oXG)
cs.pop()
_(aTG,bWG)
cs.push("./pages/movie/movie.wxml:view:1:464")
var xYG=_n('view')
_rz(z,xYG,'class',16,e,s,gg)
var oZG=_oz(z,17,e,s,gg)
_(xYG,oZG)
cs.pop()
_(aTG,xYG)
cs.push("./pages/movie/movie.wxml:view:1:524")
var f1G=_n('view')
_rz(z,f1G,'class',18,e,s,gg)
var c2G=_oz(z,19,e,s,gg)
_(f1G,c2G)
cs.pop()
_(aTG,f1G)
cs.push("./pages/movie/movie.wxml:view:1:581")
var h3G=_n('view')
_rz(z,h3G,'class',20,e,s,gg)
var o4G=_oz(z,21,e,s,gg)
_(h3G,o4G)
cs.pop()
_(aTG,h3G)
cs.push("./pages/movie/movie.wxml:view:1:640")
var c5G=_n('view')
_rz(z,c5G,'class',22,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:666")
var o6G=_n('view')
_rz(z,o6G,'class',23,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:690")
var l7G=_n('view')
_rz(z,l7G,'class',24,e,s,gg)
var a8G=_oz(z,25,e,s,gg)
_(l7G,a8G)
cs.pop()
_(o6G,l7G)
cs.push("./pages/movie/movie.wxml:view:1:738")
var t9G=_n('view')
_rz(z,t9G,'class',26,e,s,gg)
var e0G=_oz(z,27,e,s,gg)
_(t9G,e0G)
cs.pop()
_(o6G,t9G)
cs.pop()
_(c5G,o6G)
cs.push("./pages/movie/movie.wxml:view:1:799")
var bAH=_n('view')
_rz(z,bAH,'class',28,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,29,e,s,gg)){oBH.wxVkey=1
cs.push("./pages/movie/movie.wxml:block:1:825")
cs.push("./pages/movie/movie.wxml:block:1:865")
cs.push("./pages/movie/movie.wxml:trailer-stars:1:872")
var xCH=_mz(z,'trailer-stars',['innerScore',30,'showNum',1],[],e,s,gg)
cs.pop()
_(oBH,xCH)
cs.pop()
cs.pop()
}
cs.push("./pages/movie/movie.wxml:view:1:966")
var oDH=_n('view')
_rz(z,oDH,'class',32,e,s,gg)
var fEH=_oz(z,33,e,s,gg)
_(oDH,fEH)
cs.pop()
_(bAH,oDH)
oBH.wxXCkey=1
oBH.wxXCkey=3
cs.pop()
_(c5G,bAH)
cs.pop()
_(aTG,c5G)
cs.pop()
_(cQG,aTG)
cs.pop()
_(cNG,cQG)
cs.push("./pages/movie/movie.wxml:view:1:1072")
var cFH=_n('view')
_rz(z,cFH,'class',34,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1098")
var hGH=_n('view')
_rz(z,hGH,'class',35,e,s,gg)
cs.pop()
_(cFH,hGH)
cs.pop()
_(cNG,cFH)
cs.push("./pages/movie/movie.wxml:view:1:1131")
var oHH=_n('view')
_rz(z,oHH,'class',36,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1157")
var cIH=_n('view')
_rz(z,cIH,'class',37,e,s,gg)
var oJH=_oz(z,38,e,s,gg)
_(cIH,oJH)
cs.pop()
_(oHH,cIH)
cs.push("./pages/movie/movie.wxml:view:1:1202")
var lKH=_n('view')
_rz(z,lKH,'class',39,e,s,gg)
var aLH=_oz(z,40,e,s,gg)
_(lKH,aLH)
cs.pop()
_(oHH,lKH)
cs.pop()
_(cNG,oHH)
cs.push("./pages/movie/movie.wxml:view:1:1265")
var tMH=_n('view')
_rz(z,tMH,'class',41,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1292")
var eNH=_n('view')
_rz(z,eNH,'class',42,e,s,gg)
var bOH=_oz(z,43,e,s,gg)
_(eNH,bOH)
cs.pop()
_(tMH,eNH)
cs.push("./pages/movie/movie.wxml:scroll-view:1:1338")
var oPH=_mz(z,'scroll-view',['scrollX',-1,'class',44],[],e,s,gg)
var xQH=_v()
_(oPH,xQH)
cs.push("./pages/movie/movie.wxml:block:1:1380")
var oRH=function(cTH,fSH,hUH,gg){
cs.push("./pages/movie/movie.wxml:block:1:1380")
cs.push("./pages/movie/movie.wxml:view:1:1475")
var cWH=_n('view')
_rz(z,cWH,'class',49,cTH,fSH,gg)
cs.push("./pages/movie/movie.wxml:image:1:1502")
var oXH=_mz(z,'image',['bindtap',50,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],cTH,fSH,gg)
cs.pop()
_(cWH,oXH)
cs.push("./pages/movie/movie.wxml:view:1:1688")
var lYH=_n('view')
_rz(z,lYH,'class',56,cTH,fSH,gg)
var aZH=_oz(z,57,cTH,fSH,gg)
_(lYH,aZH)
cs.pop()
_(cWH,lYH)
cs.push("./pages/movie/movie.wxml:view:1:1743")
var t1H=_n('view')
_rz(z,t1H,'class',58,cTH,fSH,gg)
var e2H=_oz(z,59,cTH,fSH,gg)
_(t1H,e2H)
cs.pop()
_(cWH,t1H)
cs.pop()
_(hUH,cWH)
cs.pop()
return hUH
}
xQH.wxXCkey=2
_2z(z,47,oRH,e,s,gg,xQH,'director','staffIndex','id')
cs.pop()
var b3H=_v()
_(oPH,b3H)
cs.push("./pages/movie/movie.wxml:block:1:1816")
var o4H=function(o6H,x5H,f7H,gg){
cs.push("./pages/movie/movie.wxml:block:1:1816")
cs.push("./pages/movie/movie.wxml:view:1:1905")
var h9H=_n('view')
_rz(z,h9H,'class',64,o6H,x5H,gg)
cs.push("./pages/movie/movie.wxml:image:1:1932")
var o0H=_mz(z,'image',['bindtap',65,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],o6H,x5H,gg)
cs.pop()
_(h9H,o0H)
cs.push("./pages/movie/movie.wxml:view:1:2136")
var cAI=_n('view')
_rz(z,cAI,'class',71,o6H,x5H,gg)
var oBI=_oz(z,72,o6H,x5H,gg)
_(cAI,oBI)
cs.pop()
_(h9H,cAI)
cs.push("./pages/movie/movie.wxml:view:1:2188")
var lCI=_n('view')
_rz(z,lCI,'class',73,o6H,x5H,gg)
var aDI=_oz(z,74,o6H,x5H,gg)
_(lCI,aDI)
cs.pop()
_(h9H,lCI)
cs.pop()
_(f7H,h9H)
cs.pop()
return f7H
}
b3H.wxXCkey=2
_2z(z,62,o4H,e,s,gg,b3H,'actor','actorIndex','id')
cs.pop()
cs.pop()
_(tMH,oPH)
cs.pop()
_(cNG,tMH)
cs.push("./pages/movie/movie.wxml:view:1:2279")
var tEI=_n('view')
_rz(z,tEI,'class',75,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:2306")
var eFI=_n('view')
_rz(z,eFI,'class',76,e,s,gg)
var bGI=_oz(z,77,e,s,gg)
_(eFI,bGI)
cs.pop()
_(tEI,eFI)
cs.push("./pages/movie/movie.wxml:scroll-view:1:2346")
var oHI=_mz(z,'scroll-view',['scrollX',-1,'class',78],[],e,s,gg)
var xII=_v()
_(oHI,xII)
cs.push("./pages/movie/movie.wxml:block:1:2388")
var oJI=function(cLI,fKI,hMI,gg){
cs.push("./pages/movie/movie.wxml:block:1:2388")
cs.push("./pages/movie/movie.wxml:image:1:2482")
var cOI=_mz(z,'image',['bindtap',83,'class',1,'data-event-opts',2,'data-imgIndex',3,'mode',4,'src',5],[],cLI,fKI,gg)
cs.pop()
_(hMI,cOI)
cs.pop()
return hMI
}
xII.wxXCkey=2
_2z(z,81,oJI,e,s,gg,xII,'img','imgIndex','imgIndex')
cs.pop()
cs.pop()
_(tEI,oHI)
cs.pop()
_(cNG,tEI)
cs.pop()
_(r,cNG)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
cs.push("./pages/registLogin/registLogin.wxml:view:1:1")
var lQI=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:form:1:35")
var aRI=_mz(z,'form',['bindsubmit',2,'data-event-opts',1],[],e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:121")
var tSI=_n('view')
_rz(z,tSI,'class',4,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:image:1:147")
var eTI=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(tSI,eTI)
cs.pop()
_(aRI,tSI)
cs.push("./pages/registLogin/registLogin.wxml:view:1:218")
var bUI=_n('view')
_rz(z,bUI,'class',7,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:label:1:244")
var oVI=_n('label')
_rz(z,oVI,'class',8,e,s,gg)
var xWI=_oz(z,9,e,s,gg)
_(oVI,xWI)
cs.pop()
_(bUI,oVI)
cs.push("./pages/registLogin/registLogin.wxml:input:1:283")
var oXI=_mz(z,'input',['class',10,'name',1,'placeholder',2,'type',3,'value',4],[],e,s,gg)
cs.pop()
_(bUI,oXI)
cs.pop()
_(aRI,bUI)
cs.push("./pages/registLogin/registLogin.wxml:view:1:385")
var fYI=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:label:1:437")
var cZI=_n('label')
_rz(z,cZI,'class',17,e,s,gg)
var h1I=_oz(z,18,e,s,gg)
_(cZI,h1I)
cs.pop()
_(fYI,cZI)
cs.push("./pages/registLogin/registLogin.wxml:input:1:476")
var o2I=_mz(z,'input',['class',19,'name',1,'password',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
cs.pop()
_(fYI,o2I)
cs.pop()
_(aRI,fYI)
cs.push("./pages/registLogin/registLogin.wxml:button:1:588")
var c3I=_mz(z,'button',['class',25,'formType',1,'style',2,'type',3],[],e,s,gg)
var o4I=_oz(z,29,e,s,gg)
_(c3I,o4I)
cs.pop()
_(aRI,c3I)
cs.pop()
_(lQI,aRI)
cs.push("./pages/registLogin/registLogin.wxml:view:1:709")
var l5I=_n('view')
_rz(z,l5I,'class',30,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:736")
var a6I=_n('view')
_rz(z,a6I,'class',31,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:761")
var t7I=_n('view')
_rz(z,t7I,'class',32,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:787")
var e8I=_n('view')
_rz(z,e8I,'class',33,e,s,gg)
cs.pop()
_(t7I,e8I)
cs.pop()
_(a6I,t7I)
cs.push("./pages/registLogin/registLogin.wxml:view:1:820")
var b9I=_n('view')
_rz(z,b9I,'class',34,e,s,gg)
var o0I=_oz(z,35,e,s,gg)
_(b9I,o0I)
cs.pop()
_(a6I,b9I)
cs.push("./pages/registLogin/registLogin.wxml:view:1:874")
var xAJ=_n('view')
_rz(z,xAJ,'class',36,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:900")
var oBJ=_n('view')
_rz(z,oBJ,'class',37,e,s,gg)
cs.pop()
_(xAJ,oBJ)
cs.pop()
_(a6I,xAJ)
cs.pop()
_(l5I,a6I)
cs.push("./pages/registLogin/registLogin.wxml:view:1:940")
var fCJ=_n('view')
_rz(z,fCJ,'class',38,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:image:1:972")
var cDJ=_mz(z,'image',['bindtap',39,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
cs.pop()
_(fCJ,cDJ)
cs.push("./pages/registLogin/registLogin.wxml:image:1:1136")
var hEJ=_mz(z,'image',['bindtap',44,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
cs.pop()
_(fCJ,hEJ)
cs.push("./pages/registLogin/registLogin.wxml:image:1:1319")
var oFJ=_mz(z,'image',['bindtap',50,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
cs.pop()
_(fCJ,oFJ)
cs.pop()
_(l5I,fCJ)
cs.pop()
_(lQI,l5I)
cs.pop()
_(r,lQI)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
cs.push("./pages/search/search.wxml:view:1:1")
var oHJ=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/search/search.wxml:view:1:35")
var lIJ=_n('view')
_rz(z,lIJ,'class',2,e,s,gg)
cs.push("./pages/search/search.wxml:view:1:62")
var aJJ=_n('view')
_rz(z,aJJ,'class',3,e,s,gg)
cs.push("./pages/search/search.wxml:image:1:94")
var tKJ=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(aJJ,tKJ)
cs.pop()
_(lIJ,aJJ)
cs.push("./pages/search/search.wxml:input:1:165")
var eLJ=_mz(z,'input',['bindconfirm',6,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5],[],e,s,gg)
cs.pop()
_(lIJ,eLJ)
cs.pop()
_(oHJ,lIJ)
cs.push("./pages/search/search.wxml:view:1:344")
var bMJ=_n('view')
_rz(z,bMJ,'class',12,e,s,gg)
var oNJ=_v()
_(bMJ,oNJ)
cs.push("./pages/search/search.wxml:block:1:380")
var xOJ=function(fQJ,oPJ,cRJ,gg){
cs.push("./pages/search/search.wxml:block:1:380")
cs.push("./pages/search/search.wxml:view:1:468")
var oTJ=_n('view')
_rz(z,oTJ,'class',17,fQJ,oPJ,gg)
cs.push("./pages/search/search.wxml:image:1:495")
var cUJ=_mz(z,'image',['bindtap',18,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],fQJ,oPJ,gg)
cs.pop()
_(oTJ,cUJ)
cs.pop()
_(cRJ,oTJ)
cs.pop()
return cRJ
}
oNJ.wxXCkey=2
_2z(z,15,xOJ,e,s,gg,oNJ,'trailer','__i0__','id')
cs.pop()
cs.pop()
_(oHJ,bMJ)
cs.pop()
_(r,oHJ)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
cs.push("./pages/sex/sex.wxml:view:1:1")
var lWJ=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/sex/sex.wxml:form:1:45")
var aXJ=_mz(z,'form',['bindsubmit',2,'data-event-opts',1],[],e,s,gg)
cs.push("./pages/sex/sex.wxml:view:1:134")
var tYJ=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
cs.push("./pages/sex/sex.wxml:radio-group:1:185")
var eZJ=_mz(z,'radio-group',['bindchange',6,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/sex/sex.wxml:label:1:295")
var b1J=_n('label')
_rz(z,b1J,'class',9,e,s,gg)
cs.push("./pages/sex/sex.wxml:radio:1:323")
var o2J=_mz(z,'radio',['checked',10,'value',1],[],e,s,gg)
cs.pop()
_(b1J,o2J)
var x3J=_oz(z,12,e,s,gg)
_(b1J,x3J)
cs.pop()
_(eZJ,b1J)
cs.push("./pages/sex/sex.wxml:label:1:380")
var o4J=_n('label')
_rz(z,o4J,'class',13,e,s,gg)
cs.push("./pages/sex/sex.wxml:radio:1:408")
var f5J=_mz(z,'radio',['checked',14,'value',1],[],e,s,gg)
cs.pop()
_(o4J,f5J)
var c6J=_oz(z,16,e,s,gg)
_(o4J,c6J)
cs.pop()
_(eZJ,o4J)
cs.pop()
_(tYJ,eZJ)
cs.pop()
_(aXJ,tYJ)
cs.push("./pages/sex/sex.wxml:button:1:486")
var h7J=_mz(z,'button',['class',17,'formType',1,'type',2],[],e,s,gg)
var o8J=_oz(z,20,e,s,gg)
_(h7J,o8J)
cs.pop()
_(aXJ,h7J)
cs.pop()
_(lWJ,aXJ)
cs.pop()
_(r,lWJ)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
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

__wxAppCode__['pages/faceCrop/faceCrop.wxss']=setCssToHead([".",[1],"uni-content-info { }\n.",[1],"cropper-config { padding: ",[0,20]," ",[0,40],"; }\n.",[1],"cropper-content { min-height: ",[0,750],"; width: 100%; }\n.",[1],"uni-corpper { position: relative; overflow: hidden; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"uni-corpper-content { position: relative; }\n.",[1],"uni-corpper-content wx-image { display: block; width: 100%; min-width: 0 !important; max-width: none !important; height: 100%; min-height: 0 !important; max-height: none !important; image-orientation: 0deg !important; margin: 0 auto; }\n.",[1],"uni-cropper-drag-box { position: absolute; top: 0; right: 0; bottom: 0; left: 0; cursor: move; background: rgba(0, 0, 0, 0.6); z-index: 1; }\n.",[1],"uni-corpper-crop-box { position: absolute; background: rgba(255, 255, 255, 0.3); z-index: 2; }\n.",[1],"uni-corpper-crop-box .",[1],"uni-cropper-view-box { position: relative; display: block; width: 100%; height: 100%; overflow: visible; outline: ",[0,1]," solid #69f; outline-color: rgba(102, 153, 255, .75) }\n.",[1],"uni-cropper-dashed-h { position: absolute; top: 33.33333333%; left: 0; width: 100%; height: 33.33333333%; border-top: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-bottom: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-dashed-v { position: absolute; left: 33.33333333%; top: 0; width: 33.33333333%; height: 100%; border-left: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-right: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-line-t { position: absolute; display: block; width: 100%; background-color: #69f; top: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: n-resize; }\n.",[1],"uni-cropper-line-t::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-r { position: absolute; display: block; background-color: #69f; top: 0; right: ",[0,0],"; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: e-resize; }\n.",[1],"uni-cropper-line-r::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-b { position: absolute; display: block; width: 100%; background-color: #69f; bottom: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: s-resize; }\n.",[1],"uni-cropper-line-b::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-l { position: absolute; display: block; background-color: #69f; top: 0; left: 0; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: w-resize; }\n.",[1],"uni-cropper-line-l::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-point { width: ",[0,5],"; height: ",[0,5],"; background-color: #69f; opacity: .75; position: absolute; z-index: 3; }\n.",[1],"point-t { top: ",[0,-3],"; left: 50%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-tr { top: ",[0,-3],"; left: 100%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-r { top: 50%; left: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-rb { left: 100%; top: 100%; -webkit-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); cursor: n-resize; width: ",[0,36],"; height: ",[0,36],"; background-color: #69f; position: absolute; z-index: 1112; opacity: 1; }\n.",[1],"point-b { left: 50%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-bl { left: 0%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-l { left: 0%; top: 50%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-lt { left: 0%; top: 0%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"uni-cropper-viewer { position: relative; width: 100%; height: 100%; overflow: hidden; }\n.",[1],"uni-cropper-viewer wx-image { position: absolute; z-index: 2; }\n.",[1],"container { }\n.",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"myDistance { }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/faceCrop/faceCrop.wxss"});    
__wxAppCode__['pages/faceCrop/faceCrop.wxml']=$gwx('./pages/faceCrop/faceCrop.wxml');

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
