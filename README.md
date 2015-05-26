# SimpleMafCordovaPlugin

Simple plugin that returns your string prefixed with hello. This plugin is especially developed for use in Oracle MAF (Mobile Application Framework) application.

Greeting a user with "Hello, world" is something that could be done in JavaScript. This plugin provides a simple example demonstrating how Cordova plugins work.

## Using

Clone the plugin

    $ git clone https://github.com/paulcoiffier/SimpleMafCordovaPlugin.git

Edit `maf-plugins.xml` and add the following code

```java
<cordova-plugin id="c2" pluginId="com.talium.hello" path="../../src/TaliumCordovaPlugin/">
     <platform id="p1" name="android" enabled="true"/>
    <platform id="p2" name="ios" enabled="true"/>
</cordova-plugin>
```   

For example, you can add this code on an amx page to run the plugin.
```js
<amx:verbatim id="v1">
      <![CDATA[
        <script type="text/javascript">
        
        var success = function(message) {
            alert(message);
        }

        var failure = function() {
            alert("Error calling Hello Plugin");
        }
    
        hello.myAction("World", success, failure);

        </script>
      ]]>
    </amx:verbatim>
```
test
