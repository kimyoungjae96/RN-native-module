#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(BrightnessModule, NSObject)
  RCT_EXTERN_METHOD(
      getBrightness: (RCTPromiseResolveBlock)resolve
      rejecter: (RCTPromiseRejectBlock)reject
  )
  RCT_EXTERN_METHOD(setBrightness: (CGFloat)brightness)
@end
