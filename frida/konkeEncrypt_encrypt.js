function callFunAgain() {
  console.log("Script loaded successfully ");
  Java.perform(function () { 
      
      var KonkeEncrypt = Java.use("com.ikonke.util.KonkeEncrypt")
      KonkeEncrypt.encryptCmdString.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'int').implementation = function (arg1, arg2, arg3, arg4, arg5) {
        console.log("[*] encryptCmdString() got called!");
        console.log("===========================================================");
        console.log("arg1:" + arg1);
        console.log("arg2:" + arg2);
        console.log("arg2:" + arg3);
        console.log("arg2:" + arg4);
        console.log("arg2:" + arg5);
        console.log("RESULT:" + this.encryptCmdString(arg1, arg2, arg3, arg4, arg5));
        console.log("===========================================================");
        retval = this.encryptCmdString(arg1, arg2, arg3, arg4, arg5);
        return retval;
      };
  });
}

rpc.exports = {
    callsecretfunction: callFunAgain 
};
