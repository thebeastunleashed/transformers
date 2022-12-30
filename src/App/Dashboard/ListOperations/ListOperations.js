import React, { useRef } from 'react';

import {
    intersection,
    union,
    difference
} from 'lodash';

import IconButton from '@mui/material/IconButton/index.js';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded.js';

import Button from '@mui/material/Button/index.js';

import { TextList } from './TextList/TextList.js';

import styles from './ListOperations.css';

const performABToC = ({
    editorARef,
    editorBRef,
    editorCRef,
    operation
}) => {
    const valueA = editorARef.current.getValue();
    const valueB = editorBRef.current.getValue();

    const a = valueA.split('\n');
    const b = valueB.split('\n');

    let c = '';

    if (operation === 'append') {
        c = [...a, ...b];
    } else if (operation === 'union') {
        c = union(a, b);
    } else if (operation === 'intersection') {
        c = intersection(a, b);
    } else if (operation === 'difference') {
        c = difference(a, b);
    }

    const valueC = c.join('\n');

    // Update C
    editorCRef.current.setValue(valueC);
};

const ListOperations = function () {
    const editorARef = useRef(null);
    const editorBRef = useRef(null);
    const editorCRef = useRef(null);

    return (
        <div className={styles.ListOperations}>
            <div style={{ display: 'flex', justifyContent: 'center', minWidth: 1120 }}>
                <div>
                    <div
                        style={{
                            textAlign: 'center',
                            fontFamily: '"Transformers", sans-serif',
                            fontSize: 20
                        }}
                    >
                        A
                    </div>
                    <div>
                        <TextList
                            placeholder="Provide text here"
                            onLoad={(editor) => {
                                editorARef.current = editor;
                            }}
                            style={{ marginTop: 5 }}
                            editorWidth="320px"
                            editorHeight="300px"
                            // allowFileInput
                        />
                    </div>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <div style={{ textAlign: 'center' }}>&nbsp;</div>
                    <div
                        style={{
                            marginTop: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '300px'
                        }}
                    >
                        <IconButton
                            variant="filled"
                            color="primary"
                            size="small"
                            onClick={() => {
                                const valueA = editorARef.current.getValue();
                                const valueB = editorBRef.current.getValue();

                                // Swap values
                                editorARef.current.setValue(valueB);
                                editorBRef.current.setValue(valueA);
                            }}
                        >
                            <SwapHorizontalCircleRoundedIcon />
                        </IconButton>
                    </div>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <div
                        style={{
                            textAlign: 'center',
                            fontFamily: '"Transformers", sans-serif',
                            fontSize: 20
                        }}
                    >
                        B
                    </div>
                    <div>
                        <TextList
                            placeholder="Provide text here"
                            onLoad={(editor) => {
                                editorBRef.current = editor;
                            }}
                            style={{ marginTop: 5 }}
                            editorWidth="320px"
                            editorHeight="300px"
                            // allowFileInput
                        />
                    </div>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <div style={{ textAlign: 'center' }}>&nbsp;</div>
                    <div
                        style={{
                            marginTop: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '300px'
                        }}
                    >
                        <Button
                            variant="contained"
                            size="small"
                            type="button"
                            style={{ display: 'block' }}
                            onClick={() => {
                                performABToC({
                                    editorARef,
                                    editorBRef,
                                    editorCRef,
                                    operation: 'append'
                                });
                            }}
                        >
                            A + B
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            type="button"
                            style={{ display: 'block', marginTop: 5 }}
                            onClick={() => {
                                performABToC({
                                    editorARef,
                                    editorBRef,
                                    editorCRef,
                                    operation: 'intersection'
                                });
                            }}
                        >
                            A ∩ B
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            type="button"
                            style={{ display: 'block', marginTop: 5 }}
                            onClick={() => {
                                performABToC({
                                    editorARef,
                                    editorBRef,
                                    editorCRef,
                                    operation: 'union'
                                });
                            }}
                        >
                            A ∪ B
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            type="button"
                            style={{ display: 'block', marginTop: 5 }}
                            onClick={() => {
                                performABToC({
                                    editorARef,
                                    editorBRef,
                                    editorCRef,
                                    operation: 'difference'
                                });
                            }}
                        >
                            A − B
                        </Button>
                    </div>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <div
                        style={{
                            textAlign: 'center',
                            fontFamily: '"Transformers", sans-serif',
                            fontSize: 20
                        }}
                    >
                        C
                    </div>
                    <div>
                        <TextList
                            placeholder="Result of the operation will be available here"
                            onLoad={(editor) => {
                                editorCRef.current = editor;
                            }}
                            style={{ marginTop: 5 }}
                            editorWidth="320px"
                            editorHeight="300px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ListOperations };
