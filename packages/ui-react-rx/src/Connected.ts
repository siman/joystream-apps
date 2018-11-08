// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { withObservableDiv } from './with/index';

const Component: React.ComponentType<any> = withObservableDiv('isConnected')(
  (value: boolean = false): string => {
    return value
      ? 'connected'
      : 'disconnected';
  },
  { className: 'rx--Connected' }
);

export default Component;