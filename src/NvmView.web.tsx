import * as React from 'react';

import { NvmViewProps } from './Nvm.types';

export default function NvmView(props: NvmViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
