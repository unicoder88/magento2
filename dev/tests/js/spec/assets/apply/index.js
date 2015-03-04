/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'tests/tools',
    'tests/assets/apply/components/fn',
    'text!./config.json',
    'text!./templates/node.html'
], function (tools, fnComponent, config, nodeTmpl) {
    'use strict';

    var preset;

    preset = tools.init(config, {
        'fn': nodeTmpl
    });

    preset.fn.component = fnComponent;

    return preset;
});
