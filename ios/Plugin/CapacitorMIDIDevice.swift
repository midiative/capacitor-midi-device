import Foundation

@objc public class CapacitorMIDIDevice: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
