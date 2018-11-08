// Copyright 2017-2018 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { I18nProps } from '@polkadot/ui-app/types';
import { ApiProps } from '@polkadot/ui-react-rx/types';

import './Connecting.css';

import React from 'react';
import settings from '@polkadot/ui-app/settings';
import { withApi } from '@polkadot/ui-react-rx/with/index';

import translate from '../translate';

type Props = I18nProps & ApiProps;

// @ts-ignore
const isFirefox = typeof InstallTrigger !== 'undefined';

class Connecting extends React.PureComponent<Props> {
  render () {
    const { isApiConnected, t } = this.props;

    if (isApiConnected) {
      return null;
    }

    return (
      <div className='apps--Connecting'>
        <div className='apps--Connecting-text'>
          {t('connecting.disconnected', {
            defaultValue: 'You are not connected to a node. Ensure that your node is running and that the Websocket endpoint is reachable.'
          })}&nbsp;
          {
            isFirefox && settings.apiUrl.indexOf('ws://') === 0
              ? t('connecting.ff', {
                defaultValue: 'With the Firefox browser connecting to insecure WebSockets (in this case {{url}}) will fail due to the browser not allowing localhost access from a secure site.',
                replace: {
                  url: settings.apiUrl
                }
              })
              : ''
          }
        </div>
      </div>
    );
  }
}

export default translate(
  withApi(Connecting)
);