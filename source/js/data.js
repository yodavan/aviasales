const tickets = [
  {
    "price": 97768,
    "carrier": "SU",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T03:05:00.000Z",
        "stops": [
          "IST",
          "DXB",
          "BKK"
        ],
        "duration": 602
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T10:06:00.000Z",
        "stops": [
          "DXB",
          "SIN"
        ],
        "duration": 1983
      }
    ]
  },
  {
    "price": 15529,
    "carrier": "FV",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T09:59:00.000Z",
        "stops": [
          "HKG"
        ],
        "duration": 1072
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T07:10:00.000Z",
        "stops": [
          "HKG"
        ],
        "duration": 1190
      }
    ]
  },
  {
    "price": 42564,
    "carrier": "FV",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T09:37:00.000Z",
        "stops": [
          "SIN"
        ],
        "duration": 702
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T03:53:00.000Z",
        "stops": [
          "IST",
          "SHA"
        ],
        "duration": 1008
      }
    ]
  },
  {
    "price": 98845,
    "carrier": "MH",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T00:58:00.000Z",
        "stops": [
          "SIN",
          "BKK"
        ],
        "duration": 716
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-10T23:44:00.000Z",
        "stops": [
          "IST"
        ],
        "duration": 1844
      }
    ]
  },
  {
    "price": 42283,
    "carrier": "MH",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T06:37:00.000Z",
        "stops": [
          "BKK",
          "DXB",
          "KUL"
        ],
        "duration": 1826
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T14:25:00.000Z",
        "stops": [
          "AUH",
          "SIN",
          "SHA"
        ],
        "duration": 700
      }
    ]
  },
  {
    "price": 87865,
    "carrier": "TG",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T06:16:00.000Z",
        "stops": [
          "HKG",
          "IST",
          "SHA"
        ],
        "duration": 1978
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T01:12:00.000Z",
        "stops": [],
        "duration": 1595
      }
    ]
  },
  {
    "price": 27295,
    "carrier": "EY",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T15:25:00.000Z",
        "stops": [
          "HKG",
          "BKK"
        ],
        "duration": 1347
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T02:15:00.000Z",
        "stops": [
          "IST"
        ],
        "duration": 1701
      }
    ]
  },
  {
    "price": 33487,
    "carrier": "SU",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-21T22:27:00.000Z",
        "stops": [
          "AUH"
        ],
        "duration": 950
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T09:35:00.000Z",
        "stops": [
          "BKK"
        ],
        "duration": 676
      }
    ]
  },
  {
    "price": 15147,
    "carrier": "EY",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T16:42:00.000Z",
        "stops": [],
        "duration": 754
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T05:48:00.000Z",
        "stops": [
          "IST"
        ],
        "duration": 1831
      }
    ]
  },
  {
    "price": 52720,
    "carrier": "TG",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T02:34:00.000Z",
        "stops": [
          "BKK",
          "IST"
        ],
        "duration": 915
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-10T22:43:00.000Z",
        "stops": [
          "HKG",
          "AUH"
        ],
        "duration": 1384
      }
    ]
  },
  {
    "price": 42930,
    "carrier": "TG",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T00:21:00.000Z",
        "stops": [
          "AUH",
          "HKG"
        ],
        "duration": 1517
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-10T22:10:00.000Z",
        "stops": [],
        "duration": 708
      }
    ]
  },
  {
    "price": 61479,
    "carrier": "EY",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-21T22:20:00.000Z",
        "stops": [
          "HKG"
        ],
        "duration": 1490
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T13:06:00.000Z",
        "stops": [
          "AUH"
        ],
        "duration": 1793
      }
    ]
  },
  {
    "price": 89301,
    "carrier": "FV",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T00:23:00.000Z",
        "stops": [
          "DXB"
        ],
        "duration": 1707
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-10T23:28:00.000Z",
        "stops": [
          "KUL",
          "DXB"
        ],
        "duration": 1800
      }
    ]
  },
  {
    "price": 63087,
    "carrier": "MH",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T03:19:00.000Z",
        "stops": [
          "HKG",
          "SHA",
          "AUH"
        ],
        "duration": 1818
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T02:39:00.000Z",
        "stops": [],
        "duration": 1997
      }
    ]
  },
  {
    "price": 75662,
    "carrier": "S7",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T02:47:00.000Z",
        "stops": [],
        "duration": 1105
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-10T23:48:00.000Z",
        "stops": [
          "SHA",
          "IST",
          "AUH"
        ],
        "duration": 1414
      }
    ]
  },
  {
    "price": 18379,
    "carrier": "S7",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T09:31:00.000Z",
        "stops": [],
        "duration": 1016
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T17:59:00.000Z",
        "stops": [
          "SHA",
          "AUH"
        ],
        "duration": 1186
      }
    ]
  },
  {
    "price": 21094,
    "carrier": "SU",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2021-10-22T17:48:00.000Z",
        "stops": [
          "SHA",
          "DXB",
          "HKG"
        ],
        "duration": 1894
      },
      {
        "origin": "HKT",
        "destination": "MOW",
        "date": "2021-11-11T07:23:00.000Z",
        "stops": [
          "DXB",
          "SIN"
        ],
        "duration": 682
      }
    ]
  },
]

export { tickets };
