function callFunAgain() {
  console.log("Script loaded successfully ");
  Java.perform(function () { 

      var XMPPUtil = Java.use("com.kankunit.smartknorns.commonutil.XMPPUtil")
      XMPPUtil.sendEncodeMessage.overload('java.lang.String', 'java.lang.String', 'android.content.Context', 'android.os.Handler', 'java.lang.String', 'com.kankunit.smartknorns.database.model.DeviceModel', 'java.lang.String', 'com.kankunit.smartknorns.commonutil.mina.MinaHandler').implementation = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8 ) {
        console.log("[*] sendEncodeMessage() got called!");
        console.log("===========================================================");
        console.log("arg1:" + arg1);
        console.log("arg2:" + arg2);
        console.log("arg3:" + arg3);
        console.log("arg4:" + arg4);
        console.log("arg5:" + arg5);
        console.log("arg6:" + arg6);
        console.log("arg7:" + arg7);
        console.log("arg8:" + arg8);
        console.log("RESULT:" + this.sendEncodeMessage(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8));
        console.log("===========================================================");
        retval = this.sendEncodeMessage(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
        return retval;
      };
  });
}

rpc.exports = {
    callsecretfunction: callFunAgain 
};
