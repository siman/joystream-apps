// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from '../types';

import Js from '@polkadot/app-js/index';

export default ([
  {
    Component: Js,
    display: {
      isHidden: true,
      needsApi: []
    },
    i18n: {
      defaultValue: 'Javascript'
    },
    icon: 'code',
    name: 'js'
  }
] as Routes);
