import ExpoModulesCore

public class NvmModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Nvm")

    AsyncFunction("hello") { (_ params: [String: Any], promise: Promise) in
      print(params)
      promise.resolve(
        (params.flatMap({ (key, value) -> String in
          return "\(key)=\(value)"
        }) as Array).joined(separator: ";")
      )
    }.runOnQueue(.main)
  }
}
