import React, {useEffect, useState} from 'react';
import {Language} from './Language';
import {UsedAddresses} from './UsedAddresses';
import {Payment} from './Payment';
const index = ({pageInfo}) => {
  switch (pageInfo) {
    case 'language':
      return <Language />;
    case 'usedAddresses':
      return <UsedAddresses />;
    case 'payment':
      return <Payment />;
  }
};

export default index;
