const mapStyles = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#000000',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        weight: '0.45',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'off',
      },
      {
        color: '#737373',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#091833',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#00221c',
      },
    ],
  },
];

export default mapStyles;
