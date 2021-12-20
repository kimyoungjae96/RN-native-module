package com.nativemoduleworkshop

import android.view.LayoutInflater
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.nativemoduleworkshop.databinding.CounterViewBinding

class CounterView(val context: ReactContext): FrameLayout(context) {
    private val binding: CounterViewBinding

   fun setLeftButtonText(text: String){
       binding.button3.text = text
   }

    fun setRightButtonText(text: String){
        binding.button4.text = text
    }

    fun setValue(value: Int){
        binding.textView.text = value.toString()
    }

    fun setupEvents() {
        val eventEmitter = context.getJSModule(RCTEventEmitter::class.java)
        binding.button3.setOnClickListener {
            eventEmitter.receiveEvent(id, "pressLeftButton",null)
        }
        binding.button4.setOnClickListener {
            eventEmitter.receiveEvent(id,"pressRightButton",null)
        }
    }

    init {
        val inflater = LayoutInflater.from(context)
        binding = CounterViewBinding.inflate(inflater, this, true)
        this.setupEvents()
    }
}