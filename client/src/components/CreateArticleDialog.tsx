
import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { print } from 'graphql';
import gql from 'graphql-tag';

const CreateArticleDialog = (props: any): React.ReactElement => {

    const { onClose, open, onOpenNoticeDialog, createMethod } = props;

    const [title, setTitle] = useState<any>({
        value: "",
        isTouched: false
    });
    const [content, setContent] = useState<any>({
        value: "",
        isTouched: false
    });

    const handleClose = () => {
        setTitle({ value: "", isTouched: false })
        setContent({ value: "", isTouched: false })
        onClose();
    };

    const handleSubmit = () => {

        const AddArticle = gql`
            mutation($articleInput: ArticleInput){
                createArticle(articleInput: $articleInput){
                    id
                    title
                    content
                }
            }
        `
        axios.post("http://localhost:8080/", {
            query: print(AddArticle),
            variables: {
                "articleInput": {
                    "title": title.value,
                    "content": content.value
                }
            }
        }).then(resp => {
            handleClose();

            if (resp.data.data.createArticle) {
                createMethod(resp.data.data.createArticle);
                onOpenNoticeDialog("Success to create a new article")
            } else {
                onOpenNoticeDialog("Fail to create a new article")
            }

        }).catch(err => {
            console.log(err);
            onOpenNoticeDialog("Fail to create a new article")
        })

    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Create a new Article</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    required
                    value={title.value}
                    error={title.isTouched && !title.value}
                    helperText={title.isTouched && !title.value ? 'Title is required' : ''}
                    onFocusCapture={e => setTitle({ ...title, isTouched: true })}
                    onChange={e => setTitle({ ...title, value: e.target.value })}
                />
                <TextField
                    placeholder="Please input some content"
                    fullWidth
                    multiline
                    rows={10}
                    required
                    value={content.value}
                    error={content.isTouched && !content.value}
                    helperText={content.isTouched && !content.value ? 'Content is required' : ''}
                    onFocusCapture={e => setContent({ ...content, isTouched: true })}
                    onChange={e => setContent({ ...content, value: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateArticleDialog;
