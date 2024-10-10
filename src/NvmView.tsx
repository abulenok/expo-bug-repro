import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NvmViewProps } from './Nvm.types';

const NativeView: React.ComponentType<NvmViewProps> =
  requireNativeViewManager('Nvm');

export default function NvmView(props: NvmViewProps) {
  return <NativeView {...props} />;
}
