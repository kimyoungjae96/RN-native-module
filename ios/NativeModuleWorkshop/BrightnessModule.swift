//
//  BrightnessModule.swift
//  NativeModuleWorkshop
//
//  Created by crerar on 2021/12/20.
//

import Foundation
import UIKit

@objc(BrightnessModule)
class BrightnessModule: NSObject {
  @objc
  func getBrightness(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    resolve(UIScreen.main.brightness)
  }
  
  @objc
  func setBrightness(_ brightness : CGFloat) {
    print("Setting brightness to \(brightness)")
    DispatchQueue.main.async {
      UIScreen.main.brightness = brightness
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "STRING_VALUE": "Hello World",
      "NUmber_VALUE": 15
    ]
  }
}
