import type {PluginListenerHandle} from "@capacitor/core";

export interface MidiMessage {
  type: string;
  note: number;
  velocity: number;
}

export interface DeviceOptions {
  deviceNumber: number
}

export interface CapacitorMIDIDevicePlugin {
  listMIDIDevices(): Promise<{ value: string[] }>

  openDevice(options: DeviceOptions): Promise<void>

  initConnectionListener(): Promise<void>

  addListener(eventName: 'MIDI_MSG_EVENT', listenerFunc: (message: MidiMessage) => void): Promise<PluginListenerHandle>;

  addListener(eventName: 'MIDI_CON_EVENT', listenerFunc: (devices: { value: string[] }) => void): Promise<PluginListenerHandle>;
}
