Here is a function in `ios/NvmModule.swift`:
```swift
AsyncFunction("hello") { (_ params: [String: Any], promise: Promise) in
      print(params)
      promise.resolve(
        (params.flatMap({ (key, value) -> String in
          return "\(key)=\(value)"
        }) as Array).joined(separator: ";")
      )
    }.runOnQueue(.main)
```

When calling it from js with the following object, the swift code receives "boo" value wrapped in `Optional`. 
```javascript
NvmModule.hello({"foo":"boo"});
```

In the bare react native module "boo" value is passed without Optional. 
On Android this works properly.
