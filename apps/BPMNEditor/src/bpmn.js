/*! JointJS+ v3.6.2 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-11-30 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/

const { dia } = joint;
joint.setTheme('bpmn');

/* GRAPH */

let example = window.example;
let inputs = window.inputs;
let toolbarConfig = window.toolbarConfig;
let bpmn2 = joint.shapes.bpmn2;
let arrowSvg = window.svg['arrowSvg'].join();
let pumpSvg = window.svg['pumpSvg'].join();
let smallTowerSvg = window.svg['smallTowerSvg'].join();
let airCooledCondenserSvg = window.svg['airCooledCondenserSvg'].join('');
let bigTowerSvg = window.svg['bigTowerSvg'].join('');
let refluxDrumSvg = window.svg['refluxDrumSvg'].join('');
let firedHeaterSvg = window.svg['firedHeaterSvg'].join('');
let circleSvg= window.svg['circleSvg'].join('');
let cardSvg= window.svg['cardSvg'].join('');
let mixingValveSvg = window.svg['mixingValveSvg'].join('');
let desalterSvg = window.svg['desalterSvg'].join('');
  
console.log("the lib is",bpmn2)
let arrowShape = dia.Element.define('bpmn2.arrow',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(arrowSvg),
        preserveAspectRatio: 'none'
      }
    },
  });


  let pumpShape = dia.Element.define('bpmn2.pump',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(pumpSvg),
        preserveAspectRatio: 'none'
      }
    },
  });


  let smallTowerShape = dia.Element.define('bpmn2.smallTowerSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(smallTowerSvg),
        preserveAspectRatio: 'none'
      }
    },
  });


  let airCooledCondenserShape = dia.Element.define('bpmn2.airCooledCondenserSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(airCooledCondenserSvg),
        preserveAspectRatio: 'none'
      }
    },
  });

  let bigTowerShape = dia.Element.define('bpmn2.bigTowerSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(bigTowerSvg),
        preserveAspectRatio: 'none'
      }
    },
  });

  let refluxDrumShape = dia.Element.define('bpmn2.refluxDrumSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(refluxDrumSvg),
        preserveAspectRatio: 'none'
      }
    },
  });

let firedHeaterShape = dia.Element.define('bpmn2.firedHeaterSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(firedHeaterSvg),
        preserveAspectRatio: 'none'
      }
    },
  });


let circleShape = dia.Element.define('bpmn2.circleSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(circleSvg),
        preserveAspectRatio: 'none'
      }
    },
  });



let cardShape = dia.Element.define('bpmn2.cardSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(cardSvg),
        preserveAspectRatio: 'none'
      }
    },
  });

  let mixingValveShape = dia.Element.define('bpmn2.mixingValveSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(mixingValveSvg),
        preserveAspectRatio: 'none'
      }
    },
  });

  let desalterShape = dia.Element.define('bpmn2.desalterSvg',{
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    size: {
      width: 30,
      height: 50
    },
    position: {
      x: 500,
      y: 390
    },
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            strokeWidth: 2,
            stroke: '#000000',
            fill: '#FFFFFF'
        },
      '.body': {
      //  width: 1024,
        //height: 1988,
        //color: 'black',
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(desalterSvg),
        preserveAspectRatio: 'none'
      }
    },
  });




let BPMNTypes = {
    Pool: 'bpmn2.HeaderedPool',
    arrow: 'bpmn2.arrow',
    pump: 'bpmn2.pump',
    smallTower: 'bpmn2.smallTowerSvg',
    airCooledCondenser: 'bpmn2.airCooledCondenserSvg',
    bigTower: 'bpmn2.bigTowerSvg',
    refluxDrum: 'bpmn2.refluxDrumSvg',
    firedHeater:'bpmn2.firedHeaterSvg',
    circle:'bpmn2.circleSvg',
    card:'bpmn2.cardSvg',
    mixingValve: 'bpmn2.mixingValveSvg',
    desalter: 'bpmn2.desalterSvg',
    Group: 'bpmn2.Group',
    Activity: 'bpmn2.Activity',
    Event: 'bpmn2.Event',
    Gateway: 'bpmn2.Gateway',
    DataObject: 'bpmn2.DataObject',
    DataStore:'bpmn2.DataStore',
    DataAssociation: 'bpmn2.DataAssociation',
    Flow: 'bpmn2.Flow',
    Conversation: 'bpmn2.Conversation',
    ConversationLink: 'bpmn2.ConversationLink',
    Annotation: 'bpmn2.Annotation',
    AnnotationLink: 'bpmn2.AnnotationLink',
    // Legacy BPMN Shape
    Choreography: 'bpmn.Choreography'
};

let graph = new joint.dia.Graph({ type: 'bpmn' }, { cellNamespace: joint.shapes });
let commandManager = new joint.dia.CommandManager({ graph: graph });
let keyboard = new joint.ui.Keyboard();

/* PAPER + SCROLLER */

let paper = new joint.dia.Paper({
    width: 1000,
    height: 1000,
    model: graph,
    gridSize: 5,
    async: true,
    sorting: joint.dia.Paper.sorting.APPROX,
    interactive: { linkMove: false },
    snapLabels: true,
    cellViewNamespace: joint.shapes,
    clickThreshold: 10,
    background: {
        color: 'red'
    },
    // Connections
    defaultLink: function() {
        return new bpmn2.Flow({
            attrs: {
                line: {
                    flowType: 'sequence'
                }
            }
        });
    },
    validateConnection: function(cellViewS, _magnetS, cellViewT, _magnetT, _end) {
        let source = cellViewS.model;
        let target = cellViewT.model;
        // don't allow loop links
        if (source === target) return false;
        // don't allow link to link connection
        if (source.isLink()) return false;
        if (target.isLink()) return false;
        // don't allow group connections
        let sourceType = source.get('type');
        let targetType = target.get('type');
        if (sourceType === BPMNTypes.Group || targetType === BPMNTypes.Group) return false;
        if (sourceType === BPMNTypes.Pool || targetType === BPMNTypes.Pool) return false;
        return true;
    },
    defaultAnchor: {
        name: 'perpendicular'
    },
    defaultConnectionPoint: {
        name: 'boundary',
        args: { stroke: true }
    },
    // Embedding
    embeddingMode: true,
    frontParentOnly: false,
    validateEmbedding: function(childView, parencircletView) {
        let parentType = parentView.model.get('type');
        let childType = childView.model.get('type');
        if (parentType === BPMNTypes.Pool && childType !== BPMNTypes.Pool) return true;
        if (parentType === BPMNTypes.Activity && childType === BPMNTypes.Event) return true;
        if (parentType === BPMNTypes.Group && childType !== BPMNTypes.Group && childType !== BPMNTypes.Pool) return true;
        return false;
    },
    // Highlighting
    highlighting: {
        default: {
            name: 'mask',
            options: {
                attrs: {
                    'stroke': '#3498db',
                    'stroke-width': 3,
                    'stroke-linejoin': 'round'
                }
            }
        }
    }
}).on({

    'blank:pointerdown': function(evt, x, y) {
        closeTools();
        selection.startSelecting(evt, x, y);
    },

    'blank:contextmenu': function(evt, x, y) {
        paperScroller.startPanning(evt, x, y);
    },

    'cell:pointerclick': function(cellView, evt, x, y) {
        Tools(cellView, g.Point(x, y));
    },

    'link:mouseenter': function(linkView) {
        // Open tool only if there is none yet
        if (linkView.hasTools()) return;

        let ns = joint.linkTools;
        let toolsView = new joint.dia.ToolsView({
            name: 'link-hover',
            tools: [
                new ns.Vertices({ vertexAdding: false }),
                new ns.SourceArrowhead(),
                new ns.TargetArrowhead()
            ]
        });

        linkView.addTools(toolsView);
    },

    'link:mouseleave': function(linkView) {
        // Remove only the hover tool, not the pointerdown tool
        if (linkView.hasTools('link-hover')) {
            linkView.removeTools();
        }
    },

    'link:connect': function(linkView) {
        // Change the link type based on the connected elements
        let link = linkView.model;
        let source = link.getSourceCell();
        let target = link.getTargetCell();
        if (!source || !target) return;
        let types = [source.get('type'), target.get('type')];
        let linkType = link.get('type');
        if (types.indexOf(BPMNTypes.Annotation) > -1) {
            if (linkType === BPMNTypes.AnnotationLink) return;
            replaceLink(graph, link, BPMNTypes.AnnotationLink);
            return;
        }
        if (types.indexOf(BPMNTypes.Conversation) > -1) {
            if (linkType === BPMNTypes.ConversationLink) return;
            replaceLink(graph, link, BPMNTypes.ConversationLink);
            return;
        }
        if (types.indexOf(BPMNTypes.DataObject) > -1) {
            if (linkType === BPMNTypes.DataAssociation) return;
            replaceLink(graph, link, BPMNTypes.DataAssociation);
            return;
        }
        if (types.indexOf(BPMNTypes.DataStore) > -1) {
            if (linkType === BPMNTypes.DataAssociation) return;
            replaceLink(graph, link, BPMNTypes.DataAssociation);
            return;
        }
        if (linkType !== BPMNTypes.Flow) {
            replaceLink(graph, link, BPMNTypes.Flow);
            return;
        }
    }

});

let paperScroller = new joint.ui.PaperScroller({
    autoResizePaper: true,
    padding: 50,
    stroke: '#954838',
    paper: paper,
    scrollWhileDragging: true
});

document.getElementById('paper-container').appendChild(paperScroller.el);
paperScroller.center();

/* SELECTION */

let selection = new joint.ui.Selection({
    paper: paper,
    graph: graph,
    useModelGeometry: true,
    filter: [BPMNTypes.Pool, BPMNTypes.Group] // don't allow to select pool or group shapes
});

/* STENCIL */

let stencil = new joint.ui.Stencil({
    graph: graph,
    paper: paperScroller,
    width: '100%',
    height: '100%',
    dragEndClone: function(cell) {

        let clone = cell.clone();
        let type = clone.get('type');

        // some types of the elements need resizing after they are dropped
        let sizeMultipliers = {};
        sizeMultipliers[BPMNTypes.Pool] = 6,
        sizeMultipliers[BPMNTypes.Choreography] = 2;
        sizeMultipliers[BPMNTypes.Group] = 2;

        if (type in sizeMultipliers) {
            let multiplier = sizeMultipliers[type]
            let originalSize = clone.size();
            clone.set('size', {
                width: originalSize.width * multiplier,
                height: originalSize.height * multiplier
            });
        }

        if (type === BPMNTypes.Pool) {
            let height = clone.size().height;
            clone.set({
                lanes: [{
                    label: 'Lane 1',
                    size: height / 2
                }, {
                    label: 'Lane 2',
                    size: height / 2
                }],
                padding: { top: 0, left: 30, right: 0, bottom: 0 }
            });
        }

        return clone;
    }
});

stencil.render();
document.getElementById('stencil-container').appendChild(stencil.el);

stencil.load([{
    type: BPMNTypes.Activity
}, {
    type: BPMNTypes.Gateway
}, {
    type: BPMNTypes.Event
},{
    type: BPMNTypes.arrow
},{
    type: BPMNTypes.pump
},{
    type: BPMNTypes.smallTower
},{
    type: BPMNTypes.airCooledCondenser
},{
    type: BPMNTypes.bigTower
},{
    type: BPMNTypes.refluxDrum
},{
    type: BPMNTypes.firedHeater
},{
    type: BPMNTypes.circle
},{
    type: BPMNTypes.card
},{
    type: BPMNTypes.mixingValve
},{
    type: BPMNTypes.desalter
},{
    type: BPMNTypes.Conversation
},{
    type: BPMNTypes.DataAssociation
}, {
    type: BPMNTypes.DataStore
}, {
    type: BPMNTypes.Annotation,
    attrs: {
        body: {
            fill: '#ffffff'
        }
    }
}, {
    type: BPMNTypes.Group,
    size: {
        width: 80,
        height: 80
    },
    attrs: {
        label: { text: 'Group' }
    }
}, {
    type: BPMNTypes.Pool,
    padding: { top: 0, left: 15, right: 0, bottom: 0 },
    size: { width: 90, height: 50 },
    lanes: [{
        label: 'Lane 1'
    }, {
        label: 'Lane 2'
    }],
    attrs: {
        body: { fill: '#ffffff' },
        headerLabel: { text: 'Header' },
        laneLabels: { fontSize: 13 },
        milestoneLabels: { fontSize: 13 }
    }
}, {
    type: BPMNTypes.Choreography,
    participants: ['Participant 1', 'Participant 2']
}]);

joint.layout.GridLayout.layout(stencil.getGraph(), {
    columns: 100,
    columnWidth: 'compact',
    marginX: 20,
    marginY: 20,
    columnGap: 40,
    verticalGap: 20,
    resizeToFit: false
});

stencil.on('element:drop', function(elementView, _evt, _x, _y) {
    // open inspector after a new element dropped from stencil
    openTools(elementView);
});

/* KEYBOARD */

keyboard.on('delete backspace', function() {
    graph.removeCells(selection.collection.toArray());
});

/* TOOLBAR */

let toolbar = new joint.ui.Toolbar({
    tools: toolbarConfig.tools,
    references: {
        paperScroller: paperScroller,
        commandManager: commandManager
    }
});

toolbar.on({
    'to-json:pointerclick': function() {
        console.log("the graph 1 is", graph);
        let windowFeatures = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no';
        let windowName = _.uniqueId('json_output');
        let jsonWindow = window.open('', windowName, windowFeatures);
        if (jsonWindow) {
            console.log("the graph is", graph);
            jsonWindow.document.write(JSON.stringify(graph.toJSON()));
        }
    },
    'clear:pointerclick': function() {
        graph.clear();
        paperScroller.center(500, 500);
    },
    'print:pointerclick': function() {
        paper.print();
    }
});

toolbar.render();
document.getElementById('toolbar-container').appendChild(toolbar.el);

/* TOOLTIPS */

new joint.ui.Tooltip({
    target: '[data-tooltip]',
    content: function(el) { return el.dataset.tooltip; },
    top: '.joint-toolbar',
    padding: 10,
    direction: 'top'
});

// Create tooltips for all the shapes in stencil.
stencil.getGraph().getElements().forEach(function(cell) {
    new joint.ui.Tooltip({
        target: '.joint-stencil [model-id="' + cell.id + '"]',
        content: cell.get('type').split('.')[1],
        bottom: '.joint-stencil',
        direction: 'bottom',
        padding: 0
    });
});

// load an example graph
graph.fromJSON(example);
paperScroller.positionContent('top-left', { padding: 50, useModelGeometry: true });

/* ACTIONS */

function closeTools() {
    paper.removeTools();
    joint.ui.Inspector.close();
    joint.ui.FreeTransform.clear(paper);
    joint.ui.Halo.clear(paper);
}

function openTools(cellView, coordinates) {

    closeTools();

    let cell = cellView.model;
    let type = cell.get('type');

    selection.collection.reset([]);
    // Add the cell into the selection collection silently
    // so no selection box is rendered above the cellView.
    selection.collection.add(cell, { silent: true });

    if (cell.isElement()) {
        createElementHalo(cellView);
        createElementFreeTransform(cellView);
        if (type === BPMNTypes.Pool && coordinates) {
            createPoolTools(cellView, coordinates);
        }
    } else {
        createLinkTools(cellView);
    }

    joint.ui.Inspector.create('#inspector-container', {
        cell: cell,
        inputs: inputs[type],
        groups: {
            general: { label: type, index: 1 },
            appearance: { index: 2 },
            defaults: { index: 3 }
        }
    });
}

function createPoolTools(poolView, coordinates) {

    let pool = poolView.model;

    // If there is a lane under the pointer (mouse/touch),
    // add the swimlane tools and remove the FreeTransform from the cell
    let lanesIds = pool.getLanesFromPoint(coordinates);
    if (lanesIds.length === 0) return;
    let laneId = lanesIds[0];

    let boundaryTool = new joint.elementTools.SwimlaneBoundary({
        laneId: laneId,
        padding: 0,
        attributes: {
            'fill': 'none',
            'stroke-width': 3,
            'stroke': '#3498db'
        }
    });
    let transformTool = new joint.elementTools.SwimlaneTransform({
        laneId: laneId,
        minSize: 60,
        padding: 0,
    });
    let elementToolsView = new joint.dia.ToolsView({
        tools: [boundaryTool, transformTool]
    });
    poolView.addTools(elementToolsView);
    joint.ui.FreeTransform.clear(paper);
}

function createLinkTools(linkView) {
    let ns = joint.linkTools;
    let toolsView = new joint.dia.ToolsView({
        name: 'link-pointerdown',
        tools: [
            new ns.Vertices(),
            new ns.SourceAnchor(),
            new ns.TargetAnchor(),
            new ns.SourceArrowhead(),
            new ns.TargetArrowhead(),
            new ns.Segments(),
            new ns.Boundary({ padding: 15 }),
            new ns.Remove({ offset: -20, distance: 40 })
        ]
    });

    linkView.addTools(toolsView);
}


function createElementHalo(cellView) {
    let type = cellView.model.get('type');
    let halo = new joint.ui.Halo({
        cellView: cellView,
        theme: 'default',
        type: 'toolbar',
        useModelGeometry: true,
        boxContent: function(cellView) {
            return cellView.model.get('type');
        }
    });
    halo.removeHandle('rotate');
    halo.removeHandle('resize');
    if (type === BPMNTypes.Pool || type === BPMNTypes.Group) {
        halo.removeHandle('link');
        halo.removeHandle('fork');
        halo.removeHandle('unlink');
    }
    halo.render();
}

function createElementFreeTransform(cellView) {
    let defaultMinSize = 30;
    let freeTransform = new joint.ui.FreeTransform({
        cellView: cellView,
        allowOrthogonalResize: false,
        allowRotation: false,
        minWidth: function(el) {
            return (el.get('type') === BPMNTypes.Pool) ? el.getMinimalSize().width : defaultMinSize;
        },
        minHeight: function(el) {
            return (el.get('type') === BPMNTypes.Pool) ? el.getMinimalSize().height : defaultMinSize;
        }
    });
    freeTransform.render();
}

function replaceLink(graph, link, type) {
    let link2JSON = {
        type: type,
        source: link.source(),
        target: link.target(),
        vertices: link.vertices()
    };
    link.remove();
    graph.addCell(link2JSON);
}
