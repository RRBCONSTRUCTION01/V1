var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.15342443908145142,
        "pitch": -0.02569839279741437,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.15342443908145142,
          "pitch": -0.02569839279741437,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.3323472718573228,
          "pitch": 0.20559380815804928,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": 0.942015160227978,
          "pitch": 0.23594287857816454,
          "rotation": 6.283185307179586,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2579409239652903
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 3.102045931025895,
          "pitch": -0.004127517523464519,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 0.8892703408148872,
          "pitch": 0.08626294112806576,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": 0.9289309781481307,
          "pitch": 0.009828823012071553,
          "rotation": 0.7853981633974483,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.3276974318794874,
          "pitch": 0.06879962751835045,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.846730694738195,
          "pitch": 0.03619900708052981,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.165381174272035,
          "pitch": 0.04606797659249651,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom"
        },
        {
          "yaw": -1.3976156417207868,
          "pitch": 0.12755123001566737,
          "rotation": 4.71238898038469,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living1",
      "name": "LIVING1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.17150360885282012,
          "pitch": 0.032808219936562466,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": -0.7609775626231432,
          "pitch": 0.05333772150770599,
          "rotation": 0,
          "target": "3-prayer"
        },
        {
          "yaw": -1.0208689843559302,
          "pitch": 0.06861946201826719,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.4814028977046263,
          "pitch": 0.0653607661338711,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.438458575627692,
          "pitch": 0.23434461922722782,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -2.792542138953552,
          "pitch": 0.22135337927196908,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": -3.0812018615863916,
          "pitch": -0.16010223923454348,
          "rotation": 0,
          "target": "9-staircase"
        },
        {
          "yaw": 0.8415931319909689,
          "pitch": 0.028376017024690725,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": 0.972744607128126,
          "pitch": 0.054385057994357666,
          "rotation": 0,
          "target": "8-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-prayer",
      "name": "PRAYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.03648390534960555,
        "pitch": -0.0046099989161909605,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.03648390534960555,
          "pitch": -0.0046099989161909605,
          "rotation": 0,
          "target": "3-prayer"
        },
        {
          "yaw": 1.4319280899372506,
          "pitch": 0.15582183034128683,
          "rotation": 0,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.005886778691728267,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.005886778691728267,
          "pitch": 0,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.1251015645761324,
          "pitch": 0.19258933229654396,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": 2.7360063706126363,
          "pitch": 0.09287471156391902,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 2.839185481512896,
          "pitch": 0.06235903461201531,
          "rotation": 0,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -3.1253356140807576,
          "pitch": 0.1326154531292758,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.37592175665540495,
          "pitch": 0.07944820788693008,
          "rotation": 0,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-utility",
      "name": "UTILITY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.015857774728958773,
        "pitch": 0.0292632872227081,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.015857774728958773,
          "pitch": 0.0292632872227081,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": 1.12329423524133,
          "pitch": 0.1160269078354812,
          "rotation": 0,
          "target": "8-toilet"
        },
        {
          "yaw": -2.9302413148623785,
          "pitch": 0.17532903498858055,
          "rotation": 0,
          "target": "7-bedroom"
        },
        {
          "yaw": -2.133486640478644,
          "pitch": 0.19729036729815164,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -2.26106153201364,
          "pitch": -0.0920868949489968,
          "rotation": 0,
          "target": "9-staircase"
        },
        {
          "yaw": -1.728498699228508,
          "pitch": 0.21726868925370013,
          "rotation": 0,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom",
      "name": "BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-bedroom"
        },
        {
          "yaw": -0.4030152664161175,
          "pitch": 0.12597494229257578,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": -0.5084809496552296,
          "pitch": 0.06971383693949917,
          "rotation": 0,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-toilet",
      "name": "TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.05116494234267499,
        "pitch": 0.011911565125423351,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.09004979485174935,
          "pitch": 0.03157683402543121,
          "rotation": 0,
          "target": "8-toilet"
        },
        {
          "yaw": -1.3292876709794612,
          "pitch": 0.11515360883919534,
          "rotation": 0,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-staircase",
      "name": "STAIRCASE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "9-staircase"
        },
        {
          "yaw": 1.4056910435711423,
          "pitch": 0.28188603746358254,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 0.9456999053178325,
          "pitch": 0.2121198830502955,
          "rotation": 5.497787143782138,
          "target": "3-prayer"
        },
        {
          "yaw": 0.7444185522265432,
          "pitch": 0.22732375381803926,
          "rotation": 5.497787143782138,
          "target": "0-foyer"
        },
        {
          "yaw": 0.47036765253610113,
          "pitch": 0.2850299015188593,
          "rotation": 5.497787143782138,
          "target": "5-dining"
        },
        {
          "yaw": 2.0490604836178052,
          "pitch": 0.24982293702909075,
          "rotation": 0,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
