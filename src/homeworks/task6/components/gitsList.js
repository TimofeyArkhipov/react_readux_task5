import React, {useState} from "react";
import {useEffect} from "react";
import fetchGists from "../redux/actions/actionsGits"
import {connect, useDispatch, useSelector} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import WorkIcon from '@material-ui/icons/Work';
import {showSelectedGist} from "../redux/actions/actionsGitInfo";


export default function GitsList(){
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.gits);

    useEffect(() => {
        dispatch(fetchGists());
    }, [dispatch]);


    function handleClick(id) {
        dispatch(showSelectedGist(id));
        console.log(id);
    }

    return(
        <List>
            {items.map((git) =>
                <li>
                    <ListItem onClick={()=> handleClick(git.id)}>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={git.files[Object.keys(git.files)[0]].filename} secondary={git.files[Object.keys(git.files)[0]].language || 'Text'}/>
                    </ListItem>
                </li>
            )}
        </List>
    )
}

