function callFunAgain() {
  console.log("Script loaded successfully ");
  Java.perform(function () { 
  
      var XMPPUtil = Java.use("com.kankunit.smartknorns.commonutil.XMPPUtil")
      XMPPUtil.sendMessage.overload('java.lang.String', 'java.lang.String').implementation = function (arg1, arg2) {
        console.log("[*] sendMessage() got called!");
        console.log("===========================================================");
        console.log("arg1:" + arg1);
        console.log("arg2:" + arg2);
        console.log("RESULT:" + this.sendMessage(arg1, arg2));
        console.log("===========================================================");
        retval = this.sendMessage(arg1, arg2);
        return retval;
      };
  });
}

rpc.exports = {
    callsecretfunction: callFunAgain 
};
