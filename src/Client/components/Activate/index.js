import React, {useEffect, useState} from 'react';
import {AreaMagnet} from './AreaMagnet';
import {CarMagnet} from './CarMagnet';
const index = ({pageInfo}) => {
  switch (pageInfo) {
    case 'carMagnet':
      return <CarMagnet />;
    case 'areaMagnet':
      return <AreaMagnet />;
  }
};

export default index;
