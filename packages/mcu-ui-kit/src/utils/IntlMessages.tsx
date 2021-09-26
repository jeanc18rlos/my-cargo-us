import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const InjectMessage: any = (props: any) => injectIntl(() => <FormattedMessage {...props} />);

export default InjectMessage;
