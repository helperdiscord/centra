var Et=Object.create,J=Object.defineProperty,kt=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty,St=Object.getOwnPropertyNames,Rt=Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertySymbols,Ct=Object.prototype.propertyIsEnumerable;var He=(t,e,r)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Te=(t,e)=>{for(var r in e||(e={}))Pe.call(e,r)&&He(t,r,e[r]);if(Ae)for(var r of Ae(e))Ct.call(e,r)&&He(t,r,e[r]);return t},vt=t=>J(t,"__esModule",{value:!0});var $=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Lt=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of St(e))!Pe.call(t,n)&&n!=="default"&&J(t,n,{get:()=>e[n],enumerable:!(r=Rt(e,n))||r.enumerable});return t},X=t=>Lt(vt(J(t!=null?Et(kt(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Ue=$((nr,Ee)=>{"use strict";var De=require("_http_common");De.HTTPParser?Ee.exports=De.HTTPParser:Ee.exports=process.binding("http_parser").HTTPParser});var ke=$((sr,qe)=>{qe.exports={kUrl:Symbol("url"),kWriting:Symbol("writing"),kResuming:Symbol("resuming"),kQueue:Symbol("queue"),kConnect:Symbol("connect"),kIdleTimeout:Symbol("idle timeout"),kIdleTimeoutValue:Symbol("idle timeout value"),kKeepAliveDefaultTimeout:Symbol("default keep alive timeout"),kKeepAliveMaxTimeout:Symbol("max keep alive timeout"),kKeepAliveTimeoutThreshold:Symbol("keep alive timeout threshold"),kKeepAliveTimeoutValue:Symbol("keep alive timeout"),kKeepAlive:Symbol("keep alive"),kHeadersTimeout:Symbol("headers timeout"),kBodyTimeout:Symbol("body timeout"),kTLSServerName:Symbol("server name"),kHost:Symbol("host"),kTLSOpts:Symbol("TLS Options"),kClosed:Symbol("closed"),kNeedDrain:Symbol("need drain"),kReset:Symbol("reset"),kDestroyed:Symbol("destroyed"),kMaxHeadersSize:Symbol("max headers size"),kRunningIdx:Symbol("running index"),kPendingIdx:Symbol("pending index"),kError:Symbol("error"),kClient:Symbol("client"),kParser:Symbol("parser"),kOnDestroyed:Symbol("destroy callbacks"),kPipelining:Symbol("pipelinig"),kSocketPath:Symbol("socket path"),kSocket:Symbol("socket"),kTLSSession:Symbol("tls session cache"),kHostHeader:Symbol("host header"),kAgentOpts:Symbol("agent opts"),kAgentCache:Symbol("agent cache")}});var le=$((ir,Ie)=>{"use strict";var S=class extends Error{constructor(e){super(e);this.name="UndiciError",this.code="UND_ERR"}},Y=class extends S{constructor(e){super(e);Error.captureStackTrace(this,Y),this.name="HeadersTimeoutError",this.message=e||"Headers Timeout Error",this.code="UND_ERR_HEADERS_TIMEOUT"}},Z=class extends S{constructor(e){super(e);Error.captureStackTrace(this,Z),this.name="BodyTimeoutError",this.message=e||"Body Timeout Error",this.code="UND_ERR_BODY_TIMEOUT"}},ee=class extends S{constructor(e){super(e);Error.captureStackTrace(this,ee),this.name="InvalidArgumentError",this.message=e||"Invalid Argument Error",this.code="UND_ERR_INVALID_ARG"}},te=class extends S{constructor(e){super(e);Error.captureStackTrace(this,te),this.name="InvalidReturnValueError",this.message=e||"Invalid Return Value Error",this.code="UND_ERR_INVALID_RETURN_VALUE"}},re=class extends S{constructor(e){super(e);Error.captureStackTrace(this,re),this.name="RequestAbortedError",this.message=e||"Request aborted",this.code="UND_ERR_ABORTED"}},ne=class extends S{constructor(e){super(e);Error.captureStackTrace(this,ne),this.name="InformationalError",this.message=e||"Request information",this.code="UND_ERR_INFO"}},se=class extends S{constructor(e){super(e);Error.captureStackTrace(this,se),this.name="ContentLengthMismatchError",this.message=e||"Request body length does not match content-length header",this.code="UND_ERR_CONTENT_LENGTH_MISMATCH"}},ie=class extends S{constructor(e){super(e);Error.captureStackTrace(this,ie),this.name="TrailerMismatchError",this.message=e||"Trailers does not match trailer header",this.code="UND_ERR_TRAILER_MISMATCH"}},oe=class extends S{constructor(e){super(e);Error.captureStackTrace(this,oe),this.name="ClientDestroyedError",this.message=e||"The client is destroyed",this.code="UND_ERR_DESTROYED"}},ue=class extends S{constructor(e){super(e);Error.captureStackTrace(this,ue),this.name="ClientClosedError",this.message=e||"The client is closed",this.code="UND_ERR_CLOSED"}},ae=class extends S{constructor(e){super(e);Error.captureStackTrace(this,ae),this.name="SocketError",this.message=e||"Socket error",this.code="UND_ERR_SOCKET"}},he=class extends S{constructor(e){super(e);Error.captureStackTrace(this,he),this.name="NotSupportedError",this.message=e||"Not supported error",this.code="UND_ERR_NOT_SUPPORTED"}};Ie.exports={UndiciError:S,HeadersTimeoutError:Y,BodyTimeoutError:Z,ContentLengthMismatchError:se,TrailerMismatchError:ie,InvalidArgumentError:ee,InvalidReturnValueError:te,RequestAbortedError:re,ClientDestroyedError:oe,ClientClosedError:ue,InformationalError:ne,SocketError:ae,NotSupportedError:he}});var Se=$((or,Be)=>{"use strict";var $e=require("assert"),{kDestroyed:Me}=ke(),{IncomingMessage:Ot}=require("http"),xt=require("util"),_t=require("net"),{InvalidArgumentError:K}=le();function Nt(){}function je(t){return!!(t&&typeof t.on=="function")}function ze(t){if(typeof t=="string"&&(t=new URL(t)),!t||typeof t!="object")throw new K("invalid url");if(t.port!=null&&t.port!==""&&!Number.isFinite(parseInt(t.port)))throw new K("invalid port");if(t.hostname!=null&&typeof t.hostname!="string")throw new K("invalid hostname");if(!/https?/.test(t.protocol))throw new K("invalid protocol");if(!(t instanceof URL)){let e=t.port||{"http:":80,"https:":443}[t.protocol];$e(e!=null);let r=t.path||`${t.pathname||"/"}${t.search||""}`;t=new URL(`${t.protocol}//${t.hostname}:${e}${r}`)}return t}function Pt(t){if(t=ze(t),/\/.+/.test(t.pathname)||t.search||t.hash)throw new K("invalid url");return t}function At(t){if(!t)return null;let e=t;if(e.startsWith("[")){let r=e.indexOf("]");e=r===-1?e:e.substr(1,r-1)}else e=e.split(":",1)[0];return _t.isIP(e)&&(e=null),e}function Ht(t){if(t&&typeof t.on=="function"){let e=t._readableState;return e&&e.ended===!0&&Number.isFinite(e.length)?e.length:null}return $e(!t||Number.isFinite(t.byteLength)),t?t.length:0}function Ke(t){return!t||!!(t.destroyed||t[Me])}function Dt(t,e){!je(t)||Ke(t)||(typeof t.destroy=="function"?(e||Object.getPrototypeOf(t).constructor!==Ot)&&t.destroy(e):e&&process.nextTick((r,n)=>{r.emit("error",n)},t,e),t.destroyed!==!0&&(t[Me]=!0))}var Ut=/timeout=(\d+)/;function qt(t){let e=t.match(Ut);return e?parseInt(e[1])*1e3:null}function It(t,e={}){for(let r=0;r<t.length;r+=2){let n=t[r].toLowerCase(),s=e[n];s?(Array.isArray(s)||(s=[s],e[n]=s),s.push(t[r+1])):e[n]=t[r+1]}return e}function Bt(t){return t instanceof Uint8Array||Buffer.isBuffer(t)}function $t(t,e){let r=xt.getSystemErrorName(t),n=new Error(`${e} ${r}`);return n.errno=n,n.code=t,n.syscall=e,n}Be.exports={nop:Nt,parseOrigin:Pt,parseURL:ze,getServerName:At,errnoException:$t,isStream:je,isDestroyed:Ke,parseHeaders:It,parseKeepAliveTimeout:qt,destroy:Dt,bodyLength:Ht,isBuffer:Bt,queueMicrotask:global.queueMicrotask||(t=>Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e},0)))}});var Qe=$((ur,Fe)=>{"use strict";var{InvalidArgumentError:g,NotSupportedError:Mt}=le(),Re=Se(),P=require("assert"),H=Symbol("handler"),jt=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x00a1-\xffff0-9]+-?)*[a-z\x00a1-\xffff0-9]+)(?:\.(?:[a-z\x00a1-\xffff0-9]+-?)*[a-z\x00a1-\xffff0-9]+)*(?:\.(?:[a-z\x00a1-\xffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/ius,Ve=class{constructor({path:e,method:r,body:n,headers:s,idempotent:o,upgrade:u},c){if(typeof e!="string")throw new g("path must be a string");if(e[0]!=="/"&&!jt.test(e))throw new g("path must be an absolute URL or start with a slash");if(typeof r!="string")throw new g("method must be a string");if(u&&typeof u!="string")throw new g("upgrade must be a string");if(this.method=r,n==null)this.body=null;else if(Re.isStream(n))this.body=n;else if(Re.isBuffer(n))this.body=n.length?n:null;else if(typeof n=="string")this.body=n.length?Buffer.from(n):null;else throw new g("body must be a string, a Buffer or a Readable stream");if(this.aborted=!1,this.upgrade=u||r==="CONNECT"||null,this.path=e,this.idempotent=o==null?r==="HEAD"||r==="GET":o,this.host=null,this.contentLength=null,this.headers="",Array.isArray(s)){if(s.length%2!=0)throw new g("headers array must be even");for(let l=0;l<s.length;l+=2)Ge(this,s[l+0],s[l+1])}else if(s&&typeof s=="object")for(let[l,a]of Object.entries(s))Ge(this,l,a);else if(s!=null)throw new g("headers must be an object or an array");if(typeof c.onConnect!="function")throw new g("invalid onConnect method");if(typeof c.onError!="function")throw new g("invalid onError method");if(this.upgrade){if(typeof c.onUpgrade!="function")throw new g("invalid onUpgrade method")}else{if(typeof c.onHeaders!="function")throw new g("invalid onHeaders method");if(typeof c.onData!="function")throw new g("invalid onData method");if(typeof c.onComplete!="function")throw new g("invalid onComplete method")}this[H]=c}onConnect(e){return P(!this.aborted),this[H].onConnect(e)}onHeaders(e,r,n){return P(!this.aborted),this[H].onHeaders(e,r,n)}onData(e){return P(!this.aborted),P(!this.upgrade),this[H].onData(e)}onUpgrade(e,r,n){return P(!this.aborted),P(this.upgrade),this[H].onUpgrade(e,r,n)}onComplete(e){return P(!this.aborted),P(!this.upgrade),this[H].onComplete(e)}onError(e){this.aborted||(this.aborted=!0,Re.queueMicrotask(()=>this[H].onError(e)))}};function Ge(t,e,r){if(r&&typeof r=="object")throw new g(`invalid ${e} header`);if(r===void 0)return;if(t.host===null&&e.length===4&&e.toLowerCase()==="host")t.host=r,t.headers+=`${e}: ${r}\r
`;else if(t.contentLength===null&&e.length===14&&e.toLowerCase()==="content-length"){if(t.contentLength=parseInt(r),!Number.isFinite(t.contentLength))throw new g("invalid content-length header")}else{if(e.length===17&&e.toLowerCase()==="transfer-encoding")throw new g("invalid transfer-encoding header");if(e.length===10&&e.toLowerCase()==="connection")throw new g("invalid connection header");if(e.length===10&&e.toLowerCase()==="keep-alive")throw new g("invalid keep-alive header");if(e.length===7&&e.toLowerCase()==="upgrade")throw new g("invalid upgrade header");if(e.length===6&&e.toLowerCase()==="expect")throw new Mt("expect header not supported");t.headers+=`${e}: ${r}\r
`}}Fe.exports=Ve});var gt=$((ar,We)=>{"use strict";var Je=require("net"),Xe=require("tls"),T=Ue(),zt=require("events"),f=require("assert"),h=Se(),Kt=Qe(),{ContentLengthMismatchError:Ce,TrailerMismatchError:Ye,InvalidArgumentError:E,RequestAbortedError:Ze,HeadersTimeoutError:Ft,ClientDestroyedError:ve,ClientClosedError:Vt,SocketError:ce,InformationalError:M,BodyTimeoutError:Gt}=le(),{kUrl:N,kReset:O,kHost:de,kClient:j,kParser:fe,kConnect:Qt,kResuming:D,kWriting:U,kQueue:y,kNeedDrain:F,kTLSServerName:pe,kKeepAliveDefaultTimeout:Le,kHostHeader:et,kTLSOpts:me,kClosed:z,kDestroyed:A,kPendingIdx:R,kRunningIdx:b,kError:ge,kOnDestroyed:q,kPipelining:I,kSocket:m,kSocketPath:V,kKeepAliveTimeoutValue:ye,kMaxHeadersSize:Oe,kKeepAliveMaxTimeout:tt,kKeepAliveTimeoutThreshold:rt,kTLSSession:G,kIdleTimeout:Q,kIdleTimeoutValue:be,kHeadersTimeout:W,kBodyTimeout:xe}=ke(),nt=process.version.split("."),we=parseInt(nt[0].slice(1)),st=parseInt(nt[1]),Wt=process.execArgv.includes("--insecure-http-parser");function it(t,e){return h.getServerName(e)||t[me]&&t[me].servername||h.getServerName(t[N].host||t[N].hostname)||null}var ot=class extends zt{constructor(e,{maxHeaderSize:r,headersTimeout:n,socketTimeout:s,requestTimeout:o,bodyTimeout:u,idleTimeout:c,keepAlive:l,keepAliveTimeout:a,maxKeepAliveTimeout:i,keepAliveMaxTimeout:d,keepAliveTimeoutThreshold:p,socketPath:k,pipelining:L,tls:_}={}){super();if(l!==void 0)throw new E("unsupported keepAlive, use pipelining=0 instead");if(s!==void 0)throw new E("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");if(o!==void 0)throw new E("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");if(c!==void 0)throw new E("unsupported idleTimeout, use keepAliveTimeout instead");if(i!==void 0)throw new E("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");if(r!=null&&!Number.isFinite(r))throw new E("invalid maxHeaderSize");if(k!=null&&typeof k!="string")throw new E("invalid socketPath");if(a!=null&&(!Number.isFinite(a)||a<=0))throw new E("invalid keepAliveTimeout");if(d!=null&&(!Number.isFinite(d)||d<=0))throw new E("invalid keepAliveMaxTimeout");if(p!=null&&!Number.isFinite(p))throw new E("invalid keepAliveTimeoutThreshold");if(n!=null&&(!Number.isInteger(n)||n<0))throw new E("headersTimeout must be a positive integer or zero");if(u!=null&&(!Number.isInteger(u)||u<0))throw new E("bodyTimeout must be a positive integer or zero");this[m]=null,this[I]=L!=null?L:1,this[Oe]=r||16384,this[N]=h.parseOrigin(e),this[V]=k,this[Le]=a==null?4e3:a,this[tt]=d==null?6e5:d,this[rt]=p==null?1e3:p,this[ye]=this[Le],this[z]=!1,this[A]=!1,this[me]=_,this[pe]=it(this),this[de]=null,this[q]=[],this[D]=0,this[F]=0,this[G]=null,this[et]=`host: ${this[N].hostname}${this[N].port?`:${this[N].port}`:""}\r
`,this[xe]=u!=null?u:3e4,this[W]=n!=null?n:3e4,this[y]=[],this[b]=0,this[R]=0}get url(){return this[N]}get pipelining(){return this[I]}set pipelining(e){this[I]=e,x(this,!0)}get connected(){return this[m]&&this[m].connecting!==!0&&(this[m].authorized!==!1||this[m].authorizationError)&&!this[m].destroyed}get pending(){return this[y].length-this[R]}get running(){return this[R]-this[b]}get size(){return this[y].length-this[b]}get busy(){let e=this[m];return e&&(e[O]||e[U])||this.size>=(this[I]||1)||this.pending>0}get destroyed(){return this[A]}get closed(){return this[z]}[Qt](e){ut(this),this.once("connect",e)}dispatch(e,r){try{let n=new Kt(e,r);if(this[A])throw new ve;if(this[z])throw new Vt;this[y].push(n),this[D]||(h.isStream(n.body)?(this[D]=1,process.nextTick(x,this)):x(this,!0))}catch(n){if(typeof r.onError!="function")throw new E("invalid onError method");r.onError(n)}}close(e){if(e===void 0)return new Promise((r,n)=>{this.close((s,o)=>s?n(s):r(o))});if(typeof e!="function")throw new E("invalid callback");if(this[A]){process.nextTick(e,new ve,null);return}this[z]=!0,this.size?this[q].push(e):this.destroy(e)}destroy(e,r){if(typeof e=="function"&&(r=e,e=null),r===void 0)return new Promise((s,o)=>{this.destroy(e,(u,c)=>u?o(u):s(c))});if(typeof r!="function")throw new E("invalid callback");if(this[A]){this[q]?this[q].push(r):process.nextTick(r,null,null);return}e||(e=new ve);for(let s of this[y].splice(this[R]))s.onError(e);this[z]=!0,this[A]=!0,this[q].push(r);let n=()=>{let s=this[q];this[q]=null;for(let o of s)o(null,null)};this[m]?h.destroy(this[m].on("close",n),e):process.nextTick(n),x(this)}},at=class extends T{constructor(e,r){if(we===12&&st<19){super();this.initialize(T.RESPONSE,{},0)}else if(we===12&&st>=19){super();this.initialize(T.RESPONSE,{},e[Oe],0)}else if(we>12){super();this.initialize(T.RESPONSE,{},e[Oe],Wt,0)}else super(T.RESPONSE,!1);this.client=e,this.socket=r,this.timeout=null,this.statusCode=null,this.upgrade=!1,this.headers=null,this.shouldKeepAlive=!1,this.request=null,this.paused=!1,this.resuming=!1,this.queue=[],this._resume=()=>{if(!(!this.paused||this.resuming)){for(this.paused=!1,this.resuming=!0;this.queue.length;){let[n,...s]=this.queue.shift();if(Reflect.apply(n,this,s),this.paused){this.resuming=!1;return}}this.resuming=!1,Yt(this.socket)}},this._pause=()=>{this.paused||(this.paused=!0,Xt(this.socket))}}[T.kOnHeaders](e){if(this.paused){this.queue.push([this[T.kOnHeaders],e]);return}this.headers?Array.prototype.push.apply(this.headers,e):this.headers=e}[T.kOnExecute](e){if(this.paused){this.queue.push([this[T.kOnExecute],e]);return}let{upgrade:r,socket:n}=this;if(!Number.isFinite(e)){f(e instanceof Error),h.destroy(n,e);return}if(r&&!n.destroyed){let{client:s,headers:o,statusCode:u,request:c}=this;f(!n.destroyed),f(n===s[m]),f(!n.isPaused()),f(n._handle&&n._handle.reading),f(c.upgrade),this.headers=null,this.statusCode=null,this.request=null,n._readableState.flowing=null,n.unshift(this.getCurrentBuffer().slice(e));try{c.onUpgrade(u,o,n),!n.destroyed&&!c.aborted&&(lt(n),s[m]=null,s[y][s[b]++]=null,s.emit("disconnect",new M("upgrade"))),x(s)}catch(l){h.destroy(n,l)}}}[T.kOnHeadersComplete](e,r,n,s,o,u,c,l,a){if(this.paused){this.queue.push([this[T.kOnHeadersComplete],e,r,n,s,o,u,c,l,a]);return}let{client:i,socket:d}=this,p=i[y][i[b]];if(d.destroyed)return;if(clearTimeout(this.timeout),this.timeout=i[xe]?setTimeout(Jt,i[xe],this):null,f(!this.upgrade),f(this.statusCode<200),u===100)return h.destroy(d,new ce("bad response")),1;if(p.upgrade!==!0&&l!==Boolean(p.upgrade))return h.destroy(d,new ce("bad upgrade")),1;if(this.headers?Array.prototype.push.apply(this.headers,n):this.headers=n,this.statusCode=u,this.shouldKeepAlive=a,this.request=p,p.upgrade)return this.unconsume(),this.upgrade=!0,2;let k,L,{headers:_}=this;this.headers=null;for(let C=0;C<_.length;C+=2){let w=_[C+0],v=_[C+1];!k&&w.length===10&&w.toLowerCase()==="keep-alive"?k=v:!L&&w.length===7&&w.toLowerCase()==="trailer"&&(L=v)}if(this.trailers=L?L.toLowerCase().split(/,\s*/):null,a&&i[I]){let C=k?h.parseKeepAliveTimeout(k):null;if(C!=null){let w=Math.min(C-i[rt],i[tt]);w<=0?d[O]=!0:i[ye]=w}else i[ye]=i[Le]}else d[O]=!0;try{p.onHeaders(u,_,this._resume)===!1&&this._pause()}catch(C){return h.destroy(d,C),1}return p.method==="HEAD"||u<200?1:0}[T.kOnBody](e,r,n){if(this.paused){this.queue.push([this[T.kOnBody],e,r,n]);return}let{socket:s,statusCode:o,request:u,timeout:c}=this;if(!s.destroyed){c&&c.refresh&&c.refresh(),f(o>=200);try{u.onData(e.slice(r,r+n))===!1&&this._pause()}catch(l){h.destroy(s,l)}}}[T.kOnMessageComplete](){if(this.paused){this.queue.push([this[T.kOnMessageComplete]]);return}let{client:e,socket:r,statusCode:n,headers:s,upgrade:o,request:u,trailers:c}=this;if(!r.destroyed){if(f(n>=100),f(this.resuming||r._handle&&r._handle.reading),o){f(n<300||u.method==="CONNECT");return}if(this.statusCode=null,this.headers=null,this.request=null,this.trailers=null,clearTimeout(this.timeout),this.timeout=e[W]?setTimeout(ht,e[W],this):null,!(n<200)){try{if(c){if(!s)throw new Ye;for(let l of c){let a=!1;for(let i=0;i<s.length;i+=2){let d=s[i+0];if(d.length===l.length&&d.toLowerCase()===l.toLowerCase()){a=!0;break}}if(!a)throw new Ye}}try{u.onComplete(s)}catch(l){u.onError(l)}}catch(l){h.destroy(r,l);return}e[y][e[b]++]=null,r[U]?h.destroy(r,new M("reset")):this.shouldKeepAlive?r[O]&&!e.running?h.destroy(r,new M("reset")):x(e):h.destroy(r,new M("reset"))}}}destroy(){clearTimeout(this.timeout),this.timeout=null,this.unconsume(),setImmediate(e=>e.close(),this)}};function Jt(t){t.paused||h.destroy(t.socket,new Gt)}function ht(t){h.destroy(t.socket,new Ft)}function Zt(){let{[j]:t}=this;t.emit("connect"),x(t)}function ct(t){let{[j]:e}=this;if(this[ge]=t,t.code==="ERR_TLS_CERT_ALTNAME_INVALID")for(f(!e.running);e.pending&&e[y][e[R]].host===e[de];)e[y][e[R]++].onError(t);else if(!e.running&&t.code!=="UND_ERR_INFO"&&t.code!=="UND_ERR_SOCKET"){f(e[R]===e[b]);for(let r of e[y].splice(e[b]))r.onError(t)}}function dt(){h.destroy(this,new ce("other side closed"))}function lt(t){clearTimeout(t[Q]),t[Q]=null,t[be]=null,t[fe].destroy(),t[fe]=null,t[j]=null,t[ge]=null,t.removeListener("session",pt).removeListener("error",ct).removeListener("end",dt).removeListener("close",ft)}function ft(){let{[j]:t}=this,e=this[ge]||new ce("closed");if(lt(this),t[m]=null,e.code!=="UND_ERR_INFO"&&(t[G]=null),t[A]){f(!t.pending);for(let r of t[y].splice(t[b]))r.onError(e);t[R]=t[b]}else t.running&&e.code!=="UND_ERR_INFO"&&(t[y][t[b]].onError(e),t[y][t[b]++]=null),t[R]=t[b],t.emit("disconnect",e);x(t)}function pt(t){let{[j]:e}=this;e[G]=t}function ut(t){f(!t[m]);let{protocol:e,port:r,hostname:n}=t[N],s;if(e==="https:"){let u=Te(Te({},t[me]),{servername:t[pe],session:t[G]});s=t[V]?Xe.connect(t[V],u):Xe.connect(r||443,n,u),s.on("session",pt)}else s=t[V]?Je.connect(t[V]):Je.connect(r||80,n);t[m]=s;let o=new at(t,s);we>=12?(f(s._handle),o.consume(s._handle)):(f(s._handle&&s._handle._externalStream),o.consume(s._handle._externalStream)),s[Q]=null,s[be]=null,s[U]=!1,s[O]=!1,s[ge]=null,s[fe]=o,s[j]=t,s.setNoDelay(!0).on(e==="https:"?"secureConnect":"connect",Zt).on("error",ct).on("end",dt).on("close",ft)}function Xt(t){if(t._handle&&t._handle.reading){t._handle.reading=!1;let e=t._handle.readStop();e&&t.destroy(h.errnoException(e,"read"))}}function Yt(t){if(t._handle&&!t._handle.reading){t._handle.reading=!0;let e=t._handle.readStart();e&&t.destroy(h.errnoException(e,"read"))}}function mt(t){t[F]=0,t.emit("drain")}function x(t,e){t[D]!==2&&(t[D]=2,er(t,e),t[D]=0,t[b]>256&&(t[y].splice(0,t[b]),t[R]-=t[b],t[b]=0))}function er(t,e){for(;;){if(t[A]){f(!t.pending);return}if(t[z]&&!t.size){t.destroy(h.nop);continue}if(t[m]){let s=t[m],o=t.running?0:t[ye];s[be]!==o&&(clearTimeout(s[Q]),o&&(s[Q]=setTimeout(u=>{h.destroy(u,new M("socket idle timeout"))},o,s)),s[be]=o)}if(t.running){let{aborted:s}=t[y][t[b]];if(s){h.destroy(t[m]);return}}if(t.busy)t[F]=2;else if(t[F]===2){e?(t[F]=1,process.nextTick(mt,t)):mt(t);continue}if(!t.pending||t.running>=(t[I]||1))return;let r=t[m],n=t[y][t[R]];if(t[N].protocol==="https:"&&t[de]!==n.host){if(t.running)return;t[de]=n.host;let s=it(t,n.host);if(t[pe]!==s&&(t[pe]=s,t[G]=null,r)){h.destroy(r,new M("servername changed"));return}}if(!r){ut(t);return}if(!t.connected||r[U]||r[O]||t.running&&!n.idempotent||t.running&&n.upgrade||(h.isStream(n.body)&&h.bodyLength(n.body)===0&&(n.body.on("data",function(){f(!1)}).on("error",function(s){n.onError(s)}).on("end",function(){h.destroy(this)}),n.body=null),t.running&&h.isStream(n.body)))return;if(!n.aborted&&tr(t,n)){let s=t[m][fe];!s.timeout&&t[W]&&(s.timeout=setTimeout(ht,t[W],s)),t[R]++}else t[y].splice(t[R],1)}}function tr(t,e){let{body:r,method:n,path:s,host:o,upgrade:u,headers:c}=e,l=n==="PUT"||n==="POST"||n==="PATCH";r&&typeof r.read=="function"&&r.read(0);let a=h.bodyLength(r);if(a===null&&(a=e.contentLength),a===0&&!l&&(a=null),e.contentLength!==null&&e.contentLength!==a)return e.onError(new Ce),!1;if(e.aborted)return!1;try{e.onConnect(p=>{e.aborted||(e.onError(p||new Ze),t[D]===0&&x(t,!0))})}catch(p){e.onError(p)}if(e.aborted)return!1;let i=t[m];n==="HEAD"&&(i[O]=!0),u&&(i[O]=!0);let d;if(typeof u=="string"?d=`${n} ${s} HTTP/1.1\r
connection: upgrade\r
upgrade: ${u}\r
`:t[I]?d=`${n} ${s} HTTP/1.1\r
connection: keep-alive\r
`:d=`${n} ${s} HTTP/1.1\r
connection: close\r
`,o||(d+=t[et]),c&&(d+=c),!r)a===0?i.write(`${d}content-length: ${a}\r
\r
\r
`,"ascii"):(f(a===null,"no body must not have content length"),i.write(`${d}\r
`,"ascii"));else if(h.isBuffer(r))f(a!==null,"buffer body must have content length"),i.cork(),i.write(`${d}content-length: ${a}\r
\r
`,"ascii"),i.write(r),i.write(`\r
`,"ascii"),i.uncork(),l||(i[O]=!0);else{i[U]=!0,f(h.isStream(r)),f(a!==0||!t.running,"stream body cannot be pipelined");let p=!1,k=0,L=function(v){try{f(!p);let B=Buffer.byteLength(v);if(!B)return;if(a!==null&&k+B>a){h.destroy(i,new Ce);return}k===0&&(l||(i[O]=!0),a===null?i.write(`${d}transfer-encoding: chunked\r
`,"ascii"):i.write(`${d}content-length: ${a}\r
\r
`,"ascii")),a===null&&i.write(`\r
${B.toString(16)}\r
`,"ascii"),k+=B,!i.write(v)&&this.pause&&this.pause()}catch(B){h.destroy(this,B)}},_=function(){f(!p),r.resume&&r.resume()},C=function(){w(new Ze)},w=function(v){p||(p=!0,f(i.destroyed||i[U]&&t.running<=1),i[U]=!1,!v&&a!==null&&k!==a&&(v=new Ce),i.removeListener("drain",_).removeListener("error",w),r.removeListener("data",L).removeListener("end",w).removeListener("error",w).removeListener("close",C),h.destroy(r,v),v&&(f(t.running<=1,"pipeline should only contain this request"),h.destroy(i,v)),!i.destroyed&&(k===0?l?i.write(`${d}content-length: 0\r
\r
\r
`,"ascii"):i.write(`${d}\r
`,"ascii"):a===null&&i.write(`\r
0\r
\r
`,"ascii"),x(t)))};r.on("data",L).on("end",w).on("error",w).on("close",C),i.on("drain",_).on("error",w)}return!0}We.exports=ot});var yt=X(gt());var _e=class{constructor(){this.headers={};this.statusCode=null}_addBody(e){let r=this.headers["content-length"];this.body=Buffer.concat(e,r?Number(r):void 0)}_parseHeaders(e){for(let r=1;r<e.length;r+=2){let n=e[r-1].toLowerCase(),s=this.headers[n];s?(Array.isArray(s)||(s=[s],this.headers[n]=s),s.push(e[r])):this.headers[n]=e[r]}}json(e="utf8"){return JSON.parse(this.body.toString(e))}text(e="utf8"){return this.body.toString(e)}};var bt=X(require("url")),wt=X(require("path")),Tt=X(require("querystring")),Ne=class{constructor(e,r="GET"){this.coreOptions={};this.httpMethod="GET";this.reqHeaders={};this.timeoutOptions={};if(this.url=typeof e=="string"?new bt.URL(e):e,this.httpMethod=r,!["http:","https:"].includes(this.url.protocol))throw new Error(`Bad URL protocol: ${this.url.protocol}`)}client(e,r){return this.kClient=e,r&&(this.keepClient=!0),this}query(e,r){if(typeof e=="object"){let n=Object.keys(e);for(let s=0;s<n.length;++s){let o=n[s];this.url.searchParams.append(o,e[o])}}else this.url.searchParams.append(e,r);return this}path(e){return this.url.pathname=(0,wt.join)(this.url.pathname,e),this}signal(e){return this.controller=e,this}body(e,r){switch(r){case"json":{this.data=JSON.stringify(e),this.header({"content-type":"application/json","content-length":Buffer.byteLength(this.data).toString()});break}case"form":{this.data=(0,Tt.stringify)(e),this.header({"content-type":"application/x-www-form-urlencoded","content-length":Buffer.byteLength(this.data).toString()});break}case"stream":{this.data=e;break}default:{typeof e=="object"&&!Buffer.isBuffer(e)?(this.data=JSON.stringify(e),this.header({"content-type":"application/json","content-length":Buffer.byteLength(this.data).toString()})):(this.data=e,this.header("content-length",Buffer.byteLength(this.data).toString()));break}}return this}header(e,r){if(typeof e=="object"){let n=Object.keys(e);for(let s=0;s<n.length;++s){let o=n[s];this.reqHeaders[o.toLowerCase()]=e[o]}}else this.reqHeaders[e.toLowerCase()]=r;return this}method(e){return this.httpMethod=e,this}timeout(e,r){return typeof e=="string"?this.timeoutOptions[e]=r:this.timeoutOptions.bodyTimeout=e,this}option(e,r){return typeof e=="object"?Object.assign(this.coreOptions,e):this.coreOptions[e]=r,this}async json(){return(await this.send()).json()}async raw(){return(await this.send()).body}async text(){return(await this.send()).text()}send(){return new Promise((e,r)=>{var c;let n={path:this.url.pathname+this.url.search,method:this.httpMethod,headers:this.reqHeaders,body:this.data,signal:this.controller},s=(c=this.kClient)!=null?c:new yt.default(this.url.origin,this.coreOptions),o=new _e,u=[];s.dispatch(n,{onData:l=>u.push(l),onError:l=>r(l),onComplete:()=>{this.keepClient||s.close(),o._addBody(u),e(o)},onConnect:()=>null,onHeaders:(l,a,i)=>{o.statusCode=l,o._parseHeaders(a),i()}})})}};module.exports=function(e,r="GET"){return new Ne(e,r)};