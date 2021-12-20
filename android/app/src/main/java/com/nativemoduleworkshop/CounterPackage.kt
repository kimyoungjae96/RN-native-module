package com.nativemoduleworkshop

import com.facebook.react.uimanager.ViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.NativeModule
import java.util.*

class CounterPackage:ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext):MutableList<NativeModule> {
        return Collections.emptyList()
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<*, *>> {
        val viewMangers = ArrayList<ViewManager<*,*>>()
        viewMangers.add(CounterManager())
        return viewMangers
    }
}