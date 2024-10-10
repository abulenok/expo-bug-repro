import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Nvm.web.ts
// and on native platforms to Nvm.ts
import NvmModule from './NvmModule';
import NvmView from './NvmView';
import { ChangeEventPayload, NvmViewProps } from './Nvm.types';

// Get the native constant value.
export const PI = NvmModule.PI;

export function hello(): string {
  return NvmModule.hello();
}

export async function setValueAsync(value: string) {
  return await NvmModule.setValueAsync(value);
}

const emitter = new EventEmitter(NvmModule ?? NativeModulesProxy.Nvm);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NvmView, NvmViewProps, ChangeEventPayload };
