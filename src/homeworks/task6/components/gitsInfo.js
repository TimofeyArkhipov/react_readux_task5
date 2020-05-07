import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { duotoneSpace } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { fetchGitsInfo } from "../redux/actions/actionsGitInfo";

export default function GitsInfo() {
    const dispatch = useDispatch();
    const {selectedGits, item} = useSelector(state => state.gitsInfo);
    console.log(item);
    const {items} = useSelector(state => state.gits);

    const currentGit = items.find(item => item.id === selectedGits);
    let selectedItem = item;

    if(typeof item === 'object') {
        selectedItem = JSON.stringify(item)+'</pre>';
    }

    useEffect(() => {
        if (currentGit) {
            const file = Object.keys(currentGit.files)[0];
            const fileUrl = currentGit.files[file].raw_url;
            dispatch(fetchGitsInfo(fileUrl));
        }
    }, [dispatch, currentGit]);


    if (!currentGit) return <div><h2>Select a gist</h2></div>;
    if (currentGit) return (
        <div className='git-info'>
            <SyntaxHighlighter style={duotoneSpace}>
                {selectedItem}
            </SyntaxHighlighter>
        </div>
    )
}

