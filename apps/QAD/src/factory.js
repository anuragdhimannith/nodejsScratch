/*! JointJS+ v3.6.2 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-11-30 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


var app = app || {};

app.Factory = {

    createQuestion: function(text) {

        return new joint.shapes.qad.Question({
            position: { x: 400 - 50, y: 30 },
            size: { width: 100, height: 70 },
            question: text,
            inPorts: [{ id: 'in', label: 'In' }],
            options: [
                { id: 'yes', text: 'Yes' },
                { id: 'no', text: 'No' }
            ]
        });
    },

    createAnswer: function(text) {

        return new joint.shapes.qad.Answer({
            position: { x: 400 - 50, y: 30 },
            size: { width: 100, height: 70 },
            answer: text
        });
    },

    createLink: function() {

        return new joint.dia.Link({
            attrs: {
                '.marker-target': {
                    d: 'M 10 0 L 0 5 L 10 10 z',
                    fill: '#6a6c8a',
                    stroke: '#6a6c8a'
                },
                '.connection': {
                    stroke: '#6a6c8a',
                    strokeWidth: 2
                }
            }
        });
    },

    // Example:
    /*
      {
         root: '1',
         nodes: [
            { id: '1', type: 'qad.Question', question: 'Are you sure?', options: [{ id: 'yes', text: 'Yes' }, { id: 'no', text: 'No' }] },
            { id: '2', type: 'qad.Answer', answer: 'That was good.' },
            { id: '3', type: 'qad.Answer', answer: 'That was bad.' }
         ],
         links: [
            { type: 'qad.Link', source: { id: '1', port: 'yes' }, target: { id: '2' } },
            { type: 'qad.Link', source: { id: '1', port: 'no' }, target: { id: '3' } }
         ]
      }
    */
    createDialogJSON: function(graph, rootCell) {

        var dialog = {
            root: undefined,
            nodes: [],
            links: []
        };

        _.each(graph.getCells(), function(cell) {

            var o = {
                id: cell.id,
                type: cell.get('type')
            };

            switch (cell.get('type')) {
                case 'qad.Question':
                    o.question = cell.get('question');
                    o.options = cell.get('options');
                    dialog.nodes.push(o);
                    break;
                case 'qad.Answer':
                    o.answer = cell.get('answer');
                    dialog.nodes.push(o);
                    break;
                default: // qad.Link
                    o.source = cell.get('source');
                    o.target = cell.get('target');
                    dialog.links.push(o);
                    break;
            }

            if (!cell.isLink() && !graph.getConnectedLinks(cell, { inbound: true }).length) {
                dialog.root = cell.id;
            }
        });

        if (rootCell) {
            dialog.root = rootCell.id;
        }

        return dialog;
    }
};
