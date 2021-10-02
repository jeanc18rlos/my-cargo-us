import React from 'react';
import { FormattedMessage } from 'react-intl';

const InjectMessage: any = ({ id }: any) => <FormattedMessage {...{ id }} />;

export default InjectMessage;
