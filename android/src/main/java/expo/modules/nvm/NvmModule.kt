package expo.modules.nvm

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.facebook.react.bridge.ReadableMap
import expo.modules.kotlin.Promise

class NvmModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("Nvm")

    AsyncFunction("hello") { params: ReadableMap, promise: Promise ->
      promise.resolve(params.toString())
    }
  }
}
