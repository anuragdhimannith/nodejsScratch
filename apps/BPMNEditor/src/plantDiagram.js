/*! JointJS+ v3.6.2 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-11-30 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


 window.example = {
    "type": "bpmn",
    "cells": [
      {
        "type": "bpmn2.arrow",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 60,
          "y": 195
        },
        "angle": 0,
        "id": "f1f6fc85-6294-462c-bd7e-da92e416fe5a",
        "z": 1,
        "attrs": {}
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 115,
          "y": 90
        },
        "angle": 0,
        "id": "6ca9bb71-72b2-43d6-b08f-124086e40b69",
        "z": 11,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "f1f6fc85-6294-462c-bd7e-da92e416fe5a"
        },
        "target": {
          "id": "6ca9bb71-72b2-43d6-b08f-124086e40b69"
        },
        "id": "e062766b-a501-449b-8b3e-784556d1e950",
        "z": 12,
        "vertices": [
          {
            "x": 75,
            "y": 110
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "6ca9bb71-72b2-43d6-b08f-124086e40b69"
        },
        "target": {
          "x": 190,
          "y": 240
        },
        "id": "f976877b-71fb-4476-b819-cc3209ea4c2c",
        "z": 14,
        "vertices": [
          {
            "x": 630,
            "y": 100
          },
          {
            "x": 630,
            "y": 190
          },
          {
            "x": 610,
            "y": 155
          },
          {
            "x": 590,
            "y": 190
          },
          {
            "x": 590,
            "y": 140
          },
          {
            "x": 155,
            "y": 140
          },
          {
            "x": 155,
            "y": 240
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 190,
          "y": 220
        },
        "angle": 0,
        "id": "48e7fcc1-a835-40da-8fb5-fe851b51aae1",
        "z": 23,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 240,
          "y": 245
        },
        "target": {
          "x": 260,
          "y": 245
        },
        "id": "36829db9-8f19-45d0-94b9-db3787fa0bb8",
        "z": 26,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 215,
          "y": 290
        },
        "target": {
          "x": 215,
          "y": 200
        },
        "id": "e6cd0bfb-5ecf-43a7-8ceb-7568b16fafab",
        "z": 28,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 370,
          "y": 240
        },
        "target": {
          "x": 250,
          "y": 340
        },
        "id": "4d1ab47d-fb42-4b1b-a551-1cbb0cb51cd3",
        "z": 31,
        "vertices": [
          {
            "x": 420,
            "y": 240
          },
          {
            "x": 420,
            "y": 340
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 330,
          "y": 220
        },
        "angle": 0,
        "id": "9ff0be5b-8241-4ab1-b821-e4cf86a090f7",
        "z": 33,
        "attrs": {}
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 260,
          "y": 220
        },
        "angle": 0,
        "id": "1f04b68b-a2d4-4a17-b86d-0d543e2f12f7",
        "z": 35,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "1f04b68b-a2d4-4a17-b86d-0d543e2f12f7"
        },
        "target": {
          "id": "9ff0be5b-8241-4ab1-b821-e4cf86a090f7"
        },
        "id": "36dd7c25-6376-4e03-9b18-b525ac51fb5c",
        "z": 36,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 285,
          "y": 290
        },
        "target": {
          "x": 285,
          "y": 195
        },
        "id": "e34c9710-6845-4f71-a489-bb80dee73423",
        "z": 37,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 355,
          "y": 300
        },
        "target": {
          "x": 355,
          "y": 190
        },
        "id": "f35be6e0-dd29-407a-9623-fb87b8a43ed8",
        "z": 38,
        "vertices": [],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.mixingValveSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 220,
          "y": 325
        },
        "angle": 0,
        "id": "154eb8b7-e04a-44f2-92ba-fea4f398c97d",
        "z": 39,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "154eb8b7-e04a-44f2-92ba-fea4f398c97d"
        },
        "target": {
          "x": 165,
          "y": 395
        },
        "id": "80f1bfad-a308-4902-be4a-903fac5eafef",
        "z": 40,
        "vertices": [
          {
            "x": 165,
            "y": 340
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.desalterSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 130,
          "height": 60
        },
        "position": {
          "x": 80,
          "y": 400
        },
        "angle": 0,
        "id": "05c1410c-ecbc-404d-bf6f-8fb8515a0b94",
        "z": 43,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "05c1410c-ecbc-404d-bf6f-8fb8515a0b94",
          "anchor": {
            "name": "topLeft",
            "args": {
              "dx": "19.231%",
              "dy": "50%",
              "rotate": true
            }
          }
        },
        "target": {
          "id": "2554d8fb-dc9e-4c73-a655-2ebbd7d42d65"
        },
        "id": "e6086bc6-9651-44f1-917d-2abb9559515a",
        "z": 44,
        "vertices": [
          {
            "x": 105,
            "y": 280
          },
          {
            "x": 55,
            "y": 280
          },
          {
            "x": 55,
            "y": 490
          },
          {
            "x": 105,
            "y": 490
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 80,
          "y": 550
        },
        "angle": 0,
        "id": "2554d8fb-dc9e-4c73-a655-2ebbd7d42d65",
        "z": 48,
        "attrs": {}
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 80,
          "y": 615
        },
        "angle": 0,
        "id": "c7fc65d2-f59a-4314-b04b-2c7014d4021b",
        "z": 49,
        "attrs": {}
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 80,
          "y": 685
        },
        "angle": 0,
        "id": "8c49add2-5f1c-4a12-ae31-901ed2e6cba6",
        "z": 51,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "2554d8fb-dc9e-4c73-a655-2ebbd7d42d65"
        },
        "target": {
          "id": "c7fc65d2-f59a-4314-b04b-2c7014d4021b"
        },
        "id": "8ae71d9e-8936-4408-903b-1115996b45c2",
        "z": 52,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "c7fc65d2-f59a-4314-b04b-2c7014d4021b"
        },
        "target": {
          "id": "8c49add2-5f1c-4a12-ae31-901ed2e6cba6"
        },
        "id": "932df4e1-61e8-4707-b58b-70ea99e5b5e7",
        "z": 53,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 105,
          "y": 730
        },
        "target": {
          "x": 235,
          "y": 765
        },
        "id": "9ac887b4-6686-4c1a-ae44-f7c14af2c633",
        "z": 54,
        "vertices": [
          {
            "x": 105,
            "y": 765
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 55,
          "y": 570
        },
        "target": {
          "x": 170,
          "y": 570
        },
        "id": "2d6b83fa-cada-4907-ab0a-c091434027b7",
        "z": 55,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 55,
          "y": 635
        },
        "target": {
          "x": 175,
          "y": 635
        },
        "id": "018d8177-9f99-4731-9759-3b6cc770387a",
        "z": 56,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 55,
          "y": 705
        },
        "target": {
          "x": 175,
          "y": 705
        },
        "id": "19b7f41c-e701-4dab-9195-71f0895c29c9",
        "z": 57,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.firedHeaterSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 75,
          "height": 155
        },
        "position": {
          "x": 245,
          "y": 620
        },
        "angle": 0,
        "id": "cb66390a-0595-4f20-81fc-a73e66d6b9ed",
        "z": 58,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "cb66390a-0595-4f20-81fc-a73e66d6b9ed"
        },
        "target": {
          "x": 455,
          "y": 685
        },
        "id": "03f1f37a-d45d-409d-9889-a87bdb81eaf6",
        "z": 60,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 355,
          "y": 420
        },
        "target": {
          "x": 455,
          "y": 385
        },
        "id": "b1c318bc-de17-4c17-ba26-ab3e58606249",
        "z": 65,
        "vertices": [
          {
            "x": 355,
            "y": 385
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 450,
          "y": 490
        },
        "target": {
          "x": 410,
          "y": 525
        },
        "id": "d060283f-3460-4660-bd26-b04b6b16a5b2",
        "z": 68,
        "vertices": [
          {
            "x": 450,
            "y": 525
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 330,
          "y": 415
        },
        "angle": 0,
        "id": "db33f55c-416e-4c09-9457-38775822a394",
        "z": 73,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 310,
          "y": 435
        },
        "target": {
          "x": 420,
          "y": 435
        },
        "id": "92932306-3fe1-4a61-8884-8901c52a7086",
        "z": 75,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 380,
          "y": 510
        },
        "angle": 0,
        "id": "41f19269-6e8f-4bcc-9a6d-93dfce6fb7b9",
        "z": 76,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "41f19269-6e8f-4bcc-9a6d-93dfce6fb7b9"
        },
        "target": {
          "id": "db33f55c-416e-4c09-9457-38775822a394"
        },
        "id": "df585495-7aff-40c8-9fb3-3111223e7462",
        "z": 77,
        "vertices": [
          {
            "x": 355,
            "y": 525
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.bigTowerSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 105,
          "height": 625
        },
        "position": {
          "x": 460,
          "y": 200
        },
        "angle": 0,
        "id": "23f2b92a-b814-4b25-85d5-295b02f4e6d3",
        "z": 78,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "23f2b92a-b814-4b25-85d5-295b02f4e6d3"
        },
        "target": {
          "x": 585,
          "y": 175
        },
        "id": "aa39a22e-2c29-48a6-8b36-b0eb837b9147",
        "z": 79,
        "vertices": [
          {
            "x": 515,
            "y": 175
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 765,
          "y": 645
        },
        "angle": 0,
        "id": "a736a0b1-4351-4ee7-b47a-bb9871bea8ee",
        "z": 98,
        "attrs": {}
      },
      {
        "type": "bpmn2.airCooledCondenserSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 135,
          "height": 45
        },
        "position": {
          "x": 680,
          "y": 145
        },
        "angle": 0,
        "id": "041686fa-4df5-4bb4-8983-36148f9ca8b6",
        "z": 109,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "041686fa-4df5-4bb4-8983-36148f9ca8b6"
        },
        "target": {
          "x": 680,
          "y": 170
        },
        "id": "a3e582be-198d-4706-b7c4-c3634e243a10",
        "z": 110,
        "vertices": [
          {
            "x": 635,
            "y": 170
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "041686fa-4df5-4bb4-8983-36148f9ca8b6"
        },
        "target": {
          "id": "343df865-20d9-4a18-a38a-2c4158eb6505"
        },
        "id": "34a9c33b-6e6f-4c7e-ad0c-a916add2225b",
        "z": 111,
        "vertices": [
          {
            "x": 855,
            "y": 165
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#fcfcfc"
          }
        }
      },
      {
        "type": "bpmn2.refluxDrumSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 140,
          "height": 85
        },
        "position": {
          "x": 810,
          "y": 210
        },
        "angle": 0,
        "id": "343df865-20d9-4a18-a38a-2c4158eb6505",
        "z": 112,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "343df865-20d9-4a18-a38a-2c4158eb6505"
        },
        "target": {
          "x": 965,
          "y": 145
        },
        "id": "bb28e040-f245-4d8c-a22c-e48c6c9036c9",
        "z": 113,
        "vertices": [
          {
            "x": 910,
            "y": 145
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 900,
          "y": 295
        },
        "target": {
          "x": 965,
          "y": 325
        },
        "id": "1169551f-d2f3-4130-a30a-4a176fbb6113",
        "z": 114,
        "vertices": [
          {
            "x": 900,
            "y": 325
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 820,
          "y": 300
        },
        "angle": 0,
        "id": "fd2053a8-33ab-4148-8e70-5584f648de9b",
        "z": 115,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "fd2053a8-33ab-4148-8e70-5584f648de9b"
        },
        "target": {
          "x": 835,
          "y": 265
        },
        "id": "1f45c2f6-b99c-47d6-a610-79478a13fa3f",
        "z": 116,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "fd2053a8-33ab-4148-8e70-5584f648de9b"
        },
        "target": {
          "x": 770,
          "y": 305
        },
        "id": "dae47a59-4550-485e-99b0-1094a8d44597",
        "z": 117,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 565,
          "y": 245
        },
        "target": {
          "x": 940,
          "y": 425
        },
        "id": "d836df1e-2d92-4cae-87c5-f7452a438eee",
        "z": 118,
        "vertices": [
          {
            "x": 740,
            "y": 245
          },
          {
            "x": 740,
            "y": 425
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 300,
          "y": 390
        },
        "target": {
          "x": 300,
          "y": 345
        },
        "id": "062e6afb-8b4b-480b-b394-f4596064d6f6",
        "z": 119,
        "vertices": [],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "d836df1e-2d92-4cae-87c5-f7452a438eee"
        },
        "target": {
          "x": 740,
          "y": 380
        },
        "id": "baf15d15-749d-4d70-a11d-c418bba89743",
        "z": 120,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 630,
          "y": 325
        },
        "target": {
          "x": 565,
          "y": 325
        },
        "id": "38b13ae5-44e6-4d49-ac72-cb66ea10a4c0",
        "z": 121,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "23f2b92a-b814-4b25-85d5-295b02f4e6d3"
        },
        "target": {
          "x": 630,
          "y": 345
        },
        "id": "55f41864-d6a2-4a4d-b8e7-71b4c8952ddc",
        "z": 122,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 790,
          "y": 630
        },
        "target": {
          "x": 790,
          "y": 720
        },
        "id": "f377b179-df77-431b-b126-c2f270880acd",
        "z": 124,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 765,
          "y": 750
        },
        "angle": 0,
        "id": "fd625347-15ba-42a1-a108-bfceaa72dae0",
        "z": 126,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 790,
          "y": 740
        },
        "target": {
          "x": 790,
          "y": 830
        },
        "id": "2784bcb3-82f8-450a-9388-d8f67c727d5a",
        "z": 127,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 765,
          "y": 860
        },
        "angle": 0,
        "id": "af48f100-4ff2-4ee4-be72-8ed62ccb8cef",
        "z": 128,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 790,
          "y": 840
        },
        "target": {
          "x": 790,
          "y": 940
        },
        "id": "c09a7256-3073-4647-bf2f-7bc901881e4d",
        "z": 129,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.circleSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 45
        },
        "position": {
          "x": 765,
          "y": 535
        },
        "angle": 0,
        "id": "2b4dc03b-635a-48c3-a55e-b5c36678f6fb",
        "z": 130,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "2b4dc03b-635a-48c3-a55e-b5c36678f6fb"
        },
        "target": {
          "x": 855,
          "y": 560
        },
        "id": "07642615-62a4-4058-8286-e968d4b5d26c",
        "z": 131,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "a736a0b1-4351-4ee7-b47a-bb9871bea8ee"
        },
        "target": {
          "x": 860,
          "y": 670
        },
        "id": "1bada2dc-428f-4e46-81d2-6957a6a745ee",
        "z": 132,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "fd625347-15ba-42a1-a108-bfceaa72dae0"
        },
        "target": {
          "x": 865,
          "y": 775
        },
        "id": "849b2d47-c77c-43bd-aa7d-b9b74cdec585",
        "z": 133,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "af48f100-4ff2-4ee4-be72-8ed62ccb8cef"
        },
        "target": {
          "x": 860,
          "y": 885
        },
        "id": "926640be-c48a-404f-a8c7-73115052e9bd",
        "z": 134,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 710,
          "y": 660
        },
        "angle": 0,
        "id": "b0fa9e0e-b21f-47ec-a64a-f728e54f7dd0",
        "z": 145,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "b0fa9e0e-b21f-47ec-a64a-f728e54f7dd0"
        },
        "target": {
          "id": "a736a0b1-4351-4ee7-b47a-bb9871bea8ee"
        },
        "id": "5027b9b2-211c-4519-97f2-75730a733c81",
        "z": 146,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 710,
          "y": 555
        },
        "angle": 0,
        "id": "18f25848-6059-4920-a01d-25811ff636a3",
        "z": 147,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "18f25848-6059-4920-a01d-25811ff636a3"
        },
        "target": {
          "id": "2b4dc03b-635a-48c3-a55e-b5c36678f6fb"
        },
        "id": "36348e72-137d-46ef-823d-ebf8ef406022",
        "z": 148,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 710,
          "y": 770
        },
        "angle": 0,
        "id": "d89eeeb8-6101-4e8b-8a47-23dc129656a6",
        "z": 149,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "d89eeeb8-6101-4e8b-8a47-23dc129656a6"
        },
        "target": {
          "x": 765,
          "y": 775
        },
        "id": "fbc9089e-f376-441d-8a84-bc80f2cdaf65",
        "z": 150,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "x": 680,
          "y": 675
        },
        "target": {
          "x": 710,
          "y": 675
        },
        "id": "67a1ab2d-2320-46fb-a13b-4b25aa78a25a",
        "z": 152,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.smallTowerSvg",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 50,
          "height": 460
        },
        "position": {
          "x": 625,
          "y": 300
        },
        "angle": 0,
        "id": "f06d581c-b15f-4c65-b73d-df228ecb6b60",
        "z": 154,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "f06d581c-b15f-4c65-b73d-df228ecb6b60"
        },
        "target": {
          "id": "18f25848-6059-4920-a01d-25811ff636a3"
        },
        "id": "cf588b55-ece3-4140-94db-3e82199678d4",
        "z": 155,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "f06d581c-b15f-4c65-b73d-df228ecb6b60"
        },
        "target": {
          "id": "d89eeeb8-6101-4e8b-8a47-23dc129656a6"
        },
        "id": "4b14ec89-0b0b-4c5d-9032-d59cb2723bba",
        "z": 155,
        "vertices": [
          {
            "x": 650,
            "y": 785
          }
        ],
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.pump",
        "markup": '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        "size": {
          "width": 30,
          "height": 30
        },
        "position": {
          "x": 500,
          "y": 880
        },
        "angle": 0,
        "id": "4a51fc87-7aab-4d71-851c-c329a472b414",
        "z": 159,
        "attrs": {}
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "4a51fc87-7aab-4d71-851c-c329a472b414"
        },
        "target": {
          "id": "af48f100-4ff2-4ee4-be72-8ed62ccb8cef"
        },
        "id": "3dc036fe-43b1-4f81-bcdd-73dff02e63d5",
        "z": 160,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "23f2b92a-b814-4b25-85d5-295b02f4e6d3"
        },
        "target": {
          "x": 625,
          "y": 490
        },
        "id": "fadd4530-de64-49c2-871a-38690f633a10",
        "z": 161,
        "attrs": {
          "line": {
            "stroke": "#fffafa"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "f06d581c-b15f-4c65-b73d-df228ecb6b60"
        },
        "target": {
          "x": 565,
          "y": 505
        },
        "id": "7128c525-6100-41c8-b77c-8f71f8b470a4",
        "z": 162,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "23f2b92a-b814-4b25-85d5-295b02f4e6d3"
        },
        "target": {
          "x": 625,
          "y": 610
        },
        "id": "8c78c034-d2af-4914-8b8c-bffd0bebd78e",
        "z": 163,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      },
      {
        "type": "bpmn2.Flow",
        "source": {
          "id": "f06d581c-b15f-4c65-b73d-df228ecb6b60"
        },
        "target": {
          "x": 565,
          "y": 625
        },
        "id": "f409b756-e7c5-4b25-af0a-22d0237b9218",
        "z": 164,
        "attrs": {
          "line": {
            "stroke": "#ffffff"
          }
        }
      }
    ]
  }