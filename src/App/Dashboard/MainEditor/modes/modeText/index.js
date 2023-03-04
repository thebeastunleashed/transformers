/* eslint-disable filenames/no-index */

import { configTextRemoveEmptyLines } from './configTextRemoveEmptyLines.js';
import { configTextRemoveDuplicates } from './configTextRemoveDuplicates.js';

import { configTextSort } from './configTextSort.js';
import { configTextSortCaseInsensitive } from './configTextSortCaseInsensitive.js';
import { configTextSortNatural } from './configTextSortNatural.js';
import { configTextRandomize } from './configTextRandomize.js';
import { configTextReverse } from './configTextReverse.js';

import { configTextTrimLines } from './configTextTrimLines.js';
import { configTextRemoveCommaCharacterAtLineEnds } from './configTextRemoveCommaCharacterAtLineEnds.js';
import { configTextRemoveQuoteAndApostropheCharacters } from './configTextRemoveQuoteAndApostropheCharacters.js';

import { configTextGetStats } from './configTextGetStats.js';

import { configTextLinesToJsonArray } from './configTextLinesToJsonArray.js';

const modeText = {
    modeId: 'text',
    modeNameForAceEditor: 'text',

    title: 'Text',

    icon: null,

    hasSyntaxHighlighting: false,

    snippets: [{
        content: [
            'Chelsea',
            'Bob',
            'Alice',
            'David'
        ].join('\n')
    }],

    operations: [
        {
            optgroupLabel: 'Lines',
            options: [
                configTextRemoveEmptyLines, // Remove empty lines
                configTextRemoveDuplicates  // Remove duplicates
                // Remove beyond N lines
            ]
        },
        {
            optgroupLabel: 'Sort',
            options: [
                configTextSort,                // Sort
                configTextSortCaseInsensitive, // Case-insensitive sort
                configTextSortNatural,         // Natural sort
                configTextRandomize,           // Randomize
                configTextReverse              // Reverse
            ]
        },
        {
            optgroupLabel: 'String',
            options: [
                configTextTrimLines,                         // Trim lines
                configTextRemoveCommaCharacterAtLineEnds,    // Remove comma character at line ends
                configTextRemoveQuoteAndApostropheCharacters // Remove " and ' characters
            ]
        },
        {
            optgroupLabel: 'Stats',
            options: [
                configTextGetStats // Get statistics
                // Count lines        // Icon: FormatListNumberedRtlIcon
                // Count characters   // Icon: AbcIcon
                // Count words        // Icon: SubtitlesIcon
                // Count unique words // Icon: SubtitlesOutlinedIcon
            ]
        },
        {
            optgroupLabel: 'Convert',
            options: [
                configTextLinesToJsonArray // Lines to JSON array
            ]
        }
    ]
};
modeText.arrOperations = modeText.operations.reduce((acc, curr) => {
    return acc.concat(curr.options);
}, []);
modeText.obOperations = modeText.arrOperations.reduce((acc, curr) => {
    acc[curr.operationId] = curr;
    return acc;
}, {});

export { modeText };