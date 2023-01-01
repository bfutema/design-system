var Jr=Object.defineProperty;var o=(e,t)=>Jr(e,"name",{value:t,configurable:!0});import{R as Pe,r as F}from"./index.7f33b667.js";import{j as $,a as ne}from"./jsx-runtime.c499e310.js";import{g as en}from"./iframe.d9371feb.js";import{_ as tn,a as rr,b as rn,c as ye,g as nn}from"./polished.esm.46664283.js";var mt={exports:{}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Gt=ce?Symbol.for("react.element"):60103,Xt=ce?Symbol.for("react.portal"):60106,pt=ce?Symbol.for("react.fragment"):60107,gt=ce?Symbol.for("react.strict_mode"):60108,vt=ce?Symbol.for("react.profiler"):60114,yt=ce?Symbol.for("react.provider"):60109,bt=ce?Symbol.for("react.context"):60110,Qt=ce?Symbol.for("react.async_mode"):60111,wt=ce?Symbol.for("react.concurrent_mode"):60111,xt=ce?Symbol.for("react.forward_ref"):60112,St=ce?Symbol.for("react.suspense"):60113,an=ce?Symbol.for("react.suspense_list"):60120,Ct=ce?Symbol.for("react.memo"):60115,kt=ce?Symbol.for("react.lazy"):60116,on=ce?Symbol.for("react.block"):60121,sn=ce?Symbol.for("react.fundamental"):60117,un=ce?Symbol.for("react.responder"):60118,ln=ce?Symbol.for("react.scope"):60119;function xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gt:switch(e=e.type,e){case Qt:case wt:case pt:case vt:case gt:case St:return e;default:switch(e=e&&e.$$typeof,e){case bt:case xt:case kt:case Ct:case yt:return e;default:return t}}case Xt:return t}}}o(xe,"z$1");function Fr(e){return xe(e)===wt}o(Fr,"A$1");G.AsyncMode=Qt;G.ConcurrentMode=wt;G.ContextConsumer=bt;G.ContextProvider=yt;G.Element=Gt;G.ForwardRef=xt;G.Fragment=pt;G.Lazy=kt;G.Memo=Ct;G.Portal=Xt;G.Profiler=vt;G.StrictMode=gt;G.Suspense=St;G.isAsyncMode=function(e){return Fr(e)||xe(e)===Qt};G.isConcurrentMode=Fr;G.isContextConsumer=function(e){return xe(e)===bt};G.isContextProvider=function(e){return xe(e)===yt};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt};G.isForwardRef=function(e){return xe(e)===xt};G.isFragment=function(e){return xe(e)===pt};G.isLazy=function(e){return xe(e)===kt};G.isMemo=function(e){return xe(e)===Ct};G.isPortal=function(e){return xe(e)===Xt};G.isProfiler=function(e){return xe(e)===vt};G.isStrictMode=function(e){return xe(e)===gt};G.isSuspense=function(e){return xe(e)===St};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pt||e===wt||e===vt||e===gt||e===St||e===an||typeof e=="object"&&e!==null&&(e.$$typeof===kt||e.$$typeof===Ct||e.$$typeof===yt||e.$$typeof===bt||e.$$typeof===xt||e.$$typeof===sn||e.$$typeof===un||e.$$typeof===ln||e.$$typeof===on)};G.typeOf=xe;(function(e){e.exports=G})(mt);function cn(e){function t(D,x,S,A,d){for(var j=0,b=0,J=0,q=0,B,z,de=0,be=0,L,ge=L=B=0,U=0,fe=0,Re=0,he=0,Xe=S.length,Ne=Xe-1,Se,_="",re="",Tt="",Dt="",Te;U<Xe;){if(z=S.charCodeAt(U),U===Ne&&b+q+J+j!==0&&(b!==0&&(z=b===47?10:47),q=J=j=0,Xe++,Ne++),b+q+J+j===0){if(U===Ne&&(0<fe&&(_=_.replace(P,"")),0<_.trim().length)){switch(z){case 32:case 9:case 59:case 13:case 10:break;default:_+=S.charAt(U)}z=59}switch(z){case 123:for(_=_.trim(),B=_.charCodeAt(0),L=1,he=++U;U<Xe;){switch(z=S.charCodeAt(U)){case 123:L++;break;case 125:L--;break;case 47:switch(z=S.charCodeAt(U+1)){case 42:case 47:e:{for(ge=U+1;ge<Ne;++ge)switch(S.charCodeAt(ge)){case 47:if(z===42&&S.charCodeAt(ge-1)===42&&U+2!==ge){U=ge+1;break e}break;case 10:if(z===47){U=ge+1;break e}}U=ge}}break;case 91:z++;case 40:z++;case 34:case 39:for(;U++<Ne&&S.charCodeAt(U)!==z;);}if(L===0)break;U++}switch(L=S.substring(he,U),B===0&&(B=(_=_.replace(w,"").trim()).charCodeAt(0)),B){case 64:switch(0<fe&&(_=_.replace(P,"")),z=_.charCodeAt(1),z){case 100:case 109:case 115:case 45:fe=x;break;default:fe=T}if(L=t(x,fe,L,z,d+1),he=L.length,0<X&&(fe=r(T,_,Re),Te=u(3,L,fe,x,oe,Z,he,z,d,A),_=fe.join(""),Te!==void 0&&(he=(L=Te.trim()).length)===0&&(z=0,L="")),0<he)switch(z){case 115:_=_.replace(R,s);case 100:case 109:case 45:L=_+"{"+L+"}";break;case 107:_=_.replace(p,"$1 $2"),L=_+"{"+L+"}",L=te===1||te===2&&i("@"+L,3)?"@-webkit-"+L+"@"+L:"@"+L;break;default:L=_+L,A===112&&(L=(re+=L,""))}else L="";break;default:L=t(x,r(x,_,Re),L,A,d+1)}Tt+=L,L=Re=fe=ge=B=0,_="",z=S.charCodeAt(++U);break;case 125:case 59:if(_=(0<fe?_.replace(P,""):_).trim(),1<(he=_.length))switch(ge===0&&(B=_.charCodeAt(0),B===45||96<B&&123>B)&&(he=(_=_.replace(" ",":")).length),0<X&&(Te=u(1,_,x,D,oe,Z,re.length,A,d,A))!==void 0&&(he=(_=Te.trim()).length)===0&&(_="\0\0"),B=_.charCodeAt(0),z=_.charCodeAt(1),B){case 0:break;case 64:if(z===105||z===99){Dt+=_+S.charAt(U);break}default:_.charCodeAt(he-1)!==58&&(re+=a(_,B,z,_.charCodeAt(2)))}Re=fe=ge=B=0,_="",z=S.charCodeAt(++U)}}switch(z){case 13:case 10:b===47?b=0:1+B===0&&A!==107&&0<_.length&&(fe=1,_+="\0"),0<X*pe&&u(0,_,x,D,oe,Z,re.length,A,d,A),Z=1,oe++;break;case 59:case 125:if(b+q+J+j===0){Z++;break}default:switch(Z++,Se=S.charAt(U),z){case 9:case 32:if(q+j+b===0)switch(de){case 44:case 58:case 9:case 32:Se="";break;default:z!==32&&(Se=" ")}break;case 0:Se="\\0";break;case 12:Se="\\f";break;case 11:Se="\\v";break;case 38:q+b+j===0&&(fe=Re=1,Se="\f"+Se);break;case 108:if(q+b+j+ee===0&&0<ge)switch(U-ge){case 2:de===112&&S.charCodeAt(U-3)===58&&(ee=de);case 8:be===111&&(ee=be)}break;case 58:q+b+j===0&&(ge=U);break;case 44:b+J+q+j===0&&(fe=1,Se+="\r");break;case 34:case 39:b===0&&(q=q===z?0:q===0?z:q);break;case 91:q+b+J===0&&j++;break;case 93:q+b+J===0&&j--;break;case 41:q+b+j===0&&J--;break;case 40:if(q+b+j===0){if(B===0)switch(2*de+3*be){case 533:break;default:B=1}J++}break;case 64:b+J+q+j+ge+L===0&&(L=1);break;case 42:case 47:if(!(0<q+j+J))switch(b){case 0:switch(2*z+3*S.charCodeAt(U+1)){case 235:b=47;break;case 220:he=U,b=42}break;case 42:z===47&&de===42&&he+2!==U&&(S.charCodeAt(he+2)===33&&(re+=S.substring(he,U+1)),Se="",b=0)}}b===0&&(_+=Se)}be=de,de=z,U++}if(he=re.length,0<he){if(fe=x,0<X&&(Te=u(2,re,fe,D,oe,Z,he,A,d,A),Te!==void 0&&(re=Te).length===0))return Dt+re+Tt;if(re=fe.join(",")+"{"+re+"}",te*ee!==0){switch(te!==2||i(re,2)||(ee=0),ee){case 111:re=re.replace(I,":-moz-$1")+re;break;case 112:re=re.replace(y,"::-webkit-input-$1")+re.replace(y,"::-moz-$1")+re.replace(y,":-ms-input-$1")+re}ee=0}}return Dt+re+Tt}o(t,"M");function r(D,x,S){var A=x.trim().split(h);x=A;var d=A.length,j=D.length;switch(j){case 0:case 1:var b=0;for(D=j===0?"":D[0]+" ";b<d;++b)x[b]=n(D,x[b],S).trim();break;default:var J=b=0;for(x=[];b<d;++b)for(var q=0;q<j;++q)x[J++]=n(D[q]+" ",A[b],S).trim()}return x}o(r,"X");function n(D,x,S){var A=x.charCodeAt(0);switch(33>A&&(A=(x=x.trim()).charCodeAt(0)),A){case 38:return x.replace(m,"$1"+D.trim());case 58:return D.trim()+x.replace(m,"$1"+D.trim());default:if(0<1*S&&0<x.indexOf("\f"))return x.replace(m,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+x}o(n,"Z");function a(D,x,S,A){var d=D+";",j=2*x+3*S+4*A;if(j===944){D=d.indexOf(":",9)+1;var b=d.substring(D,d.length-1).trim();return b=d.substring(0,D).trim()+b+";",te===1||te===2&&i(b,1)?"-webkit-"+b+b:b}if(te===0||te===2&&!i(d,1))return d;switch(j){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(ie,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return b=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+d+"-ms-flex-pack"+b+d;case 1005:return v.test(d)?d.replace(k,":-webkit-")+d.replace(k,":-moz-")+d:d;case 1e3:switch(b=d.substring(13).trim(),x=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(x)){case 226:b=d.replace(M,"tb");break;case 232:b=d.replace(M,"tb-rl");break;case 220:b=d.replace(M,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+b+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(x=(d=D).length-10,b=(d.charCodeAt(x)===33?d.substring(0,x):d).substring(D.indexOf(":",7)+1).trim(),j=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:d=d.replace(b,"-webkit-"+b)+";"+d;break;case 207:case 102:d=d.replace(b,"-webkit-"+(102<j?"inline-":"")+"box")+";"+d.replace(b,"-webkit-"+b)+";"+d.replace(b,"-ms-"+b+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return b=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+b+"-ms-flex-"+b+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(H,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(H,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(K.test(D)===!0)return(b=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?a(D.replace("stretch","fill-available"),x,S,A).replace(":fill-available",":stretch"):d.replace(b,"-webkit-"+b)+d.replace(b,"-moz-"+b.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,S+A===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(l,"$1-webkit-$2")+d}return d}o(a,"P");function i(D,x){var S=D.indexOf(x===1?":":"{"),A=D.substring(0,x!==3?S:10);return S=D.substring(S+1,D.length-1),se(x!==2?A:A.replace(Y,"$1"),S,x)}o(i,"L");function s(D,x){var S=a(x,x.charCodeAt(0),x.charCodeAt(1),x.charCodeAt(2));return S!==x+";"?S.replace(E," or ($1)").substring(4):"("+x+")"}o(s,"ea");function u(D,x,S,A,d,j,b,J,q,B){for(var z=0,de=x,be;z<X;++z)switch(be=N[z].call(g,D,de,S,A,d,j,b,J,q,B)){case void 0:case!1:case!0:case null:break;default:de=be}if(de!==x)return de}o(u,"H");function c(D){switch(D){case void 0:case null:X=N.length=0;break;default:if(typeof D=="function")N[X++]=D;else if(typeof D=="object")for(var x=0,S=D.length;x<S;++x)c(D[x]);else pe=!!D|0}return c}o(c,"T");function f(D){return D=D.prefix,D!==void 0&&(se=null,D?typeof D!="function"?te=1:(te=2,se=D):te=0),f}o(f,"U");function g(D,x){var S=D;if(33>S.charCodeAt(0)&&(S=S.trim()),Ce=S,S=[Ce],0<X){var A=u(-1,x,S,S,oe,Z,0,0,0,0);A!==void 0&&typeof A=="string"&&(x=A)}var d=t(T,S,x,0,0);return 0<X&&(A=u(-2,d,S,S,oe,Z,d.length,0,0,0),A!==void 0&&(d=A)),Ce="",ee=0,Z=oe=1,d}o(g,"B");var w=/^\0+/g,P=/[\0\r\f]/g,k=/: */g,v=/zoo|gra/,l=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,I=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,H=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,Z=1,oe=1,ee=0,te=1,T=[],N=[],X=0,se=null,pe=0,Ce="";return g.use=c,g.set=f,e!==void 0&&f(e),g}o(cn,"stylis_min");var dn={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fn(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}o(fn,"memoize");var hn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nr=fn(function(e){return hn.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Kt=mt.exports,mn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ar={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zt={};Zt[Kt.ForwardRef]=gn;Zt[Kt.Memo]=Ar;function ar(e){return Kt.isMemo(e)?Ar:Zt[e.$$typeof]||mn}o(ar,"getStatics");var vn=Object.defineProperty,yn=Object.getOwnPropertyNames,ir=Object.getOwnPropertySymbols,bn=Object.getOwnPropertyDescriptor,wn=Object.getPrototypeOf,or=Object.prototype;function _r(e,t,r){if(typeof t!="string"){if(or){var n=wn(t);n&&n!==or&&_r(e,n,r)}var a=yn(t);ir&&(a=a.concat(ir(t)));for(var i=ar(e),s=ar(t),u=0;u<a.length;++u){var c=a[u];if(!pn[c]&&!(r&&r[c])&&!(s&&s[c])&&!(i&&i[c])){var f=bn(t,c);try{vn(e,c,f)}catch{}}}}return e}o(_r,"hoistNonReactStatics");var xn=_r;function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}o(ke,"v");var sr=o(function(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r},"g"),Ft=o(function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!mt.exports.typeOf(e)},"S"),st=Object.freeze([]),Oe=Object.freeze({});function Ve(e){return typeof e=="function"}o(Ve,"b");function ur(e){return e.displayName||e.name||"Component"}o(ur,"_");function Jt(e){return e&&typeof e.styledComponentId=="string"}o(Jt,"N");var _e=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",er=typeof window<"u"&&"HTMLElement"in window,Sn=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Ge(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}o(Ge,"j");var Cn=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}o(e,"e");var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,a=0;a<r;a++)n+=this.groupSizes[a];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,s=i;r>=s;)(s<<=1)<0&&Ge(16,""+r);this.groupSizes=new Uint32Array(s),this.groupSizes.set(a),this.length=s;for(var u=i;u<s;u++)this.groupSizes[u]=0}for(var c=this.indexOfGroup(r+1),f=0,g=n.length;f<g;f++)this.tag.insertRule(c,n[f])&&(this.groupSizes[r]++,c++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],a=this.indexOfGroup(r),i=a+n;this.groupSizes[r]=0;for(var s=a;s<i;s++)this.tag.deleteRule(a)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var a=this.groupSizes[r],i=this.indexOfGroup(r),s=i+a,u=i;u<s;u++)n+=this.tag.getRule(u)+`/*!sc*/
`;return n},e}(),it=new Map,ut=new Map,Be=1,Qe=o(function(e){if(it.has(e))return it.get(e);for(;ut.has(Be);)Be++;var t=Be++;return it.set(e,t),ut.set(t,e),t},"B"),kn=o(function(e){return ut.get(e)},"z"),Tn=o(function(e,t){t>=Be&&(Be=t+1),it.set(e,t),ut.set(t,e)},"M"),Dn="style["+_e+'][data-styled-version="5.3.6"]',On=new RegExp("^"+_e+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Mn=o(function(e,t,r){for(var n,a=r.split(","),i=0,s=a.length;i<s;i++)(n=a[i])&&e.registerName(t,n)},"F"),Pn=o(function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],a=0,i=r.length;a<i;a++){var s=r[a].trim();if(s){var u=s.match(On);if(u){var c=0|parseInt(u[1],10),f=u[2];c!==0&&(Tn(f,c),Mn(e,f,u[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(s)}}},"Y"),$n=o(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},"q"),Wr=o(function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(u){for(var c=u.childNodes,f=c.length;f>=0;f--){var g=c[f];if(g&&g.nodeType===1&&g.hasAttribute(_e))return g}}(r),i=a!==void 0?a.nextSibling:null;n.setAttribute(_e,"active"),n.setAttribute("data-styled-version","5.3.6");var s=$n();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},"H"),En=function(){function e(r){var n=this.element=Wr(r);n.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,s=0,u=i.length;s<u;s++){var c=i[s];if(c.ownerNode===a)return c}Ge(17)}(n),this.length=0}o(e,"e");var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),In=function(){function e(r){var n=this.element=Wr(r);this.nodes=n.childNodes,this.length=0}o(e,"e");var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var a=document.createTextNode(n),i=this.nodes[r];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Fn=function(){function e(r){this.rules=[],this.length=0}o(e,"e");var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),lr=er,An={isServer:!er,useCSSOMInjection:!Sn},zr=function(){function e(r,n,a){r===void 0&&(r=Oe),n===void 0&&(n={}),this.options=ke({},An,{},r),this.gs=n,this.names=new Map(a),this.server=!!r.isServer,!this.server&&er&&lr&&(lr=!1,function(i){for(var s=document.querySelectorAll(Dn),u=0,c=s.length;u<c;u++){var f=s[u];f&&f.getAttribute(_e)!=="active"&&(Pn(i,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}o(e,"e"),e.registerId=function(r){return Qe(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(ke({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(n=this.options).isServer,i=n.useCSSOMInjection,s=n.target,r=a?new Fn(s):i?new En(s):new In(s),new Cn(r)));var r,n,a,i,s},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(Qe(r),this.names.has(r))this.names.get(r).add(n);else{var a=new Set;a.add(n),this.names.set(r,a)}},t.insertRules=function(r,n,a){this.registerName(r,n),this.getTag().insertRules(Qe(r),a)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(Qe(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),a=n.length,i="",s=0;s<a;s++){var u=kn(s);if(u!==void 0){var c=r.names.get(u),f=n.getGroup(s);if(c&&f&&c.size){var g=_e+".g"+s+'[id="'+u+'"]',w="";c!==void 0&&c.forEach(function(P){P.length>0&&(w+=P+",")}),i+=""+f+g+'{content:"'+w+`"}/*!sc*/
`}}}return i}(this)},e}(),_n=/(a)(d)/gi,cr=o(function(e){return String.fromCharCode(e+(e>25?39:97))},"Q");function At(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=cr(t%52)+r;return(cr(t%52)+r).replace(_n,"$1-$2")}o(At,"ee");var Ae=o(function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},"te"),Rr=o(function(e){return Ae(5381,e)},"ne");function Wn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ve(r)&&!Jt(r))return!1}return!0}o(Wn,"re");var zn=Rr("5.3.6"),Rn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Wn(t),this.componentId=r,this.baseHash=Ae(zn,r),this.baseStyle=n,zr.registerId(r)}return o(e,"e"),e.prototype.generateAndInjectStyles=function(t,r,n){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var s=We(this.rules,t,r,n).join(""),u=At(Ae(this.baseHash,s)>>>0);if(!r.hasNameForId(a,u)){var c=n(s,"."+u,void 0,a);r.insertRules(a,u,c)}i.push(u),this.staticRulesId=u}else{for(var f=this.rules.length,g=Ae(this.baseHash,n.hash),w="",P=0;P<f;P++){var k=this.rules[P];if(typeof k=="string")w+=k;else if(k){var v=We(k,t,r,n),l=Array.isArray(v)?v.join(""):v;g=Ae(g,l+P),w+=l}}if(w){var h=At(g>>>0);if(!r.hasNameForId(a,h)){var m=n(w,"."+h,void 0,a);r.insertRules(a,h,m)}i.push(h)}}return i.join(" ")},e}(),Nn=/^\s*\/\/.*$/gm,Ln=[":","[",".","#"];function Yn(e){var t,r,n,a,i=e===void 0?Oe:e,s=i.options,u=s===void 0?Oe:s,c=i.plugins,f=c===void 0?st:c,g=new cn(u),w=[],P=function(l){function h(m){if(m)try{l(m+"}")}catch{}}return o(h,"t"),function(m,p,y,I,M,R,E,H,Y,K){switch(m){case 1:if(Y===0&&p.charCodeAt(0)===64)return l(p+";"),"";break;case 2:if(H===0)return p+"/*|*/";break;case 3:switch(H){case 102:case 112:return l(y[0]+p),"";default:return p+(K===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(h)}}}(function(l){w.push(l)}),k=o(function(l,h,m){return h===0&&Ln.indexOf(m[r.length])!==-1||m.match(a)?l:"."+t},"f");function v(l,h,m,p){p===void 0&&(p="&");var y=l.replace(Nn,""),I=h&&m?m+" "+h+" { "+y+" }":y;return t=p,r=h,n=new RegExp("\\"+r+"\\b","g"),a=new RegExp("(\\"+r+"\\b){2,}"),g(m||!h?"":h,I)}return o(v,"m"),g.use([].concat(f,[function(l,h,m){l===2&&m.length&&m[0].lastIndexOf(r)>0&&(m[0]=m[0].replace(n,k))},P,function(l){if(l===-2){var h=w;return w=[],h}}])),v.hash=f.length?f.reduce(function(l,h){return h.name||Ge(15),Ae(l,h.name)},5381).toString():"",v}o(Yn,"ce");var Nr=Pe.createContext();Nr.Consumer;var Lr=Pe.createContext(),jn=(Lr.Consumer,new zr),_t=Yn();function qn(){return F.exports.useContext(Nr)||jn}o(qn,"fe");function Un(){return F.exports.useContext(Lr)||_t}o(Un,"me");var Hn=function(){function e(t,r){var n=this;this.inject=function(a,i){i===void 0&&(i=_t);var s=n.name+i.hash;a.hasNameForId(n.id,s)||a.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.toString=function(){return Ge(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return o(e,"e"),e.prototype.getName=function(t){return t===void 0&&(t=_t),this.name+t.hash},e}(),Bn=/([A-Z])/,Vn=/([A-Z])/g,Gn=/^ms-/,Xn=o(function(e){return"-"+e.toLowerCase()},"Ee");function dr(e){return Bn.test(e)?e.replace(Vn,Xn).replace(Gn,"-ms-"):e}o(dr,"be");var fr=o(function(e){return e==null||e===!1||e===""},"_e");function We(e,t,r,n){if(Array.isArray(e)){for(var a,i=[],s=0,u=e.length;s<u;s+=1)(a=We(e[s],t,r,n))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(fr(e))return"";if(Jt(e))return"."+e.styledComponentId;if(Ve(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var c=e(t);return We(c,t,r,n)}var f;return e instanceof Hn?r?(e.inject(r,n),e.getName(n)):e:Ft(e)?o(function g(w,P){var k,v,l=[];for(var h in w)w.hasOwnProperty(h)&&!fr(w[h])&&(Array.isArray(w[h])&&w[h].isCss||Ve(w[h])?l.push(dr(h)+":",w[h],";"):Ft(w[h])?l.push.apply(l,g(w[h],h)):l.push(dr(h)+": "+(k=h,(v=w[h])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||k in dn?String(v).trim():v+"px")+";"));return P?[P+" {"].concat(l,["}"]):l},"e")(e):e.toString()}o(We,"Ne");var hr=o(function(e){return Array.isArray(e)&&(e.isCss=!0),e},"Ae");function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Ve(e)||Ft(e)?hr(We(sr(st,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:hr(We(sr(e,r)))}o(O,"Ce");var Qn=o(function(e,t,r){return r===void 0&&(r=Oe),e.theme!==r.theme&&e.theme||t||r.theme},"Re"),Kn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zn=/(^-|-$)/g;function Ot(e){return e.replace(Kn,"-").replace(Zn,"")}o(Ot,"Te");var Jn=o(function(e){return At(Rr(e)>>>0)},"xe");function Ke(e){return typeof e=="string"&&!0}o(Ke,"ke");var Wt=o(function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},"Ve"),ea=o(function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"},"Be");function ta(e,t,r){var n=e[r];Wt(t)&&Wt(n)?Yr(n,t):e[r]=t}o(ta,"ze");function Yr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var a=0,i=r;a<i.length;a++){var s=i[a];if(Wt(s))for(var u in s)ea(u)&&ta(e,s[u],u)}return e}o(Yr,"Me");var jr=Pe.createContext();jr.Consumer;var Mt={};function qr(e,t,r){var n=Jt(e),a=!Ke(e),i=t.attrs,s=i===void 0?st:i,u=t.componentId,c=u===void 0?function(p,y){var I=typeof p!="string"?"sc":Ot(p);Mt[I]=(Mt[I]||0)+1;var M=I+"-"+Jn("5.3.6"+I+Mt[I]);return y?y+"-"+M:M}(t.displayName,t.parentComponentId):u,f=t.displayName,g=f===void 0?function(p){return Ke(p)?"styled."+p:"Styled("+ur(p)+")"}(e):f,w=t.displayName&&t.componentId?Ot(t.displayName)+"-"+t.componentId:t.componentId||c,P=n&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,k=t.shouldForwardProp;n&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(p,y,I){return e.shouldForwardProp(p,y,I)&&t.shouldForwardProp(p,y,I)}:e.shouldForwardProp);var v,l=new Rn(r,w,n?e.componentStyle:void 0),h=l.isStatic&&s.length===0,m=o(function(p,y){return function(I,M,R,E){var H=I.attrs,Y=I.componentStyle,K=I.defaultProps,ie=I.foldedComponentIds,Z=I.shouldForwardProp,oe=I.styledComponentId,ee=I.target,te=function(A,d,j){A===void 0&&(A=Oe);var b=ke({},d,{theme:A}),J={};return j.forEach(function(q){var B,z,de,be=q;for(B in Ve(be)&&(be=be(b)),be)b[B]=J[B]=B==="className"?(z=J[B],de=be[B],z&&de?z+" "+de:z||de):be[B]}),[b,J]}(Qn(M,F.exports.useContext(jr),K)||Oe,M,H),T=te[0],N=te[1],X=function(A,d,j,b){var J=qn(),q=Un(),B=d?A.generateAndInjectStyles(Oe,J,q):A.generateAndInjectStyles(j,J,q);return B}(Y,E,T),se=R,pe=N.$as||M.$as||N.as||M.as||ee,Ce=Ke(pe),D=N!==M?ke({},M,{},N):M,x={};for(var S in D)S[0]!=="$"&&S!=="as"&&(S==="forwardedAs"?x.as=D[S]:(Z?Z(S,nr,pe):!Ce||nr(S))&&(x[S]=D[S]));return M.style&&N.style!==M.style&&(x.style=ke({},M.style,{},N.style)),x.className=Array.prototype.concat(ie,oe,X!==oe?X:null,M.className,N.className).filter(Boolean).join(" "),x.ref=se,F.exports.createElement(pe,x)}(v,p,y,h)},"O");return m.displayName=g,(v=Pe.forwardRef(m)).attrs=P,v.componentStyle=l,v.displayName=g,v.shouldForwardProp=k,v.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):st,v.styledComponentId=w,v.target=n?e.target:e,v.withComponent=function(p){var y=t.componentId,I=function(R,E){if(R==null)return{};var H,Y,K={},ie=Object.keys(R);for(Y=0;Y<ie.length;Y++)H=ie[Y],E.indexOf(H)>=0||(K[H]=R[H]);return K}(t,["componentId"]),M=y&&y+"-"+(Ke(p)?p:Ot(ur(p)));return qr(p,ke({},I,{attrs:P,componentId:M}),r)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=n?Yr({},e.defaultProps,p):p}}),v.toString=function(){return"."+v.styledComponentId},a&&xn(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}o(qr,"qe");var zt=o(function(e){return o(function t(r,n,a){if(a===void 0&&(a=Oe),!mt.exports.isValidElementType(n))return Ge(1,String(n));var i=o(function(){return r(n,a,O.apply(void 0,arguments))},"s");return i.withConfig=function(s){return t(r,n,ke({},a,{},s))},i.attrs=function(s){return t(r,n,ke({},a,{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},i},"e")(qr,e)},"He");["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){zt[e]=zt(e)});const Q=zt;function W(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}o(W,"toDate");function ae(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}o(ae,"toInteger");function ot(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=ae(t);return r.setDate(r.getDate()+n),r}o(ot,"addDays");function ra(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e).getTime(),n=ae(t);return new Date(r+n)}o(ra,"addMilliseconds");function lt(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,i=a==null?0:ae(a),s=r.weekStartsOn==null?i:ae(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=W(e),c=u.getDay(),f=(c<s?7:0)+c-s;return u.setDate(u.getDate()-f),u.setHours(0,0,0,0),u}o(lt,"startOfWeek");var mr=6e4;function Ee(e){var t=new Date(e.getTime()),r=t.getTimezoneOffset();t.setSeconds(0,0);var n=t.getTime()%mr;return r*mr+n}o(Ee,"getTimezoneOffsetInMilliseconds");function ct(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e);return t.setHours(0,0,0,0),t}o(ct,"startOfDay");var na=864e5;function aa(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=ct(e),n=ct(t),a=r.getTime()-Ee(r),i=n.getTime()-Ee(n);return Math.round((a-i)/na)}o(aa,"differenceInCalendarDays");function ia(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e),r=t.getFullYear(),n=t.getMonth(),a=new Date(0);return a.setFullYear(r,n+1,0),a.setHours(0,0,0,0),a.getDate()}o(ia,"getDaysInMonth");function dt(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=ae(t),a=r.getMonth()+n,i=new Date(0);i.setFullYear(r.getFullYear(),a,1),i.setHours(0,0,0,0);var s=ia(i);return r.setMonth(a,Math.min(s,r.getDate())),r}o(dt,"addMonths");function oa(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=ae(t),n=r*7;return ot(e,n)}o(oa,"addWeeks");function sa(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=ae(t);return dt(e,r*12)}o(sa,"addYears");function ze(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t),a=r.getTime()-n.getTime();return a<0?-1:a>0?1:a}o(ze,"compareAsc");function ua(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e);return!isNaN(t)}o(ua,"isValid");function la(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=ct(e),n=ct(t);return r.getTime()===n.getTime()}o(la,"isSameDay");function ca(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t),a=r.getFullYear()-n.getFullYear(),i=r.getMonth()-n.getMonth();return a*12+i}o(ca,"differenceInCalendarMonths");var da=6048e5;function fa(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=lt(e,r),a=lt(t,r),i=n.getTime()-Ee(n),s=a.getTime()-Ee(a);return Math.round((i-s)/da)}o(fa,"differenceInCalendarWeeks");function ha(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t);return r.getFullYear()-n.getFullYear()}o(ha,"differenceInCalendarYears");function ma(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t),a=ze(r,n),i=Math.abs(aa(r,n));r.setDate(r.getDate()-a*i);var s=ze(r,n)===-a,u=a*(i-s);return u===0?0:u}o(ma,"differenceInDays");function pa(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t),a=ze(r,n),i=Math.abs(ca(r,n));r.setMonth(r.getMonth()-a*i);var s=ze(r,n)===-a,u=a*(i-s);return u===0?0:u}o(pa,"differenceInMonths");function ga(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t),a=ze(r,n),i=Math.abs(ha(r,n));r.setFullYear(r.getFullYear()-a*i);var s=ze(r,n)===-a,u=a*(i-s);return u===0?0:u}o(ga,"differenceInYears");function va(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=e||{},n=W(r.start),a=W(r.end),i=a.getTime();if(!(n.getTime()<=i))throw new RangeError("Invalid interval");var s=lt(n,t),u=lt(a,t);s.setHours(15),u.setHours(15),i=u.getTime();for(var c=[],f=s;f.getTime()<=i;)f.setHours(0),c.push(W(f)),f=oa(f,1),f.setHours(15);return c}o(va,"eachWeekOfInterval");function ya(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e);return t.setDate(1),t.setHours(0,0,0,0),t}o(ya,"startOfMonth");function ba(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}o(ba,"endOfMonth");function wa(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e);return t.setHours(23,59,59,999),t}o(wa,"endOfDay");var Ze={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function xa(e,t,r){r=r||{};var n;return typeof Ze[e]=="string"?n=Ze[e]:t===1?n=Ze[e].one:n=Ze[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+n:n+" ago":n}o(xa,"formatDistance$1");function Pt(e){return function(t){var r=t||{},n=r.width?String(r.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}o(Pt,"buildFormatLongFn$1");var Sa={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ca={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ka={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ta={date:Pt({formats:Sa,defaultWidth:"full"}),time:Pt({formats:Ca,defaultWidth:"full"}),dateTime:Pt({formats:ka,defaultWidth:"full"})};const Da=Ta;var Oa={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Ma(e,t,r,n){return Oa[e]}o(Ma,"formatRelative$1");function Le(e){return function(t,r){var n=r||{},a=n.context?String(n.context):"standalone",i;if(a==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):s;i=e.formattingValues[u]||e.formattingValues[s]}else{var c=e.defaultWidth,f=n.width?String(n.width):e.defaultWidth;i=e.values[f]||e.values[c]}var g=e.argumentCallback?e.argumentCallback(t):t;return i[g]}}o(Le,"buildLocalizeFn$1");var Pa={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$a={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ea={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ia={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Aa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function _a(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}o(_a,"ordinalNumber");var Wa={ordinalNumber:_a,era:Le({values:Pa,defaultWidth:"wide"}),quarter:Le({values:$a,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Le({values:Ea,defaultWidth:"wide"}),day:Le({values:Ia,defaultWidth:"wide"}),dayPeriod:Le({values:Fa,defaultWidth:"wide",formattingValues:Aa,defaultFormattingWidth:"wide"})};const za=Wa;function Ra(e){return function(t,r){var n=String(t),a=r||{},i=n.match(e.matchPattern);if(!i)return null;var s=i[0],u=n.match(e.parsePattern);if(!u)return null;var c=e.valueCallback?e.valueCallback(u[0]):u[0];return c=a.valueCallback?a.valueCallback(c):c,{value:c,rest:n.slice(s.length)}}}o(Ra,"buildMatchPatternFn$1");function Ye(e){return function(t,r){var n=String(t),a=r||{},i=a.width,s=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=n.match(s);if(!u)return null;var c=u[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],g;return Object.prototype.toString.call(f)==="[object Array]"?g=f.findIndex(function(w){return w.test(n)}):g=Na(f,function(w){return w.test(n)}),g=e.valueCallback?e.valueCallback(g):g,g=a.valueCallback?a.valueCallback(g):g,{value:g,rest:n.slice(c.length)}}}o(Ye,"buildMatchFn$1");function Na(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}o(Na,"findKey");var La=/^(\d+)(th|st|nd|rd)?/i,Ya=/\d+/i,ja={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qa={any:[/^b/i,/^(a|c)/i]},Ua={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ha={any:[/1/i,/2/i,/3/i,/4/i]},Ba={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Va={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ga={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Xa={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ka={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Za={ordinalNumber:Ra({matchPattern:La,parsePattern:Ya,valueCallback:function(e){return parseInt(e,10)}}),era:Ye({matchPatterns:ja,defaultMatchWidth:"wide",parsePatterns:qa,defaultParseWidth:"any"}),quarter:Ye({matchPatterns:Ua,defaultMatchWidth:"wide",parsePatterns:Ha,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ye({matchPatterns:Ba,defaultMatchWidth:"wide",parsePatterns:Va,defaultParseWidth:"any"}),day:Ye({matchPatterns:Ga,defaultMatchWidth:"wide",parsePatterns:Xa,defaultParseWidth:"any"}),dayPeriod:Ye({matchPatterns:Qa,defaultMatchWidth:"any",parsePatterns:Ka,defaultParseWidth:"any"})};const Ja=Za;var ei={formatDistance:xa,formatLong:Da,formatRelative:Ma,localize:za,match:Ja,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ti=ei;function ri(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=ae(t);return ra(e,-r)}o(ri,"subMilliseconds");function V(e,t){for(var r=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return r+n}o(V,"addLeadingZeros");var ni={y:function(e,t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return V(t==="yy"?n%100:n,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):V(r+1,2)},d:function(e,t){return V(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.toUpperCase();case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return V(e.getUTCHours()%12||12,t.length)},H:function(e,t){return V(e.getUTCHours(),t.length)},m:function(e,t){return V(e.getUTCMinutes(),t.length)},s:function(e,t){return V(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,n=e.getUTCMilliseconds(),a=Math.floor(n*Math.pow(10,r-3));return V(a,t.length)}};const De=ni;var ai=864e5;function ii(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=r-n;return Math.floor(a/ai)+1}o(ii,"getUTCDayOfYear");function ft(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=1,r=W(e),n=r.getUTCDay(),a=(n<t?7:0)+n-t;return r.setUTCDate(r.getUTCDate()-a),r.setUTCHours(0,0,0,0),r}o(ft,"startOfUTCISOWeek");function Ur(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e),r=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(r+1,0,4),n.setUTCHours(0,0,0,0);var a=ft(n),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var s=ft(i);return t.getTime()>=a.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}o(Ur,"getUTCISOWeekYear");function oi(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Ur(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var n=ft(r);return n}o(oi,"startOfUTCISOWeekYear");var si=6048e5;function ui(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e),r=ft(t).getTime()-oi(t).getTime();return Math.round(r/si)+1}o(ui,"getUTCISOWeek");function ht(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,i=a==null?0:ae(a),s=r.weekStartsOn==null?i:ae(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=W(e),c=u.getUTCDay(),f=(c<s?7:0)+c-s;return u.setUTCDate(u.getUTCDate()-f),u.setUTCHours(0,0,0,0),u}o(ht,"startOfUTCWeek");function Hr(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=W(e,t),n=r.getUTCFullYear(),a=t||{},i=a.locale,s=i&&i.options&&i.options.firstWeekContainsDate,u=s==null?1:ae(s),c=a.firstWeekContainsDate==null?u:ae(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(n+1,0,c),f.setUTCHours(0,0,0,0);var g=ht(f,t),w=new Date(0);w.setUTCFullYear(n,0,c),w.setUTCHours(0,0,0,0);var P=ht(w,t);return r.getTime()>=g.getTime()?n+1:r.getTime()>=P.getTime()?n:n-1}o(Hr,"getUTCWeekYear");function li(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.firstWeekContainsDate,i=a==null?1:ae(a),s=r.firstWeekContainsDate==null?i:ae(r.firstWeekContainsDate),u=Hr(e,t),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var f=ht(c,t);return f}o(li,"startOfUTCWeekYear");var ci=6048e5;function di(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=W(e),n=ht(r,t).getTime()-li(r,t).getTime();return Math.round(n/ci)+1}o(di,"getUTCWeek");var Ie={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fi={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var n=e.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return De.y(e,t)},Y:function(e,t,r,n){var a=Hr(e,n),i=a>0?a:1-a;if(t==="YY"){var s=i%100;return V(s,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):V(i,t.length)},R:function(e,t){var r=Ur(e);return V(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return V(r,t.length)},Q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return V(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return V(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getUTCMonth();switch(t){case"M":case"MM":return De.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return V(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var a=di(e,n);return t==="wo"?r.ordinalNumber(a,{unit:"week"}):V(a,t.length)},I:function(e,t,r){var n=ui(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):V(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):De.d(e,t)},D:function(e,t,r){var n=ii(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):V(n,t.length)},E:function(e,t,r){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var a=e.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return V(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var a=e.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return V(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getUTCDay(),a=n===0?7:n;switch(t){case"i":return String(a);case"ii":return V(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours(),a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n=e.getUTCHours(),a;switch(n===12?a=Ie.noon:n===0?a=Ie.midnight:a=n/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n=e.getUTCHours(),a;switch(n>=17?a=Ie.evening:n>=12?a=Ie.afternoon:n>=4?a=Ie.morning:a=Ie.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var n=e.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return De.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):De.H(e,t)},K:function(e,t,r){var n=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):V(n,t.length)},k:function(e,t,r){var n=e.getUTCHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):V(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):De.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):De.s(e,t)},S:function(e,t){return De.S(e,t)},X:function(e,t,r,n){var a=n._originalDate||e,i=a.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return gr(i);case"XXXX":case"XX":return $e(i);case"XXXXX":case"XXX":default:return $e(i,":")}},x:function(e,t,r,n){var a=n._originalDate||e,i=a.getTimezoneOffset();switch(t){case"x":return gr(i);case"xxxx":case"xx":return $e(i);case"xxxxx":case"xxx":default:return $e(i,":")}},O:function(e,t,r,n){var a=n._originalDate||e,i=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pr(i,":");case"OOOO":default:return"GMT"+$e(i,":")}},z:function(e,t,r,n){var a=n._originalDate||e,i=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pr(i,":");case"zzzz":default:return"GMT"+$e(i,":")}},t:function(e,t,r,n){var a=n._originalDate||e,i=Math.floor(a.getTime()/1e3);return V(i,t.length)},T:function(e,t,r,n){var a=n._originalDate||e,i=a.getTime();return V(i,t.length)}};function pr(e,t){var r=e>0?"-":"+",n=Math.abs(e),a=Math.floor(n/60),i=n%60;if(i===0)return r+String(a);var s=t||"";return r+String(a)+s+V(i,2)}o(pr,"formatTimezoneShort");function gr(e,t){if(e%60===0){var r=e>0?"-":"+";return r+V(Math.abs(e)/60,2)}return $e(e,t)}o(gr,"formatTimezoneWithOptionalMinutes");function $e(e,t){var r=t||"",n=e>0?"-":"+",a=Math.abs(e),i=V(Math.floor(a/60),2),s=V(a%60,2);return n+i+r+s}o($e,"formatTimezone");const hi=fi;function vr(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}o(vr,"dateLongFormatter");function Br(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}o(Br,"timeLongFormatter");function mi(e,t){var r=e.match(/(P+)(p+)?/),n=r[1],a=r[2];if(!a)return vr(e,t);var i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",vr(n,t)).replace("{{time}}",Br(a,t))}o(mi,"dateTimeLongFormatter");var pi={p:Br,P:mi};const gi=pi;var vi=["D","DD"],yi=["YY","YYYY"];function bi(e){return vi.indexOf(e)!==-1}o(bi,"isProtectedDayOfYearToken");function wi(e){return yi.indexOf(e)!==-1}o(wi,"isProtectedWeekYearToken");function yr(e){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if(e==="YY")throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if(e==="D")throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if(e==="DD")throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}o(yr,"throwProtectedError");var xi=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Si=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ci=/^'(.*?)'?$/,ki=/''/g,Ti=/[a-zA-Z]/;function Je(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=String(t),a=r||{},i=a.locale||ti,s=i.options&&i.options.firstWeekContainsDate,u=s==null?1:ae(s),c=a.firstWeekContainsDate==null?u:ae(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=i.options&&i.options.weekStartsOn,g=f==null?0:ae(f),w=a.weekStartsOn==null?g:ae(a.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var P=W(e);if(!ua(P))throw new RangeError("Invalid time value");var k=Ee(P),v=ri(P,k),l={firstWeekContainsDate:c,weekStartsOn:w,locale:i,_originalDate:P},h=n.match(Si).map(function(m){var p=m[0];if(p==="p"||p==="P"){var y=gi[p];return y(m,i.formatLong,l)}return m}).join("").match(xi).map(function(m){if(m==="''")return"'";var p=m[0];if(p==="'")return Di(m);var y=hi[p];if(y)return!a.useAdditionalWeekYearTokens&&wi(m)&&yr(m),!a.useAdditionalDayOfYearTokens&&bi(m)&&yr(m),y(v,m,i.localize,l);if(p.match(Ti))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return m}).join("");return h}o(Je,"format");function Di(e){return e.match(Ci)[1].replace(ki,"'")}o(Di,"cleanEscapedString");function Oi(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(0,0,0,0),t}o(Oi,"lastDayOfMonth");function Mi(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return fa(Oi(e),ya(e),t)+1}o(Mi,"getWeeksInMonth");function je(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t);return r.getTime()>n.getTime()}o(je,"isAfter");function qe(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t);return r.getTime()<n.getTime()}o(qe,"isBefore");function we(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=W(e),n=W(t);return r.getTime()===n.getTime()}o(we,"isEqual$1");function Pi(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=W(e);return wa(t).getTime()===ba(t).getTime()}o(Pi,"isLastDayOfMonth");function $i(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return la(e,Date.now())}o($i,"isToday");function Ei(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,i=a==null?0:ae(a),s=r.weekStartsOn==null?i:ae(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var u=W(e),c=u.getDay(),f=(c<s?-7:0)+6-(c-s);return u.setHours(0,0,0,0),u.setDate(u.getDate()+f),u}o(Ei,"lastDayOfWeek");var Vr=36e5,Gr=6e4,Ii=2,et={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Fi=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Ai=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,_i=/^([+-])(\d{2})(?::?(\d{2}))?$/;function br(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.additionalDigits==null?Ii:ae(r.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var a=Wi(e),i;if(a.date){var s=zi(a.date,n);i=Ri(s.restDateString,s.year)}if(isNaN(i)||!i)return new Date(NaN);var u=i.getTime(),c=0,f;if(a.time&&(c=Ni(a.time),isNaN(c)||c===null))return new Date(NaN);if(a.timezone){if(f=Li(a.timezone),isNaN(f))return new Date(NaN)}else{var g=u+c,w=new Date(g);f=Ee(w);var P=new Date(g);P.setDate(w.getDate()+1);var k=Ee(P)-f;k>0&&(f+=k)}return new Date(u+c+f)}o(br,"parseISO");function Wi(e){var t={},r=e.split(et.dateTimeDelimiter),n;if(/:/.test(r[0])?(t.date=null,n=r[0]):(t.date=r[0],n=r[1],et.timeZoneDelimiter.test(t.date)&&(t.date=e.split(et.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){var a=et.timezone.exec(n);a?(t.time=n.replace(a[1],""),t.timezone=a[1]):t.time=n}return t}o(Wi,"splitDateString");function zi(e,t){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(r);if(!n)return{year:null};var a=n[1]&&parseInt(n[1]),i=n[2]&&parseInt(n[2]);return{year:i==null?a:i*100,restDateString:e.slice((n[1]||n[2]).length)}}o(zi,"parseYear");function Ri(e,t){if(t===null)return null;var r=e.match(Fi);if(!r)return null;var n=!!r[4],a=Ue(r[1]),i=Ue(r[2])-1,s=Ue(r[3]),u=Ue(r[4]),c=Ue(r[5])-1;if(n)return Hi(t,u,c)?Yi(t,u,c):new Date(NaN);var f=new Date(0);return!qi(t,i,s)||!Ui(t,a)?new Date(NaN):(f.setUTCFullYear(t,i,Math.max(a,s)),f)}o(Ri,"parseDate");function Ue(e){return e?parseInt(e):1}o(Ue,"parseDateUnit");function Ni(e){var t=e.match(Ai);if(!t)return null;var r=$t(t[1]),n=$t(t[2]),a=$t(t[3]);return Bi(r,n,a)?r*Vr+n*Gr+a*1e3:NaN}o(Ni,"parseTime");function $t(e){return e&&parseFloat(e.replace(",","."))||0}o($t,"parseTimeUnit");function Li(e){if(e==="Z")return 0;var t=e.match(_i);if(!t)return 0;var r=t[1]==="+"?-1:1,n=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return Vi(n,a)?r*(n*Vr+a*Gr):NaN}o(Li,"parseTimezone");function Yi(e,t,r){var n=new Date(0);n.setUTCFullYear(e,0,4);var a=n.getUTCDay()||7,i=(t-1)*7+r+1-a;return n.setUTCDate(n.getUTCDate()+i),n}o(Yi,"dayOfISOWeekYear");var ji=[31,null,31,30,31,30,31,31,30,31,30,31];function Xr(e){return e%400===0||e%4===0&&e%100}o(Xr,"isLeapYearIndex");function qi(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(ji[t]||(Xr(e)?29:28))}o(qi,"validateDate");function Ui(e,t){return t>=1&&t<=(Xr(e)?366:365)}o(Ui,"validateDayOfYearDate");function Hi(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}o(Hi,"validateWeekDate");function Bi(e,t,r){return e===24?t===0&&r===0:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}o(Bi,"validateTime");function Vi(e,t){return t>=0&&t<=59}o(Vi,"validateTimezone");var Qr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wr=Pe.createContext&&Pe.createContext(Qr),Me=globalThis&&globalThis.__assign||function(){return Me=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Me.apply(this,arguments)},Gi=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function Kr(e){return e&&e.map(function(t,r){return Pe.createElement(t.tag,Me({key:r},t.attr),Kr(t.child))})}o(Kr,"Tree2Element");function Zr(e){return function(t){return $(Xi,{...Me({attr:Me({},e.attr)},t),children:Kr(e.child)})}}o(Zr,"GenIcon");function Xi(e){var t=o(function(r){var n=e.attr,a=e.size,i=e.title,s=Gi(e,["attr","size","title"]),u=a||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),ne("svg",{...Me({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:c,style:Me(Me({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),children:[i&&$("title",{children:i}),e.children]})},"elem");return wr!==void 0?$(wr.Consumer,{children:function(r){return t(r)}}):t(Qr)}o(Xi,"IconBase");function Qi(e){return Zr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}o(Qi,"FiChevronLeft");function Ki(e){return Zr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}o(Ki,"FiChevronRight");let tt;const Zi=new Uint8Array(16);function Ji(){if(!tt&&(tt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!tt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return tt(Zi)}o(Ji,"rng");const me=[];for(let e=0;e<256;++e)me.push((e+256).toString(16).slice(1));function eo(e,t=0){return(me[e[t+0]]+me[e[t+1]]+me[e[t+2]]+me[e[t+3]]+"-"+me[e[t+4]]+me[e[t+5]]+"-"+me[e[t+6]]+me[e[t+7]]+"-"+me[e[t+8]]+me[e[t+9]]+"-"+me[e[t+10]]+me[e[t+11]]+me[e[t+12]]+me[e[t+13]]+me[e[t+14]]+me[e[t+15]]).toLowerCase()}o(eo,"unsafeStringify");const to=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xr={randomUUID:to};function He(e,t,r){if(xr.randomUUID&&!t&&!e)return xr.randomUUID();e=e||{};const n=e.random||(e.rng||Ji)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(let a=0;a<16;++a)t[r+a]=n[a];return t}return eo(n)}o(He,"v4");var Rt={exports:{}},Nt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"cerca de 1 m\xEAs",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xEAs",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};function n(a,i,s){s=s||{};var u;return typeof r[a]=="string"?u=r[a]:i===1?u=r[a].one:u=r[a].other.replace("{{count}}",i),s.addSuffix?s.comparison>0?"em "+u:"h\xE1 "+u:u}o(n,"formatDistance"),e.exports=t.default})(Nt,Nt.exports);var Lt={exports:{}},Yt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){return function(a){var i=a||{},s=i.width?String(i.width):n.defaultWidth,u=n.formats[s]||n.formats[n.defaultWidth];return u}}o(r,"buildFormatLongFn"),e.exports=t.default})(Yt,Yt.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(Yt.exports);function n(f){return f&&f.__esModule?f:{default:f}}o(n,"_interopRequireDefault");var a={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},i={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},s={full:"{{date}} '\xE0s' {{time}}",long:"{{date}} '\xE0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,r.default)({formats:a,defaultWidth:"full"}),time:(0,r.default)({formats:i,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},c=u;t.default=c,e.exports=t.default})(Lt,Lt.exports);var jt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r={lastWeek:function(a,i,s){var u=a.getUTCDay(),c=u===0||u===6?"\xFAltimo":"\xFAltima";return"'"+c+"' eeee '\xE0s' p"},yesterday:"'ontem \xE0s' p",today:"'hoje \xE0s' p",tomorrow:"'amanh\xE3 \xE0s' p",nextWeek:"eeee '\xE0s' p",other:"P"};function n(a,i,s,u){var c=r[a];return typeof c=="function"?c(i,s,u):c}o(n,"formatRelative"),e.exports=t.default})(jt,jt.exports);var qt={exports:{}},Ut={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){return function(a,i){var s=i||{},u=s.context?String(s.context):"standalone",c;if(u==="formatting"&&n.formattingValues){var f=n.defaultFormattingWidth||n.defaultWidth,g=s.width?String(s.width):f;c=n.formattingValues[g]||n.formattingValues[f]}else{var w=n.defaultWidth,P=s.width?String(s.width):n.defaultWidth;c=n.values[P]||n.values[w]}var k=n.argumentCallback?n.argumentCallback(a):a;return c[k]}}o(r,"buildLocalizeFn"),e.exports=t.default})(Ut,Ut.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(Ut.exports);function n(k){return k&&k.__esModule?k:{default:k}}o(n,"_interopRequireDefault");var a={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},i={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xBA trimestre","2\xBA trimestre","3\xBA trimestre","4\xBA trimestre"]},s={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},u={narrow:["do","2\xAA","3\xAA","4\xAA","5\xAA","6\xAA","s\xE1"],short:["do","2\xAA","3\xAA","4\xAA","5\xAA","6\xAA","s\xE1"],abbreviated:["dom","seg","ter","qua","qui","sex","s\xE1b"],wide:["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"]},c={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xE3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xE3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xE3",afternoon:"tarde",evening:"tarde",night:"noite"}},f={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xE3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xE3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xE3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}};function g(k,v){var l=Number(k),h=v||{},m=String(h.unit);return m==="week"||m==="isoWeek"?l+"\xAA":l+"\xBA"}o(g,"ordinalNumber");var w={ordinalNumber:g,era:(0,r.default)({values:a,defaultWidth:"wide"}),quarter:(0,r.default)({values:i,defaultWidth:"wide",argumentCallback:function(k){return Number(k)-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:c,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},P=w;t.default=P,e.exports=t.default})(qt,qt.exports);var Ht={exports:{}},Bt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(a){return function(i,s){var u=String(i),c=s||{},f=c.width,g=f&&a.matchPatterns[f]||a.matchPatterns[a.defaultMatchWidth],w=u.match(g);if(!w)return null;var P=w[0],k=f&&a.parsePatterns[f]||a.parsePatterns[a.defaultParseWidth],v;return Object.prototype.toString.call(k)==="[object Array]"?v=k.findIndex(function(l){return l.test(u)}):v=n(k,function(l){return l.test(u)}),v=a.valueCallback?a.valueCallback(v):v,v=c.valueCallback?c.valueCallback(v):v,{value:v,rest:u.slice(P.length)}}}o(r,"buildMatchFn");function n(a,i){for(var s in a)if(a.hasOwnProperty(s)&&i(a[s]))return s}o(n,"findKey"),e.exports=t.default})(Bt,Bt.exports);var Vt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){return function(a,i){var s=String(a),u=i||{},c=s.match(n.matchPattern);if(!c)return null;var f=c[0],g=s.match(n.parsePattern);if(!g)return null;var w=n.valueCallback?n.valueCallback(g[0]):g[0];return w=u.valueCallback?u.valueCallback(w):w,{value:w,rest:s.slice(f.length)}}}o(r,"buildMatchPatternFn"),e.exports=t.default})(Vt,Vt.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(Bt.exports),n=a(Vt.exports);function a(y){return y&&y.__esModule?y:{default:y}}o(a,"_interopRequireDefault");var i=/^(\d+)[ºªo]?/i,s=/\d+/i,u={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},c={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},f={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},g={any:[/1/i,/2/i,/3/i,/4/i]},w={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},P={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},k={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},v={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},l={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},h={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},m={ordinalNumber:(0,n.default)({matchPattern:i,parsePattern:s,valueCallback:function(y){return parseInt(y,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any",valueCallback:function(y){return y+1}}),month:(0,r.default)({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:l,defaultMatchWidth:"any",parsePatterns:h,defaultParseWidth:"any"})},p=m;t.default=p,e.exports=t.default})(Ht,Ht.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(Nt.exports),n=u(Lt.exports),a=u(jt.exports),i=u(qt.exports),s=u(Ht.exports);function u(g){return g&&g.__esModule?g:{default:g}}o(u,"_interopRequireDefault");var c={formatDistance:r.default,formatLong:n.default,formatRelative:a.default,localize:i.default,match:s.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},f=c;t.default=f,e.exports=t.default})(Rt,Rt.exports);const rt=en(Rt.exports);var Sr=Number.isNaN||o(function(t){return typeof t=="number"&&t!==t},"ponyfill");function ro(e,t){return!!(e===t||Sr(e)&&Sr(t))}o(ro,"isEqual");function no(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ro(e[r],t[r]))return!1;return!0}o(no,"areInputsEqual");function Et(e,t){t===void 0&&(t=no);var r,n=[],a,i=!1;function s(){for(var u=[],c=0;c<arguments.length;c++)u[c]=arguments[c];return i&&r===this&&t(u,n)||(a=e.apply(this,u),i=!0,r=this,n=u),a}return o(s,"memoized"),s}o(Et,"memoizeOne");var ao=typeof performance=="object"&&typeof performance.now=="function",Cr=ao?function(){return performance.now()}:function(){return Date.now()};function kr(e){cancelAnimationFrame(e.id)}o(kr,"cancelTimeout");function io(e,t){var r=Cr();function n(){Cr()-r>=t?e.call(null):a.id=requestAnimationFrame(n)}o(n,"tick");var a={id:requestAnimationFrame(n)};return a}o(io,"requestTimeout");var It=-1;function Tr(e){if(e===void 0&&(e=!1),It===-1||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),It=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return It}o(Tr,"getScrollbarSize");var Fe=null;function Dr(e){if(e===void 0&&(e=!1),Fe===null||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),a=n.style;return a.width="100px",a.height="100px",t.appendChild(n),document.body.appendChild(t),t.scrollLeft>0?Fe="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?Fe="negative":Fe="positive-ascending"),document.body.removeChild(t),Fe}return Fe}o(Dr,"getRTLOffsetType");var oo=150,so=o(function(t,r){return t},"defaultItemKey");function uo(e){var t,r=e.getItemOffset,n=e.getEstimatedTotalSize,a=e.getItemSize,i=e.getOffsetForIndexAndAlignment,s=e.getStartIndexForOffset,u=e.getStopIndexForStartIndex,c=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return t=function(w){tn(P,w);function P(v){var l;return l=w.call(this,v)||this,l._instanceProps=c(l.props,rr(l)),l._outerRef=void 0,l._resetIsScrollingTimeoutId=null,l.state={instance:rr(l),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof l.props.initialScrollOffset=="number"?l.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},l._callOnItemsRendered=void 0,l._callOnItemsRendered=Et(function(h,m,p,y){return l.props.onItemsRendered({overscanStartIndex:h,overscanStopIndex:m,visibleStartIndex:p,visibleStopIndex:y})}),l._callOnScroll=void 0,l._callOnScroll=Et(function(h,m,p){return l.props.onScroll({scrollDirection:h,scrollOffset:m,scrollUpdateWasRequested:p})}),l._getItemStyle=void 0,l._getItemStyle=function(h){var m=l.props,p=m.direction,y=m.itemSize,I=m.layout,M=l._getItemStyleCache(f&&y,f&&I,f&&p),R;if(M.hasOwnProperty(h))R=M[h];else{var E=r(l.props,h,l._instanceProps),H=a(l.props,h,l._instanceProps),Y=p==="horizontal"||I==="horizontal",K=p==="rtl",ie=Y?E:0;M[h]=R={position:"absolute",left:K?void 0:ie,right:K?ie:void 0,top:Y?0:E,height:Y?"100%":H,width:Y?H:"100%"}}return R},l._getItemStyleCache=void 0,l._getItemStyleCache=Et(function(h,m,p){return{}}),l._onScrollHorizontal=function(h){var m=h.currentTarget,p=m.clientWidth,y=m.scrollLeft,I=m.scrollWidth;l.setState(function(M){if(M.scrollOffset===y)return null;var R=l.props.direction,E=y;if(R==="rtl")switch(Dr()){case"negative":E=-y;break;case"positive-descending":E=I-p-y;break}return E=Math.max(0,Math.min(E,I-p)),{isScrolling:!0,scrollDirection:M.scrollOffset<y?"forward":"backward",scrollOffset:E,scrollUpdateWasRequested:!1}},l._resetIsScrollingDebounced)},l._onScrollVertical=function(h){var m=h.currentTarget,p=m.clientHeight,y=m.scrollHeight,I=m.scrollTop;l.setState(function(M){if(M.scrollOffset===I)return null;var R=Math.max(0,Math.min(I,y-p));return{isScrolling:!0,scrollDirection:M.scrollOffset<R?"forward":"backward",scrollOffset:R,scrollUpdateWasRequested:!1}},l._resetIsScrollingDebounced)},l._outerRefSetter=function(h){var m=l.props.outerRef;l._outerRef=h,typeof m=="function"?m(h):m!=null&&typeof m=="object"&&m.hasOwnProperty("current")&&(m.current=h)},l._resetIsScrollingDebounced=function(){l._resetIsScrollingTimeoutId!==null&&kr(l._resetIsScrollingTimeoutId),l._resetIsScrollingTimeoutId=io(l._resetIsScrolling,oo)},l._resetIsScrolling=function(){l._resetIsScrollingTimeoutId=null,l.setState({isScrolling:!1},function(){l._getItemStyleCache(-1,null)})},l}o(P,"List"),P.getDerivedStateFromProps=o(function(l,h){return lo(l,h),g(l),null},"getDerivedStateFromProps");var k=P.prototype;return k.scrollTo=o(function(l){l=Math.max(0,l),this.setState(function(h){return h.scrollOffset===l?null:{scrollDirection:h.scrollOffset<l?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},"scrollTo"),k.scrollToItem=o(function(l,h){h===void 0&&(h="auto");var m=this.props,p=m.itemCount,y=m.layout,I=this.state.scrollOffset;l=Math.max(0,Math.min(l,p-1));var M=0;if(this._outerRef){var R=this._outerRef;y==="vertical"?M=R.scrollWidth>R.clientWidth?Tr():0:M=R.scrollHeight>R.clientHeight?Tr():0}this.scrollTo(i(this.props,l,h,I,this._instanceProps,M))},"scrollToItem"),k.componentDidMount=o(function(){var l=this.props,h=l.direction,m=l.initialScrollOffset,p=l.layout;if(typeof m=="number"&&this._outerRef!=null){var y=this._outerRef;h==="horizontal"||p==="horizontal"?y.scrollLeft=m:y.scrollTop=m}this._callPropsCallbacks()},"componentDidMount"),k.componentDidUpdate=o(function(){var l=this.props,h=l.direction,m=l.layout,p=this.state,y=p.scrollOffset,I=p.scrollUpdateWasRequested;if(I&&this._outerRef!=null){var M=this._outerRef;if(h==="horizontal"||m==="horizontal")if(h==="rtl")switch(Dr()){case"negative":M.scrollLeft=-y;break;case"positive-ascending":M.scrollLeft=y;break;default:var R=M.clientWidth,E=M.scrollWidth;M.scrollLeft=E-R-y;break}else M.scrollLeft=y;else M.scrollTop=y}this._callPropsCallbacks()},"componentDidUpdate"),k.componentWillUnmount=o(function(){this._resetIsScrollingTimeoutId!==null&&kr(this._resetIsScrollingTimeoutId)},"componentWillUnmount"),k.render=o(function(){var l=this.props,h=l.children,m=l.className,p=l.direction,y=l.height,I=l.innerRef,M=l.innerElementType,R=l.innerTagName,E=l.itemCount,H=l.itemData,Y=l.itemKey,K=Y===void 0?so:Y,ie=l.layout,Z=l.outerElementType,oe=l.outerTagName,ee=l.style,te=l.useIsScrolling,T=l.width,N=this.state.isScrolling,X=p==="horizontal"||ie==="horizontal",se=X?this._onScrollHorizontal:this._onScrollVertical,pe=this._getRangeToRender(),Ce=pe[0],D=pe[1],x=[];if(E>0)for(var S=Ce;S<=D;S++)x.push(F.exports.createElement(h,{data:H,key:K(S,H),index:S,isScrolling:te?N:void 0,style:this._getItemStyle(S)}));var A=n(this.props,this._instanceProps);return F.exports.createElement(Z||oe||"div",{className:m,onScroll:se,ref:this._outerRefSetter,style:rn({position:"relative",height:y,width:T,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:p},ee)},F.exports.createElement(M||R||"div",{children:x,ref:I,style:{height:X?"100%":A,pointerEvents:N?"none":void 0,width:X?A:"100%"}}))},"render"),k._callPropsCallbacks=o(function(){if(typeof this.props.onItemsRendered=="function"){var l=this.props.itemCount;if(l>0){var h=this._getRangeToRender(),m=h[0],p=h[1],y=h[2],I=h[3];this._callOnItemsRendered(m,p,y,I)}}if(typeof this.props.onScroll=="function"){var M=this.state,R=M.scrollDirection,E=M.scrollOffset,H=M.scrollUpdateWasRequested;this._callOnScroll(R,E,H)}},"_callPropsCallbacks"),k._getRangeToRender=o(function(){var l=this.props,h=l.itemCount,m=l.overscanCount,p=this.state,y=p.isScrolling,I=p.scrollDirection,M=p.scrollOffset;if(h===0)return[0,0,0,0];var R=s(this.props,M,this._instanceProps),E=u(this.props,R,M,this._instanceProps),H=!y||I==="backward"?Math.max(1,m):1,Y=!y||I==="forward"?Math.max(1,m):1;return[Math.max(0,R-H),Math.max(0,Math.min(h-1,E+Y)),R,E]},"_getRangeToRender"),P}(F.exports.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}o(uo,"createListComponent");var lo=o(function(t,r){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,r.instance},"validateSharedProps"),Or=uo({getItemOffset:o(function(t,r){var n=t.itemSize;return r*n},"getItemOffset"),getItemSize:o(function(t,r){var n=t.itemSize;return n},"getItemSize"),getEstimatedTotalSize:o(function(t){var r=t.itemCount,n=t.itemSize;return n*r},"getEstimatedTotalSize"),getOffsetForIndexAndAlignment:o(function(t,r,n,a,i,s){var u=t.direction,c=t.height,f=t.itemCount,g=t.itemSize,w=t.layout,P=t.width,k=u==="horizontal"||w==="horizontal",v=k?P:c,l=Math.max(0,f*g-v),h=Math.min(l,r*g),m=Math.max(0,r*g-v+g+s);switch(n==="smart"&&(a>=m-v&&a<=h+v?n="auto":n="center"),n){case"start":return h;case"end":return m;case"center":{var p=Math.round(m+(h-m)/2);return p<Math.ceil(v/2)?0:p>l+Math.floor(v/2)?l:p}case"auto":default:return a>=m&&a<=h?a:a<m?m:h}},"getOffsetForIndexAndAlignment"),getStartIndexForOffset:o(function(t,r){var n=t.itemCount,a=t.itemSize;return Math.max(0,Math.min(n-1,Math.floor(r/a)))},"getStartIndexForOffset"),getStopIndexForStartIndex:o(function(t,r,n){var a=t.direction,i=t.height,s=t.itemCount,u=t.itemSize,c=t.layout,f=t.width,g=a==="horizontal"||c==="horizontal",w=r*u,P=g?f:i,k=Math.ceil((P+n-w)/u);return Math.max(0,Math.min(s-1,r+k-1))},"getStopIndexForStartIndex"),initInstanceProps:o(function(t){},"initInstanceProps"),shouldResetStyleCacheOnItemSizeChange:!0,validateProps:o(function(t){t.itemSize},"validateProps")}),co=Object.defineProperty,fo=Object.defineProperties,ho=Object.getOwnPropertyDescriptors,Mr=Object.getOwnPropertySymbols,mo=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable,Pr=o((e,t,r)=>t in e?co(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp"),$r=o((e,t)=>{for(var r in t||(t={}))mo.call(t,r)&&Pr(e,r,t[r]);if(Mr)for(var r of Mr(t))po.call(t,r)&&Pr(e,r,t[r]);return e},"__spreadValues"),Er=o((e,t)=>fo(e,ho(t)),"__spreadProps"),go={white:"#F6F7F9",black:"#0F0F10",primary100:"#EAD8FF",primary200:"#D2B2FF",primary300:"#B88CFF",primary400:"#A26FFF",primary500:"#7D40FF",primary600:"#602EDB",primary700:"#4620B7",primary800:"#301493",primary900:"#200C7A",secondary100:"#FED6D5",secondary200:"#FEABB1",secondary300:"#FD8197",secondary400:"#FB628C",secondary500:"#F92F7A",secondary600:"#D62276",secondary700:"#B31770",secondary800:"#900E65",secondary900:"#77095D",tertiary100:"#CCF9FF",tertiary200:"#99EDFF",tertiary300:"#67DBFF",tertiary400:"#41C6FF",tertiary500:"#02A4FF",tertiary600:"#017FDB",tertiary700:"#015FB7",tertiary800:"#004393",tertiary900:"#00307A",quarter100:"#D0E8FE",quarter200:"#A2CFFE",quarter300:"#73B1FC",quarter400:"#5096FA",quarter500:"#176BF8",quarter600:"#1052D5",quarter700:"#0B3DB2",quarter800:"#072A8F",quarter900:"#041D77",neutral200:"#7C7C8A",neutral800:"#202024"},vo={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},yo={regular:"400",medium:"500",bold:"700"},bo={default:"Roboto, sans-serif",code:"monospace"},wo={shorter:"125%",short:"140%",base:"160%",tall:"180%"},xo={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},So={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},C={colors:go,fontSizes:vo,fontWeights:yo,fonts:bo,lineHeights:wo,radii:xo,space:So},Co={size:{sm:O`
      font-size: ${C.fontSizes.xl};
    `,md:O`
      font-size: ${C.fontSizes["2xl"]};
    `,lg:O`
      font-size: ${C.fontSizes["4xl"]};
    `,"2xl":O`
      font-size: ${C.fontSizes["5xl"]};
    `,"3xl":O`
      font-size: ${C.fontSizes["6xl"]};
    `,"4xl":O`
      font-size: ${C.fontSizes["7xl"]};
    `,"5xl":O`
      font-size: ${C.fontSizes["8xl"]};
    `,"6xl":O`
      font-size: ${C.fontSizes["9xl"]};
    `}},ko=Q.h2`
  color: ${C.colors.white};
  font-family: ${C.fonts.default};
  font-weight: ${C.fontWeights.bold};

  margin: 0;

  ${({size:e})=>Co.size[e]}
`,Uo=o(({size:e="md",children:t})=>$(ko,{size:e,children:t}),"Heading");function To(e,t,r){const{enabled:n=!0}=r||{},a=F.exports.useRef(t);F.exports.useEffect(()=>{a.current=t}),F.exports.useEffect(()=>{function i(s){e.current&&!e.current.contains(s.target)&&a.current(s)}return o(i,"internalHandler"),document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e,n])}o(To,"useClickAway");var Do=o(class{randomDate(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}randomDates(){const e=this.randomDate(new Date(2022,0,0),new Date(2023,0,0)),t=ot(e,10);return[this.parse(e),this.parse(t)]}randomDatesFormatted(){const e=this.randomDate(new Date(2022,0,0),new Date(2023,0,0)),t=ot(e,10),r="dd MMM yyyy";return[this.format(e,r),this.format(t,r)]}format(e,t="yyyy-MM-dd"){return typeof e=="string"?Je(br(e),t,{locale:rt}):Je(e,t,{locale:rt})}parse(e){return typeof e=="string"?br(e):e}getToday(){const e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e}getYesterday(){const e=new Date(new Date().getTime()-864e5);return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e}getStartOfWeek(e,t=!0){const n=e.getDate()-e.getDay()+(e.getDay()===0?-6:1);return new Date(e.setDate(t?n:n-1))}getEndOfWeek(e,t=!0){const r=e.getDate()-e.getDay(),n=t?r+5:r+6;return new Date(e.setDate(n))}getThisWeek(e=!0){const t=this.getToday(),r=this.getStartOfWeek(t,e),n=this.getEndOfWeek(t,e);return[r,n]}getLastSevenDays(){const e=this.getToday(),t=new Date;return t.setDate(e.getDate()-6),[t,e]}getLastWeek(e=!0){const t=this.getToday(),r=new Date(t.getFullYear(),t.getMonth(),t.getDate()-7),n=this.getStartOfWeek(r,e),a=this.getEndOfWeek(r,e);return[n,a]}getLastFourteenDays(){const e=this.getToday(),t=new Date;return t.setDate(e.getDate()-6*2-1),[t,e]}getThisMonth(){const e=this.getToday(),t=new Date(e.getFullYear(),e.getMonth(),1),r=new Date(e.getFullYear(),e.getMonth()+1,0);return[t,r]}getLastThirtyDays(){const e=this.getToday(),t=new Date;return t.setDate(e.getDate()-29),[t,e]}getLastMonth(){const e=this.getToday(),t=new Date(e.getFullYear(),e.getMonth()-1,1),r=new Date(e.getFullYear(),e.getMonth(),0);return[t,r]}getFirstAndLastDatesFromDate(e){const t=new Date(e.getFullYear(),e.getMonth(),1),r=new Date(e.getFullYear(),e.getMonth()+1,0);return[t,r]}getCalendarDates(e){const t=[],[r,n]=this.getFirstAndLastDatesFromDate(e),a=va({start:new Date(r.getFullYear(),r.getMonth(),r.getDate()),end:new Date(n.getFullYear(),n.getMonth(),n.getDate())}),i=a[0],s=Ei(a[a.length-1]),u=ma(s,i);for(let c=0;c<=u;c++){const f=ot(i,c);f.getMonth()===r.getMonth()?t.push({isShow:!0,date:f}):t.push({isShow:!1,date:f})}return t}getMonths(e,t=3){const r=[];for(let n=0;n<t;n++){const a=dt(e,n);r.push({label:Je(a,"MMMM yyyy",{locale:rt}),date:a,days:this.getCalendarDates(a)})}return r}getYears(e,t=3){const r=[];for(let n=0;n<=t;n++){const a=sa(e,n);r.push({label:Je(a,"yyyy",{locale:rt}),date:a,months:[new Date(a.getFullYear(),0,a.getDate()),new Date(a.getFullYear(),1,a.getDate()),new Date(a.getFullYear(),2,a.getDate()),new Date(a.getFullYear(),3,a.getDate()),new Date(a.getFullYear(),4,a.getDate()),new Date(a.getFullYear(),5,a.getDate()),new Date(a.getFullYear(),6,a.getDate()),new Date(a.getFullYear(),7,a.getDate()),new Date(a.getFullYear(),8,a.getDate()),new Date(a.getFullYear(),9,a.getDate()),new Date(a.getFullYear(),10,a.getDate()),new Date(a.getFullYear(),11,a.getDate())]})}return r}},"DateHelper"),le=new Do;function tr({color:e}){const{black:t,white:r}=C.colors;return nn(e,r)<3.5?t:r}o(tr,"getContrastColor");var Oo=o(()=>({corners:{square:O`
      border-radius: 0;
    `,rounded:O`
      border-radius: ${C.radii.sm};
    `,round:O`
      border-radius: ${C.radii.full};
    `}}),"variants2"),Mo=Q.div`
  ${({colors:e,corners:t,isFocused:r})=>O`
    border: 1px solid ${e.primary};

    ${Oo().corners[t]};

    background: ${e.background};
    box-shadow: 0 0 24px ${e.shadow};

    color: ${tr({color:e.background})};

    margin-top: ${r?"0px":"-8px"};

    position: absolute;
    top: calc(100% + 8px);
    left: 0;

    display: grid;
    grid-template-areas:
      'filterOptions calendarOptions'
      'actions actions';

    opacity: ${r?1:0};
    visibility: ${r?"visible":"hidden"};

    transition: all 0.2s;
  `}
`,Po=Q.div`
  ${({colors:e})=>O`
    border-top: 1px solid ${ye(.6,e.primary)};
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    grid-area: actions;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      height: 100%;

      border: none;
      background: inherit;

      color: inherit;

      padding: ${C.space[3]};

      cursor: pointer;

      transition: all 200ms;

      &:hover {
        background: ${ye(.8,e.primary)};
      }

      &:last-child {
        border-bottom-right-radius: 8px;
      }
    }
  `}
`,ue={Container:Q.div`
    ${({colors:e})=>O`
      border-right: 1px solid ${ye(.6,e.primary)};
      border-top-left-radius: inherit;
      background: inherit;

      grid-area: filterOptions;

      display: flex;
      flex-direction: column;
    `}
  `,FilterOption:Q.button`
    ${({colors:e})=>O`
      border: none;
      border-top-left-radius: 0;
      background: transparent;

      color: ${tr({color:e.background})};
      font-size: ${C.fontSizes.sm};
      white-space: nowrap;

      padding: ${C.space[3]};

      gap: 8px;
      flex: 1;
      display: flex;
      align-items: center;

      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        background: ${ye(.8,e.primary)};
      }

      &:first-child {
        border-top-left-radius: inherit;
      }
    `}
  `,FilterOptionArrow:Q.div`
    ${({colors:e})=>O`
      width: 0;
      height: 0;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 9px solid ${e.primary};

      pointer-events: none;

      cursor: pointer;

      transform: rotate(90deg);
    `}
  `,Comparer:Q.div`
    ${({colors:e})=>O`
      border-top: 1px solid ${ye(.6,e.primary)};

      color: ${C.colors.white};
      font-size: 14px;
      font-weight: normal;

      padding: ${C.space[3]};

      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  `,Switcher:Q.div`
    ${({colors:e,isActive:t})=>O`
      width: 32px;
      height: 10px;

      border-radius: 16px;
      background: ${t?ye(.8,e.primary):ye(.8,C.colors.white)};

      margin: 4px 0;

      position: relative;

      display: flex;
      align-items: center;

      cursor: pointer;

      transition: all 400ms;

      input {
        display: none;
      }
    `}
  `,SwitcherBall:Q.div`
    ${({colors:e,isActive:t,staticColor:r})=>O`
      width: 14px;
      height: 14px;

      border-radius: 100%;
      background: ${t?e.primary:C.colors.white};

      position: absolute;
      left: ${t?"22px":"0px"};

      transition: all 400ms;

      ${r&&O`
        background: ${C.colors.white};
      `}
    `}
  `},nt=o((e,t,r)=>({hide:O`
    background: transparent !important;
    border-top: 0 !important;
    border-right: 0 !important;
    border-left: 0 !important;

    ${Pi(r.date)&&O`
      border-right: 1px solid transparent !important;
    `}

    ${e>27&&O`
      border-bottom: 0 !important;
    `}

    color: transparent !important;

    &:hover {
      border-color: transparent;
      background: transparent;

      color: transparent;

      cursor: initial;
    }

    &:after,
    &:before {
      display: none !important;
    }
  `,today:O`
    color: #176bf8;
    font-weight: bold;
  `,selected:O`
    border-color: ${t};
    background: ${t};

    color: #f7f7f7;
    font-weight: bold;

    &:after {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      opacity: 1;
      visibility: visible;
    }
  `,hovered:O`
    border-color: ${t} !important;
    background: ${ye(.8,t)};

    &:after {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      opacity: 1;
      visibility: visible;
    }
  `}),"dayVariations"),ve={Container:Q.div`
    ${({colors:e})=>O`
      border-right: 1px solid ${ye(.8,e.primary)};
      border-top-right-radius: inherit;
      background: inherit;

      grid-area: calendarOptions;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `}
  `,Options:Q.div`
    ${({colors:e})=>O`
      width: 100%;

      border-bottom: 1px solid ${ye(.6,e.primary)};
      border-top-right-radius: 8px;

      padding: ${C.space[2]};

      gap: 16px;
      display: flex;
      flex-direction: column;
    `}
  `,Comparer:Q.div`
    gap: 8px;
    display: flex;
    flex-direction: column;
  `,Inputs:Q.div`
    ${({isComparing:e,color:t})=>O`
      width: 100%;

      gap: 8px;
      display: flex;
      align-items: center;

      input {
        width: 100%;
        height: 40px;

        border-radius: 4px;
        border: none;
        outline: none;
        border: 1px solid
          ${e?ye(.4,t):C.colors.white};
        background: ${e?ye(.4,t):C.colors.white};

        color: ${e?C.colors.white:C.colors.black};

        padding: 0 8px;

        cursor: pointer;

        &::-webkit-calendar-picker-indicator {
          filter: ${e?"invert(1)":"initial"};

          cursor: pointer;
        }

        &:disabled {
          border: 1px solid
            ${e?ye(.8,t):C.colors.white};
          background: ${e?ye(.8,t):C.colors.white};

          cursor: not-allowed;
        }
      }
    `}
  `,InputsComparer:Q.div`
    ${({isComparing:e})=>O`
      height: ${e?"40px":"0px"};
      visibility: ${e?"visible":"hidden"};
      opacity: ${e?1:0};
      transition: ${e?"all 400ms":"all 0s"};
    `}
  `,Selectors:Q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      gap: 8px;
      display: flex;
      align-items: center;

      button {
        width: 34px;
        height: 34px;

        cursor: pointer;

        transition: all 400ms;

        &:hover {
          border: 1px solid ${C.colors.neutral200};
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }

    button {
      height: 100%;

      border-radius: 50%;
      border: 1px solid transparent;
      background: none;

      color: ${C.colors.white};
      text-transform: capitalize;

      gap: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }
  `,Arrow:Q.div`
    ${({colors:e,isSelecting:t})=>O`
      width: 0;
      height: 0;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${t?e.primary:C.colors.white};
      border-radius: 2px;

      pointer-events: none;

      cursor: pointer;

      transform: rotate(0deg);
    `}
  `,Header:Q.div`
    padding: 0 16px 0 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${C.colors.white};
      font-size: 12px;
    }
  `,Days:Q.div`
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
  `,Day:Q.button`
    ${({index:e,day:t,hoverColor:r,isToday:n,isSelected:a,isHovered:i})=>O`
      width: 100%;
      height: 100%;
      max-height: 38px;
      min-height: 38px;

      border: 1px solid #0f0f10;
      background: #1e1f22;

      color: #f7f7f7;
      font-size: 14px;

      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      user-select: none;

      transition: all 400ms;

      & + button {
        border-top: ${e>5?"0px":"1px solid #0F0F10"};
        border-left: ${e===6||e===13||e===20||e===27||e===34?"1px solid #0F0F10":"0px"};
      }

      &:after {
        content: '';

        width: calc(100% + 2px);
        height: 1px;

        background: ${r};

        position: absolute;
        top: -1px;
        left: -1px;

        transition: all 400ms;

        opacity: 0;
        visibility: hidden;
      }

      &:before {
        content: '';

        width: 1px;
        height: calc(100% + 2px);

        background: ${r};

        position: absolute;
        top: -1px;
        left: -1px;

        transition: all 400ms;

        opacity: 0;
        visibility: hidden;
      }

      &:hover {
        border-color: ${r};
        background: ${r};

        color: #f6f7f9;
        font-weight: bold;

        cursor: pointer;

        &:before,
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }

      ${!t.isShow&&nt(e,r,t).hide}
      ${n&&nt(e,r,t).today}
      ${t.isShow&&i&&nt(e,r,t).hovered}
      ${a&&nt(e,r,t).selected}
    `}
  `,Months:Q(Or)`
    ${({colors:e,isSelecting:t})=>O`
      width: 100%;
      height: 100%;
      max-height: 316px;

      padding: 8px;

      overflow-y: scroll;
      scroll-behavior: smooth;

      opacity: ${t?0:1};
      visibility: ${t?"hidden":"visible"};
      display: ${t?"none":"block"};

      > div > div {
        padding: 8px;
      }

      &::-webkit-scrollbar {
        width: 6px;

        background: ${e.background};
      }

      &::-webkit-scrollbar-corner {
        background: rgba(0, 0, 0, 0);
      }

      &::-webkit-scrollbar-track {
        border-radius: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${e.primary};
        border-radius: 7px;
      }
    `}
  `,Month:Q.div`
    ${({monthQuantity:e})=>O`
      & + div {
        margin-top: ${e<6?"0":"24px"};
      }

      > span {
        color: ${C.colors.white};
        font-size: 14px;
        text-transform: capitalize;

        margin-bottom: 6px;

        display: block;
      }
    `}
  `,Years:Q(Or)`
    ${({colors:e,isSelecting:t})=>O`
      width: 100%;
      height: 100%;
      max-height: 316px;

      padding: 8px;

      overflow-y: scroll;
      scroll-behavior: smooth;

      opacity: ${t?1:0};
      visibility: ${t?"visible":"hidden"};
      display: ${t?"block":"none"};

      > div > div {
        padding: 8px;
      }

      &::-webkit-scrollbar {
        width: 6px;

        background: ${e.background};
      }

      &::-webkit-scrollbar-corner {
        background: rgba(0, 0, 0, 0);
      }

      &::-webkit-scrollbar-track {
        border-radius: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${e.primary};
        border-radius: 7px;
      }
    `}
  `,Year:Q.div`
    ${({colors:e})=>O`
      height: 100%;

      border-radius: 8px;
      background: ${ye(.8,e.background)};

      padding: 16px;

      gap: 12px;
      display: flex;
      flex-direction: column;

      div {
        row-gap: 6px;
        column-gap: 16px;
        flex: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        button {
          border-radius: 4px;
          border: 1px solid transparent;
          background: none;

          color: ${C.colors.white};
          text-transform: uppercase;

          transition: all 400ms;

          &:hover {
            background: ${e.primary} !important;

            color: ${C.colors.white} !important;
          }
        }
      }
    `}
  `},$o=o(({colors:e,startDate:t,setStartDate:r,selectedDates:n,isComparing:a,minDate:i=new Date(2e3,1,1),maxDate:s=new Date(2050,1,1),onSelect:u,onPrev:c,onNext:f},g)=>{const w=F.exports.useRef(null),P=F.exports.useRef(null),k=F.exports.useRef(null),v=F.exports.useRef(null),l=F.exports.useRef(null),h=F.exports.useRef(null),[m]=F.exports.useState(le.getMonths(i,pa(s,i))),[p]=F.exports.useState(()=>le.getYears(i,ga(s,i))),[y,I]=F.exports.useState(!1),[M,R]=F.exports.useState(),[E,H]=F.exports.useState(),Y=F.exports.useMemo(()=>["DOM","SEG","TER","QUA","QUI","SEX","SAB"],[]),K=F.exports.useCallback(T=>{R(void 0),H(void 0),n.length===1?(u([n[0],T.date],""),v.current&&(v.current.value=le.format(T.date,"yyyy-MM-dd"))):n.length===2&&a?(u([n[0],n[1],T.date],""),l.current&&(l.current.value=le.format(T.date,"yyyy-MM-dd"))):n.length===3&&a?(u([n[0],n[1],n[2],T.date],""),h.current&&(h.current.value=le.format(T.date,"yyyy-MM-dd"))):(u([T.date],""),k.current&&(k.current.value=le.format(T.date,"yyyy-MM-dd")))},[a,u,n]),ie=F.exports.useCallback(({date:T})=>n.length===0?!1:n.length===1?we(T,n[0]):n.length===2?we(T,n[0])||we(T,n[1]):n.length===3?we(T,n[0])||we(T,n[1])||we(T,n[2]):n.length===4?we(T,n[0])||we(T,n[1])||we(T,n[2])||we(T,n[3]):!1,[n]),Z=F.exports.useCallback(({date:T})=>{if(n.length===0)return!1;if(M&&n.length===1)return je(T,n[0])&&qe(T,M);if(E&&n.length===3){const se=je(T,n[0])&&qe(T,n[1]),pe=je(T,n[2])&&qe(T,E);return se||pe}const N=je(T,n[0])&&qe(T,n[1]),X=je(T,n[2])&&qe(T,n[3]);return N||X},[M,E,n]),oe=F.exports.useCallback((T,N)=>{const X=N.isShow?{onClick:()=>K(N),onMouseEnter:()=>{n.length>0&&n.length<2&&R(N.date),n.length>2&&n.length<4&&H(N.date)}}:{},se=n.length===0||n.length<2||N.date>=n[0]&&N.date<=n[1]?e.primary:e.secondary;return Er($r({key:He(),index:T,day:N,hoverColor:a?se:e.primary},X),{isToday:$i(N.date),isSelected:ie(N),isHovered:Z(N)})},[Z,ie,a,K,n]),ee=F.exports.useCallback(()=>{if(y&&P.current){const T=p.findIndex(({date:N})=>N.getFullYear()===t.getFullYear());P.current.scrollToItem(T,"start")}if(!y&&w.current){const T=m.findIndex(({date:N})=>we(N,t));w.current.scrollToItem(T,"start")}},[y,m,t,p]),te=F.exports.useCallback(()=>{k.current&&(k.current.value=""),v.current&&(v.current.value=""),l.current&&(l.current.value=""),h.current&&(h.current.value=""),I(!1),r(new Date(new Date().getFullYear(),new Date().getMonth(),1))},[r]);return F.exports.useImperativeHandle(g,()=>({localize:ee,clear:te}),[ee,te]),F.exports.useEffect(()=>ee(),[ee]),ne(ve.Container,{colors:e,children:[ne(ve.Options,{colors:e,children:[ne(ve.Comparer,{style:{gap:a?"8px":"0"},children:[ne(ve.Inputs,{isComparing:a,color:e.primary,children:[$("input",{ref:k,type:"date",name:"date",onChange:T=>u([new Date(`${T.target.value}T00:00:00`)],"")}),"-",$("input",{ref:v,type:"date",disabled:n.length===0,onChange:T=>u([n[0],new Date(`${T.target.value}T00:00:00`)],"")})]}),$(ve.InputsComparer,{isComparing:a,children:ne(ve.Inputs,{isComparing:a,color:e.secondary,children:[$("input",{ref:l,type:"date",disabled:n.length<=1,onChange:T=>u([n[0],n[1],new Date(`${T.target.value}T00:00:00`)],"")}),"-",$("input",{ref:h,type:"date",disabled:n.length<=2,onChange:T=>u([n[0],n[1],n[2],new Date(`${T.target.value}T00:00:00`)],"")})]})})]}),ne(ve.Selectors,{children:[ne("button",{type:"button",onClick:()=>I(!y),style:{color:y?e.primary:"#f6f7f9"},children:[le.format(t,"MMMM yyyy"),$(ve.Arrow,{colors:e,isSelecting:y})]}),ne("div",{children:[$("button",{type:"button",onClick:c,children:$(Qi,{size:32,color:"#f6f7f9",style:{marginRight:"3px"}})}),$("button",{type:"button",onClick:f,children:$(Ki,{size:32,color:"#f6f7f9",style:{marginLeft:"3px"}})})]})]}),$(ve.Header,{children:Y.map(T=>$("span",{children:T},He()))})]}),$(ve.Months,{ref:w,colors:e,itemData:m,itemCount:m.length,itemSize:264,height:a?269:316,width:336,isSelecting:y,children:({index:T,style:N})=>{const X=Mi(m[T].date);return ne(ve.Month,{style:N,monthQuantity:X,children:[$("span",{children:m[T].label}),$(ve.Days,{children:m[T].days.map((se,pe)=>$(ve.Day,Er($r({},oe(pe,se)),{type:"button",children:$("span",{children:se.date.getDate()})})))})]},He())}}),$(ve.Years,{ref:P,colors:e,itemData:p,itemCount:p.length,itemSize:164,height:a?269:316,width:336,isSelecting:y,children:({index:T,style:N})=>$("div",{style:N,children:ne(ve.Year,{colors:e,children:[$("strong",{children:p[T].label}),$("div",{children:p[T].months.map(X=>{const se=we(t,X),pe=le.getToday(),Ce={year:pe.getFullYear(),month:pe.getMonth()},D=new Date(Ce.year,Ce.month),x=we(X,D),S={background:se?e.primary:"transparent",color:se?C.colors.white:x?e.primary:C.colors.white,fontWeight:se||x?"bold":"normal"};return $("button",{type:"button",onClick:()=>r(X),style:S,children:le.format(X,"MMM.")},He())})})]})},He())})]})},"CalendarOptions"),Eo=Pe.forwardRef($o),Io=o(({colors:e,isComparing:t,setIsComparing:r,onApply:n,onClearInputs:a})=>{const i=F.exports.useRef(null),[s,u]=F.exports.useState(!0),[c,f]=F.exports.useState(!0);return ne(ue.Container,{colors:e,children:[$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n([le.getToday()],"Hoje"),children:"Hoje"}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n([le.getYesterday()],"Ontem"),children:"Ontem"}),ne("div",{style:{width:"100%",display:"flex"},children:[$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getThisWeek(s),"Esta Semana"),children:"Esta semana"}),ne(ue.FilterOption,{type:"button",colors:e,onClick:()=>u(!s),children:[$("span",{children:s?"(Seg - Hoje)":"(S\xE1b - Hoje)"}),$(ue.FilterOptionArrow,{colors:e})]})]}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getLastSevenDays(),"\xDAltimos 7 dias"),children:"\xDAltimos 7 dias"}),ne("div",{style:{width:"100%",display:"flex"},children:[$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getLastWeek(c),"\xDAltima Semana"),children:"\xDAltima semana"}),ne(ue.FilterOption,{type:"button",colors:e,style:{width:"112px"},onClick:()=>f(!c),children:[$("span",{children:c?"(Seg - S\xE1b)":"(S\xE1b - Dom)"}),$(ue.FilterOptionArrow,{colors:e})]})]}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getLastFourteenDays(),"\xDAltimos 14 dias"),children:"\xDAltimos 14 dias"}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getThisMonth(),"Este M\xEAs"),children:"Este M\xEAs"}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getLastThirtyDays(),"\xDAltimos 30 dias"),children:"\xDAltimos 30 dias"}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n(le.getLastMonth(),"\xDAltimo M\xEAs"),children:"\xDAltimo m\xEAs"}),$(ue.FilterOption,{type:"button",colors:e,onClick:()=>n([],""),children:"Todo o per\xEDodo"}),ne(ue.Comparer,{colors:e,children:[$("span",{children:"Comparar"}),ne(ue.Switcher,{colors:e,isActive:t,onClick:()=>{a(),r(!t)},children:[$(ue.SwitcherBall,{colors:e,isActive:t}),$("input",{ref:i,type:"radio",checked:t,onChange:()=>r(!t)})]})]})]})},"FilterOptions"),Fo=o(({colors:e,corners:t,startDate:r,setStartDate:n,isFocused:a,isComparing:i,setIsComparing:s,minDate:u,maxDate:c,value:f,onApply:g,onClear:w,onSelect:P,onPrev:k,onNext:v,onCancel:l})=>{const h=F.exports.useRef(null),m=F.exports.useCallback(()=>{var p;s(!1),w(),(p=h.current)==null||p.clear()},[w,s]);return ne(Mo,{colors:e,corners:t,isFocused:a,children:[$(Io,{colors:e,isComparing:i,setIsComparing:s,onApply:g,onClearInputs:m}),$(Eo,{ref:h,colors:e,startDate:r,setStartDate:n,selectedDates:f.original,isComparing:i,minDate:u,maxDate:c,onSelect:P,onPrev:k,onNext:v}),ne(Po,{colors:e,children:[$("button",{type:"button",onClick:l,children:"Cancelar"}),$("button",{type:"button",onClick:()=>{var p;return(p=h.current)==null?void 0:p.localize()},children:"Localizar"}),$("button",{type:"button",onClick:m,children:"Limpar"}),$("button",{type:"button",onClick:()=>g(f.original,f.infoLabel),children:"Aplicar"})]})]})},"DateSelector"),Ao={primary:C.colors.primary500,secondary:C.colors.secondary500,background:C.colors.neutral800,shadow:C.colors.black},at={getBorderColor:(e,t)=>t?e.primary:e.background},Ir=o((e,t)=>({corners:{square:O`
      border-radius: 0;
    `,rounded:O`
      border-radius: ${C.radii.sm};
    `,round:O`
      border-radius: ${C.radii.full};
    `},appearance:{standard:O`
      border-bottom: 1px solid ${at.getBorderColor(e,t)};
      background: transparent;
    `,filled:O`
      border-bottom: 1px solid ${at.getBorderColor(e,t)};
      background: ${e.background};
    `,outlined:O`
      border: 1px solid ${at.getBorderColor(e,t)};
      background: transparent;
    `,boxed:O`
      border: 1px solid ${at.getBorderColor(e,t)};
      background: ${e.background};
    `}}),"variants3"),_o=Q.div`
  ${({colors:e,appearance:t,corners:r,isFocused:n})=>O`
    box-sizing: border-box;

    width: fit-content;
    height: 40px;

    ${Ir(e,n).appearance[t]}
    ${Ir(e,n).corners[r]}

    font-size: ${C.fontSizes.md};

    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    transition: all 0.2s;

    &:not(:has(:focus)):hover {
      border-color: ${C.colors.neutral200};
    }

    * {
      box-sizing: border-box;
    }

    input {
      height: 38px;

      outline: 0;

      border: none;
      border-radius: inherit;
      background: inherit;

      color: ${tr({color:e.background})};
      font-size: ${C.fontSizes.sm};

      padding: 0 ${C.space[3]};

      flex: 1;

      cursor: pointer;
    }
  `}
`,Wo=Q.div`
  ${({colors:{primary:e},isFocused:t})=>O`
    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid ${t?e:C.colors.neutral200};

    position: absolute;
    right: ${C.space[3]};

    pointer-events: none;

    cursor: pointer;

    transform: ${t?"rotate(0deg)":"rotate(180deg)"};

    transition: all 200ms;
  `}
`,Ho=o(({colors:e,placeholder:t,appearance:r="boxed",corners:n="rounded",language:a="pt-BR",minDate:i,maxDate:s,onApply:u})=>{const c=F.exports.useRef(null),f=F.exports.useRef(null),[g,w]=F.exports.useState({original:[],formatted:"",infoLabel:""}),[P,k]=F.exports.useState(new Date(new Date().getFullYear(),new Date().getMonth(),1)),[v,l]=F.exports.useState(!1),[h,m]=F.exports.useState(!1),p=Object.assign(Ao,e),y=F.exports.useCallback((E,H)=>{let Y="";if(E.length===0&&(Y="Todo o per\xEDodo"),E.length===1&&(Y=`${E[0].toLocaleDateString(a)}`),E.length===2){const K=E[0].toLocaleDateString(a),ie=E[1].toLocaleDateString(a);Y=`${K} - ${ie}`}if(E.length===3){const K=E[0].toLocaleDateString(a),ie=E[1].toLocaleDateString(a),Z=E[2].toLocaleDateString(a),oe=`${K} - ${ie}`,ee=`${Z}`;Y=`${oe} vs ${ee}`}if(E.length===4){const K=E[0].toLocaleDateString(a),ie=E[1].toLocaleDateString(a),Z=E[2].toLocaleDateString(a),oe=E[3].toLocaleDateString(a),ee=`${K} - ${ie}`,te=`${Z} - ${oe}`;Y=`${ee} vs ${te}`}w({original:E,formatted:Y,infoLabel:H}),f.current&&f.current.setAttribute("value",Y)},[a]),I=o(()=>l(!0),"handleFocus"),M=F.exports.useCallback(()=>{w({original:[],formatted:"",infoLabel:""}),f.current&&f.current.setAttribute("value","")},[]),R=F.exports.useCallback((E,H)=>{u(E),l(!1),y(E,H)},[u,y]);return To(c,()=>l(!1),{enabled:v}),ne(_o,{ref:c,colors:p,appearance:r,corners:n,isFocused:v,children:[$("input",{ref:f,placeholder:t,onFocus:I,readOnly:!0}),$(Wo,{colors:p,isFocused:v}),$(Fo,{colors:p,corners:n,startDate:P,setStartDate:k,isFocused:v,isComparing:h,setIsComparing:m,minDate:i,maxDate:s,onApply:R,onClear:M,onSelect:y,onPrev:()=>k(E=>dt(E,-1)),onNext:()=>k(E=>dt(E,1)),onCancel:()=>l(!1),value:g})]})},"SmartRange"),zo={size:{xxs:O`
      font-size: ${C.fontSizes.xxs};
    `,xs:O`
      font-size: ${C.fontSizes.xs};
    `,sm:O`
      font-size: ${C.fontSizes.sm};
    `,md:O`
      font-size: ${C.fontSizes.md};
    `,lg:O`
      font-size: ${C.fontSizes.lg};
    `,xl:O`
      font-size: ${C.fontSizes.xl};
    `,"2xl":O`
      font-size: ${C.fontSizes["2xl"]};
    `,"4xl":O`
      font-size: ${C.fontSizes["4xl"]};
    `,"5xl":O`
      font-size: ${C.fontSizes["5xl"]};
    `,"6xl":O`
      font-size: ${C.fontSizes["6xl"]};
    `,"7xl":O`
      font-size: ${C.fontSizes["7xl"]};
    `,"8xl":O`
      font-size: ${C.fontSizes["8xl"]};
    `,"9xl":O`
      font-size: ${C.fontSizes["9xl"]};
    `}},Ro=Q.p`
  color: ${C.colors.white};
  font-family: ${C.fonts.default};
  line-height: ${C.lineHeights.base};

  margin: 0;

  ${({size:e})=>zo.size[e]}
`,Bo=o(({size:e="md",children:t})=>$(Ro,{size:e,children:t}),"Text");export{Uo as H,Ho as S,Bo as T};
//# sourceMappingURL=index.6f999625.js.map
