// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { withObservable } from './with/index';
import Elapsed from './Elapsed';

const Component: React.ComponentType<any> = withObservable('blockNow', { propName: 'value' })(
  Elapsed,
  { className: 'rx--TimeNow' }
);

export default Component;
